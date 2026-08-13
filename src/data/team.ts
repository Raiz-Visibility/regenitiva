export interface TeamMember {
  id: string;
  name: string;
  firstName: string;
  title: string;
  credentials: string;
  image: string;
  imageAlt: string;
  shortBio: string;
  bioParagraphs: string[];
  credentialGroups: { label: string; items: string[] }[];
}

export const team: TeamMember[] = [
  {
    id: 'vince-surra',
    name: 'Vincent Surra',
    firstName: 'Vincent',
    title: 'Chief Executive Officer',
    credentials: 'Healthcare Operations Executive · CPHQ',
    image: '/images/vince-surra.jpg',
    imageAlt: 'Vincent Surra, Chief Executive Officer of Regenitiva',
    shortBio:
      'A healthcare executive with more than 20 years building high-performing healthcare organizations, Vincent leads Regenitiva\'s work partnering with physicians to develop regenerative medicine service lines that integrate into their existing practices.',
    bioParagraphs: [
      'Vincent Surra is a healthcare executive with more than 20 years of experience building high-performing healthcare organizations and helping physicians strengthen clinical operations, improve quality, and expand patient services. Throughout his career, he has led executive initiatives involving operational strategy, regulatory compliance, Lean management, quality improvement, physician practice development, and organizational growth across multi-site healthcare systems serving hundreds of thousands of patients.',
      'Before leading Regenitiva, Vincent served in executive leadership positions including Chief Operating Officer, Director of Quality Improvement, and Lean Director, overseeing organizations with more than 40 medical clinics, hundreds of providers and employees, and more than 120,000 active patients. He has successfully led the opening of new medical clinics and surgical centers, developed enterprise-wide quality and compliance programs, implemented Lean healthcare systems, and built operational infrastructures that continue to support long-term organizational success.',
      'As Chief Executive Officer of Regenitiva, Vincent leads the company\'s strategic growth by partnering with physicians to develop regenerative medicine service lines that integrate seamlessly into existing medical practices. His work encompasses clinical implementation, operational design, staff development, compliance oversight, standardized treatment protocols, physician education, quality improvement, and patient outcome measurement.',
      'Rather than simply introducing regenerative medicine procedures, Vincent focuses on building sustainable practice models that improve patient care while creating long-term value for physicians and their organizations. He believes exceptional healthcare is created when outstanding physicians are supported by equally strong operational systems, measurable outcomes, and a culture of continuous improvement — the philosophy at the foundation of Regenitiva\'s mission.',
    ],
    credentialGroups: [
      {
        label: 'Experience',
        items: [
          '20+ years building high-performing, multi-site healthcare organizations',
          'Former Chief Operating Officer, Director of Quality Improvement, and Lean Director',
          'Oversaw 40+ medical clinics, hundreds of providers, and 120,000+ active patients',
          'Led the opening of new medical clinics and surgical centers',
        ],
      },
      {
        label: 'Education & Certifications',
        items: [
          'B.S. in Business Administration, University of La Verne',
          'Certified Professional in Healthcare Quality (CPHQ)',
          'Lean Management training, Simpler Consulting Group',
        ],
      },
      {
        label: 'Military Service',
        items: [
          'United States Air Force veteran',
          'Distinguished Graduate, Air Force Leadership School',
        ],
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
