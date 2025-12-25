
import { useState, useEffect } from 'react';
import { Post, SiteSettings } from './types';
import { INITIAL_POSTS, INITIAL_SETTINGS } from './constants';

export const useCMSStore = () => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('bioinvasion_posts');
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('bioinvasion_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem('bioinvasion_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('bioinvasion_settings', JSON.stringify(settings));
  }, [settings]);

  const addPost = (post: Omit<Post, 'id' | 'date'>) => {
    const newPost: Post = {
      ...post,
      id: crypto.randomUUID(),
      date: new Date().toISOString().split('T')[0]
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const updatePost = (id: string, updates: Partial<Post>) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  const updateSettings = (updates: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...updates }));
  };

  return { posts, settings, addPost, updatePost, deletePost, updateSettings };
};
