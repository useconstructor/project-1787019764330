"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  date: string;
  message: string;
};

const classOptions = [
  "HIIT Training",
  "Powerlifting",
  "Boxing",
  "Yoga Flow",
  "Spin Cycle",
  "Functional Fitness",
  "Bootcamp",
  "Not sure yet",
];

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  date: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.interest) e.interest = "Please select a class";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-brand-dark border border-green-500/30 p-10 text-center">
        <div className="text-5xl mb-5">✓</div>
        <h3 className="font-heading text-3xl text-white tracking-wider mb-3">
          WE&apos;LL BE IN TOUCH
        </h3>
        <p className="text-gray-400 leading-relaxed max-w-md mx-auto mb-6">
          Your free trial is confirmed. A coach will reach out within 24 hours
          to set up your session. Get ready to work.
        </p>
        <button
          onClick={() => { setForm(initialState); setSubmitted(false); }}
          className="text-xs text-brand-red hover:text-white transition-colors uppercase tracking-widest"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormState) =>
    `w-full bg-brand-black border ${
      errors[field] ? "border-brand-red/60" : "border-brand-muted/40"
    } px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Alex Johnson"
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="text-xs text-brand-red mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="alex@example.com"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="text-xs text-brand-red mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (212) 555-0000"
            className={inputClass("phone")}
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className={inputClass("date") + " [color-scheme:dark]"}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
          Class Interest <span className="text-brand-red">*</span>
        </label>
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className={inputClass("interest")}
        >
          <option value="">Select a class type</option>
          {classOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.interest && (
          <p className="text-xs text-brand-red mt-1">{errors.interest}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your fitness goals, experience level, or any questions..."
          className={inputClass("message") + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-brand-red text-white font-bold uppercase tracking-widest text-sm hover:bg-[#e03030] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Book Free Trial Class"}
      </button>

      <p className="text-xs text-gray-600 text-center mt-3">
        No credit card required. We&apos;ll confirm within 24 hours.
      </p>
    </form>
  );
}
