"use client";

import { useState } from "react";
import { schedule, classTypes, instructors, days, type ClassEvent } from "@/app/data/schedule";

function parseTime(t: string): number {
  const [time, meridiem] = t.split(" ");
  const [h, m] = time.split(":").map(Number);
  return (meridiem === "PM" && h !== 12 ? h + 12 : meridiem === "AM" && h === 12 ? 0 : h) * 60 + m;
}

const typeColors: Record<string, string> = {
  HIIT: "bg-orange-500/10 text-orange-400",
  Powerlifting: "bg-brand-gold/10 text-brand-gold",
  Boxing: "bg-purple-500/10 text-purple-400",
  Yoga: "bg-teal-500/10 text-teal-400",
  Cycling: "bg-blue-500/10 text-blue-400",
  Functional: "bg-green-500/10 text-green-400",
  Bootcamp: "bg-red-700/10 text-red-300",
  CrossFit: "bg-brand-red/10 text-brand-red",
};

const levelColors: Record<string, string> = {
  Beginner: "text-green-400 border-green-400/30 bg-green-400/10",
  Intermediate: "text-brand-gold border-brand-gold/30 bg-brand-gold/10",
  Advanced: "text-brand-red border-brand-red/30 bg-brand-red/10",
  "All Levels": "text-blue-400 border-blue-400/30 bg-blue-400/10",
};

function CapacityBar({ capacity, enrolled }: { capacity: number; enrolled: number }) {
  const pct = Math.round((enrolled / capacity) * 100);
  const isFull = enrolled >= capacity;
  const isAlmostFull = pct >= 80;
  return (
    <div className="mt-3">
      <div className="flex justify-between text-xs mb-1.5">
        <span className={isFull ? "text-brand-red font-bold" : isAlmostFull ? "text-brand-gold" : "text-gray-500"}>
          {isFull ? "FULL" : `${enrolled}/${capacity} spots`}
        </span>
        <span className={isFull ? "text-brand-red" : isAlmostFull ? "text-brand-gold" : "text-gray-600"}>
          {pct}%
        </span>
      </div>
      <div className="h-1.5 bg-brand-muted/40 w-full">
        <div
          className={`h-full transition-all duration-300 ${
            isFull ? "bg-brand-red" : isAlmostFull ? "bg-brand-gold" : "bg-green-500"
          }`}
          style={{ width: `${Math.min(100, pct)}%` }}
        />
      </div>
    </div>
  );
}

function ClassCard({ event }: { event: ClassEvent }) {
  const isFull = event.enrolled >= event.capacity;
  const [waitlisted, setWaitlisted] = useState(false);
  const [booked, setBooked] = useState(false);

  return (
    <div className="bg-brand-dark border border-brand-muted/30 hover:border-brand-red/30 transition-colors p-4 group">
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-heading text-lg text-white tracking-wide group-hover:text-brand-red transition-colors leading-tight">
          {event.name}
        </span>
        <span className="text-xs font-bold text-white shrink-0 bg-brand-muted/30 px-2 py-0.5 tabular-nums whitespace-nowrap">
          {event.time}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2">
        <span className={`text-xs px-2 py-0.5 border ${levelColors[event.level] ?? "text-gray-400 border-gray-700 bg-gray-800"}`}>
          {event.level}
        </span>
        <span className={`text-xs px-2 py-0.5 ${typeColors[event.type] ?? "text-gray-400 bg-gray-500/10"}`}>
          {event.type}
        </span>
      </div>

      <p className="text-xs text-gray-500">
        {event.instructor} &middot; {event.duration} min &middot; {event.room}
      </p>

      <CapacityBar capacity={event.capacity} enrolled={event.enrolled} />

      <button
        onClick={() => isFull ? setWaitlisted(!waitlisted) : setBooked(!booked)}
        className={`mt-3 w-full py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
          isFull
            ? waitlisted
              ? "bg-brand-muted text-gray-400"
              : "border border-brand-red/40 text-brand-red hover:bg-brand-red hover:text-white"
            : booked
            ? "bg-green-700 text-white"
            : "bg-brand-red text-white hover:bg-[#e03030]"
        }`}
      >
        {isFull
          ? waitlisted
            ? "✓ On Waitlist"
            : "Join Waitlist"
          : booked
          ? "✓ Booked"
          : "Book Class"}
      </button>
    </div>
  );
}

export default function ClassSchedule() {
  const [activeDay, setActiveDay] = useState("Monday");
  const [activeType, setActiveType] = useState("All");
  const [activeInstructor, setActiveInstructor] = useState("All");

  const filtered = schedule
    .filter(
      (e) =>
        e.day === activeDay &&
        (activeType === "All" || e.type === activeType) &&
        (activeInstructor === "All" || e.instructor === activeInstructor)
    )
    .sort((a, b) => parseTime(a.time) - parseTime(b.time));

  return (
    <div>
      {/* Day selector */}
      <div className="flex overflow-x-auto gap-1 pb-2 mb-6">
        {days.map((day) => {
          const count = schedule.filter((e) => e.day === day).length;
          return (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`shrink-0 px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors flex flex-col items-center gap-0.5 ${
                activeDay === day
                  ? "bg-brand-red text-white"
                  : "bg-brand-dark border border-brand-muted/30 text-gray-400 hover:text-white hover:border-brand-red/40"
              }`}
            >
              <span className="hidden sm:block">{day}</span>
              <span className="sm:hidden">{day.slice(0, 3)}</span>
              <span className={`text-[10px] ${activeDay === day ? "text-red-200" : "text-gray-600"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 mb-8">
        <div>
          <label className="text-xs text-gray-600 uppercase tracking-widest block mb-2">
            Class Type
          </label>
          <div className="flex flex-wrap gap-1.5">
            {classTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeType === type
                    ? "bg-brand-red text-white"
                    : "bg-brand-dark border border-brand-muted/30 text-gray-400 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-600 uppercase tracking-widest block mb-2">
            Instructor
          </label>
          <div className="flex flex-wrap gap-1.5">
            {instructors.map((inst) => (
              <button
                key={inst}
                onClick={() => setActiveInstructor(inst)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeInstructor === inst
                    ? "bg-brand-gold text-black"
                    : "bg-brand-dark border border-brand-muted/30 text-gray-400 hover:text-white"
                }`}
              >
                {inst === "All" ? "All Instructors" : inst}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs text-gray-600 uppercase tracking-widest">
          {filtered.length} class{filtered.length !== 1 ? "es" : ""} on {activeDay}
        </p>
        {(activeType !== "All" || activeInstructor !== "All") && (
          <button
            onClick={() => { setActiveType("All"); setActiveInstructor("All"); }}
            className="text-xs text-brand-red hover:text-white transition-colors uppercase tracking-widest"
          >
            Clear filters ×
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center border border-brand-muted/20">
          <p className="font-heading text-3xl text-gray-700 tracking-wider mb-3">NO CLASSES FOUND</p>
          <p className="text-sm text-gray-600">Try different filters or select another day.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((event) => (
            <ClassCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
