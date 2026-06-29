"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generateGeminiPlan } from "@/lib/ai";
import ThreeAIOrb from "@/components/ThreeAIOrb";
import { X } from "lucide-react";

export default function RescueModeModal({ task, onClose }) {
  const [plan, setPlan] = useState("");
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (!task) return;
    setPlan("");
    setTyping("");
    generateGeminiPlan(`${task.title}, deadline ${task.deadline}, ${task.progress}% done, ${task.estimatedEffort} hours effort`, "rescue").then(setPlan);
  }, [task]);

  useEffect(() => {
    if (!plan) return;
    let index = 0;
    const timer = setInterval(() => {
      index += 4;
      setTyping(plan.slice(0, index));
      if (index >= plan.length) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [plan]);

  return (
    <AnimatePresence>
      {task && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] overflow-y-auto bg-void/88 p-4 backdrop-blur-xl"
        >
          <div className="mx-auto flex min-h-screen max-w-6xl items-center py-10">
            <motion.section
              initial={{ scale: 0.96, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
              className="scanline glass w-full rounded-lg border-danger/35 p-5 shadow-danger md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ember">Rescue Mode Active</p>
                  <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{task.title}</h2>
                  <p className="mt-3 max-w-2xl text-white/60">Deadline Guardian is compressing scope, sequencing the work, and preserving the final submission buffer.</p>
                </div>
                <button onClick={onClose} className="rounded-md p-2 text-white/60 hover:bg-white/10 hover:text-white" aria-label="Close rescue mode">
                  <X />
                </button>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-lg border border-danger/25 bg-danger/8">
                  <ThreeAIOrb rescue compact />
                </div>
                <div className="rounded-lg border border-white/10 bg-black/25 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-danger/18 px-3 py-1 text-xs font-semibold text-red-200">Generated emergency plan</span>
                    <span className="text-xs text-white/45">{plan ? "AI ready" : "Generating..."}</span>
                  </div>
                  <pre className="min-h-[330px] whitespace-pre-wrap font-mono text-sm leading-7 text-white/78">{typing || "Analyzing deadline failure vectors..."}</pre>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


