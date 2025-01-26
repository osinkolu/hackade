import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, Users, Trophy, Target, BarChart, Rocket, Mail } from 'lucide-react'
import Link from 'next/link'

const sponsorshipTiers = [
  {
    name: "Diamond",
    price: "₦2,000,000",
    description: "Premium sponsorship package with maximum visibility and engagement",
    benefits: [
      "Prominent logo placement on all materials",
      "Speaking opportunity at opening ceremony",
      "Direct access to top participants",
      "Exclusive workshop session",
      "First access to participants' portfolios",
      "Social media promotion package",
      "Press release mention"
    ]
  },
  {
    name: "Gold",
    price: "₦1,000,000",
    description: "Enhanced visibility and engagement opportunities",
    benefits: [
      "Logo placement on event materials",
      "Workshop session opportunity",
      "Access to participants' portfolios",
      "Social media promotion",
      "Booth at career fair",
      "Mentorship opportunities"
    ]
  },
  {
    name: "Silver",
    price: "₦500,000",
    description: "Standard sponsorship package with good visibility",
    benefits: [
      "Logo on event website",
      "Social media mentions",
      "Access to participants' profiles",
      "Booth at career fair",
      "Brand presence during events"
    ]
  }
]

const currentSponsors = [
  {
    category: "Technology Partners",
    companies: [
      {
        name: "TechCorp Nigeria",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        website: "#"
      },
      {
        name: "DataTech Solutions",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
        website: "#"
      }
    ]
  },
  {
    category: "Academic Partners",
    companies: [
      {
        name: "Lagos Tech Institute",
        logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        website: "#"
      },
      {
        name: "Digital Skills Academy",
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        website: "#"
      }
    ]
  }
]

const impactStats = [
  {
    name: "Participants Reached",
    value: "1,000+",
    icon: Users
  },
  {
    name: "Projects Completed",
    value: "100+",
    icon: Target
  },
  {
    name: "Success Rate",
    value: "85%",
    icon: BarChart
  }
]

export default function SponsorsPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Partner With Us</h1>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Support the next generation of data scientists in Nigeria
          </p>
        </div>

        {/* Impact Stats */}
        <div className="mx-auto mt-16 max-w-5xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {impactStats.map((stat) => (
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

        {/* Sponsorship Tiers */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Sponsorship Packages</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Choose the partnership tier that best fits your organization
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sponsorshipTiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  {tier.name}
                </CardTitle>
                <p className="text-2xl font-bold">{tier.price}</p>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <ul className="mb-8 space-y-3 text-sm">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button className="w-full" asChild>
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Sponsors */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Partners</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Join these organizations in supporting data science innovation
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          {currentSponsors.map((category) => (
            <div key={category.category} className="mb-16">
              <h3 className="mb-8 text-xl font-semibold">{category.category}</h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {category.companies.map((company) => (
                  <Link
                    key={company.name}
                    href={company.website}
                    className="group relative flex items-center gap-6 rounded-lg border p-6 transition-colors hover:bg-muted"
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{company.name}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        View partner details
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to make an impact?</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Join us in shaping the future of data science in Nigeria
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Building2 className="mr-2 h-5 w-5" />
                Become a Sponsor
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}