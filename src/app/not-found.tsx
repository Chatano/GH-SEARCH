import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-start pt-[10vh]">
      <Logo />
      <h1 className="text-xl">User not found</h1>
      <Link href="/" className="mt-20 bg-sky-700 w-40 rounded-mg hover:bg-sky-800 transition-colors text-center py-2 text-slate-50">Go back</Link>
    </main>
  )
}