
export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  published: boolean;
  metaTitle?: string;
  metaDescription?: string;
}

export interface PageContent {
  id: string;
  title: string;
  slug: string;
  content: Record<string, any>;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  primaryColor: string;
  theme: 'light' | 'dark';
  socialLinks: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  contactEmail: string;
}

export enum Category {
  INVASIVE_PLANTS = 'Invasive Plants',
  INVASIVE_ANIMALS = 'Invasive Animals',
  WETLANDS = 'Wetlands',
  CLIMATE_CHANGE = 'Climate Change',
  CASE_STUDIES = 'Case Studies',
  POLICY = 'Policy'
}
