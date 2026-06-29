"use client";

import PageShell from "@/components/PageShell";
import ProductivityAnalytics from "@/components/ProductivityAnalytics";
import CalendarTimeline from "@/components/CalendarTimeline";
import { useTasks } from "@/hooks/useTasks";
import { riskTone } from "@/lib/risk";

export default function AnalyticsPage() {
  const { tasks } = useTasks();
  const categories = [...new Set(tasks.map((task) => task.category))];

  return (
    <PageShell>
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aurora">Productivity Insights</p>
          <h1 className="mt-4 text-5xl font-semibold">See where deadlines are leaking time.</h1>
          <p className="mt-4 max-w-3xl text-white/62">Analytics are tuned for live demos: category pressure, focus hours, task completion, and risk distribution update from the same LocalStorage-backed task model.</p>
          <div className="mt-8"><ProductivityAnalytics tasks={tasks} /></div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="glass rounded-lg p-6">
              <h2 className="text-lg font-semibold">Category pressure</h2>
              <div className="mt-6 space-y-5">
                {categories.map((category) => {
                  const scoped = tasks.filter((task) => task.category === category);
                  const avg = Math.round(scoped.reduce((sum, task) => sum + task.risk, 0) / scoped.length);
                  const tone = riskTone(avg);
                  return (
                    <div key={category}>
                      <div className="mb-2 flex justify-between text-sm"><span>{category}</span><span className={tone.text}>{avg}%</span></div>
                      <div className="h-2 rounded-full bg-white/10"><div className={`h-full rounded-full ${tone.bg}`} style={{ width: `${avg}%` }} /></div>
                    </div>
                  );
                })}
              </div>
            </section>
            <CalendarTimeline tasks={tasks} />
          </div>
          <section className="mt-6 grid gap-4 md:grid-cols-3">
            {["Start critical work before 8 PM", "Only 2 deep-work slots remain today", "Move low-priority admin after submissions"].map((insight) => (
              <div key={insight} className="glass rounded-lg p-5 text-sm text-white/70">{insight}</div>
            ))}
          </section>
        </div>
      </section>
    </PageShell>
  );
}


