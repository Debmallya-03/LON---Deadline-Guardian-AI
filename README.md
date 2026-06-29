# Deadline Guardian AI

"Don't just get reminded. Get rescued."

Deadline Guardian AI is a cinematic AI productivity command center for last-minute deadline recovery. It predicts deadline failure, ranks tasks by risk, and generates emergency rescue plans with Gemini or a local mock fallback.

## Stack

- Next.js App Router
- JavaScript only
- Tailwind CSS
- Framer Motion
- Three.js, React Three Fiber, Drei
- Gemini API integration with local fallback
- LocalStorage demo persistence

## Folder Structure

```text
app/
  page.js              Landing page
  dashboard/page.js    Main command center
  rescue/page.js       Rescue mode room
  planner/page.js      AI task planner
  analytics/page.js    Productivity insights
components/            Reusable UI, 3D, dashboard, AI components
hooks/useTasks.js      LocalStorage task state
lib/risk.js            Deadline risk prediction engine
lib/ai.js              Gemini + mock response fallback
lib/tasks.js           Demo task data
public/images/         Generated product visuals
```

## Install

```bash
npm install
```

## Environment

Create `.env.local` if you want live Gemini responses:

```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_key_here
```

If the key is missing, the app uses polished mock AI responses so the demo still works.

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Deploy On Vercel

1. Push the project to GitHub.
2. Import the repo in Vercel.
3. Add `NEXT_PUBLIC_GEMINI_API_KEY` in Project Settings if using live Gemini.
4. Deploy with the default Next.js settings.

## Demo Script For Judges

1. Open the landing page and state the core insight: reminders are reactive, Deadline Guardian AI predicts failure before it happens.
2. Click **Start Rescue Mode** to enter the dashboard.
3. Show the highest-risk task, risk score, timeline, productivity score, and AI recommendations.
4. Click **Activate Rescue Mode** on `Submit DAA Assignment` and show the dramatic generated emergency plan.
5. Open `/planner`, type `Prepare for interview in 3 days`, and generate a day-wise plan.
6. Open `/analytics` to show category pressure and focus-hour insights.
7. Close with the pitch: this is not a todo app, it is a rescue engine for important commitments.

## Short Pitch

Traditional productivity tools remind users after they are already failing. Deadline Guardian AI predicts failure before it happens, explains which deadline is most dangerous, and creates an actionable rescue plan so users can complete the task before time runs out.

