export async function generateGeminiPlan(prompt, mode = "rescue") {
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!key) return mockPlan(prompt, mode);

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are Deadline Guardian AI. Create a concise, practical ${mode} plan. Use sections: First Move, Time Blocks, Skip, Checklist. User context: ${prompt}`
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) throw new Error("Gemini request failed");
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || mockPlan(prompt, mode);
  } catch (error) {
    return mockPlan(prompt, mode);
  }
}

export function mockPlan(prompt, mode = "rescue") {
  if (mode === "planner") {
    return `Day 1: Map the outcome, collect resources, and finish the hardest 35% first.
Day 2: Run two 90-minute focus sessions, convert notes into deliverables, and remove low-value extras.
Day 3: Practice, polish, submit, and keep a 45-minute buffer.
Priority order: critical concept gaps, proof of work, review checklist.
Focus sessions: 50 minutes work, 10 minutes reset, phone away.
Checklist: outline done, core work done, review done, backup submitted.`;
  }

  return `First Move: Open the deliverable now and create the final submission skeleton before researching more.
Time Blocks:
00:00-00:25 Define scope and gather only essential references.
00:25-02:00 Complete the highest scoring section.
02:00-03:10 Complete remaining required sections.
03:10-03:40 Review, citations, screenshots, and formatting.
03:40-04:00 Submit and verify upload.
Skip: decorative extras, optional reading, redesigning slides from scratch.
Checklist: title, required files, final export, submission receipt, backup copy.`;
}


