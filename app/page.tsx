import Link from "next/link";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const stats = [
  { value: "3,400+", label: "Active Members" },
  { value: "40+", label: "Weekly Classes" },
  { value: "12", label: "Expert Trainers" },
  { value: "8", label: "Years Strong" },
];

const featuredClasses = [
  {
    name: "HIIT Blast",
    type: "HIIT",
    duration: "45 MIN",
    level: "Intermediate",
    desc: "High-intensity intervals that torch calories and build explosive power. Expect sweat, effort, and results.",
    accent: "from-red-950 to-brand-dark",
    badge: "bg-brand-red/20 text-brand-red border-brand-red/30",
  },
  {
    name: "Power Lifting",
    type: "Strength",
    duration: "60 MIN",
    level: "Advanced",
    desc: "Master the big three — squat, bench, deadlift — under the guidance of certified strength coaches.",
    accent: "from-yellow-950 to-brand-dark",
    badge: "bg-yellow-900/40 text-brand-gold border-brand-gold/30",
  },
  {
    name: "Boxing & MMA",
    type: "Combat",
    duration: "60 MIN",
    level: "All Levels",
    desc: "Learn technique, build cardio, and develop mental toughness through proper boxing and MMA fundamentals.",
    accent: "from-orange-950 to-brand-dark",
    badge: "bg-orange-900/40 text-orange-400 border-orange-700/30",
  },
];

const features = [
  {
    icon: "&#127947;",
    title: "Elite Equipment",
    desc: "Olympic platforms, 200+ free weights, premium cardio machines, and specialized training zones.",
  },
  {
    icon: "&#127945;",
    title: "Expert Coaches",
    desc: "Certified trainers with credentials from NSCA, ACE, and NASM who are invested in your success.",
  },
  {
    icon: "&#128197;",
    title: "Flexible Scheduling",
    desc: "40+ classes per week from 5 AM to 11 PM. We work around your life, not the other way around.",
  },
  {
    icon: "&#128293;",
    title: "Results-Driven",
    desc: "Evidence-based programming designed to deliver measurable progress, not just a workout.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-dark/50" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-brand-red/5 to-transparent" />
          <div
            className="absolute right-[-10%] top-[-20%] w-[70%] h-[140%] opacity-10"
            style={{
              background:
                "repeating-linear-gradient(45deg, #FF4D4D 0px, #FF4D4D 1px, transparent 1px, transparent 60px)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-28">
          <div className="max-w-3xl">
            <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Manhattan&apos;s Premier Fitness Gym
            </p>
            <h1 className="font-heading text-7xl sm:text-8xl md:text-[9rem] leading-none tracking-wider text-white mb-2">
              FORGE
            </h1>
            <h1 className="font-heading text-7xl sm:text-8xl md:text-[9rem] leading-none tracking-wider text-brand-red mb-2">
              YOUR
            </h1>
            <h1 className="font-heading text-7xl sm:text-8xl md:text-[9rem] leading-none tracking-wider text-brand-gold mb-8">
              LIMITS
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
              Iron Peak isn&apos;t just a gym. It&apos;s where ordinary people become
              extraordinary athletes. World-class coaching, elite equipment, and
              a community built on relentless pursuit of excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm hover:bg-[#e03030] transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/classes"
                className="px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase text-sm hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                View Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark border-y border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 px-8 text-center ${
                  i < stats.length - 1 ? "border-r border-brand-muted/20" : ""
                }`}
              >
                <p className="font-heading text-5xl md:text-6xl text-brand-red tracking-wider mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3">
                What We Offer
              </p>
              <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wider">
                FEATURED CLASSES
              </h2>
            </div>
            <Link
              href="/classes"
              className="text-sm text-gray-400 hover:text-brand-red transition-colors uppercase tracking-widest shrink-0"
            >
              Full Schedule &#8594;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredClasses.map((cls) => (
              <div
                key={cls.name}
                className="group relative overflow-hidden border border-brand-muted/30 hover:border-brand-red/50 transition-all"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${cls.accent} flex items-end p-6`}
                >
                  <span
                    className={`text-xs px-3 py-1 border rounded-sm font-bold tracking-wider ${cls.badge}`}
                  >
                    {cls.type}
                  </span>
                </div>
                <div className="bg-brand-dark p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-2xl text-white tracking-wide group-hover:text-brand-red transition-colors">
                      {cls.name}
                    </h3>
                    <div className="text-right shrink-0 ml-3">
                      <p className="text-brand-gold text-xs font-bold">{cls.duration}</p>
                      <p className="text-gray-500 text-xs">{cls.level}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {cls.desc}
                  </p>
                  <Link
                    href="/classes"
                    className="text-xs font-bold uppercase tracking-widest text-brand-red hover:text-white transition-colors"
                  >
                    Book This Class &#8594;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Iron Peak */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3">
              The Iron Peak Difference
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wider">
              WHY IRON PEAK
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center group">
                <div
                  className="text-4xl mb-5 group-hover:scale-110 transition-transform inline-block"
                  dangerouslySetInnerHTML={{ __html: f.icon }}
                />
                <h3 className="font-heading text-xl text-white tracking-wider mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Member Stories
              </p>
              <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wider mb-6">
                REAL RESULTS, REAL PEOPLE
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Over 3,400 members have transformed their bodies and minds at
                Iron Peak. These aren&apos;t just gym stories &mdash; they&apos;re
                life-changing journeys.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-brand-red text-white font-bold tracking-widest uppercase text-sm hover:bg-[#e03030] transition-colors"
              >
                Join Them Today
              </Link>
            </div>
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wider leading-tight">
                READY TO FORGE YOUR LEGACY?
              </h2>
              <p className="text-red-200 mt-3 text-lg">
                Your first class is on us. No commitment required.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-brand-red font-bold tracking-widest uppercase text-sm hover:bg-brand-gold transition-colors"
              >
                Free Trial
              </Link>
              <Link
                href="/membership"
                className="px-8 py-4 border border-white/50 text-white font-bold tracking-widest uppercase text-sm hover:border-white hover:bg-white/10 transition-colors"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
