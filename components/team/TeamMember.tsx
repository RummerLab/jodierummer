import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface TeamMemberProps {
  member: {
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
}

export function TeamMember({ member }: TeamMemberProps) {
  const imageUrl = member.image.startsWith('http') 
    ? member.image 
    : `https://rummerlab.com${member.image}`

  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={member.alt}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">{member.name}</h2>
          {member.title && <p className="text-muted-foreground">{member.title}</p>}
          <p className="text-primary font-medium">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="prose prose-sm dark:prose-invert line-clamp-4 mb-6">
          {member.description}
        </div>

        {member.affiliations && member.affiliations.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Affiliations</h3>
            <ul className="text-sm space-y-1">
              {member.affiliations.map((affiliation, index) => (
                <li key={index} className="text-muted-foreground">
                  {affiliation.role} at {affiliation.institution}
                  {affiliation.location && `, ${affiliation.location}`}
                </li>
              ))}
            </ul>
          </div>
        )}

        {member.links && Object.keys(member.links).length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            <TooltipProvider>
              {member.links.personalWebsite && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link 
                      href={`https://${member.links.personalWebsite}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">Website</Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit personal website</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {member.links.bluesky && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link 
                      href={member.links.bluesky}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">Bluesky</Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow on Bluesky</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {member.links.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link 
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">LinkedIn</Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </TooltipProvider>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 