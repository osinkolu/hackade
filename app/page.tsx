import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Youtube, Rocket, Calendar } from 'lucide-react'
import Image from 'next/image'
import heroLight from '@/assets/images/hero-light.jpg'
import heroDark from '@/assets/images/hero-dark.jpg'
import { pastHackathons } from './hackathons/page'
import { Faqs } from '@/components/faqs'

export default function Home() {
  const features = [
    {
      name: 'Monthly Hackathons',
      description: 'Regular challenges to test and improve your data science skills',
      icon: Calendar,
    },
    {
      name: 'Expert Mentorship',
      description: 'Learn from industry professionals and experienced data scientists',
      icon: Users,
    },
    {
      name: 'Resources & Webinars',
      description: 'Access to recorded webinars and solution discussions',
      icon: Youtube,
    },
    {
      name: 'Career Growth',
      description: 'Opportunities to showcase your skills to potential employers',
      icon: Rocket,
    },
  ]

  const stats = [
    { name: 'Active Participants', value: '250+' },
    { name: 'Hackathons Completed', value: pastHackathons.length.toString().padStart(2, '0') },
    { name: 'Success Stories', value: '50+' },
    { name: 'Prize Pool', value: '₦100k+' },
  ]

  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-10 xs:pb-32 pt-24 lg:px-8">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full lg:w-1/2 text-center sm:text-left">
                <h1 className="text-base font-semibold leading-7 text-primary">Welcome to Hackàde</h1>
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Empowering Data Scientists in Nigeria
                </h2>
                <p className="relative mt-6 text-lg leading-8 text-muted-foreground">
                  Join our monthly hackathon series to showcase your skills, learn from experts, and connect with Nigeria&apos;s data science community.
                </p>
                <div className="mt-10 flex flex-col xs:flex-row justify-center sm:justify-start gap-6">
                  <Button size="lg" asChild>
                    <Link href="/hackathons">Join Next Hackathon</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/sponsors">Become a Sponsor</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center my-14 xs:mb-0 w-full lg:w-1/2">
                <Image src={heroLight} alt='Abstract Data image in light background' className='dark:hidden flex transition duration-200' />
                <Image src={heroDark} alt='Abstract Data image in dark background' className='dark:flex hidden transition duration-200' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center sm:text-left lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Join Us?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to grow as a data scientist
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our hackathon series is designed to help you develop practical skills, build a strong portfolio, and connect with industry professionals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name} className="flex flex-col">
                <CardContent className="pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold">{feature.name}</dt>
                  <dd className="mt-2 leading-7 text-muted-foreground">{feature.description}</dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our impact by the numbers</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We&apos;re proud of the community we&apos;ve built and the opportunities we&apos;ve created for data scientists in Nigeria.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 xs:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col gap-y-3 items-center sm:items-start">
              <dt className="text-sm leading-6 text-muted-foreground">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {/* FAQs Sections */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <Faqs />
      </div>
    </div>
    
  )
}