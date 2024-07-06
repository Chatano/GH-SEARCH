import { Logo } from '@/components/Logo'
import { redirect } from 'next/navigation'
import { IoMdSend } from 'react-icons/io'

export default function Home() {
  const handleSearch = async (formData: FormData) => {
    'use server'
    const searchText = formData.get('github_username')
    redirect(`/${searchText}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-[4vh]">
      <Logo />

      <form action={handleSearch} method="POST" className="mt-4 flex flex-col items-start">
        <label htmlFor="github_username" className="mb-px text-sm">
          Search user name
        </label>

        <div className="flex items-center gap-2">
          <input
            id="github_username"
            name="github_username"
            type="text"
            placeholder="Ex: Chatano"
            className="h-10 w-80 rounded-md border border-slate-50 bg-transparent px-2 text-slate-50"
          />
          <button className="transition-colors hover:text-sky-500" type="submit">
            <IoMdSend size={24} />
          </button>
        </div>
      </form>
    </main>
  )
}
