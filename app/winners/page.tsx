import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, Medal, Award, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const winners = [
  {
    name: "Oluwaseun Afolabi",
    hackathon: "Data Science for Healthcare",
    position: "1st Place",
    date: "April 2024",
    solution: "AI-Powered Medical Diagnosis Assistant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    links: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Chidinma Okonkwo",
    hackathon: "AI for Financial Inclusion",
    position: "1st Place",
    date: "March 2024",
    solution: "Micro-lending Risk Assessment Model",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    links: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ibrahim Yusuf",
    hackathon: "Sustainable Agriculture",
    position: "1st Place",
    date: "February 2024",
    solution: "Crop Yield Optimization System",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    links: {
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Adebola Adeyemi",
    hackathon: "Smart Cities & IoT",
    position: "1st Place",
    date: "January 2024",
    solution: "Urban Traffic Optimization Platform",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    links: {
      github: "#",
      linkedin: "#"
    }
  }
]

const stats = [
  {
    name: 'Total Prize Awarded',
    value: '₦100k',
    icon: Trophy
  },
  {
    name: 'Winners',
    value: '03',
    icon: Medal
  },
  {
    name: 'Submissions',
    value: '50+',
    icon: Award
  }
]

export default function WinnersPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hall of Fame</h1>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Celebrating the brilliant minds shaping Nigeria&apos;s data science future
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-5xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.name} className="pt-6">
                <CardContent className="text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  <dt className="mt-4 text-base leading-7 text-muted-foreground">{stat.name}</dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight">{stat.value}</dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>

        {/* Winners Grid */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Past Winners</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Meet the talented individuals who&apos;ve excelled in our hackathons
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {winners.map((winner) => (
            <Card key={winner.name} className="flex flex-col overflow-hidden">
              <div className="flex items-center gap-6 p-6">
                <Image
                  src={winner.image}
                  alt={winner.name}
                  className="h-16 w-16 rounded-full object-cover"
                  width={1400}
                  height={2100}
                />
                <div>
                  <CardTitle className="text-xl">{winner.name}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{winner.hackathon}</p>
                </div>
              </div>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>{winner.position} - {winner.date}</span>
                </div>
                <p className="text-muted-foreground">{winner.solution}</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={winner.links.github}>
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={winner.links.linkedin}>
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to join them?</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Register for our next hackathon and showcase your skills
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/hackathons">Join Next Hackathon</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}