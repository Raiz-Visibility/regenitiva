export interface TeamMember {
  id: string;
  name: string;
  firstName: string;
  title: string;
  credentials: string;
  shortBio: string;
  bioParagraphs: string[];
  credentialGroups: { label: string; items: string[] }[];
}

export const team: TeamMember[] = [
  {
    id: 'francis-lagattuta',
    name: 'Dr. Francis P. Lagattuta',
    firstName: 'Dr. Lagattuta',
    title: 'Founder',
    credentials: 'MD · Board Certified, PM&R · Pain Medicine · Addiction Medicine',
    shortBio:
      'Board certified in physical medicine and rehabilitation, electrodiagnostic medicine, pain medicine, and addiction medicine. Directed an interventional pain fellowship for over twenty years and has performed more than 2,000 regenerative procedures.',
    bioParagraphs: [
      'Dr. Francis P. Lagattuta founded Regenitiva after two decades of directing an interventional pain fellowship and watching capable physicians turn patients away from regenerative medicine — not for lack of interest, but for lack of a defensible way to offer it.',
      'Over more than 2,000 regenerative procedures, he built the protocols, training methods, and compliance structure that now form the basis of Regenitiva\'s practice development work. His approach is unusual in the field: compliance and documentation are treated as part of the clinical program from day one, not bolted on afterward.',
      'He continues to see patients and to train physicians directly, and every protocol Regenitiva ships has passed through his review.',
    ],
    credentialGroups: [
      {
        label: 'Education',
        items: [
          'MD, [Medical School]',
          'Residency, Physical Medicine & Rehabilitation',
        ],
      },
      {
        label: 'Certifications',
        items: [
          'Board Certified, Physical Medicine & Rehabilitation',
          'Board Certified, Electrodiagnostic Medicine',
          'Board Certified, Pain Medicine',
          'Board Certified, Addiction Medicine',
        ],
      },
      {
        label: 'Professional History',
        items: [
          'Founder, Regenitiva (2026–present)',
          'Director, Interventional Pain Fellowship (1994–2015)',
          'Trained more than 60 physicians in interventional and regenerative technique',
        ],
      },
    ],
  },
  {
    id: 'vince-surra',
    name: 'Vince Surra',
    firstName: 'Vince',
    title: 'Director of Operations',
    credentials: 'Practice Operations · Compliance Program Delivery',
    shortBio:
      'Oversees client operations, compliance program delivery, and day-to-day practice support across Regenitiva\'s client base — the point of contact once a program is up and running.',
    bioParagraphs: [
      'Vince Surra leads client operations at Regenitiva — the point of contact for practices once a program moves from build to daily use. He oversees compliance program delivery, staff training logistics, and the ongoing auditing that keeps a program current as standards change.',
      'Before joining Regenitiva, he spent his career managing multi-site healthcare operations, which shapes how he approaches standardizing a protocol across locations without losing what makes each practice work.',
    ],
    credentialGroups: [
      {
        label: 'Background',
        items: [
          '10+ years in multi-site healthcare operations management',
          'Specializes in compliance program delivery and staff training logistics',
        ],
      },
      {
        label: 'Professional History',
        items: ['Director of Operations, Regenitiva (2026–present)'],
      },
    ],
  },
];

export function getTeamMember(id: string): TeamMember | undefined {
  return team.find((m) => m.id === id);
}

export function getTeamMemberByName(name: string): TeamMember | undefined {
  return team.find((m) => m.name === name);
}
