'use client'
import Link from 'next/link'
import { Code2, Twitter, Linkedin, Mail } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Hackathons', href: '/hackathons' },
    { name: 'Winners', href: '/winners' },
    { name: 'Resources', href: '/resources' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
  ],
  organizers: [
    {
      name: 'Victor',
      email: '#',
      twitter: '#',
      linkedin: '#',
    },
    {
      name: 'Eniola',
      email: '#',
      twitter: '#',
      linkedin: '#',
    },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubscribing(true)

    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Successfully subscribed! ✅",
      description: "Thank you for subscribing to our newsletter.",
    })

    setIsSubscribing(false)
    setEmail('')
  }
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Hackàde: Nigerian Data Science Hackathon Series</span>
            <Code2 className="h-8 w-8" />
            <span>Hackàde</span>
          </Link>
        </div>
         {/* Newsletter Subscription */}
         <div className="mx-auto mt-10 max-w-md text-center">
          <h3 className="text-sm font-semibold">Subscribe to our newsletter</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Stay updated with upcoming hackathons and data science news
          </p>
          <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isSubscribing}>
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
        <nav className="mt-8 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="flex justify-center sm:justify-start pb-6">
              <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary text-center sm:text-left">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.organizers.map((organizer) => (
            <div key={organizer.name} className="flex flex-col items-center space-y-4">
              <p className="text-sm font-semibold text-primary">{organizer.name}</p>
              <div className="flex space-x-4">
                <Link href={organizer.twitter} className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href={organizer.linkedin} className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href={`mailto:${organizer.email}`} className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Email</span>
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col sm:flex-row justify-center md:justify-between gap-4'>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; 2024 - {new Date().getFullYear()} Hackàde. All rights reserved.
        </p>
        <p  className="sm:mt-10 text-center text-xs leading-5 text-muted-foreground">
          Website developed by <a href="https://wa.me/2349023600083" className='underline underline-offset-2'>Dev. Rahmlad</a></p>
        </div>
      </div>
    </footer>
  )
}