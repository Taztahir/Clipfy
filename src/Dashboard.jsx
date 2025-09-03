import { useState } from "react";
import {
  Play,
  Upload,
  Settings,
  Home,
  Layers,
  BarChart3,
  LogOut,
  Sparkles,
  Film,
  Type,
  Image as ImageIcon,
  Plus,
  ChevronRight,
  Bell,
  Search,
} from "lucide-react";

export default function Dashboard() {
  const [active, setActive] = useState("dashboard");
  const [script, setScript] = useState("");
  const [dark, setDark] = useState(true); // toggle preview locally

  const templates = [
    {
      id: 1,
      title: "5 TIPS FOR SUCCESS",
      duration: "8:12",
      badge: "Performance",
      thumb:
        "https://images.unsplash.com/photo-1600132806370-bf17e65eb5a0?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Summer Promo",
      duration: "1:03",
      badge: "Promo",
      thumb:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Talking Head",
      duration: "3:45",
      badge: "Interview",
      thumb:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const recent = [
    {
      id: "p1",
      title: "Creator Onboarding",
      date: "Mar 9",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "p2",
      title: "Weekly Recap",
      date: "Mar 11",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0d1020] text-slate-900 dark:text-slate-100">
        {/* Top bar */}
        <header className="sticky top-0 z-40 border-b bg-white/70 dark:bg-[#0d1020]/70 backdrop-blur border-slate-200/60 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-pink-500" />
                <span className="font-extrabold tracking-tight">Clipfy</span>
              </div>
              {/* Search */}
              <div className="hidden md:flex items-center ml-6">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    className="pl-9 pr-3 py-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 placeholder:text-slate-400 w-[320px]"
                    placeholder="Search projects, templates, assets…"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark((d) => !d)}
                className="px-3 py-2 rounded-lg text-xs font-semibold bg-slate-900/5 dark:bg-white/10 hover:bg-slate-900/10 dark:hover:bg-white/15 transition"
              >
                {dark ? "Light" : "Dark"} mode
              </button>
              <button className="relative p-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-pink-500 rounded-full" />
              </button>
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop"
                className="h-9 w-9 rounded-xl object-cover"
              />
            </div>
          </div>
        </header>

        {/* Page */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 lg:col-span-2">
            <nav className="space-y-2">
              <SidebarItem
                icon={Home}
                label="Dashboard"
                active={active === "dashboard"}
                onClick={() => setActive("dashboard")}
              />
              <SidebarItem
                icon={Layers}
                label="Projects"
                onClick={() => setActive("projects")}
              />
              <SidebarItem
                icon={BarChart3}
                label="Analytics"
                onClick={() => setActive("analytics")}
              />
              <SidebarItem
                icon={Settings}
                label="Settings"
                onClick={() => setActive("settings")}
              />
              <div className="pt-4">
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-2.5 font-semibold hover:opacity-95 transition">
                  <Plus className="h-4 w-4" />
                  New Project
                </button>
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900/5 dark:bg-white/10 py-2.5 font-semibold hover:bg-slate-900/10 dark:hover:bg-white/15 transition">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </nav>
          </aside>

          {/* Main editor column */}
          <main className="col-span-12 md:col-span-9 lg:col-span-7 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              AI Video Editing
            </h1>

            {/* Script box */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4">
              <label className="text-sm font-medium text-slate-500 dark:text-slate-300">
                Paste your video script here…
              </label>
              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                rows={4}
                className="mt-2 w-full rounded-xl bg-slate-100 dark:bg-[#0e1327] border border-slate-200 dark:border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-violet-500/60"
                placeholder="Write or paste your script. Clipfy will generate scenes, B-roll, captions, and brand styling automatically."
              />
            </div>

            {/* Preview card */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-slate-200 dark:border-white/10 flex items-center justify-center relative overflow-hidden">
                {/* fake player */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="h-16 w-16 rounded-full bg-white/90 dark:bg-black/40 backdrop-blur flex items-center justify-center shadow-lg hover:scale-105 transition">
                    <Play className="h-8 w-8" />
                  </button>
                </div>
                {/* timeline */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-2 rounded-full bg-white/40 dark:bg-white/10 overflow-hidden">
                    <div className="h-full w-1/3 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                  </div>
                </div>
              </div>

              {/* Action chips */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Chip icon={Film} label="B-Roll" />
                <Chip icon={Type} label="Auto-Captions" />
                <Chip icon={ImageIcon} label="Branding" />
                <Chip icon={Sparkles} label="Polish" />
              </div>

              {/* CTA row */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 font-semibold hover:opacity-95 transition">
                  <Sparkles className="h-4 w-4" />
                  Generate with AI
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 px-4 py-2.5 hover:bg-slate-900/5 dark:hover:bg-white/10 transition">
                  <Upload className="h-4 w-4" />
                  Upload Media
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 px-4 py-2.5 hover:bg-slate-900/5 dark:hover:bg-white/10 transition">
                  <Settings className="h-4 w-4" />
                  Rendering Settings
                </button>
              </div>
            </div>

            {/* Suggestions */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4">
              <h2 className="text-xl font-bold mb-3">Suggestions</h2>
              <ul className="space-y-2">
                {[
                  "Focus on the main subject, avoid excessive zooms.",
                  "Add a hook in the first 3 seconds for retention.",
                  "Use higher-contrast captions for mobile viewers.",
                ].map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-slate-100/70 dark:bg-white/5 p-3"
                  >
                    <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-violet-500" />
                    <p className="text-sm">{s}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Templates */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">Templates</h2>
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900/5 dark:bg-white/10 px-3 py-2 text-sm hover:bg-slate-900/10 dark:hover:bg-white/15 transition">
                  New template
                </button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((t) => (
                  <TemplateCard key={t.id} {...t} />
                ))}
              </div>
            </section>

            {/* Recent Projects */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">Recent projects</h2>
                <button className="inline-flex items-center gap-1 text-sm font-semibold hover:underline">
                  View all <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {recent.map((r) => (
                  <RecentCard key={r.id} {...r} />
                ))}
              </div>
            </section>
          </main>

          {/* Right rail: metrics + tips */}
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            {/* Metrics */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4">
              <h3 className="text-sm font-semibold text-slate-500 mb-3">
                Last 7 days
              </h3>
              <Metric label="Viewers" value="2.4k" delta="+15%" />
              <Metric label="Watch Time" value="178 h" delta="+8%" />
              <Metric label="Revenue" value="$820" delta="+10%" />
            </div>

            {/* Suggestions card */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4">
              <h3 className="text-lg font-bold mb-2">Suggestions</h3>
              <p className="text-sm text-slate-500">
                Clipfy analyzes your project and highlights quick wins to improve
                retention and clarity.
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Trim silence between scenes.",
                  "Use B-roll in scene 2 to illustrate the point.",
                  "Shorten outro to < 5 seconds.",
                ].map((s, i) => (
                  <li
                    key={i}
                    className="text-sm rounded-lg bg-slate-100/70 dark:bg-white/5 p-2"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick action */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Template</h3>
                <button className="rounded-xl bg-white/15 px-3 py-1.5 text-sm font-semibold hover:bg-white/20">
                  <Plus className="inline h-4 w-4 mr-1" />
                  New
                </button>
              </div>
              <p className="mt-2 text-sm text-white/90">
                Create a reusable style with fonts, captions, and brand assets.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ---------- UI Pieces ---------- */

function SidebarItem({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl border transition
      ${active
        ? "bg-slate-900/5 dark:bg-white/10 border-slate-300 dark:border-white/15"
        : "border-transparent hover:bg-slate-900/5 dark:hover:bg-white/10"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function Chip({ icon: Icon, label }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 px-3 py-2 bg-white/70 dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition">
      <Icon className="h-4 w-4" />
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function TemplateCard({ thumb, title, duration, badge }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-lg transition">
      <div className="relative">
        <img src={thumb} className="h-36 w-full object-cover" />
        <span className="absolute top-2 left-2 text-[11px] font-semibold px-2 py-1 rounded-lg bg-black/60 text-white">
          {badge}
        </span>
        <span className="absolute bottom-2 right-2 text-[11px] font-semibold px-2 py-1 rounded-lg bg-black/60 text-white">
          {duration}
        </span>
      </div>
      <div className="p-3 flex items-center justify-between">
        <p className="font-semibold text-sm">{title}</p>
        <button className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-900/5 dark:bg-white/10 hover:bg-slate-900/10 dark:hover:bg-white/15">
          Use
        </button>
      </div>
    </div>
  );
}

function RecentCard({ title, date, avatar }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-3">
      <img src={avatar} className="h-10 w-10 rounded-xl object-cover" />
      <div className="min-w-0">
        <p className="font-semibold truncate">{title}</p>
        <p className="text-xs text-slate-500">{date}</p>
      </div>
      <div className="ml-auto">
        <button className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-900/5 dark:bg-white/10 hover:bg-slate-900/10 dark:hover:bg-white/15">
          Open
        </button>
      </div>
    </div>
  );
}

function Metric({ label, value, delta }) {
  const positive = delta?.trim().startsWith("+");
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-100/70 dark:bg-white/5 p-3 mb-2">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="text-xl font-extrabold">{value}</p>
      </div>
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-lg ${
          positive ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"
        }`}
      >
        {delta} 
      </span>
    </div>
  );
}
