"use client";

import { useEffect, useMemo, useState } from "react";
import { demoTasks } from "@/lib/tasks";
import { enrichTasks } from "@/lib/risk";

const STORAGE_KEY = "deadline-guardian-tasks";

export function useTasks() {
  const [tasks, setTasks] = useState(demoTasks);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const enrichedTasks = useMemo(() => enrichTasks(tasks), [tasks]);

  function updateProgress(id, progress) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, progress: Number(progress) } : task));
  }

  function addTask(task) {
    setTasks((current) => [{ ...task, id: crypto.randomUUID(), progress: Number(task.progress || 0) }, ...current]);
  }

  return { tasks: enrichedTasks, rawTasks: tasks, updateProgress, addTask };
}


