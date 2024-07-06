import { Repository } from "@/models/Repository"
import { User } from "@/models/User"
import Link from "next/link"
import { FiGithub } from "react-icons/fi"

export async function Repositories({ user }: { user: User }) {
  const response = await fetch(user.repos_url)
  const repositories = await response.json() as Repository[]

  return(
    <section className="flex-1 border border-slate-200/20 rounded-lg py-6 h-[370px] px-2 ">
      <h2 className="px-2">Repositories ({repositories.length})</h2>

      <ul className="mt-4 flex flex-col gap-y-2 overflow-y-auto h-72 px-2 animate-slideUpAndFadeIn">
        {repositories.map(repo => (
          <Link target="_blank" href={repo.svn_url} key={repo.id}>
            <li 
              className="
                border border-slate-400 rounded-sm p-4 
                transition-colors hover:bg-slate-500/30"
            >
              <h3 className="flex items-center gap-2"><FiGithub /> {repo.name}</h3>
              {repo.description && <p className="text-xs text-slate-400 line-clamp-1">{repo.description}</p>}
              {repo.language && <span className=" px-2 py-[2px] rounded-full bg-sky-700 text-[9px]">{repo.language}</span>}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}