import { Follower } from "@/models/Follower"
import { User } from "@/models/User"
import Image from "next/image"
import Link from "next/link"
import { FiGithub } from "react-icons/fi"

export async function Followers({ user }: { user: User }) {
  const response = await fetch(user.followers_url)
  const followers = await response.json() as Follower[]

  return(
    <section className="flex-1 border border-slate-200/20 rounded-lg py-6 max-h-[370px] px-2 ">
      <h2 className="px-2">Followers ({followers.length})</h2>

      <ul className="mt-4 flex flex-col gap-y-2 overflow-y-auto h-72 px-2 animate-slideUpAndFadeIn">
        {followers.map(follower => (
          <Link target="_blank" href={follower.html_url} key={follower.id}>
            <li 
              className="
                border border-slate-400 rounded-sm p-4 
                transition-colors hover:bg-slate-500/30"
            >
              <h3 className="flex items-center gap-2">
                {follower.avatar_url ? (
                  <Image 
                    src={follower.avatar_url}
                    alt={follower.login}
                    width={40}
                    height={40}
                    className="object-contain rounded-full"
                  />
                ) : <FiGithub /> }
                {follower.login}
              </h3>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}