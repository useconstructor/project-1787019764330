"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Member since 2022",
    text: "Iron Peak completely transformed my life. The trainers don't just count reps — they build champions. I lost 45 lbs and gained the confidence I never thought I'd have.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Sarah Kim",
    role: "Member since 2021",
    text: "The HIIT classes here are insane in the best possible way. Coach Rivera pushes you to your absolute limit. Best investment I've ever made in myself.",
    rating: 5,
    initial: "S",
  },
  {
    name: "David Torres",
    role: "Member since 2023",
    text: "The facilities are world-class. The Olympic platform, the equipment, the atmosphere — everything is designed to make you perform at your peak. No other gym comes close.",
    rating: 5,
    initial: "D",
  },
  {
    name: "Alexis Morgan",
    role: "Member since 2022",
    text: "I was intimidated at first, but the community here is incredible. Everyone pushes each other up. The programming is intelligent, progressive, and it actually works.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Chris Nakamura",
    role: "Member since 2020",
    text: "Four years strong at Iron Peak. The trainers know their stuff — real science, real results. My lifts have skyrocketed and I've never felt better at 38.",
    rating: 5,
    initial: "C",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <div className="relative">
      <div className="bg-brand-dark border border-brand-muted/30 p-8 md:p-10 relative overflow-hidden">
        <div className="absolute top-4 left-6 font-heading text-[120px] leading-none text-brand-red/10 select-none pointer-events-none">
          &ldquo;
        </div>
        <div className="relative z-10">
          <div className="flex gap-0.5 mb-5">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-brand-gold text-lg">
                &#9733;
              </span>
            ))}
          </div>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-7 italic">
            &ldquo;{t.text}&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center font-heading text-xl text-white shrink-0">
              {t.initial}
            </div>
            <div>
              <p className="font-bold text-white">{t.name}</p>
              <p className="text-sm text-brand-red">{t.role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-brand-red w-8" : "bg-brand-muted w-4"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 border border-brand-muted/40 text-gray-400 hover:text-white hover:border-brand-red transition-colors flex items-center justify-center text-sm"
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="w-9 h-9 border border-brand-muted/40 text-gray-400 hover:text-white hover:border-brand-red transition-colors flex items-center justify-center text-sm"
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
