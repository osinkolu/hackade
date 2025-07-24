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
    category: "Diamond Sponsors",
    companies: [
      {
        name: "Hawk Gaming Group",
        logo: "/attached_assets/hawkgg logo_1753360366481.png",
        website: "#",
        description: "Hawk Gaming Group stands as a leader in gaming and esports, delivering transformative initiatives and innovative solutions for public and private sectors. Leveraging extensive international partnerships, we drive global knowledge exchange and redefine the boundaries of gaming and esports excellence."
      }
    ]
  },
  {
    category: "Silver Sponsors",
    companies: [
      {
        name: "LyngualLabs",
        logo: "/attached_assets/lynguallabsb_1753360576349.png",
        website: "https://lynguallabs.org",
        description: "LyngualLabs is an AI research-focused lab under the lynguaTech Innovative Foundation. Our mission is to push the boundaries of speech technology, natural language processing (NLP), and artificial intelligence (AI) to create inclusive and culturally relevant solutions for multilingual and multicultural communities."
      }
    ]
  }
]

const impactStats = [
  {
    name: "Participants Reached",
    value: "250+",
    icon: Users
  },
  {
    name: "Hackathons Completed",
    value: "02",
    icon: Target
  },
  {
    name: "Total Prize Awarded",
    value: "₦225k",
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
              <h3 className="mb-8 text-xl font-semibold text-center">{category.category}</h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
                {category.companies.map((company) => (
                  <div
                    key={company.name}
                    className="group relative rounded-lg border p-8 transition-colors hover:bg-muted"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-lg flex-shrink-0">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-2">{company.name}</h4>
                        <p className="text-muted-foreground mb-4">
                          {company.description}
                        </p>
                        {company.website !== "#" && (
                          <Link
                            href={company.website}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                          >
                            Visit Website
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
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