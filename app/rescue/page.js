"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import ThreeAIOrb from "@/components/ThreeAIOrb";
import TaskCard from "@/components/TaskCard";
import RescueModeModal from "@/components/RescueModeModal";
import { useTasks } from "@/hooks/useTasks";

export default function RescuePage() {
  const { tasks, updateProgress } = useTasks();
  const [rescueTask, setRescueTask] = useState(tasks[0]);
  const criticalTasks = tasks.filter((task) => task.status === "Critical" || task.status === "Warning");

  return (
    <PageShell>
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-lg border-danger/25 p-6 shadow-danger">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">Rescue Mode</p>
            <h1 className="mt-4 text-5xl font-semibold">Emergency execution room</h1>
            <p className="mt-5 text-white/62">Select a risky task and generate a compressed action plan with time blocks, skip rules, and final checklist.</p>
            <div className="mt-8 h-[380px] rounded-lg border border-danger/20 bg-danger/8"><ThreeAIOrb rescue /></div>
            <button onClick={() => setRescueTask(tasks[0])} className="mt-6 w-full rounded-md bg-danger px-5 py-3 font-semibold hover:bg-ember">Activate highest-risk rescue</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {criticalTasks.map((task) => <TaskCard key={task.id} task={task} onRescue={setRescueTask} onProgress={updateProgress} />)}
          </div>
        </div>
      </section>
      <RescueModeModal task={rescueTask} onClose={() => setRescueTask(null)} />
    </PageShell>
  );
}


