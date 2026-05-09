import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    name: 'CropsLab',
    stacks: ['Kotlin', 'Android', 'Firebase', 'OpenCV'],
    description: 'AI-powered Android application for predicting crop diseases and pests. Implements Linear and Logistic Regression for real-time image classification and predictive analysis using Weka and OpenCV.',
    link: 'https://play.google.com/store/apps/details?id=com.coder.moonshot.cropslab',
    logo: '/cropslab_logo.png',
  },
  {
    name: 'Virtual Vows',
    stacks: ['Golang', 'Next.js', 'Google Cloud'],
    description: 'An eco-friendly digital wedding invitation platform featuring real-time RSVP tracking, WhatsApp integration, and a digital guestbook for modern guest list management.',
    link: 'https://virtualvowsapp.com',
    logo: '/virtualvows_logo.svg',
  },
];
