"use client";

import Image from "next/image";
import Link from "next/link";
import { AlarmClock, BrainCircuit, CalendarCheck2, Gauge, Mic, ShieldAlert } from "lucide-react";
import PageShell from "@/components/PageShell";
import ThreeAIOrb from "@/components/ThreeAIOrb";
import FeatureCard from "@/components/FeatureCard";

const features = [
  { icon: Gauge, title: "Deadline Risk Prediction", text: "Every task gets a live failure probability based on time left, effort, priority, and progress.", accent: "cyanfire" },
  { icon: ShieldAlert, title: "AI Rescue Mode", text: "Critical commitments trigger emergency schedules, skip lists, and final submission checklists.", accent: "danger" },
  { icon: BrainCircuit, title: "Smart Task Planner", text: "Type a messy goal and Gemini or the local fallback turns it into day-wise execution blocks.", accent: "signal" },
  { icon: Mic, title: "Voice Copilot UI", text: "A command surface for questions like what should I do first and which deadline is dangerous.", accent: "aurora" }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative min-h-screen overflow-hidden px-6 pt-32">
        <div className="absolute inset-x-0 top-24 mx-auto h-[560px] max-w-6xl opacity-50">
          <Image src="/images/guardian-command-center.png" alt="Futuristic AI deadline command center" fill priority className="object-cover object-center opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/10 via-void/45 to-void" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pt-10">
            <p className="mb-5 inline-flex rounded-md border border-cyanfire/25 bg-cyanfire/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyanfire">Don't just get reminded. Get rescued.</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-balance md:text-7xl">Your AI Deadline Guardian</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">Predict missed deadlines before they happen, generate emergency rescue plans, and stay in control when time is running out.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/dashboard" className="rounded-md bg-white px-6 py-3 font-semibold text-void transition hover:bg-cyanfire">Start Rescue Mode</Link>
              <Link href="#demo" className="rounded-md border border-white/15 bg-white/8 px-6 py-3 font-semibold text-white transition hover:border-cyanfire/40">View Demo</Link>
            </div>
          </div>
          <div className="relative h-[460px] rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm">
            <ThreeAIOrb />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">Why reminders fail</p>
            <h2 className="mt-4 text-4xl font-semibold text-balance">Traditional apps alert you after the rescue window is already shrinking.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["No failure prediction", "No scope compression", "No action plan"].map((item, index) => (
              <div key={item} className="glass rounded-lg p-6">
                <span className="text-4xl font-semibold text-danger/80">0{index + 1}</span>
                <p className="mt-8 text-lg font-medium">{item}</p>
                <p className="mt-3 text-sm leading-6 text-white/55">The user is left to panic, reprioritize, and recover alone.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanfire">AI Deadline Rescue</p>
              <h2 className="mt-4 text-4xl font-semibold">A mission-control center for commitments.</h2>
            </div>
            <Link href="/planner" className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold hover:border-cyanfire/40">Open planner</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </div>
      </section>

      <section id="demo" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass rounded-lg p-4">
            <Image src="/images/guardian-command-center.png" alt="Deadline Guardian AI product preview" width={1200} height={760} className="h-full min-h-[360px] rounded-md object-cover" />
          </div>
          <div className="glass rounded-lg p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aurora">Interactive demo preview</p>
            <h2 className="mt-4 text-4xl font-semibold">Risk scores, rescue plans, voice prompts, and analytics are live in the app.</h2>
            <div className="mt-8 space-y-4 text-sm text-white/64">
              <p><AlarmClock className="mr-2 inline" size={16} /> Critical deadlines glow red and generate immediate plans.</p>
              <p><CalendarCheck2 className="mr-2 inline" size={16} /> Timelines show which commitments are losing buffer fastest.</p>
              <p><BrainCircuit className="mr-2 inline" size={16} /> Gemini integration has a mock fallback, so demos never break.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-white p-8 text-center text-void md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-danger">Final CTA</p>
          <h2 className="mt-4 text-4xl font-semibold text-balance md:text-5xl">Stop managing tasks. Start rescuing outcomes.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-void/65">Built for students, founders, freelancers, and anyone whose important commitments deserve more than a notification.</p>
          <Link href="/dashboard" className="mt-8 inline-flex rounded-md bg-void px-7 py-3 font-semibold text-white hover:bg-danger">Launch Command Center</Link>
        </div>
      </section>
    </PageShell>
  );
}


