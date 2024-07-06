import { Logo } from '@/components/Logo'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-start pt-[10vh]">
      <Logo />
      <h1 className="text-xl">User not found</h1>
      <Link
        href="/"
        className="mt-20 w-40 rounded-md bg-sky-700 py-2 text-center text-slate-50 transition-colors hover:bg-sky-800"
      >
        Go back
      </Link>
    </main>
  )
}
