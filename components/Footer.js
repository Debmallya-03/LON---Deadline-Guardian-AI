import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/54">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>Deadline Guardian AI. Don't just get reminded. Get rescued.</p>
        <div className="flex gap-4">
          <Link href="/planner" className="hover:text-white">AI Planner</Link>
          <Link href="/analytics" className="hover:text-white">Insights</Link>
          <Link href="/rescue" className="hover:text-white">Rescue Mode</Link>
        </div>
      </div>
    </footer>
  );
}


