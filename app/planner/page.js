import PageShell from "@/components/PageShell";
import AIPlanGenerator from "@/components/AIPlanGenerator";
import VoiceAssistant from "@/components/VoiceAssistant";

export default function PlannerPage() {
  return (
    <PageShell>
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AIPlanGenerator />
          <div className="space-y-6">
            <VoiceAssistant />
            <section className="glass rounded-lg p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Planner presets</p>
              <div className="mt-5 grid gap-3 text-sm text-white/66">
                <div className="rounded-md bg-white/6 p-4">Prepare for interview in 3 days</div>
                <div className="rounded-md bg-white/6 p-4">Finish pitch deck before tomorrow morning</div>
                <div className="rounded-md bg-white/6 p-4">Study OS Module 4 across five evenings</div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}


