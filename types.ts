
export interface Project {
  id: string;
  name: string;
  description: string;
  features: string[];
  stack: string[];
  mockupImages: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'core' | 'backend' | 'design' | 'tools';
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
