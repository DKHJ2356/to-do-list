export const personalInfo = {
  name: 'Domingo',
  headline: 'IT Developer & Database Engineer',
  bio: 'Software Engineer based in Dhaka, Bangladesh. I build and maintain systems, manage databases, and craft web experiences. Currently an IT Developer at Eastandart BD and Database Manager at Love2Learn Sign Language.',
  email: 'domingo@eastandart.com',
  github: 'https://github.com/DKHJ2356',
  linkedin: 'https://www.linkedin.com/in/',
  location: 'Dhaka, Bangladesh',
};

export const experience = [
  {
    id: 1,
    role: 'Information Technology Developer',
    company: 'Eastandart BD',
    type: 'Part-time · On-site',
    period: 'Apr 2026 – Present',
    duration: '3 months',
    location: 'Dhaka, Bangladesh',
    description:
      'Software Engineer involved in system development and implementation. Responsible for IT management, infrastructure oversight, security practices, and quality assurance across company systems.',
    skills: [
      'IT Management',
      'System Development',
      'IT Development',
      'Infrastructure Management',
      'Security',
      'Quality Assurance',
      'System Implementations',
      'Database',
    ],
  },
  {
    id: 2,
    role: 'Database Manager',
    company: 'Love2Learn Sign Language',
    type: 'Contract · Remote',
    period: 'Dec 2025 – Present',
    duration: '7 months',
    location: 'Bangladesh',
    description:
      'Managing the database for the Love to Learn Sign Language app on Google Play — adding new words, verifying data accuracy, correcting entries, and translating content to keep the app up-to-date.',
    skills: ['Database Administration', 'Google Sheets', 'Database', 'Translation'],
  },
];

export const skillGroups = [
  {
    category: 'IT & Systems',
    skills: [
      'IT Management',
      'System Development',
      'IT Development',
      'Infrastructure Management',
      'System Implementations',
    ],
  },
  {
    category: 'Data & Quality',
    skills: [
      'Database Administration',
      'Database',
      'Google Sheets',
      'Quality Assurance',
      'Security',
    ],
  },
  {
    category: 'Web Development',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'GitHub', 'Translation', 'Google Workspace'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'EASTANDARTBD',
    description:
      'Full website for Eastandart BD — a TypeScript-powered platform showcasing the brand\'s digital presence, built with a modern React stack.',
    tech: ['TypeScript', 'React', 'Next.js'],
    url: 'https://github.com/DKHJ2356/EASTANDARTBD',
    isPrivate: false,
    year: '2026',
  },
  {
    id: 2,
    name: 'Bijoux Demo Site',
    description:
      'Demo and testing site for the BIJOUX brand. Focused on UI/UX exploration, interactive prototyping, and front-end development.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://github.com/DKHJ2356/bijoux-demo-site',
    isPrivate: true,
    year: '2026',
  },
  {
    id: 3,
    name: 'To-Do List App',
    description:
      'A task management web application built with Next.js — exploring full-stack development with modern React patterns.',
    tech: ['Next.js', 'React', 'JavaScript'],
    url: 'https://github.com/DKHJ2356/to-do-list',
    isPrivate: false,
    year: '2026',
  },
];
