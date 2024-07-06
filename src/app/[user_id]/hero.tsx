import Image from "next/image"
import { User } from '@/models/User'
import Link from "next/link"

export const Hero = ({ user }: { user: User }) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-4 w-full border border-slate-200/20 rounded-lg py-6 px-4">
      <Image 
        src={user.avatar_url}
        alt={`${user.name} profile picture`}
        width={220}
        height={220}
        className="rounded-full shadow-lg shadow-sky-700 border-2 border-sky-700"
      />
      
      <div id="texts" className="animate-slideUpAndFadeIn w-full">
        <h1 className="text-2xl md:text-5xl mb-1">{user.name}</h1>
        {user.bio && <h2 className="text-xs md:text-sm pl-1 text-slate-200">{user.bio}</h2>}
        {user.company && <p className="text-xs pl-1 mt-3 text-slate-300">Company: {user.company}</p>}
        
        <div className="mt-4 w-full">
          <Link 
            href={user.html_url} 
            target="_blank"
            className="px-4 text-sm py-1 rounded-sm bg-sky-600"
          >View profile</Link>
        </div>
      </div>
    </section>
  )
}