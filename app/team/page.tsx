import { Metadata } from 'next'
import { TeamMember } from '@/components/team/TeamMember'

interface TeamMemberData {
  name: string
  title: string | null
  role: string
  email: string | null
  description: string
  image: string
  alt: string
  links: {
    personalWebsite?: string
    labWebsite?: string
    projectWebsite?: string
    researchGateSlug?: string
    googleScholarId?: string
    x?: string
    bluesky?: string
    facebook?: string
    instagram?: string
    linkedin?: string
    github?: string
    orcid?: string
  }
  affiliations: Array<{
    institution: string
    department: string | null
    role: string
    location: string
  }>
  education: Array<{
    degree: string
    field: string | null
    institution: string
    year: string | null
  }>
  awards: Array<{
    name: string
    year: string | null
    description: string
  }>
}

export const metadata: Metadata = {
  title: 'Our Team | Physioshark Project',
  description: 'Meet the dedicated researchers and scientists behind the Physioshark Project.',
}

// Fallback team data to use when API fetch fails
const fallbackTeamData: TeamMemberData[] = [
  {
    name: 'Dr. Jodie Rummer',
    title: 'Principal Investigator',
    role: 'Marine Biologist',
    email: 'jodie.rummer@jcu.edu.au',
    description: 'Dr. Jodie Rummer is a marine biologist specializing in fish physiology and conservation in the face of climate change.',
    image: '/images/team/dr-jodie-rummer.jpg',
    alt: 'Dr. Jodie Rummer',
    links: {
      personalWebsite: 'jodierummer.com',
      googleScholarId: 'ynWS968AAAAJ',
    },
    affiliations: [
      {
        institution: 'James Cook University',
        department: 'College of Science and Engineering',
        role: 'Professor',
        location: 'Townsville, Australia'
      }
    ],
    education: [
      {
        degree: 'Ph.D.',
        field: 'Zoology',
        institution: 'University of British Columbia',
        year: '2010'
      }
    ],
    awards: []
  }
];

async function getTeamMembers(): Promise<TeamMemberData[]> {
  try {
    const res = await fetch('https://rummerlab.com/api/scholar/ynWS968AAAAJ/team', {
      cache: 'force-cache',
      next: { revalidate: 3600 } // Revalidate every hour
    })

    if (!res.ok) {
      console.error(`Failed to fetch team data: ${res.status} ${res.statusText}`);
      return fallbackTeamData;
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching team data:', error);
    return fallbackTeamData;
  }
}

export default async function TeamPage() {
  const team = await getTeamMembers();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      
      {team.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Team information is currently being updated. Please check back soon.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member: TeamMemberData) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      )}
    </main>
  )
} 