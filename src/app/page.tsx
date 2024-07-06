import { Logo } from "@/components/Logo";
import { redirect } from "next/navigation";
import { IoMdSend } from 'react-icons/io'

export default function Home() {
  const handleSearch = async (formData: FormData) => {
    'use server';
    const searchText = formData.get('github_username');
    redirect(`/${searchText}`)
  }

  return (
    <main className="min-h-screen pb-[4vh] flex flex-col items-center justify-center">
      <Logo />

      <form action={handleSearch} method="POST" className="flex flex-col items-start mt-4">
        <label 
          htmlFor="github_username"
          className="text-sm mb-px"
        >Search user name</label>

        <div className="flex items-center gap-2">
          <input
            id="github_username"
            name="github_username"
            type="text"
            placeholder="Ex: Chatano"
            className="border rounded-md w-80 h-10 text-slate-50 px-2 border-slate-50 bg-transparent"
          />
          <button className="transition-colors hover:text-sky-500" type="submit">
            <IoMdSend size={24} />
          </button>
        </div>
      </form>
    </main>
  );
}
