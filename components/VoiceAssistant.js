"use client";

import { useState } from "react";
import { Mic, RadioTower } from "lucide-react";

const commands = ["What should I do first?", "Rescue my assignment", "Plan my week", "Which deadline is most dangerous?"];

export default function VoiceAssistant() {
  const [listening, setListening] = useState(false);
  return (
    <section className="glass rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyanfire">Voice Copilot</p>
          <h2 className="mt-2 text-xl font-semibold">Ask the guardian what to do next</h2>
        </div>
        <button
          onClick={() => setListening((value) => !value)}
          className={`grid h-14 w-14 place-items-center rounded-full transition ${listening ? "bg-danger text-white shadow-danger" : "bg-white text-void hover:bg-cyanfire"}`}
          aria-label="Toggle voice assistant"
        >
          <Mic />
        </button>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {commands.map((command) => (
          <button key={command} className="rounded-md border border-white/10 bg-white/6 px-4 py-3 text-left text-sm text-white/70 hover:border-cyanfire/40 hover:text-white">
            "{command}"
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-cyanfire/20 bg-cyanfire/8 p-4">
        <p className="flex items-center gap-2 text-sm font-medium text-cyan-100"><RadioTower size={16} /> {listening ? "Listening for rescue command..." : "Suggested response"}</p>
        <p className="mt-2 text-sm leading-6 text-white/62">Your most dangerous deadline is Submit DAA Assignment. Start the proof skeleton first, then fill examples. Avoid re-reading the entire module.</p>
      </div>
    </section>
  );
}


