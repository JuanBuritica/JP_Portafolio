
import { Project, NavigationItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Enterprise Integration',
    subtitle: 'Technical Architecture',
    description: 'Designing and implementing enterprise integration projects between SaaS suites and external ERP systems via REST APIs and sFTP.',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop',
    category: 'Architecture',
    year: '2025',
    client: 'Coupa Software',
    verticalAccent: 'INTEGRATION'
  },
  {
    id: '02',
    title: 'Analytics Automation',
    subtitle: 'Data Engineering',
    description: 'Automating real-time analytics solutions using SQL, Power BI, and DAX to support executive decision-making processes.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    category: 'Analytics',
    year: '2024',
    client: 'Global Services',
    verticalAccent: 'DATA'
  }
];

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'About & Experience', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Download CV', href: '#' }
];

export const EXPERIENCE = [
  {
    firm: 'Coupa Software',
    role: 'Associate Technical Architect',
    period: 'May 2025 — Present',
    description: 'Led technical design of enterprise integration projects between Coupa’s P2P suite and external ERP systems via REST APIs and sFTP.'
  },
  {
    firm: 'Coupa Software',
    role: 'Technical Support Engineer',
    period: 'Oct 2023 — June 2025',
    description: 'Diagnosing complex technical issues within procurement and analytics platforms, serving as an escalation point for high-impact cases.'
  },
  {
    firm: 'Sutherland Global Services',
    role: 'Senior Associate / Lead – CX & BI Reporting',
    period: 'Dec 2020 — Oct 2023',
    description: 'Led 15+ analytics and BI reporting projects across LATAM, designing and automating Power BI dashboards from Excel workflows.'
  },
  {
    firm: 'Teleperformance',
    role: 'Associate – Customer Experience',
    period: 'April 2019 — Oct 2020',
    description: 'Delivered high-quality customer support while meeting strict performance and confidentiality standards. Developed strong communication and problem-solving skills.'
  }
];
