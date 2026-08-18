import ClassSchedule from "@/components/ClassSchedule";
import Link from "next/link";

const classDescriptions = [
  {
    name: "CrossFit WOD",
    type: "CrossFit",
    desc: "Constantly varied functional movements — Olympic lifts, gymnastics, metabolic conditioning — performed at high intensity. Every workout is different, every session tests you.",
    icon: "🏋️",
    color: "border-brand-red",
  },
  {
    name: "HIIT Training",
    type: "HIIT",
    desc: "Work-to-rest intervals scientifically programmed to maximize fat burn and cardiovascular output. The most efficient 45 minutes you'll spend all week.",
    icon: "⚡",
    color: "border-orange-500",
  },
  {
    name: "Yoga Flow",
    type: "Yoga",
    desc: "Vinyasa sequences that build flexibility, body awareness, and mental focus. The missing piece in every serious training program.",
    icon: "🧘",
    color: "border-teal-500",
  },
  {
    name: "Powerlifting",
    type: "Powerlifting",
    desc: "Technical instruction and progressive programming for the squat, bench press, and deadlift. Build real strength that carries over to everything else.",
    icon: "🏆",
    color: "border-brand-gold",
  },
  {
    name: "Boxing",
    type: "Boxing",
    desc: "Learn proper boxing technique from a former professional fighter. Develop hand speed, footwork, defensive instincts, and cardio that doesn't quit.",
    icon: "🥊",
    color: "border-purple-500",
  },
  {
    name: "Spin Cycle",
    type: "Cycling",
    desc: "High-energy cycling in our 30-bike Keiser studio. Climbs, sprints, and intervals set to music that drives performance. All fitness levels welcome.",
    icon: "🚴",
    color: "border-blue-500",
  },
];

export default function ClassesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "repeating-linear-gradient(-45deg, #FF4D4D 0px, #FF4D4D 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">
            55+ Classes Per Week
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-white tracking-wider mb-6">
            CLASS SCHEDULE
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Every class is coached, programmed, and designed for results. Filter
            by day, class type, or instructor to find your next session.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClassSchedule />
        </div>
      </section>

      {/* Class Types */}
      <section className="py-20 bg-brand-dark border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Discipline Breakdown
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white tracking-wider">
              WHAT WE TRAIN
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {classDescriptions.map((cls) => (
              <div
                key={cls.name}
                className={`bg-brand-black border ${cls.color}/30 hover:${cls.color}/60 transition-colors p-6 group`}
              >
                <span className="text-3xl block mb-4">{cls.icon}</span>
                <h3 className="font-heading text-2xl text-white tracking-wide mb-3 group-hover:text-brand-red transition-colors">
                  {cls.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Booking Policy",
                desc: "Reserve your spot up to 7 days in advance. Cancellations must be made 4 hours before class.",
              },
              {
                title: "Capacity Limits",
                desc: "All classes have maximum capacity for safety. When full, join the waitlist — spots often open.",
              },
              {
                title: "Arrive Early",
                desc: "Arrive 5–10 minutes before class for check-in and warm-up prep. Late arrivals may not be admitted.",
              },
              {
                title: "What to Bring",
                desc: "Athletic shoes, water bottle, and a towel. All equipment is provided. Lockers available at the front desk.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-dark border border-brand-muted/30 p-6">
                <h3 className="font-heading text-lg text-brand-gold tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "repeating-linear-gradient(-45deg, #000 0px, #000 1px, transparent 1px, transparent 50px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wider mb-5">
            YOUR FIRST CLASS IS FREE
          </h2>
          <p className="text-red-200 max-w-xl mx-auto mb-8">
            Not sure which class to start with? Book a free trial and one of our
            coaches will match you to the perfect session.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-brand-red font-bold uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors"
          >
            Book Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
