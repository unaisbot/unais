
import { Post, SiteSettings, Category } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  siteName: 'BioInvasion',
  tagline: 'Understanding Biological Invasions for a Sustainable Future',
  primaryColor: 'emerald',
  theme: 'light',
  socialLinks: {
    twitter: 'https://twitter.com/bioinvasion',
    facebook: 'https://facebook.com/bioinvasion',
    instagram: 'https://instagram.com/bioinvasion',
    linkedin: 'https://linkedin.com/company/bioinvasion'
  },
  contactEmail: 'info@bioinvasion.in'
};

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: 'Impact of Lantana camara in Tropical Forests',
    slug: 'impact-of-lantana-camara',
    content: 'Lantana camara is one of the world\'s most invasive species. Originally introduced as an ornamental plant, it has now taken over large swathes of tropical forests, outcompeting native vegetation and altering soil chemistry...',
    excerpt: 'How one ornamental plant became a major threat to tropical biodiversity across the globe.',
    author: 'Dr. Sarah Green',
    date: '2024-03-15',
    category: Category.INVASIVE_PLANTS,
    image: 'https://picsum.photos/seed/lantana/800/600',
    published: true,
    metaTitle: 'Lantana camara Invasion Impacts | BioInvasion',
    metaDescription: 'Discover the ecological impacts of Lantana camara on tropical biodiversity and forest health.'
  },
  {
    id: '2',
    title: 'Pathways of Introduction: How Species Travel',
    slug: 'pathways-of-introduction',
    content: 'Biological invasions don\'t happen by accident in a vacuum. Most are the result of human activities—global trade, shipping (ballast water), and the pet trade are the primary drivers of species movement...',
    excerpt: 'Understanding how invasive species cross borders is the first step in preventing their spread.',
    author: 'Michael Chen',
    date: '2024-03-10',
    category: Category.POLICY,
    image: 'https://picsum.photos/seed/cargo/800/600',
    published: true,
    metaTitle: 'Invasive Species Pathways | BioInvasion',
    metaDescription: 'An analysis of how alien species are introduced into new environments through global trade.'
  },
  {
    id: '3',
    title: 'Restoring Wetlands from Water Hyacinth',
    slug: 'restoring-wetlands-water-hyacinth',
    content: 'Water Hyacinth (Eichhornia crassipes) transforms open water bodies into dense mats of vegetation, blocking light and oxygen for aquatic life. Restoring these ecosystems requires a multi-pronged approach...',
    excerpt: 'Practical strategies for managing water hyacinth and restoring the health of freshwater ecosystems.',
    author: 'Elena Rodriguez',
    date: '2024-02-28',
    category: Category.WETLANDS,
    image: 'https://picsum.photos/seed/wetland/800/600',
    published: true,
    metaTitle: 'Water Hyacinth Management | BioInvasion',
    metaDescription: 'Strategies for controlling water hyacinth and ecological restoration of wetlands.'
  }
];
