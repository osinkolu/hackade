import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Trophy, Users, Clock } from 'lucide-react'
import Image from 'next/image'

const upcomingHackathon = {
  title: "From Scores to Seats: The Grad School ML Challenge",
  date: "April 2025",
  description: "The objective is to build a model that accurately classifies whether a student will be admitted based on various input features.",
  registrationDeadline: "April 6, 2025",
  participants: "250+",
  prizePool: "₦100,000",
  image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1564&auto=format&fit=crop&ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSfdbq13N1sX5WUNNGUGfUbXcWXhRpTQAohCU6HUXwFC-u0pew/viewform"
}

const pastHackathons = [
  {
    title: "Air Quality Prediction from Low-Cost IoT devices",
    date: "January 2025",
    description: "The objective is to develop a machine learning model that accurately predicts CO2 levels using data from Chemotronix's low-cost sensors",
    participants: "110+",
    image: "https://images.unsplash.com/photo-1683632398898-81d7db605188?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "https://zindi.africa/competitions/air-quality-prediction-from-low-cost-iot-devices"
  },
]

export default function HackathonsPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Upcoming Hackathon */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Hackathon</h1>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Join our next exciting challenge and showcase your data science skills
          </p>
        </div>

        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={upcomingHackathon.image}
                  alt={upcomingHackathon.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  width={2070}
                  height={1380}
                />
              </div>
              <div className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{upcomingHackathon.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mt-2 text-muted-foreground">{upcomingHackathon.description}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{upcomingHackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Deadline: {upcomingHackathon.registrationDeadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>{upcomingHackathon.participants} Participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span>Prize Pool: {upcomingHackathon.prizePool}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full" asChild>
                    <Link target='_blank' href={upcomingHackathon.link}>Register Now</Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>

        {/* Past Hackathons */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Past Hackathons</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Explore our previous challenges and winning solutions
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {pastHackathons.map((hackathon, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  width={2070}
                  height={1380}
                />
              </div>
              <CardHeader>
                <CardTitle>{hackathon.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{hackathon.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{hackathon.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{hackathon.participants} Participants</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button disabled variant="outline" className="w-full" asChild>
                  <Link href={hackathon.link} target='_blank'>
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}