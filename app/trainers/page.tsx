import Link from "next/link";

const trainers = [
  {
    name: "Marcus Rivera",
    role: "Head HIIT Coach",
    specialties: ["HIIT", "Metabolic Conditioning", "Weight Loss"],
    certs: ["NSCA-CSCS", "ACE-CPT", "Precision Nutrition L1"],
    experience: "12 years",
    bio: "Marcus transformed his own body from 280 lbs to a competition-ready physique and has dedicated his career to helping others do the same. His HIIT classes are legendary for producing rapid, lasting results.",
    accent: "from-red-950 to-brand-dark",
    initial: "MR",
    initBg: "bg-brand-red",
  },
  {
    name: "Sarah Chen",
    role: "Functional Fitness Coach",
    specialties: ["Functional Training", "Core & Mobility", "Athletic Performance"],
    certs: ["NASM-CPT", "FMS Level 2", "TRX Certified"],
    experience: "9 years",
    bio: "A former collegiate gymnast, Sarah brings an athlete's eye to movement quality. She specializes in building the foundation that makes every other aspect of training more effective.",
    accent: "from-purple-950 to-brand-dark",
    initial: "SC",
    initBg: "bg-purple-700",
  },
  {
    name: "Damon Brooks",
    role: "Strength & Olympic Lifting Coach",
    specialties: ["Power Lifting", "Olympic Lifting", "Strength Programming"],
    certs: ["USAW Level 2", "NSCA-CSCS", "StrongFirst SFG"],
    experience: "15 years",
    bio: "A national-level powerlifter with three All-American titles, Damon has coached athletes who compete from local meets to the international stage. His technical knowledge is unmatched.",
    accent: "from-yellow-950 to-brand-dark",
    initial: "DB",
    initBg: "bg-brand-gold text-black",
  },
  {
    name: "Nadia Petrov",
    role: "Yoga & Recovery Specialist",
    specialties: ["Vinyasa Yoga", "Restorative Yoga", "Breathwork & Mindfulness"],
    certs: ["RYT-500", "Yin Yoga Certified", "NASM-CES"],
    experience: "11 years",
    bio: "Nadia believes recovery is the most underrated performance variable. Her classes build the mental toughness and physical resilience that keep athletes training hard for the long haul.",
    accent: "from-teal-950 to-brand-dark",
    initial: "NP",
    initBg: "bg-teal-700",
  },
  {
    name: "Jake Torres",
    role: "Boxing & MMA Coach",
    specialties: ["Boxing Technique", "Kickboxing", "Combat Conditioning"],
    certs: ["USA Boxing Certified", "NASM-CPT", "RKC Kettlebell"],
    experience: "14 years",
    bio: "A former professional boxer with a 28-6 record, Jake retired from competition to teach the science of striking. His sessions develop technique, footwork, and the warrior mentality.",
    accent: "from-orange-950 to-brand-dark",
    initial: "JT",
    initBg: "bg-orange-600",
  },
  {
    name: "Alicia Wells",
    role: "Cardio & Endurance Coach",
    specialties: ["Spin Cycle", "Endurance Training", "Running Coaching"],
    certs: ["Schwinn Cycling Certified", "RRCA Running Coach", "ACE-CPT"],
    experience: "8 years",
    bio: "An Ironman finisher and Boston Marathon qualifier, Alicia understands what it takes to push past limits. Her classes build cardiovascular capacity that translates to real-world performance.",
    accent: "from-blue-950 to-brand-dark",
    initial: "AW",
    initBg: "bg-blue-700",
  },
];

export default function TrainersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "repeating-linear-gradient(135deg, #FF4D4D 0px, #FF4D4D 1px, transparent 1px, transparent 50px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">
            World-Class Coaching
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-white tracking-wider mb-6">
            MEET THE COACHES
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Our coaches aren&apos;t just certified — they&apos;re competitors, champions, and
            lifelong students of their disciplines. Their expertise is your
            competitive edge.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="bg-brand-dark border border-brand-muted/30 hover:border-brand-red/40 transition-colors group overflow-hidden"
              >
                {/* Photo placeholder */}
                <div
                  className={`h-56 bg-gradient-to-br ${trainer.accent} flex items-end p-6 relative overflow-hidden`}
                >
                  <div
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-20 border-4 border-white"
                  />
                  <div
                    className={`w-16 h-16 rounded-full ${trainer.initBg} flex items-center justify-center font-heading text-2xl text-white`}
                  >
                    {trainer.initial}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="font-heading text-2xl text-white tracking-wide group-hover:text-brand-red transition-colors">
                      {trainer.name}
                    </h2>
                    <p className="text-brand-gold text-sm font-medium mt-0.5">
                      {trainer.role}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{trainer.experience} experience</p>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {trainer.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                      Specialties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 bg-brand-muted/40 text-gray-300 border border-brand-muted/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                      Certifications
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certs.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2.5 py-1 bg-brand-red/10 text-brand-red border border-brand-red/20"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Training CTA */}
      <section className="py-20 bg-brand-dark border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">
                1-on-1 Coaching
              </p>
              <h2 className="font-heading text-5xl text-white tracking-wider mb-5">
                PERSONAL TRAINING
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Take your results to the next level with a dedicated coach. Personal
                training at Iron Peak means customized programming, real-time form
                correction, and accountability that group classes can&apos;t match.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                {[
                  "Custom program designed around your specific goals",
                  "Weekly progress assessments and program adjustments",
                  "Nutrition guidance included with all PT packages",
                  "Flexible scheduling — book sessions around your life",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-red mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-widest text-sm hover:bg-[#e03030] transition-colors"
              >
                Book a Session
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Sessions Completed", value: "24,000+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Avg Weight Loss", value: "32 lbs" },
                { label: "Strength Gain", value: "+45%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-black border border-brand-muted/30 p-6 text-center"
                >
                  <p className="font-heading text-4xl text-brand-red tracking-wider mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
