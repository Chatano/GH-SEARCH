import Image from 'next/image'
import { User } from '@/models/User'
import Link from 'next/link'

export const Hero = ({ user }: { user: User }) => {
  return (
    <section className="flex w-full flex-col items-center gap-4 rounded-lg border border-slate-200/20 px-4 py-6 md:flex-row">
      <Image
        src={user.avatar_url}
        alt={`${user.name} profile picture`}
        width={220}
        height={220}
        className="rounded-full border-2 border-sky-700 shadow-lg shadow-sky-700"
      />

      <div id="texts" className="w-full animate-slideUpAndFadeIn">
        <h1 className="mb-1 text-2xl md:text-5xl">{user.name}</h1>
        {user.bio && <h2 className="pl-1 text-xs text-slate-200 md:text-sm">{user.bio}</h2>}
        {user.company && (
          <p className="mt-3 pl-1 text-xs text-slate-300">Company: {user.company}</p>
        )}

        <div className="mt-4 w-full">
          <Link
            href={user.html_url}
            target="_blank"
            className="rounded-sm bg-sky-600 px-4 py-1 text-sm"
          >
            View profile
          </Link>
        </div>
      </div>
    </section>
  )
}
