export type ProjectCategory = 'all' | 'web' | 'mobile' | 'landing';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface StackLayer {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  colorVar: string;
  count: string;
  tools: string[];
  flexRatio: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ChannelItem {
  id: string;
  number: string;
  title: string;
  handle: string;
  sub: string;
  href: string;
  icon: 'mail' | 'whatsapp' | 'instagram';
}

