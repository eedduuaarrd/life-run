import { getHabitsWithCompletions } from "./actions";
import { format } from "date-fns";
import { AddHabitForm } from "./components/add-habit-form";
import { HabitCard } from "./components/habit-card";

export default async function Home() {
  const habits = await getHabitsWithCompletions();
  const today = format(new Date(), "yyyy-MM-dd");

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-2xl px-4 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Life Run
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Track your daily habits. Build streaks. Stay consistent.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 py-8 flex flex-col gap-6">
        <AddHabitForm />

        {habits.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-12 text-center">
            <p className="text-zinc-500 dark:text-zinc-400">
              No habits yet. Add your first habit above to get started!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
              Today &mdash; {format(new Date(), "EEEE, MMM d")}
            </h2>
            {habits.map((habit) => (
              <HabitCard key={habit.id} habit={habit} today={today} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
