import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "$39",
    period: "/month",
    tagline: "Build your foundation",
    color: "border-brand-muted/40",
    highlight: false,
    badge: null,
    features: [
      { text: "Gym access Mon–Fri (6 AM – 9 PM)", included: true },
      { text: "Weight floor & cardio access", included: true },
      { text: "2 group classes per week", included: true },
      { text: "Locker room access", included: true },
      { text: "Member app & class booking", included: true },
      { text: "Nutrition consultation", included: false },
      { text: "Unlimited group classes", included: false },
      { text: "Personal training sessions", included: false },
      { text: "Recovery room access", included: false },
      { text: "Guest passes (2/month)", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$69",
    period: "/month",
    tagline: "The complete gym experience",
    color: "border-brand-red",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Full gym access 7 days a week", included: true },
      { text: "Weight floor & cardio access", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "Locker room access", included: true },
      { text: "Member app & class booking", included: true },
      { text: "Nutrition consultation (1/month)", included: true },
      { text: "Recovery room access", included: true },
      { text: "Personal training sessions", included: false },
      { text: "Guest passes (2/month)", included: false },
      { text: "Priority class booking", included: false },
    ],
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    tagline: "Train like a professional",
    color: "border-brand-gold/60",
    highlight: false,
    badge: "Premium",
    features: [
      { text: "Full gym access 7 days a week", included: true },
      { text: "Weight floor & cardio access", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "Locker room access", included: true },
      { text: "Member app & class booking", included: true },
      { text: "Nutrition consultation (monthly)", included: true },
      { text: "Recovery room access", included: true },
      { text: "2 personal training sessions/month", included: true },
      { text: "Guest passes (2/month)", included: true },
      { text: "Priority class booking", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Is there a sign-up fee?",
    a: "No sign-up fees, ever. Your first month is just the plan price, and you can cancel anytime.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes. Pro and Elite members can freeze their membership for up to 3 months per year at no cost.",
  },
  {
    q: "What happens if I want to upgrade?",
    a: "You can upgrade your plan at any time. The difference is prorated for the current month.",
  },
  {
    q: "Are contracts required?",
    a: "All plans are month-to-month with no long-term contracts. Cancel with 30 days notice.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 pt-28 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "repeating-linear-gradient(-45deg, #FFD700 0px, #FFD700 1px, transparent 1px, transparent 50px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Invest in Yourself
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-white tracking-wider mb-6">
            MEMBERSHIP PLANS
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing. No hidden fees. Choose the plan that fits your
            goals and budget &mdash; every tier is designed to get you results.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border-2 ${plan.color} ${
                  plan.highlight
                    ? "bg-brand-dark shadow-[0_0_40px_rgba(255,77,77,0.15)]"
                    : "bg-brand-dark/50"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-widest whitespace-nowrap ${
                      plan.highlight
                        ? "bg-brand-red text-white"
                        : "bg-brand-gold text-black"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="font-heading text-3xl text-white tracking-wider mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">{plan.tagline}</p>

                  <div className="flex items-end gap-1 mb-8">
                    <span
                      className={`font-heading text-6xl tracking-wider ${
                        plan.highlight ? "text-brand-red" : "text-white"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-400 mb-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 shrink-0 ${
                            f.included ? "text-emerald-400" : "text-gray-700"
                          }`}
                        >
                          {f.included ? "&#10003;" : "&#10007;"}
                        </span>
                        <span
                          className={f.included ? "text-gray-300" : "text-gray-600"}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full py-4 text-center font-bold uppercase tracking-widest text-sm transition-colors ${
                      plan.highlight
                        ? "bg-brand-red text-white hover:bg-[#e03030]"
                        : "border border-brand-muted/50 text-gray-300 hover:border-brand-red hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-8">
            All plans include a 3-day free trial. Cancel anytime. No contracts.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl text-white tracking-wider text-center mb-10">
            FULL COMPARISON
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-muted/30">
                  <th className="text-left py-4 px-4 text-gray-400 font-normal uppercase tracking-widest text-xs">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center font-heading text-lg text-gray-300 tracking-wider">
                    Basic
                  </th>
                  <th className="py-4 px-4 text-center font-heading text-lg text-brand-red tracking-wider">
                    Pro
                  </th>
                  <th className="py-4 px-4 text-center font-heading text-lg text-brand-gold tracking-wider">
                    Elite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-muted/20">
                {[
                  ["Gym Access Hours", "Weekdays Only", "7 Days/Week", "7 Days/Week"],
                  ["Group Classes", "2/week", "Unlimited", "Unlimited"],
                  ["Nutrition Consult", "—", "1/month", "Monthly"],
                  ["Personal Training", "—", "—", "2/month"],
                  ["Recovery Room", "—", "✓", "✓"],
                  ["Guest Passes", "—", "—", "2/month"],
                  ["Priority Booking", "—", "—", "✓"],
                  ["Price", "$39/mo", "$69/mo", "$99/mo"],
                ].map(([feature, basic, pro, elite]) => (
                  <tr key={feature} className="hover:bg-brand-muted/10 transition-colors">
                    <td className="py-3.5 px-4 text-gray-400">{feature}</td>
                    <td className="py-3.5 px-4 text-center text-gray-400">{basic}</td>
                    <td className="py-3.5 px-4 text-center text-gray-200">{pro}</td>
                    <td className="py-3.5 px-4 text-center text-brand-gold font-medium">{elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl text-white tracking-wider text-center mb-10">
            FREQUENTLY ASKED
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border border-brand-muted/30 p-6 hover:border-brand-red/30 transition-colors"
              >
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-5xl text-white tracking-wider mb-4">
            START WITH A FREE TRIAL
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Not ready to commit? Try any class free &mdash; no credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-brand-red text-white font-bold uppercase tracking-widest text-sm hover:bg-[#e03030] transition-colors"
            >
              Book Free Trial
            </Link>
            <Link
              href="/classes"
              className="px-10 py-4 border border-brand-muted/40 text-gray-300 font-bold uppercase tracking-widest text-sm hover:border-white hover:text-white transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
