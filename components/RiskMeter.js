import { riskTone } from "@/lib/risk";

export default function RiskMeter({ score, label = "Risk" }) {
  const tone = riskTone(score);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-white/55">
        <span>{label}</span>
        <span className={tone.text}>{score}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${tone.bg}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}


