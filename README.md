# Deadline Guardian AI

> Don't just get reminded. Get rescued.

Deadline Guardian AI is an AI-powered productivity command center built for the problem statement **"The Last-Minute Life Saver"**. Instead of acting like a normal todo app, it predicts deadline failure, identifies high-risk commitments, and generates emergency rescue plans that help users complete important work before time runs out.

The project is designed as a premium hackathon-ready product experience with a cinematic landing page, 3D AI visuals, risk scoring, rescue mode, AI planning, voice-assistant UI, and productivity analytics.

## Live Product Concept

Traditional productivity tools remind users when a deadline is near. Deadline Guardian AI goes further:

- Predicts which tasks are likely to fail
- Calculates a deadline risk score for every commitment
- Converts critical tasks into rescue missions
- Generates time-blocked emergency plans
- Helps users decide what to do first, what to skip, and how to submit on time

## Core Features

### 1. Deadline Risk Prediction

Each task is evaluated using:

- Deadline proximity
- Estimated effort
- Current progress
- Priority level

The result is a visual risk score with three states:

- **Safe**: Low risk, enough time available
- **Warning**: Deadline pressure is increasing
- **Critical**: Immediate rescue action recommended

### 2. AI Rescue Mode

For critical tasks, users can activate Rescue Mode to generate:

- Emergency action plan
- Time-blocked schedule
- Step-by-step execution roadmap
- First action recommendation
- Work to skip or deprioritize
- Final submission checklist

The experience includes a dramatic rescue interface with glowing alerts, a pulsing AI orb, and animated plan generation.

### 3. AI Task Planner

Users can enter natural-language goals such as:

```text
Prepare for interview in 3 days
```

The planner generates:

- Day-wise plan
- Priority order
- Estimated focus sessions
- Completion checklist

### 4. Smart Productivity Recommendations

The dashboard surfaces practical suggestions such as:

- Start the riskiest task before the next context switch
- Break large work into smaller sessions
- Do the hardest part first
- Move low-priority admin work after urgent submissions

### 5. Voice Assistant UI

A voice-command-style interface demonstrates how users could ask:

- What should I do first?
- Rescue my assignment
- Plan my week
- Which deadline is most dangerous?

### 6. Productivity Analytics

The analytics page shows:

- Productivity score
- Critical missions
- Completed tasks
- Remaining focus hours
- Category pressure
- Deadline timeline

## Pages

| Route | Description |
| --- | --- |
| `/` | Cinematic landing page with 3D AI orb and product story |
| `/dashboard` | Main command center with task risk scores and recommendations |
| `/rescue` | Dedicated rescue-mode experience for critical tasks |
| `/planner` | AI task planner for natural-language goals |
| `/analytics` | Productivity insights and risk distribution |

## Tech Stack

- **Framework**: Next.js App Router
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D**: Three.js, React Three Fiber, Drei
- **AI**: Gemini API with local fallback responses
- **Storage**: LocalStorage for demo persistence
- **Deployment**: Vercel-ready

## Project Structure

```text
app/
  page.js              Landing page
  dashboard/page.js    Main dashboard
  rescue/page.js       Rescue mode page
  planner/page.js      AI planner page
  analytics/page.js    Analytics page

components/
  AIPlanGenerator.js
  CalendarTimeline.js
  FeatureCard.js
  Footer.js
  Navbar.js
  PageShell.js
  ProductivityAnalytics.js
  RescueModeModal.js
  RiskMeter.js
  TaskCard.js
  ThreeAIOrb.js
  VoiceAssistant.js

hooks/
  useTasks.js          LocalStorage-backed task state

lib/
  ai.js                Gemini integration and mock fallback
  risk.js              Deadline risk calculation engine
  tasks.js             Demo task data

public/images/
  guardian-command-center.png
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root if you want live Gemini responses:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

The app works without an API key by using built-in mock AI responses, so demos remain stable even offline.

### 3. Run The Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 4. Build For Production

```bash
npm run build
```

## Deployment

The project is ready to deploy on Vercel.

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_GEMINI_API_KEY` in Vercel Environment Variables if using live Gemini responses.
4. Deploy using the default Next.js settings.

## Demo Data

The app includes realistic demo tasks:

- Submit DAA Assignment
- Prepare Google Developer Interview
- Pay Electricity Bill
- Complete Hackathon Pitch Deck
- Study Operating System Module 4
- Client Website Delivery

## Judge Demo Flow

1. Start on the landing page and introduce the core idea: reminders are reactive, Deadline Guardian AI is proactive.
2. Click **Start Rescue Mode** to open the dashboard.
3. Show task risk scores, deadline countdowns, AI recommendations, and productivity score.
4. Activate Rescue Mode for `Submit DAA Assignment`.
5. Walk through the generated emergency plan and submission checklist.
6. Open `/planner` and generate a plan for `Prepare for interview in 3 days`.
7. Open `/analytics` to show productivity score, category pressure, and remaining focus hours.
8. End with the product pitch below.

## Hackathon Pitch

Traditional productivity tools remind users after they are already falling behind. Deadline Guardian AI predicts failure before it happens, identifies the most dangerous deadline, and creates a practical rescue plan so users can complete the task before time runs out.

This is not a todo list. It is an AI-powered rescue system for high-pressure commitments.

## Environment Safety

Do not commit real API keys.

Use `.env.local` for local secrets and keep `.env.example` as a placeholder only:

```env
NEXT_PUBLIC_GEMINI_API_KEY=
```

## Status

Production build verified with:

```bash
npm run build
```
