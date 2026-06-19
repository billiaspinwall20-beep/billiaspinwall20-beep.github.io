import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get Started — Mac & Cheese Speech & Feeding Therapy" },
      { name: "description", content: "Fill out our interest form to get started with Mac & Cheese Speech & Feeding Therapy in NYC." },
      { property: "og:title", content: "Get Started — Mac & Cheese Speech & Feeding Therapy" },
      { property: "og:description", content: "Fill out our interest form to get started." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    concerns: [] as string[],
    otherConcern: "",
    description: "",
    preferredDays: [] as string[],
    location: "",
    bestContact: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleConcern = (value: string) => {
    setForm((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(value)
        ? prev.concerns.filter((c) => c !== value)
        : [...prev.concerns, value],
    }));
  };

  const toggleDay = (value: string) => {
    setForm((prev) => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(value)
        ? prev.preferredDays.filter((d) => d !== value)
        : [...prev.preferredDays, value],
    }));
  };

  const toggleBestContact = (value: string) => {
    setForm((prev) => ({
      ...prev,
      bestContact: prev.bestContact.includes(value)
        ? prev.bestContact.filter((c) => c !== value)
        : [...prev.bestContact, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New interest form from ${form.parentName}`);
    const concernsList = form.concerns.join(", ") + (form.otherConcern ? `, Other: ${form.otherConcern}` : "");
    const daysList = form.preferredDays.join(", ") || "Not selected";
    const bestContactList = form.bestContact.join(", ") || "Not selected";
    const body = encodeURIComponent(
      `Parent/Guardian Name: ${form.parentName}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\nBest way to contact: ${bestContactList}\n\nChild's Name: ${form.childName || "Not provided"}\nChild's Age: ${form.childAge}\n\nAreas of Concern: ${concernsList}\n\nDescription:\n${form.description}\n\nPreferred Days:\n${daysList}\n\nLocation:\n${form.location || "Not provided"}`
    );
    window.location.href = `mailto:billiaspinwall20@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const concernOptions = [
    "Late talker / limited words",
    "Difficulty with sounds/pronunciation",
    "Picky eating / food refusal",
    "Gagging, coughing, or choking with food",
    "Transitioning to solids",
    "Feeding therapy / oral motor",
  ];

  const bestContactOptions = ["Email", "Text", "Phone call"];

  if (submitted) {
    return (
      <Layout>
        <section className="mx-auto max-w-2xl px-5 py-20 md:py-28 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-plum-deep">Thanks, we got it!</h1>
          <p className="mt-4 text-lg text-foreground/80">
            We'll review your form and reach out within 1–2 business days to schedule an evaluation.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            If you don't hear from us, feel free to email{" "}
            <a href="mailto:billiaspinwall20@gmail.com" className="text-plum-deep font-semibold hover:underline">
              billiaspinwall20@gmail.com
            </a>
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24 grid md:grid-cols-[1.2fr_1fr] gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-plum">Get Started</span>
          <h1 className="mt-3 font-display text-5xl text-plum-deep">Tell us about your child.</h1>
          <p className="mt-4 text-lg text-foreground/80">
            Fill out this quick interest form and we'll review it to get you scheduled for an evaluation.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-bold text-plum-deep mb-1.5">Your name *</label>
              <input
                required maxLength={100}
                value={form.parentName}
                onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                placeholder="Jane Smith"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-plum-deep mb-1.5">Email *</label>
                <input
                  required type="email" maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-plum-deep mb-1.5">Phone</label>
                <input
                  type="tel" maxLength={40}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-plum-deep mb-2">What is the best way to contact you?</label>
              <div className="flex flex-wrap gap-2">
                {bestContactOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleBestContact(opt)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      form.bestContact.includes(opt)
                        ? "bg-plum text-white border-plum"
                        : "border-border bg-card text-foreground hover:border-plum/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-plum-deep mb-1.5">Child's name</label>
                <input
                  maxLength={100}
                  value={form.childName}
                  onChange={(e) => setForm({ ...form, childName: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Emma"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-plum-deep mb-1.5">Child's age *</label>
                <input
                  required maxLength={40}
                  value={form.childAge}
                  onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. 22 months"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-plum-deep mb-2">What are you noticing? * (select all that apply)</label>
              <div className="flex flex-wrap gap-2">
                {concernOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleConcern(opt)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      form.concerns.includes(opt)
                        ? "bg-plum text-white border-plum"
                        : "border-border bg-card text-foreground hover:border-plum/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <input
                maxLength={200}
                value={form.otherConcern}
                onChange={(e) => setForm({ ...form, otherConcern: e.target.value })}
                className="mt-3 w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                placeholder="Other (describe)"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-plum-deep mb-1.5">Tell us more *</label>
              <textarea
                required maxLength={1500} rows={4}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="A brief description of what you're seeing — when it started, how often, anything you've tried, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-plum-deep mb-2">Preferred day(s) for evaluation</label>
              <div className="flex flex-wrap gap-2">
                {["Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleDay(day)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      form.preferredDays.includes(day)
                        ? "bg-plum text-white border-plum"
                        : "border-border bg-card text-foreground hover:border-plum/40"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Evaluations are scheduled between 9am and 3pm.</p>
            </div>

            <div>
              <label className="block text-sm font-bold text-plum-deep mb-1.5">Where are you located?</label>
              <input
                maxLength={200}
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g. Upper West Side, Brooklyn, Astoria"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-pop hover:bg-plum-deep transition-colors"
            >
              Submit interest form
            </button>
          </form>
        </div>

        <aside className="rounded-3xl bg-accent p-8 h-fit">
          <h2 className="font-display text-2xl text-plum-deep">What happens next?</h2>
          <ol className="mt-5 space-y-3 text-sm list-decimal list-inside text-foreground/80">
            <li>We review your form within 1–2 business days.</li>
            <li>If we're a good fit, we reach out to schedule an initial evaluation.</li>
            <li>We meet in your home and get started.</li>
          </ol>

          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3"><Mail className="size-5 text-plum mt-0.5" />
              <a href="mailto:billiaspinwall20@gmail.com" className="font-semibold text-plum-deep hover:underline">billiaspinwall20@gmail.com</a>
            </li>
            <li className="flex gap-3"><MapPin className="size-5 text-plum mt-0.5" />
              <span className="text-foreground/80">Serving families throughout NYC</span>
            </li>
          </ul>
        </aside>
      </section>
    </Layout>
  );
}
