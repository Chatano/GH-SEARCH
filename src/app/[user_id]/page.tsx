import { Logo } from "@/components/Logo"
import { User } from "@/models/User"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FiChevronLeft } from "react-icons/fi"
import { Hero } from "./hero"
import { Followers } from "./followers"
import { Repositories } from "./repositories"

export default async function UserPage({ params: { user_id }}: { params: { user_id?: string }}) {
  const response = await fetch(`https://api.github.com/users/${user_id}`)
  
  if (response?.status === 404) return notFound()

  const user = await response.json() as User

  return (
    <div className="h-screen flex flex-col items-center px-3 md:px-8">
      <header className="flex w-full py-6">
        <Link href="/" className="flex items-center gap-2 group transition-all hover:gap-4">
          <span className="transition-colors group-hover:text-sky-500">
            <FiChevronLeft size={22} />
          </span>
          <Logo size={60} />
        </Link>
      </header>

      <main className="relative w-full flex-1 flex flex-col gap-4 pb-6">
        <Hero user={user} />

        <div className="flex flex-col lg:flex-row gap-4 flex-1">
          <Repositories user={user} />
          <Followers user={user} />
        </div>
      </main>
    </div>
  )
}