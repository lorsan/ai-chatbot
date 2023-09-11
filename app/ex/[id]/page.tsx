'use client';

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { usePathname } from "next/navigation";


export const runtime = 'nodejs'

export default function ExPage() {
  const id = nanoid()

  const pathname = usePathname();
  console.log("AIUTO!!!")
  console.log(pathname);
  const name = pathname.substring(pathname.lastIndexOf('/') + 1)

  return <Chat id={id} name={name}/>
}
