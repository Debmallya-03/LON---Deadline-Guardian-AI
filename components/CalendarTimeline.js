import { formatTimeLeft, riskTone } from "@/lib/risk";

export default function CalendarTimeline({ tasks }) {
  return (
    <section className="glass rounded-lg p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Deadline Timeline</h2>
        <span className="text-xs text-white/45">Live risk ordered</span>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => {
          const tone = riskTone(task.risk);
          return (
            <div key={task.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <span className={`h-3 w-3 rounded-full ${tone.bg} shadow-glow`} />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{task.title}</p>
                <div className="mt-2 h-1.5 rounded-full bg-white/9">
                  <div className={`h-full rounded-full ${tone.bg}`} style={{ width: `${Math.max(12, 100 - task.risk)}%` }} />
                </div>
              </div>
              <span className="text-xs text-white/52">{formatTimeLeft(task.deadline)}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}


