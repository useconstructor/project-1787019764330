import Link from "next/link";

const facilities = [
  {
    name: "Olympic Lifting Platform",
    category: "Strength Zone",
    desc: "Four fully-equipped Olympic platforms with Rogue barbells, calibrated competition plates, and chalk buckets. Designed for serious strength athletes who demand precision.",
    features: ["4 dedicated platforms", "Rogue Ohio bars", "Calibrated plates", "Chalk & magnesium"],
    accent: "from-yellow-950 via-brand-dark to-brand-dark",
    icon: "🏋️",
  },
  {
    name: "Free Weights Floor",
    category: "Strength Zone",
    desc: "Over 10,000 sq ft of open floor space with dumbbells from 5 to 150 lbs, EZ bars, trap bars, cables, and every machine you need for complete muscle development.",
    features: ["Dumbbells 5–150 lbs", "Full cable systems", "Smith machines", "Specialty bars"],
    accent: "from-red-950 via-brand-dark to-brand-dark",
    icon: "💪",
  },
  {
    name: "Cardio Zone",
    category: "Cardio & Endurance",
    desc: "A 3,500 sq ft dedicated cardio floor with the latest treadmills, assault bikes, rowers, ski ergs, and stair climbers — all with heart-rate monitoring and entertainment screens.",
    features: ["40+ treadmills", "Assault bikes", "Concept2 rowers", "SkiErg machines"],
    accent: "from-blue-950 via-brand-dark to-brand-dark",
    icon: "🏃",
  },
  {
    name: "Group Fitness Studio",
    category: "Classes",
    desc: "A 2,000 sq ft mirrored studio with sprung hardwood floors, premium sound system, and specialized equipment for HIIT, boxing, yoga, and functional training classes.",
    features: ["Sprung hardwood floor", "Surround sound", "Battle ropes", "Heavy bags"],
    accent: "from-orange-950 via-brand-dark to-brand-dark",
    icon: "🥊",
  },
  {
    name: "Spin Studio",
    category: "Cardio & Endurance",
    desc: "A dedicated 30-bike spin studio with Keiser M3i cycles, immersive lighting system, and state-of-the-art sound for high-energy cycling classes any time of day.",
    features: ["30 Keiser M3i bikes", "Immersive lighting", "Real-time metrics", "Climate controlled"],
    accent: "from-purple-950 via-brand-dark to-brand-dark",
    icon: "🚴",
  },
  {
    name: "Recovery Suite",
    category: "Recovery",
    desc: "The most comprehensive recovery facility in Manhattan. Ice baths, infrared saunas, compression therapy, and massage guns — because training hard means recovering harder.",
    features: ["Cold plunge pools", "Infrared saunas", "Compression therapy", "Stretch zones"],
    accent: "from-teal-950 via-brand-dark to-brand-dark",
    icon: "🧊",
  },
  {
    name: "Functional Training Area",
    category: "Functional Fitness",
    desc: "Open space with monkey bars, pegboards, pull-up stations, rope climbs, sled tracks, and plyometric boxes for athletes who train for performance, not just aesthetics.",
    features: ["Sled push tracks", "Rope climbs", "Plyometric boxes", "TRX stations"],
    accent: "from-green-950 via-brand-dark to-brand-dark",
    icon: "🎯",
  },
  {
    name: "Member Lounge & Amenities",
    category: "Member Experience",
    desc: "Premium locker rooms with private showers, towel service, personal lockers, a nutrition bar serving pre- and post-workout meals, and a lounge for rest and recovery.",
    features: ["Private showers", "Towel service", "Nutrition bar", "WiFi lounge"],
    accent: "from-slate-900 via-brand-dark to-brand-dark",
    icon: "🛁",
  },
];

const specs = [
  { label: "Total Floor Space", value: "18,500 sq ft" },
  { label: "Equipment Pieces", value: "350+" },
  { label: "Group Class Studio", value: "2,000 sq ft" },
  { label: "Spin Studio Bikes", value: "30 Keiser M3i" },
  { label: "Olympic Platforms", value: "4 Full Platforms" },
  { label: "Recovery Suites", value: "Ice Bath + Sauna" },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "repeating-linear-gradient(90deg, #FFD700 0px, #FFD700 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, #FFD700 0px, #FFD700 1px, transparent 1px, transparent 80px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
            World-Class Infrastructure
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-white tracking-wider mb-6">
            OUR FACILITIES
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            18,500 square feet of premium fitness infrastructure. Every piece of
            equipment is selected for performance, durability, and serious
            training — not Instagram aesthetics.
          </p>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="py-10 bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {specs.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl md:text-3xl text-white tracking-wider">
                  {s.value}
                </p>
                <p className="text-red-200 text-xs uppercase tracking-widest mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Cards */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl text-white tracking-wider mb-10">
            EXPLORE OUR SPACES
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.name}
                className="bg-brand-dark border border-brand-muted/30 hover:border-brand-gold/30 transition-colors group overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${facility.accent} flex items-end justify-between p-6`}>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">
                      {facility.category}
                    </span>
                    <h3 className="font-heading text-2xl text-white tracking-wide group-hover:text-brand-gold transition-colors">
                      {facility.name}
                    </h3>
                  </div>
                  <span className="text-4xl">{facility.icon}</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {facility.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-xs text-gray-500"
                      >
                        <span className="text-brand-gold shrink-0">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour CTA */}
      <section className="py-20 bg-brand-dark border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
                See It in Person
              </p>
              <h2 className="font-heading text-5xl text-white tracking-wider mb-5">
                BOOK A FACILITY TOUR
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Words and photos don&apos;t do Iron Peak justice. Come in for a personal
                tour and experience the energy, the equipment, and the community
                that sets us apart. Your first class is free.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-widest text-sm hover:bg-[#e03030] transition-colors"
                >
                  Schedule Tour
                </Link>
                <Link
                  href="/membership"
                  className="px-8 py-4 border border-brand-muted/40 text-gray-300 font-bold uppercase tracking-widest text-sm hover:border-white hover:text-white transition-colors"
                >
                  View Plans
                </Link>
              </div>
            </div>

            <div className="bg-brand-black border border-brand-muted/30 p-8">
              <h3 className="font-heading text-2xl text-white tracking-wider mb-6">
                OPERATING HOURS
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday – Friday", hours: "5:00 AM – 11:00 PM" },
                  { day: "Saturday", hours: "6:00 AM – 10:00 PM" },
                  { day: "Sunday", hours: "6:00 AM – 10:00 PM" },
                  { day: "Public Holidays", hours: "8:00 AM – 6:00 PM" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-3 border-b border-brand-muted/20 last:border-0"
                  >
                    <span className="text-gray-400 text-sm">{h.day}</span>
                    <span className="text-white font-medium text-sm">{h.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-brand-red/10 border border-brand-red/20">
                <p className="text-xs text-brand-red font-bold uppercase tracking-widest mb-1">
                  24/7 Access
                </p>
                <p className="text-xs text-gray-400">
                  Elite members receive keycard access for workouts outside
                  staffed hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
