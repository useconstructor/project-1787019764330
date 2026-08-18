import ContactForm from "@/components/ContactForm";

const hours = [
  { day: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
  { day: "Saturday", time: "6:00 AM – 10:00 PM" },
  { day: "Sunday", time: "6:00 AM – 10:00 PM" },
  { day: "Public Holidays", time: "8:00 AM – 6:00 PM" },
];

const contactDetails = [
  { label: "Address", value: "247 Iron Peak Boulevard, Manhattan, NY 10001", icon: "📍" },
  { label: "Phone", value: "+1 (212) 555-0247", icon: "📞" },
  { label: "Email", value: "forge@ironpeak.com", icon: "✉️" },
  { label: "Instagram", value: "@ironpeakgym", icon: "📸" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "repeating-linear-gradient(45deg, #FF4D4D 0px, #FF4D4D 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Your First Class is Free
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-white tracking-wider mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Book your free trial class, ask about membership plans, or just come
            in for a tour. We&apos;re here to help you take the first step.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="font-heading text-3xl text-white tracking-wider mb-2">
                  BOOK YOUR FREE TRIAL
                </h2>
                <p className="text-gray-400 text-sm">
                  Fill out the form and a coach will reach out within 24 hours to
                  confirm your session.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="bg-brand-dark border border-brand-muted/30 p-7">
                <h3 className="font-heading text-xl text-white tracking-wider mb-5">
                  CONTACT INFO
                </h3>
                <div className="space-y-4">
                  {contactDetails.map((d) => (
                    <div key={d.label} className="flex items-start gap-4">
                      <span className="text-xl mt-0.5 shrink-0">{d.icon}</span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5">
                          {d.label}
                        </p>
                        <p className="text-gray-200 text-sm">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-brand-dark border border-brand-muted/30 p-7">
                <h3 className="font-heading text-xl text-white tracking-wider mb-5">
                  OPERATING HOURS
                </h3>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between items-center pb-3 border-b border-brand-muted/20 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-400 text-sm">{h.day}</span>
                      <span className="text-white text-sm font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-brand-dark border border-brand-muted/30 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-brand-muted to-brand-black relative flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <p className="font-heading text-xl text-white tracking-wider">
                      IRON PEAK GYM
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      247 Iron Peak Blvd, Manhattan
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 text-center">
                    2 blocks from Penn Station · Parking available on site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-brand-dark border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl text-white tracking-wider text-center mb-10">
            WHAT TO EXPECT
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Book Online",
                desc: "Fill out the form above or call us. We'll match you with the right class for your fitness level.",
              },
              {
                step: "02",
                title: "Meet Your Coach",
                desc: "Arrive 10 minutes early. Your coach will walk you through the facility and warm you up.",
              },
              {
                step: "03",
                title: "Take the Class",
                desc: "Push hard, have fun, and discover what Iron Peak training feels like firsthand.",
              },
              {
                step: "04",
                title: "Choose Your Plan",
                desc: "Love it? We'll help you pick the membership tier that fits your goals and schedule.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="font-heading text-6xl text-brand-red/20 tracking-wider mb-3">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
