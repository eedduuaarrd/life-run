"use client";

import { useTransition } from "react";
import { toggleCompletion, deleteHabit } from "../actions";

type HabitData = {
  id: string;
  name: string;
  description: string;
  completedToday: boolean;
  streak: number;
  totalCompletions: number;
};

export function HabitCard({ habit, today }: { habit: HabitData; today: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`rounded-xl border p-4 transition-colors ${
        habit.completedToday
          ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950"
          : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() =>
            startTransition(() => toggleCompletion(habit.id, today))
          }
          disabled={isPending}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
            habit.completedToday
              ? "border-green-500 bg-green-500 text-white"
              : "border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 dark:hover:border-zinc-500"
          } ${isPending ? "opacity-50" : ""}`}
          aria-label={habit.completedToday ? "Mark incomplete" : "Mark complete"}
        >
          {habit.completedToday && (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <p
            className={`text-sm font-medium ${
              habit.completedToday
                ? "text-green-800 dark:text-green-200 line-through"
                : "text-zinc-900 dark:text-zinc-100"
            }`}
          >
            {habit.name}
          </p>
          {habit.description && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
              {habit.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {habit.streak > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 dark:bg-orange-900 px-2 py-0.5 text-xs font-medium text-orange-700 dark:text-orange-300">
              🔥 {habit.streak}
            </span>
          )}
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {habit.totalCompletions} total
          </span>
          <button
            onClick={() => {
              if (confirm(`Delete "${habit.name}"?`)) {
                startTransition(() => deleteHabit(habit.id));
              }
            }}
            disabled={isPending}
            className="text-zinc-400 hover:text-red-500 dark:text-zinc-500 dark:hover:text-red-400 transition-colors"
            aria-label="Delete habit"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
