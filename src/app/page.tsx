import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-heading text-darkTeal mb-6">Quiz demo</h1>
        <Link href="/quiz" className="inline-block bg-[#e3f6fd] px-6 py-3 rounded-xl shadow hover:bg-[#d7f0fb]">
          Open Quiz
        </Link>
      </div>
    </main>
  );
}
