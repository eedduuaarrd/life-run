"use server";

import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";
import { z } from "zod/v4";
import { prisma } from "@/lib/db";
import { format } from "date-fns";

const CreateHabitSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  description: z.string().max(500).optional(),
});

export async function createHabit(formData: FormData) {
  const parsed = CreateHabitSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  await prisma.habit.create({
    data: {
      id: nanoid(),
      name: parsed.data.name,
      description: parsed.data.description ?? "",
    },
  });

  revalidatePath("/");
  return { success: true };
}

export async function deleteHabit(habitId: string) {
  await prisma.habit.delete({ where: { id: habitId } });
  revalidatePath("/");
}

export async function toggleCompletion(habitId: string, date: string) {
  const existing = await prisma.habitCompletion.findUnique({
    where: { habitId_date: { habitId, date } },
  });

  if (existing) {
    await prisma.habitCompletion.delete({ where: { id: existing.id } });
  } else {
    await prisma.habitCompletion.create({
      data: { id: nanoid(), habitId, date },
    });
  }

  revalidatePath("/");
}

export async function getHabitsWithCompletions() {
  const today = format(new Date(), "yyyy-MM-dd");

  const habits = await prisma.habit.findMany({
    include: {
      completions: {
        orderBy: { date: "desc" },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  return habits.map((habit) => {
    const completedToday = habit.completions.some((c) => c.date === today);
    const streak = calculateStreak(habit.completions.map((c) => c.date));
    return {
      id: habit.id,
      name: habit.name,
      description: habit.description,
      completedToday,
      streak,
      totalCompletions: habit.completions.length,
    };
  });
}

function calculateStreak(dates: string[]): number {
  if (dates.length === 0) return 0;

  const sorted = [...dates].sort().reverse();
  const today = format(new Date(), "yyyy-MM-dd");
  const yesterday = format(
    new Date(Date.now() - 86400000),
    "yyyy-MM-dd"
  );

  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

  let streak = 0;
  let expectedDate = sorted[0] === today ? new Date() : new Date(Date.now() - 86400000);

  for (const dateStr of sorted) {
    const expected = format(expectedDate, "yyyy-MM-dd");
    if (dateStr === expected) {
      streak++;
      expectedDate = new Date(expectedDate.getTime() - 86400000);
    } else if (dateStr < expected) {
      break;
    }
  }

  return streak;
}
