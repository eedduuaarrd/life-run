"use client";

import { useActionState, useRef } from "react";
import { createHabit } from "../actions";

type FormState = { error?: string; success?: boolean } | undefined;

export function AddHabitForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, pending] = useActionState(
    async (_prev: FormState, formData: FormData) => {
      const result = await createHabit(formData);
      if (result.success) {
        formRef.current?.reset();
      }
      return result;
    },
    undefined
  );

  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4"
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <input
            type="text"
            name="name"
            placeholder="New habit name..."
            required
            className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
          />
          <button
            type="submit"
            disabled={pending}
            className="rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:opacity-50 transition-colors"
          >
            {pending ? "Adding..." : "Add Habit"}
          </button>
        </div>
        <input
          type="text"
          name="description"
          placeholder="Description (optional)"
          className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
        />
      </div>
      {state?.error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {state.error}
        </p>
      )}
    </form>
  );
}
