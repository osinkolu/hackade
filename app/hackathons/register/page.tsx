"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/hooks/use-toast'
import { Code2, Rocket, Users2 } from 'lucide-react'

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Registration successful!",
      description: "You're all set for the hackathon. Check your email for confirmation.",
    })

    setIsSubmitting(false)
    router.push('/hackathons')
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Register for the Hackathon</h1>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Join us for an exciting data science challenge
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Benefits */}
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Code2 className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Learn & Grow</h3>
                      <p className="text-sm text-muted-foreground">Access to mentorship and resources</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Users2 className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Network</h3>
                      <p className="text-sm text-muted-foreground">Connect with fellow data scientists</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Rocket className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-medium">Win Prizes</h3>
                      <p className="text-sm text-muted-foreground">Compete for exciting rewards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>
                  Fill out the details below to secure your spot in the upcoming hackathon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience level</Label>
                    <Select name="experience" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="background">Background</Label>
                    <Textarea
                      id="background"
                      name="background"
                      placeholder="Brief description of your data science background and interests..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio/GitHub (optional)</Label>
                    <Input id="portfolio" name="portfolio" type="url" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" name="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and code of conduct
                    </Label>
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register for Hackathon"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}