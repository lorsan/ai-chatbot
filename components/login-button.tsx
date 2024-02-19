'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconSpinner, IconGoogle } from '@/components/ui/icons'

import { usePathname } from 'next/navigation'

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  showGoogleIcon?: boolean
  text?: string
}

export function LoginButton({
  text = 'Login with Google',
  showGithubIcon = false,
  showGoogleIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const pathname = usePathname()
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        signIn('google', { callbackUrl: pathname })
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGithubIcon ? (
        <IconGitHub className="mr-2" />
      ) : showGoogleIcon ? (
        <IconGoogle className="mr-2" />
      ) :null
      }
      {text}
    </Button>
  )
}
