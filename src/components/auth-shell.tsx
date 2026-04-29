import Link from "next/link";
import { CalendarDays, CheckCircle2 } from "lucide-react";

type AuthShellProps = {
  mode: "sign-in" | "sign-up";
  children: React.ReactNode;
};

const notes = {
  "sign-in": {
    eyebrow: "Welcome back",
    title: "Pick up where your month left off.",
    copy: "Open your Flowday planner and get straight back to the days, notes, and checklists you were shaping.",
  },
  "sign-up": {
    eyebrow: "Start free",
    title: "Make a calm place for the month ahead.",
    copy: "Create a planner for daily notes, small checklists, and a month view that stays easy to scan.",
  },
};

const previewItems = [
  ["9", "Plan launch notes", "Email Sam"],
  ["10", "Deep work block", "Groceries"],
  ["11", "Review calendar", "Dinner 7pm"],
];

export function AuthShell({ mode, children }: AuthShellProps) {
  const content = notes[mode];

  return (
    <main className="grid min-h-screen bg-[#f5f7f2] text-neutral-950 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="relative hidden overflow-hidden border-r border-neutral-200 px-10 py-8 lg:flex lg:flex-col">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.06)_1px,transparent_1px)] bg-[size:68px_68px]" />
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="flex size-7 items-center justify-center rounded-md bg-neutral-950 text-white">
              <CalendarDays className="size-4" />
            </span>
            Flowday
          </Link>
        </div>

        <div className="relative z-10 my-auto max-w-xl">
          <p className="text-sm font-semibold uppercase text-[#1f6f56]">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-normal">
            {content.title}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-neutral-600">
            {content.copy}
          </p>

          <div className="mt-10 max-w-lg rounded-lg border border-neutral-200 bg-white p-4 shadow-xl shadow-neutral-900/10">
            <div className="mb-3 flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-sm font-semibold">April</span>
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-500">
                2026
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {previewItems.map(([date, first, second]) => (
                <div
                  key={date}
                  className="min-h-36 rounded-md border border-neutral-200 bg-[#fbfaf7] p-3"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#1f6f56] text-sm font-semibold text-white">
                    {date}
                  </span>
                  <div className="mt-4 space-y-2">
                    <p className="rounded border border-neutral-100 bg-white px-2 py-1.5 text-xs text-neutral-700">
                      {first}
                    </p>
                    <p className="rounded border border-neutral-100 bg-white px-2 py-1.5 text-xs text-neutral-700">
                      {second}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex gap-5 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#1f6f56]" />
              Free to use
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#1f6f56]" />
              Export anytime
            </span>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold">
              <span className="flex size-7 items-center justify-center rounded-md bg-neutral-950 text-white">
                <CalendarDays className="size-4" />
              </span>
              Flowday
            </Link>
            <p className="mt-4 text-sm text-neutral-600">{content.copy}</p>
          </div>
          <div className="flex justify-center">{children}</div>
        </div>
      </section>
    </main>
  );
}
