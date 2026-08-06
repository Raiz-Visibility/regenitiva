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
