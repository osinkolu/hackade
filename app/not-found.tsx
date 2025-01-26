import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md text-center px-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-75 blur rounded-full"></div>
            <div className="relative bg-background p-4 rounded-full">
              <AlertCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
        <h1 className="mt-8 text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been removed or the link might be broken.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}