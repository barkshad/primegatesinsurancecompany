import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { WebsiteContent } from '../types';
import { INITIAL_CONTENT } from '../constants';

interface ContentContextType {
  content: WebsiteContent;
  updateContent: (newContent: WebsiteContent) => void;
  resetContent: () => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteContent>(INITIAL_CONTENT);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('primegates_content');
    const savedAuth = localStorage.getItem('primegates_auth');
    
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        // Version Check: If versions mismatch, or saved content has no version, overwrite with INITIAL_CONTENT
        if (parsedContent.version === INITIAL_CONTENT.version) {
          setContent(parsedContent);
        } else {
          console.log("Content version mismatch. Updating to latest version: " + INITIAL_CONTENT.version);
          setContent(INITIAL_CONTENT);
          localStorage.setItem('primegates_content', JSON.stringify(INITIAL_CONTENT));
        }
      } catch (e) {
        console.error("Failed to parse saved content", e);
        setContent(INITIAL_CONTENT);
      }
    } else {
      setContent(INITIAL_CONTENT);
    }
    
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const updateContent = (newContent: WebsiteContent) => {
    setContent(newContent);
    localStorage.setItem('primegates_content', JSON.stringify(newContent));
  };

  const resetContent = () => {
    if (window.confirm("Are you sure you want to reset all changes to default?")) {
      setContent(INITIAL_CONTENT);
      localStorage.removeItem('primegates_content');
    }
  };

  const login = (password: string): boolean => {
    if (password === '12345') {
      setIsAuthenticated(true);
      localStorage.setItem('primegates_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('primegates_auth');
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent, isAuthenticated, login, logout }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};