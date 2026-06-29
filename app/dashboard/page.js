"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, Clock3, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";
import { useTasks } from "@/hooks/useTasks";
import ProductivityAnalytics from "@/components/ProductivityAnalytics";
import TaskCard from "@/components/TaskCard";
import CalendarTimeline from "@/components/CalendarTimeline";
import VoiceAssistant from "@/components/VoiceAssistant";
import RescueModeModal from "@/components/RescueModeModal";

export default function DashboardPage() {
  const { tasks, updateProgress } = useTasks();
  const [rescueTask, setRescueTask] = useState(null);
  const critical = tasks.filter((task) => task.status === "Critical");
  const topTask = tasks[0];

  return (
    <PageShell footer={false}>
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanfire">Live Command Center</p>
              <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Mission status: {critical.length ? "rescue needed" : "stable"}</h1>
              <p className="mt-4 max-w-3xl text-white/62">Deadline Guardian ranks every commitment by failure risk and turns the most dangerous task into an execution plan.</p>
            </div>
            <div className="glass rounded-lg p-5">
              <div className="flex items-center gap-3 text-danger"><AlertTriangle size={20} /><span className="text-sm font-semibold">Most dangerous deadline</span></div>
              <h2 className="mt-4 text-2xl font-semibold">{topTask.title}</h2>
              <p className="mt-2 text-sm text-white/55">{topTask.risk}% risk · {topTask.status}</p>
              <button onClick={() => setRescueTask(topTask)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-danger px-4 py-3 font-semibold text-white hover:bg-ember"><Sparkles size={17} /> Rescue now</button>
            </div>
          </div>

          <ProductivityAnalytics tasks={tasks} />

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {tasks.map((task) => <TaskCard key={task.id} task={task} onRescue={setRescueTask} onProgress={updateProgress} />)}
            </div>
            <div className="space-y-6">
              <CalendarTimeline tasks={tasks} />
              <section className="glass rounded-lg p-6">
                <h2 className="text-lg font-semibold">AI recommendations</h2>
                <div className="mt-5 space-y-3 text-sm text-white/66">
                  <p><Clock3 className="mr-2 inline text-ember" size={16} /> Start {topTask.title} before your next context switch.</p>
                  <p><CheckCircle2 className="mr-2 inline text-aurora" size={16} /> Break the critical task into 3 smaller sessions.</p>
                  <p><AlertTriangle className="mr-2 inline text-danger" size={16} /> Do the hardest part first; skip polish until submission is safe.</p>
                </div>
              </section>
              <VoiceAssistant />
            </div>
          </div>
        </div>
      </section>
      <RescueModeModal task={rescueTask} onClose={() => setRescueTask(null)} />
    </PageShell>
  );
}


