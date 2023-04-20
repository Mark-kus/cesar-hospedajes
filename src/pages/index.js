import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Landing
      <Link href='http://localhost:3000/hospedajes'>Hospedajes</Link>
    </main>
  )
}