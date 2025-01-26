"use client"
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, XCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
    
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md text-center px-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-destructive to-destructive/50 opacity-75 blur"></div>
            <div className="relative bg-background p-4 rounded-full">
              <XCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>
        </div>
        <h1 className="mt-8 text-4xl font-bold tracking-tight">Something went wrong</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => reset()}
          >
            Try again
          </Button>
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