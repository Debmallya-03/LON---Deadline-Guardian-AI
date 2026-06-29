const priorityWeight = {
  Low: 0.12,
  Medium: 0.22,
  High: 0.34
};

export function calculateRisk(task) {
  const hoursLeft = Math.max((new Date(task.deadline).getTime() - Date.now()) / 36e5, 0);
  const urgency = hoursLeft <= 0 ? 1 : Math.min(1, task.estimatedEffort / Math.max(hoursLeft, 0.35));
  const effortLoad = Math.min(task.estimatedEffort / 12, 1);
  const progressGap = 1 - task.progress / 100;
  const priority = priorityWeight[task.priority] || 0.2;
  const score = urgency * 42 + effortLoad * 18 + progressGap * 30 + priority * 30;
  return Math.max(4, Math.min(99, Math.round(score)));
}

export function riskStatus(score) {
  if (score >= 72) return "Critical";
  if (score >= 45) return "Warning";
  return "Safe";
}

export function riskTone(score) {
  const status = riskStatus(score);
  if (status === "Critical") return { text: "text-danger", bg: "bg-danger", ring: "ring-danger/35", border: "border-danger/35" };
  if (status === "Warning") return { text: "text-amber-300", bg: "bg-amber-300", ring: "ring-amber-300/35", border: "border-amber-300/35" };
  return { text: "text-aurora", bg: "bg-aurora", ring: "ring-aurora/35", border: "border-aurora/35" };
}

export function enrichTasks(tasks) {
  return tasks.map((task) => {
    const risk = calculateRisk(task);
    return { ...task, risk, status: riskStatus(risk) };
  }).sort((a, b) => b.risk - a.risk);
}

export function formatTimeLeft(deadline) {
  const ms = new Date(deadline).getTime() - Date.now();
  if (ms <= 0) return "Overdue";
  const hours = Math.floor(ms / 36e5);
  const days = Math.floor(hours / 24);
  const remHours = hours % 24;
  if (days > 0) return `${days}d ${remHours}h left`;
  const minutes = Math.max(1, Math.floor((ms % 36e5) / 60000));
  return `${hours}h ${minutes}m left`;
}

export function productivityScore(tasks) {
  const enriched = enrichTasks(tasks);
  const avgProgress = enriched.reduce((sum, t) => sum + t.progress, 0) / enriched.length;
  const avgRisk = enriched.reduce((sum, t) => sum + t.risk, 0) / enriched.length;
  return Math.round(Math.max(5, Math.min(98, avgProgress * 0.58 + (100 - avgRisk) * 0.42)));
}


