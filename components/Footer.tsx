import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-muted/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-0.5 mb-5">
              <span className="font-heading text-3xl text-brand-red tracking-widest">IRON</span>
              <span className="font-heading text-3xl text-brand-gold tracking-widest">PEAK</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Forge your limits. Iron Peak is where champions are made — state-of-the-art facilities, world-class coaching, and a community that pushes you to be your best.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-gold tracking-widest mb-5">Navigate</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/classes", label: "Classes" },
                { href: "/membership", label: "Membership" },
                { href: "/trainers", label: "Trainers" },
                { href: "/facilities", label: "Facilities" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-gold tracking-widest mb-5">Classes</h3>
            <ul className="space-y-3">
              {[
                "HIIT Training",
                "Power Lifting",
                "Boxing & MMA",
                "Yoga Flow",
                "Spin Cycle",
                "Functional Fitness",
              ].map((cls) => (
                <li key={cls}>
                  <Link
                    href="/classes"
                    className="text-sm text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {cls}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-gold tracking-widest mb-5">Find Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>247 Iron Peak Boulevard</p>
              <p>Manhattan, New York 10001</p>
              <p className="mt-4">
                <a href="tel:+12125550247" className="hover:text-brand-red transition-colors">
                  +1 (212) 555-0247
                </a>
              </p>
              <p>
                <a
                  href="mailto:forge@ironpeak.com"
                  className="hover:text-brand-red transition-colors"
                >
                  forge@ironpeak.com
                </a>
              </p>
              <div className="mt-4 pt-4 border-t border-brand-muted/30">
                <p className="text-white font-medium mb-2">Hours</p>
                <p>Mon &ndash; Fri: 5:00 AM &ndash; 11:00 PM</p>
                <p>Sat &ndash; Sun: 6:00 AM &ndash; 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-muted/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>&copy; 2025 Iron Peak Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-red transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-red transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
