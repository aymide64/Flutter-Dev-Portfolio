
import { Project, Skill, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'EcoTrack',
    description: 'A sustainable living companion helping users track their carbon footprint and discover eco-friendly habits.',
    features: ['Real-time Analytics', 'Community Challenges', 'AI Product Scanning', 'Offline Mode'],
    stack: ['Flutter', 'Dart', 'Firebase', 'TensorFlow Lite'],
    mockupImages: [
      'https://picsum.photos/id/1/400/800',
      'https://picsum.photos/id/2/400/800',
      'https://picsum.photos/id/3/400/800'
    ]
  },
  {
    id: '2',
    name: 'Zenith Pay',
    description: 'Cryptocurrency wallet and payment gateway focusing on speed, security, and a frictionless user experience.',
    features: ['Multi-chain Support', 'Biometric Security', 'Instant Swaps', 'Live Market Data'],
    stack: ['Flutter', 'Riverpod', 'Web3Dart', 'REST API'],
    mockupImages: [
      'https://picsum.photos/id/4/400/800',
      'https://picsum.photos/id/5/400/800',
      'https://picsum.photos/id/6/400/800'
    ]
  },
  {
    id: '3',
    name: 'Nova Health',
    description: 'Holistic health and meditation app with personalized routines and professional instructor guidance.',
    features: ['Sleep Tracking', 'Live Video Classes', 'Health Kit Integration', 'Dark/Light Mode'],
    stack: ['Flutter', 'BLoC', 'Supabase', 'WebRTC'],
    mockupImages: [
      'https://picsum.photos/id/7/400/800',
      'https://picsum.photos/id/8/400/800',
      'https://picsum.photos/id/9/400/800'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter', icon: '⚡', category: 'core' },
  { name: 'Dart', icon: '🎯', category: 'core' },
  { name: 'Firebase', icon: '🔥', category: 'backend' },
  { name: 'Supabase', icon: '⚡', category: 'backend' },
  { name: 'Riverpod', icon: '💧', category: 'core' },
  { name: 'BLoC', icon: '🧱', category: 'core' },
  { name: 'REST APIs', icon: '🌐', category: 'tools' },
  { name: 'Figma', icon: '🎨', category: 'design' },
];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: '4', suffix: '+' },
  { label: 'Apps Built', value: '15', suffix: '+' },
  { label: 'Clients Satisfied', value: '100', suffix: '%' },
  { label: 'Code Quality', value: 'A+', suffix: '' },
];
