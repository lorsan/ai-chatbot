import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { redirect, usePathname } from "next/navigation";
import { auth } from '@/auth'
import { Metadata } from 'next';


export const runtime = 'nodejs'
export const preferredRegion = 'home'


export interface ChatPageProps {
  params: {
    name: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const session = await auth()

  if (!session?.user) {
    return {}
  }

  return {
    title : params.name
  }
}

export default async function ExPage({ params }: ChatPageProps) {
  const id = nanoid()

  // Mappi i titoli dei bot

  const session = await auth()

  if (!session?.user) {
    redirect(`/sign-in?next=/ex/${params.name}`)
  }

  return <Chat id={id} name={params.name}/>
}

