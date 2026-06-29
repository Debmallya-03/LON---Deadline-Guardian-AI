import { productivityScore } from "@/lib/risk";

export default function ProductivityAnalytics({ tasks }) {
  const score = productivityScore(tasks);
  const completed = tasks.filter((task) => task.progress >= 100).length;
  const critical = tasks.filter((task) => task.status === "Critical").length;
  const focusHours = tasks.reduce((sum, task) => sum + Math.max(0, task.estimatedEffort * (1 - task.progress / 100)), 0).toFixed(1);

  const metrics = [
    ["Productivity score", score, "%"],
    ["Critical missions", critical, ""],
    ["Completed tasks", completed, ""],
    ["Focus hours left", focusHours, "h"]
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map(([label, value, suffix]) => (
        <div key={label} className="glass rounded-lg p-5">
          <p className="text-xs text-white/50">{label}</p>
          <p className="mt-3 text-3xl font-semibold">{value}<span className="text-lg text-white/45">{suffix}</span></p>
        </div>
      ))}
    </section>
  );
}


