import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MessageCircle, Utensils, Home, FileText, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Speech & Feeding Therapy for NYC kids 0–3" },
      { name: "description", content: "In-home speech and feeding therapy for NYC kids 0–3. Evaluations, weekly sessions, parent coaching, and superbills." },
      { property: "og:title", content: "Services — Mac & Cheese Speech & Feeding Therapy" },
      { property: "og:description", content: "In-home pediatric speech & feeding therapy in NYC." },
    ],
  }),
  component: Services,
});

const features = [
  { icon: Home, t: "100% in-home", d: "Sessions happen in your child's most comfortable environment — your home." },
  { icon: Users, t: "Parent coaching", d: "Every session ends with strategies you can use throughout the week." },
  { icon: FileText, t: "Superbills provided", d: "Detailed superbills so you can request out-of-network reimbursement." },
  { icon: CheckCircle2, t: "No waitlists", d: "Start within weeks, not months. Your child's window matters." },
];

function Services() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-plum">Services</span>
          <h1 className="mt-3 font-display text-5xl text-plum-deep">Warm, play-based therapy that fits your family.</h1>
          <p className="mt-5 text-lg text-foreground/80">
            Specializing in speech &amp; feeding therapy for NYC kids ages 0–3, all delivered in your home.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <article className="soft-card p-8">
            <div className="w-12 h-12 rounded-2xl bg-plum/10 text-plum grid place-items-center"><MessageCircle className="size-6" /></div>
            <h2 className="mt-4 font-display text-3xl text-plum-deep">Speech Therapy</h2>
            <p className="mt-2 text-foreground/80">For late talkers, early communicators, and everyone working on understanding and being understood.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Late talkers &amp; first-word coaching</li>
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Receptive language (following directions, understanding)</li>
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Expressive language (words, phrases, sentences)</li>
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Gestures, imitation &amp; early social communication</li>
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Early speech sound development</li>
            </ul>
          </article>
          <article className="soft-card p-8">
            <div className="w-12 h-12 rounded-2xl bg-noodle/30 text-plum-deep grid place-items-center"><Utensils className="size-6" /></div>
            <h2 className="mt-4 font-display text-3xl text-plum-deep">Feeding Therapy</h2>
            <p className="mt-2 text-foreground/80">For picky eaters, mealtime meltdowns, and families who dread the dinner table.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Extreme picky eating &amp; food refusal</li>
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Avoidance of entire food groups</li>
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Mealtime behaviors &amp; tantrums</li>
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Transitions: bottle → cup, purée → solids</li>
              <li className="flex gap-2"><CheckCircle2 className="size-4 text-plum mt-0.5 shrink-0" /> Oral-motor skills, chewing &amp; safe swallowing</li>
            </ul>
          </article>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl text-plum-deep text-center">What's included</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t} className="soft-card p-6">
                <Icon className="size-6 text-plum" />
                <div className="mt-3 font-bold text-plum-deep">{t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
