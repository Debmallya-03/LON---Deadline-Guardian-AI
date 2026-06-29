"use client";

import { useState } from "react";
import { Brain, WandSparkles } from "lucide-react";
import { generateGeminiPlan } from "@/lib/ai";

export default function AIPlanGenerator() {
  const [input, setInput] = useState("Prepare for interview in 3 days");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const output = await generateGeminiPlan(input, "planner");
    setPlan(output);
    setLoading(false);
  }

  return (
    <section className="glass rounded-lg p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-signal/15 text-signal ring-1 ring-signal/25"><Brain size={20} /></span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">AI Task Planner</p>
          <h1 className="text-2xl font-semibold">Turn panic into a sequenced plan</h1>
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto]">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="min-h-32 rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-white outline-none ring-cyanfire/25 focus:ring-4"
        />
        <button onClick={generate} className="flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-void transition hover:bg-cyanfire">
          <WandSparkles size={18} />
          {loading ? "Planning..." : "Generate Plan"}
        </button>
      </div>
      <pre className="mt-6 min-h-72 whitespace-pre-wrap rounded-lg border border-white/10 bg-black/25 p-5 font-mono text-sm leading-7 text-white/72">
        {plan || "Your generated day-wise plan, priority order, focus sessions, and completion checklist will appear here."}
      </pre>
    </section>
  );
}


