export const demoTasks = [
  {
    id: "daa-assignment",
    title: "Submit DAA Assignment",
    deadline: offsetHours(8),
    estimatedEffort: 6,
    priority: "High",
    progress: 24,
    category: "College",
    owner: "Academic rescue"
  },
  {
    id: "gd-interview",
    title: "Prepare Google Developer Interview",
    deadline: offsetDays(3),
    estimatedEffort: 14,
    priority: "High",
    progress: 36,
    category: "Career",
    owner: "Interview prep"
  },
  {
    id: "electricity-bill",
    title: "Pay Electricity Bill",
    deadline: offsetHours(30),
    estimatedEffort: 0.5,
    priority: "Medium",
    progress: 0,
    category: "Personal",
    owner: "Life admin"
  },
  {
    id: "pitch-deck",
    title: "Complete Hackathon Pitch Deck",
    deadline: offsetHours(18),
    estimatedEffort: 7,
    priority: "High",
    progress: 45,
    category: "Hackathon",
    owner: "Demo day"
  },
  {
    id: "os-module",
    title: "Study Operating System Module 4",
    deadline: offsetDays(5),
    estimatedEffort: 9,
    priority: "Medium",
    progress: 18,
    category: "College",
    owner: "Exam prep"
  },
  {
    id: "client-site",
    title: "Client Website Delivery",
    deadline: offsetDays(2),
    estimatedEffort: 10,
    priority: "High",
    progress: 68,
    category: "Freelance",
    owner: "Client work"
  }
];

function offsetHours(hours) {
  return new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
}

function offsetDays(days) {
  return offsetHours(days * 24);
}


