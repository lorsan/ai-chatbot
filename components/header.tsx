import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { clearChats } from '@/app/actions'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'
import { SidebarList } from '@/components/sidebar-list'
import {
  IconGitHub,
  IconMoon,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { SidebarFooter } from '@/components/sidebar-footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ClearHistory } from '@/components/clear-history'
import { UserMenu } from '@/components/user-menu'
import { LoginButton } from '@/components/login-button'

export async function Header() {
  const session = await auth()
  console.log('session')
  console.log(session)
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              SIBILLA
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Scopri la storia con noi.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              <span className="text-sm font-medium"> Torna alla Home </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>

            <button
              className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    </header>

    //</header>
    // <header className="flex h-20 bg-white w-full items-center justify-between z-50">
    //   <div className="flex w-full items-center">
    //     <div className="flex items-center">
    //       {session?.user ? (
    //         <UserMenu user={session.user} />
    //       ) : (
    //         <Button variant="link" asChild className="-ml-2">
    //           <Link href="/sign-in?callbackUrl=/"></Link>
    //         </Button>
    //       )}
    //     </div>
    //     <Button variant="link" asChild className="-ml-2">
    //       <Link href="mailto:hi@mpbot.ai">Write us</Link>
    //     </Button>
    //   </div>
    //   {/*
    //   <div className="flex items-center justify-end space-x-2">
    //     <a
    //       target="_blank"
    //       href="https://github.com/vercel/nextjs-ai-chatbot/"
    //       rel="noopener noreferrer"
    //       className={cn(buttonVariants({ variant: 'outline' }))}
    //     >
    //       <IconGitHub />
    //       <span className="ml-2 hidden md:flex">GitHub</span>
    //     </a>
    //   </div>
    //   */}
    // </header>
  )
}
