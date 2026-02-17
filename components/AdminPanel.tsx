import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { X, Save, RefreshCw, LogOut, Lock, Edit3, Trash2, PlusCircle, Check } from 'lucide-react';
import { WebsiteContent } from '../types';

const AdminPanel: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { content, updateContent, resetContent, isAuthenticated, login, logout } = useContent();
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<keyof WebsiteContent>('general');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [editState, setEditState] = useState<WebsiteContent>(content);

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
    setSuccessMsg('Saved');
    setTimeout(() => setSuccessMsg(''), 2000);
  };

  const updateField = (section: keyof WebsiteContent, field: string, value: any) => {
    setEditState(prev => ({
      ...prev,
      [section]: { ...(prev[section] as any), [field]: value }
    }));
  };

  const updateArrayItem = (section: keyof WebsiteContent, index: number, field: string, value: any) => {
    setEditState(prev => {
      const newArray = [...(prev[section] as any[])];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [section]: newArray };
    });
  };

  const addItem = (section: keyof WebsiteContent, defaultItem: any) => {
    setEditState(prev => ({
      ...prev,
      [section]: [...(prev[section] as any[]), defaultItem]
    }));
  };

  const removeItem = (section: keyof WebsiteContent, index: number) => {
    if (window.confirm('Remove this item?')) {
      setEditState(prev => {
        const newArray = [...(prev[section] as any[])];
        newArray.splice(index, 1);
        return { ...prev, [section]: newArray };
      });
    }
  };

  const templates: Partial<Record<keyof WebsiteContent, any>> = {
    partners: { name: 'New Partner', logo: 'Shield' },
    personalServices: { id: `service-${Date.now()}`, title: 'New Service', description: 'Description', longDescription: 'Full Description', benefits: ['Benefit 1'], icon: 'Shield', image: 'https://placehold.co/800x600' },
    businessServices: { id: `biz-${Date.now()}`, title: 'New Service', description: 'Description', longDescription: 'Full Description', benefits: ['Benefit 1'], icon: 'Briefcase', image: 'https://placehold.co/800x600' },
    features: { id: `feat-${Date.now()}`, title: 'New Feature', description: 'Description', icon: 'Check' },
    stats: { label: 'Label', value: '100+', icon: 'Star' },
    testimonials: { id: `test-${Date.now()}`, name: 'Name', role: 'Role', content: 'Feedback', image: 'https://placehold.co/100' },
    faqs: { question: 'Question?', answer: 'Answer.' },
    quickLinks: { title: 'Link', description: 'Desc', icon: 'Link', href: '#' },
    navigation: { label: 'Link', href: '#' }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
          <div className="text-center mb-6">
            <div className="bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-600">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Admin Access</h2>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm"
              placeholder="Password"
              autoFocus
            />
            {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
            <button type="submit" className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors text-sm">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderInput = (label: string, value: string, onChange: (val: string) => void, type = "text") => (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">{label}</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm min-h-[80px]"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col overflow-hidden ring-1 ring-slate-200">
        
        <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3">
            <Edit3 className="w-5 h-5 text-brand-400" />
            <h2 className="text-base font-bold">CMS Panel</h2>
          </div>
          <div className="flex items-center space-x-3">
            {successMsg && (
              <span className="text-emerald-400 text-sm font-medium flex items-center mr-3 animate-pulse">
                <Check className="w-4 h-4 mr-1.5" /> Saved
              </span>
            )}
            <button onClick={handleSave} className="flex items-center px-4 py-2 bg-brand-600 hover:bg-brand-500 rounded-lg text-sm font-semibold transition-colors">
              <Save className="w-4 h-4 mr-2" /> Save
            </button>
            <button onClick={resetContent} className="p-2 text-slate-400 hover:text-white transition-colors" title="Reset">
              <RefreshCw className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-slate-700 mx-1"></div>
            <button onClick={logout} className="p-2 text-slate-400 hover:text-red-400 transition-colors" title="Logout">
              <LogOut className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-60 bg-slate-50 border-r border-slate-200 overflow-y-auto shrink-0 py-4">
            <div className="space-y-0.5 px-3">
              {Object.keys(editState).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as keyof WebsiteContent)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize flex justify-between items-center ${
                    activeTab === key ? 'bg-white text-brand-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-white p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 capitalize">{activeTab.replace(/([A-Z])/g, ' $1').trim()}</h3>
                {templates[activeTab] && (
                  <button 
                    onClick={() => addItem(activeTab, templates[activeTab])}
                    className="flex items-center px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md text-sm font-medium transition-colors"
                  >
                    <PlusCircle className="w-4 h-4 mr-1.5" /> Add New
                  </button>
                )}
              </div>

              {activeTab === 'general' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput('Company Name', editState.general.companyName, (v) => updateField('general', 'companyName', v))}
                  {renderInput('Reg No', editState.general.iraRegNo, (v) => updateField('general', 'iraRegNo', v))}
                  {renderInput('Phone', editState.general.phoneNumber, (v) => updateField('general', 'phoneNumber', v))}
                  {renderInput('WhatsApp', editState.general.whatsappNumber, (v) => updateField('general', 'whatsappNumber', v))}
                  {renderInput('Email', editState.general.email, (v) => updateField('general', 'email', v))}
                  {renderInput('Location', editState.general.location, (v) => updateField('general', 'location', v))}
                  <div className="col-span-2">{renderInput('Tagline', editState.general.tagline, (v) => updateField('general', 'tagline', v))}</div>
                </div>
              )}

              {/* Special rendering for Services to include long description editing */}
              {['personalServices', 'businessServices'].includes(activeTab) && (
                <div className="space-y-4">
                  {(editState[activeTab] as any[]).map((item, idx) => (
                    <div key={idx} className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 relative group hover:border-slate-300 transition-colors">
                      <button onClick={() => removeItem(activeTab, idx)} className="absolute top-3 right-3 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {/* Common Fields */}
                         <div className="col-span-2 md:col-span-1">{renderInput('Title', item.title, (v) => updateArrayItem(activeTab, idx, 'title', v))}</div>
                         <div className="col-span-2 md:col-span-1">{renderInput('Icon', item.icon, (v) => updateArrayItem(activeTab, idx, 'icon', v))}</div>
                         <div className="col-span-2">{renderInput('Image URL', item.image, (v) => updateArrayItem(activeTab, idx, 'image', v))}</div>
                         <div className="col-span-2">{renderInput('Short Description', item.description, (v) => updateArrayItem(activeTab, idx, 'description', v), 'textarea')}</div>
                         
                         {/* Detailed Fields */}
                         <div className="col-span-2 border-t pt-4 mt-2">
                           <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Detail Page Content</h4>
                           {renderInput('Long Description', item.longDescription || '', (v) => updateArrayItem(activeTab, idx, 'longDescription', v), 'textarea')}
                           
                           <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Benefits</label>
                           <div className="space-y-2">
                              {(item.benefits || []).map((b: string, bIdx: number) => (
                                <div key={bIdx} className="flex gap-2">
                                  <input 
                                    value={b} 
                                    onChange={(e) => {
                                      const newBenefits = [...(item.benefits || [])];
                                      newBenefits[bIdx] = e.target.value;
                                      updateArrayItem(activeTab, idx, 'benefits', newBenefits);
                                    }}
                                    className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-sm"
                                  />
                                   <button 
                                      onClick={() => {
                                        const newBenefits = [...(item.benefits || [])];
                                        newBenefits.splice(bIdx, 1);
                                        updateArrayItem(activeTab, idx, 'benefits', newBenefits);
                                      }}
                                      className="text-slate-400 hover:text-red-500"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                </div>
                              ))}
                              <button 
                                onClick={() => {
                                  const newBenefits = [...(item.benefits || []), 'New Benefit'];
                                  updateArrayItem(activeTab, idx, 'benefits', newBenefits);
                                }}
                                className="text-sm text-brand-600 font-medium hover:underline mt-1"
                              >
                                + Add Benefit
                              </button>
                           </div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Generic handling for other arrays */}
              {['navigation', 'partners', 'features', 'stats', 'testimonials', 'faqs', 'quickLinks'].includes(activeTab) && (
                <div className="space-y-4">
                  {(editState[activeTab] as any[]).map((item, idx) => (
                    <div key={idx} className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 relative group hover:border-slate-300 transition-colors">
                      <button onClick={() => removeItem(activeTab, idx)} className="absolute top-3 right-3 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.keys(item).map((key) => (
                           key !== 'id' && (
                             <div key={key} className={key === 'description' || key === 'content' || key === 'answer' ? 'col-span-2' : ''}>
                                {renderInput(key, item[key], (v) => updateArrayItem(activeTab, idx, key, v), (key === 'description' || key === 'content' || key === 'answer') ? 'textarea' : 'text')}
                             </div>
                           )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

               {activeTab === 'quoteSection' && (
                <div className="space-y-6">
                  {renderInput('Title', editState.quoteSection.title, (v) => updateField('quoteSection', 'title', v))}
                  {renderInput('Description', editState.quoteSection.description, (v) => updateField('quoteSection', 'description', v), 'textarea')}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Benefits</label>
                    <div className="space-y-2">
                      {editState.quoteSection.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex gap-2">
                          <input
                            type="text"
                            value={benefit}
                            onChange={(e) => {
                              const newBenefits = [...editState.quoteSection.benefits];
                              newBenefits[idx] = e.target.value;
                              updateField('quoteSection', 'benefits', newBenefits);
                            }}
                            className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-sm"
                          />
                           <button 
                            onClick={() => {
                               const newBenefits = [...editState.quoteSection.benefits];
                               newBenefits.splice(idx, 1);
                               updateField('quoteSection', 'benefits', newBenefits);
                            }}
                            className="text-slate-400 hover:text-red-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button onClick={() => updateField('quoteSection', 'benefits', [...editState.quoteSection.benefits, "New Benefit"])} className="text-sm text-brand-600 font-medium hover:underline mt-1">
                        + Add Benefit
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'footer' && (
                <div className="space-y-6">
                  {renderInput('About Text', editState.footer.aboutText, (v) => updateField('footer', 'aboutText', v), 'textarea')}
                  {renderInput('Copyright', editState.footer.copyrightText, (v) => updateField('footer', 'copyrightText', v))}
                </div>
              )}

               {activeTab === 'hero' && (
                <div className="space-y-6">
                   {renderInput('Headline', editState.hero.headline, (v) => updateField('hero', 'headline', v))}
                   {renderInput('Sub-Headline', editState.hero.subHeadline, (v) => updateField('hero', 'subHeadline', v))}
                   {renderInput('Description', editState.hero.description, (v) => updateField('hero', 'description', v), 'textarea')}
                   {renderInput('Background Image URL', editState.hero.backgroundImage, (v) => updateField('hero', 'backgroundImage', v))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;