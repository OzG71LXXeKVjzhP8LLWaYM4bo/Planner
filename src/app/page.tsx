import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Download,
  MousePointer2,
  ZoomIn,
} from "lucide-react";

const appUrl = "https://app.flowday.live";

const previewDays = [
  { day: "Mon", date: "8", items: ["Studio review", "Invoice follow-up"] },
  { day: "Tue", date: "9", items: ["Ship homepage", "Walk at lunch"] },
  { day: "Wed", date: "10", items: ["Deep work block", "Plan next week"] },
  { day: "Thu", date: "11", items: ["Client notes", "Book flights"] },
  { day: "Fri", date: "12", items: ["Wrap loose ends", "Dinner 7pm"] },
];

const features = [
  {
    icon: CalendarDays,
    title: "A real monthly canvas",
    copy: "Move between months, resize days, and keep the whole plan in view without opening a stack of modal windows.",
  },
  {
    icon: MousePointer2,
    title: "Simple day editing",
    copy: "Click any day and write. Add small checklists where they help, then keep moving.",
  },
  {
    icon: Download,
    title: "Your data stays portable",
    copy: "Export and import your planner data whenever you want. No lock-in, no paid tier.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-neutral-950">
      <section className="relative min-h-[92vh] overflow-hidden border-b border-neutral-200 bg-[#f5f7f2]">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="absolute left-1/2 top-20 h-[720px] w-[1120px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0)_65%)]" />
        </div>

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex size-7 items-center justify-center rounded-md bg-neutral-950 text-white">
              <CalendarDays className="size-4" />
            </span>
            Flowday
          </Link>
          <nav className="flex items-center gap-2">
            <Link
              href={`${appUrl}/sign-in`}
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-white/70 hover:text-neutral-950 sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href={`${appUrl}/sign-up`}
              className="inline-flex h-9 items-center gap-2 rounded-md bg-neutral-950 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800"
            >
              Start free
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(92vh-76px)] max-w-7xl content-center gap-10 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur">
              Free personal planning, no paid tier
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl">
              Flowday
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-neutral-700 sm:text-xl">
              A clean monthly planner for people who want a calm place to map
              the day, drag across time, and keep their notes portable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`${appUrl}/sign-up`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-neutral-950 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800"
              >
                Create your planner
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={`${appUrl}/sign-in`}
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white/70 px-5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white"
              >
                Open existing planner
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-700" />
                Free to use
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-700" />
                Export anytime
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-700" />
                Built for desktop planning
              </span>
            </div>
          </div>

          <div className="relative min-h-[440px] lg:min-h-[620px]" aria-hidden="true">
            <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-[760px] rotate-[-1.5deg] rounded-lg border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/12">
              <div className="flex items-center justify-between border-b border-neutral-200 px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e65b4f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e0b83d]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#42a66b]" />
                </div>
                <div className="rounded bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                  April 2026
                </div>
                <div className="flex items-center gap-1 text-neutral-400">
                  <ZoomIn className="size-4" />
                  <span className="text-xs">92%</span>
                </div>
              </div>
              <div className="bg-[#f7f7f5] p-4">
                <div className="mb-3 grid grid-cols-5 gap-2 text-[11px] font-semibold uppercase text-neutral-400">
                  {previewDays.map((day) => (
                    <span key={day.day}>{day.day}</span>
                  ))}
                </div>
                <div className="grid min-h-[360px] grid-cols-5 gap-2">
                  {previewDays.map((day, index) => (
                    <div
                      key={day.date}
                      className="rounded-md border border-neutral-200 bg-white p-3 shadow-sm"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span
                          className={`flex size-7 items-center justify-center rounded-full text-sm font-semibold ${
                            index === 2
                              ? "bg-[#1f6f56] text-white"
                              : "bg-neutral-100 text-neutral-600"
                          }`}
                        >
                          {day.date}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {day.items.map((item) => (
                          <div
                            key={item}
                            className="rounded border border-neutral-100 bg-[#fbfaf7] px-2 py-1.5 text-[12px] leading-4 text-neutral-700"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-2 hidden w-56 rounded-lg border border-neutral-200 bg-white p-3 text-sm shadow-xl shadow-neutral-900/10 sm:block">
              <p className="font-medium text-neutral-900">Drag, zoom, resize.</p>
              <p className="mt-1 text-neutral-500">
                Your month behaves like a workspace, not a form.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <feature.icon className="size-5 text-[#1f6f56]" />
            <h2 className="mt-5 text-lg font-semibold tracking-normal">
              {feature.title}
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">{feature.copy}</p>
          </article>
        ))}
      </section>

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f6f56]">
              Start with a blank month
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal">
              Make today easier to see.
            </h2>
          </div>
          <Link
            href={`${appUrl}/sign-up`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-neutral-950 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800"
          >
            Start free
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
