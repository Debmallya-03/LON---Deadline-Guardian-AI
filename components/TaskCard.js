"use client";

import { CalendarClock, Flame, MoreHorizontal } from "lucide-react";
import { formatTimeLeft, riskTone } from "@/lib/risk";
import RiskMeter from "@/components/RiskMeter";

export default function TaskCard({ task, onRescue, onProgress }) {
  const tone = riskTone(task.risk);
  return (
    <article className={`glass rounded-lg border ${tone.border} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${tone.text} bg-white/7 ring-1 ${tone.ring}`}>{task.status}</span>
            <span className="rounded-md bg-white/7 px-2 py-1 text-[11px] text-white/55">{task.category}</span>
          </div>
          <h3 className="text-base font-semibold">{task.title}</h3>
          <p className="mt-1 flex items-center gap-2 text-xs text-white/50">
            <CalendarClock size={14} />
            {formatTimeLeft(task.deadline)} Â· {task.estimatedEffort}h effort Â· {task.priority}
          </p>
        </div>
        <button className="rounded-md p-2 text-white/50 hover:bg-white/8 hover:text-white" aria-label="Task options">
          <MoreHorizontal size={18} />
        </button>
      </div>
      <div className="mt-5 space-y-4">
        <RiskMeter score={task.risk} />
        <div>
          <div className="mb-2 flex justify-between text-xs text-white/55">
            <span>Progress</span>
            <span>{task.progress}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={task.progress}
            onChange={(event) => onProgress?.(task.id, event.target.value)}
            className="w-full accent-cyanfire"
          />
        </div>
        <button
          onClick={() => onRescue?.(task)}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-void transition hover:bg-ember"
        >
          <Flame size={17} />
          Activate Rescue Mode
        </button>
      </div>
    </article>
  );
}


