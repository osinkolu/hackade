import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Youtube, BookOpen, FileText, Download, ExternalLink, ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'

const webinars = [
  {
    title: "Introduction to Time Series Analysis",
    presenter: "Dr. Oluwaseun Adebayo",
    date: "March 15, 2024",
    duration: "1 hour 20 mins",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    videoUrl: "#"
  },
  {
    title: "Deep Learning for Computer Vision",
    presenter: "Chioma Okafor, PhD",
    date: "March 1, 2024",
    duration: "1 hour 45 mins",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    videoUrl: "#"
  },
  {
    title: "Natural Language Processing Fundamentals",
    presenter: "Ibrahim Hassan",
    date: "February 15, 2024",
    duration: "1 hour 30 mins",
    thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    videoUrl: "#"
  }
]

const learningPaths = [
  {
    title: "Beginner's Path",
    description: "Start your data science journey with fundamental concepts and tools",
    modules: [
      "Python Programming Basics",
      "Data Analysis with Pandas",
      "Statistical Foundations",
      "Introduction to Machine Learning"
    ]
  },
  {
    title: "Intermediate Path",
    description: "Advance your skills with more complex techniques and real-world applications",
    modules: [
      "Advanced Machine Learning",
      "Deep Learning Fundamentals",
      "Time Series Analysis",
      "Natural Language Processing"
    ]
  },
  {
    title: "Advanced Path",
    description: "Master advanced concepts and specialized techniques",
    modules: [
      "Advanced Deep Learning",
      "Computer Vision",
      "Reinforcement Learning",
      "MLOps & Deployment"
    ]
  }
]

const practiceDatasets = [
  {
    title: "Nigerian Housing Prices",
    description: "A comprehensive dataset of housing prices across major Nigerian cities",
    size: "2.5GB",
    records: "50,000+",
    downloadUrl: "#"
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Learning Resources</h1>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Everything you need to excel in data science
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="webinars" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="webinars">Webinars</TabsTrigger>
              <TabsTrigger value="learning">Learning Paths</TabsTrigger>
              <TabsTrigger value="practice">Practice</TabsTrigger>
            </TabsList>

            {/* Webinars Tab */}
            <TabsContent value="webinars">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {webinars.map((webinar) => (
                  <Card key={webinar.title} className="flex flex-col">
                    <div className="relative h-48">
                      <img
                        src={webinar.thumbnail}
                        alt={webinar.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Youtube className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{webinar.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div>
                        <p className="text-sm font-medium">{webinar.presenter}</p>
                        <p className="text-sm text-muted-foreground">{webinar.date} • {webinar.duration}</p>
                      </div>
                      <Button asChild>
                        <Link href={webinar.videoUrl}>
                          Watch Webinar
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Learning Paths Tab */}
            <TabsContent value="learning">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {learningPaths.map((path) => (
                  <Card key={path.title} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        {path.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-muted-foreground">{path.description}</p>
                      <div className="space-y-2">
                        {path.modules.map((module) => (
                          <div key={module} className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <span className="text-sm">{module}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline">Start Learning</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Practice Datasets Tab */}
            <TabsContent value="practice">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {practiceDatasets.map((dataset) => (
                  <Card key={dataset.title} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{dataset.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-muted-foreground">{dataset.description}</p>
                      <Button variant="outline" asChild>
                        <Link href={dataset.downloadUrl}>
                          Learn More
                          <ExternalLinkIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to apply your knowledge?</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Put your skills to the test in our next hackathon
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