import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { X, Save, RefreshCw, LogOut, Lock, Edit3 } from 'lucide-react';
import { WebsiteContent } from '../types';

const AdminPanel: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { content, updateContent, resetContent, isAuthenticated, login, logout } = useContent();
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<keyof WebsiteContent>('general');
  const [error, setError] = useState('');
  
  // Local state for editing to prevent frequent context updates (perf)
  const [editState, setEditState] = useState<WebsiteContent>(content);

  // Sync local state when content changes or modal opens
  React.useEffect(() => {
    setEditState(content);
  }, [content, isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError('');
      setPassword('');
    } else {
      setError('Invalid password');
    }
  };

  const handleSave = () => {
    updateContent(editState);
    alert('Changes saved successfully!');
  };

  const updateField = (section: keyof WebsiteContent, field: string, value: any) => {
    setEditState(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateArrayItem = (section: keyof WebsiteContent, index: number, field: string, value: any) => {
    setEditState(prev => {
      const newArray = [...(prev[section] as any[])];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [section]: newArray };
    });
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
          <div className="text-center mb-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-500">Enter password to edit website</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Password"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors"
            >
              Access CMS
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Helper to render input fields
  const renderInput = (label: string, value: string, onChange: (val: string) => void, type = "text") => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 outline-none text-sm h-24"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 outline-none text-sm"
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-900 text-white p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3">
            <Edit3 className="w-6 h-6" />
            <h2 className="text-xl font-bold">CMS Admin Panel</h2>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-bold transition-colors"
            >
              <Save className="w-4 h-4 mr-2" /> Save Changes
            </button>
            <button 
              onClick={resetContent}
              className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-bold transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Reset Defaults
            </button>
            <button 
              onClick={logout}
              className="p-2 hover:bg-blue-800 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-blue-800 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto shrink-0 p-4">
            <div className="space-y-1">
              {Object.keys(editState).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as keyof WebsiteContent)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    activeTab === key ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 overflow-y-auto p-8 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 capitalize border-b pb-4">
              Edit {activeTab.replace(/([A-Z])/g, ' $1').trim()}
            </h3>

            {activeTab === 'general' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderInput('Company Name', editState.general.companyName, (v) => updateField('general', 'companyName', v))}
                {renderInput('IRA Reg No', editState.general.iraRegNo, (v) => updateField('general', 'iraRegNo', v))}
                {renderInput('Phone Number', editState.general.phoneNumber, (v) => updateField('general', 'phoneNumber', v))}
                {renderInput('Email', editState.general.email, (v) => updateField('general', 'email', v))}
                {renderInput('Location', editState.general.location, (v) => updateField('general', 'location', v))}
                {renderInput('Tagline', editState.general.tagline, (v) => updateField('general', 'tagline', v))}
              </div>
            )}

            {activeTab === 'hero' && (
              <div className="space-y-4">
                 {renderInput('Headline', editState.hero.headline, (v) => updateField('hero', 'headline', v))}
                 {renderInput('Sub-Headline', editState.hero.subHeadline, (v) => updateField('hero', 'subHeadline', v))}
                 {renderInput('Description', editState.hero.description, (v) => updateField('hero', 'description', v), 'textarea')}
                 {renderInput('Background Image URL', editState.hero.backgroundImage, (v) => updateField('hero', 'backgroundImage', v))}
              </div>
            )}

            {['personalServices', 'businessServices'].includes(activeTab) && (
              <div className="space-y-8">
                {(editState[activeTab] as any[]).map((service, idx) => (
                  <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-bold mb-4 text-blue-700">Service #{idx + 1}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {renderInput('Title', service.title, (v) => updateArrayItem(activeTab, idx, 'title', v))}
                      {renderInput('Icon Name (Lucide)', service.icon, (v) => updateArrayItem(activeTab, idx, 'icon', v))}
                      {renderInput('Image URL', service.image, (v) => updateArrayItem(activeTab, idx, 'image', v))}
                      <div className="col-span-2">
                         {renderInput('Description', service.description, (v) => updateArrayItem(activeTab, idx, 'description', v), 'textarea')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'partners' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(editState.partners).map((partner, idx) => (
                     <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                         {renderInput('Partner Name', partner.name, (v) => updateArrayItem('partners', idx, 'name', v))}
                     </div>
                  ))}
               </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="space-y-8">
                {editState.testimonials.map((item, idx) => (
                  <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {renderInput('Client Name', item.name, (v) => updateArrayItem('testimonials', idx, 'name', v))}
                      {renderInput('Role', item.role, (v) => updateArrayItem('testimonials', idx, 'role', v))}
                      {renderInput('Image URL', item.image, (v) => updateArrayItem('testimonials', idx, 'image', v))}
                      <div className="col-span-2">
                        {renderInput('Content', item.content, (v) => updateArrayItem('testimonials', idx, 'content', v), 'textarea')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

             {activeTab === 'stats' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {editState.stats.map((item, idx) => (
                  <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                      {renderInput('Label', item.label, (v) => updateArrayItem('stats', idx, 'label', v))}
                      {renderInput('Value', item.value, (v) => updateArrayItem('stats', idx, 'value', v))}
                      {renderInput('Icon', item.icon, (v) => updateArrayItem('stats', idx, 'icon', v))}
                  </div>
                ))}
              </div>
            )}

             {activeTab === 'features' && (
              <div className="space-y-6">
                {editState.features.map((item, idx) => (
                  <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                      {renderInput('Title', item.title, (v) => updateArrayItem('features', idx, 'title', v))}
                      {renderInput('Icon', item.icon, (v) => updateArrayItem('features', idx, 'icon', v))}
                      {renderInput('Description', item.description, (v) => updateArrayItem('features', idx, 'description', v), 'textarea')}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'faqs' && (
              <div className="space-y-6">
                {editState.faqs.map((item, idx) => (
                  <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                      {renderInput('Question', item.question, (v) => updateArrayItem('faqs', idx, 'question', v))}
                      {renderInput('Answer', item.answer, (v) => updateArrayItem('faqs', idx, 'answer', v), 'textarea')}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'quickLinks' && (
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {editState.quickLinks.map((item, idx) => (
                    <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                        {renderInput('Title', item.title, (v) => updateArrayItem('quickLinks', idx, 'title', v))}
                        {renderInput('Description', item.description, (v) => updateArrayItem('quickLinks', idx, 'description', v))}
                        {renderInput('Icon', item.icon, (v) => updateArrayItem('quickLinks', idx, 'icon', v))}
                    </div>
                 ))}
               </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
