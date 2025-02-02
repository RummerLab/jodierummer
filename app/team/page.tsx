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

async function getTeamMembers(): Promise<TeamMemberData[]> {
  const res = await fetch('https://rummerlab.com/api/scholar/team', {
    cache: 'force-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch team data')
  }

  return res.json()
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member: TeamMemberData) => (
          <TeamMember key={member.name} member={member} />
        ))}
      </div>
    </main>
  )
} 