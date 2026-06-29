"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, BarChart3, Brain, Gauge, Home, ShieldAlert } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/rescue", label: "Rescue", icon: ShieldAlert },
  { href: "/planner", label: "Planner", icon: Brain },
  { href: "/analytics", label: "Analytics", icon: BarChart3 }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-void/70 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyanfire/15 text-cyanfire ring-1 ring-cyanfire/30">
            <Activity size={20} />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide">Deadline Guardian</span>
            <span className="block text-[11px] text-white/50">AI rescue command</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${active ? "bg-white/10 text-white" : "text-white/62 hover:bg-white/7 hover:text-white"}`}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </div>
        <Link href="/dashboard" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-void transition hover:bg-cyanfire">
          Start Rescue Mode
        </Link>
      </nav>
    </header>
  );
}


