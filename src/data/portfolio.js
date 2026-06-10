export const personalInfo = {
  name: 'Domingo',
  statement: 'Do you qualify?',
  substatement: 'Fullstack. Architecture to deployment.',
  email: 'domingo@eastandart.com',
  github: 'https://github.com/DKHJ2356',
  location: 'Dhaka, Bangladesh',
};

export const buildProcess = [
  {
    step: '01',
    title: 'Architecture first',
    body: 'Before a line of code, I diagram the system — data flow, service boundaries, failure modes. The code is just the architecture made executable.',
    proof: ['Supabase', 'PostgreSQL', 'REST', 'Auth'],
  },
  {
    step: '02',
    title: 'Backend owns the contract',
    body: 'API schema, database schema, and auth logic are locked before the first component renders. The frontend is a consumer, not a negotiator.',
    proof: ['Node.js', 'Next.js API', 'Edge Functions', 'RLS'],
  },
  {
    step: '03',
    title: 'Frontend ships the proof',
    body: 'UI is the architecture made visible. Every component maps to a backend decision already made. No guessing at the data layer.',
    proof: ['React', 'TypeScript', 'Tailwind', 'Vite'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'EASTANDARTBD',
    stack: ['TypeScript', 'Next.js', 'React'],
    decision: 'Chose static generation over server rendering — 3× faster load, acceptable staleness for a brand site with low update frequency.',
    url: 'https://github.com/DKHJ2356/EASTANDARTBD',
    isPrivate: false,
    year: '2026',
  },
  {
    id: 2,
    name: 'Bijoux Demo Site',
    stack: ['JavaScript', 'HTML', 'CSS'],
    decision: 'No framework — vanilla JS state machine for a 5-page prototype. Framework overhead would have doubled the bundle for zero gain.',
    url: 'https://github.com/DKHJ2356/bijoux-demo-site',
    isPrivate: true,
    year: '2026',
  },
  {
    id: 3,
    name: 'To-Do List App',
    stack: ['Next.js', 'React', 'JavaScript'],
    decision: 'Server components for data fetching — eliminated client-side loading states entirely. UI renders with data or not at all.',
    url: 'https://github.com/DKHJ2356/to-do-list',
    isPrivate: false,
    year: '2026',
  },
];
