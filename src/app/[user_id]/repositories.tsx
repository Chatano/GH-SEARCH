import { Repository } from '@/models/Repository'
import { User } from '@/models/User'
import { CACHE_REVALIDATE_1H } from '@/static/cache'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'

export async function Repositories({ user }: { user: User }) {
  const response = await fetch(user.repos_url, { next: { revalidate: CACHE_REVALIDATE_1H }})
  const repositories = (await response.json()) as Repository[]

  return (
    <section className="h-[370px] flex-1 rounded-lg border border-slate-200/20 px-2 py-6">
      <h2 className="px-2">Repositories ({repositories.length})</h2>

      <ul className="mt-4 flex h-72 animate-slideUpAndFadeIn flex-col gap-y-2 overflow-y-auto px-2">
        {repositories.map((repo) => (
          <Link target="_blank" href={repo.svn_url} key={repo.id}>
            <li className="rounded-sm border border-slate-400 p-4 transition-colors hover:bg-slate-500/30">
              <h3 className="flex items-center gap-2">
                <FiGithub /> {repo.name}
              </h3>
              {repo.description && (
                <p className="line-clamp-1 text-xs text-slate-400">{repo.description}</p>
              )}
              {repo.language && (
                <span className="rounded-full bg-sky-700 px-2 py-[2px] text-[9px]">
                  {repo.language}
                </span>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
