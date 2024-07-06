import { Follower } from '@/models/Follower'
import { User } from '@/models/User'
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'

export async function Followers({ user }: { user: User }) {
  const response = await fetch(user.followers_url)
  const followers = (await response.json()) as Follower[]

  return (
    <section className="max-h-[370px] flex-1 rounded-lg border border-slate-200/20 px-2 py-6">
      <h2 className="px-2">Followers ({followers.length})</h2>

      <ul className="mt-4 flex h-72 animate-slideUpAndFadeIn flex-col gap-y-2 overflow-y-auto px-2">
        {followers.map((follower) => (
          <Link target="_blank" href={follower.html_url} key={follower.id}>
            <li className="rounded-sm border border-slate-400 p-4 transition-colors hover:bg-slate-500/30">
              <h3 className="flex items-center gap-2">
                {follower.avatar_url ? (
                  <Image
                    src={follower.avatar_url}
                    alt={follower.login}
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                  />
                ) : (
                  <FiGithub />
                )}
                {follower.login}
              </h3>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
