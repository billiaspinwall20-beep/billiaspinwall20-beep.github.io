import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Mac & Cheese Speech & Feeding Therapy" },
      { name: "description", content: "Answers about waitlists, superbills, in-home sessions, and what to expect from Mac & Cheese Speech & Feeding Therapy." },
      { property: "og:title", content: "FAQ — Mac & Cheese Speech & Feeding Therapy" },
      { property: "og:description", content: "Common questions about in-home pediatric speech & feeding therapy." },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "My child is already on the Early Intervention waitlist — should I still reach out?",
    a: "Yes! Many families work with us while waiting for EI, or instead of EI entirely. The 0–3 window is short, and starting now matters more than waiting for a particular program."
  },
  {
    q: "Do you take insurance?",
    a: "Mac & Cheese is private-pay only, but we provide detailed superbills for every session. You can submit these to your insurance for out-of-network reimbursement (the amount reimbursed depends on your plan)."
  },
  {
    q: "What is a superbill?",
    a: "It's an itemized receipt with the diagnostic and procedure codes your insurance needs. You submit it yourself, and many plans reimburse a percentage of the visit."
  },
  {
    q: "Where do sessions happen?",
    a: "In your home — living room, kitchen, bedroom, wherever your child is most comfortable. For feeding therapy, we usually work in your kitchen or at the family table."
  },
  {
    q: "What neighborhoods do you serve?",
    a: "We serve families throughout NYC. Reach out and we'll confirm we can come to you."
  },
  {
    q: "How long are sessions?",
    a: "60 minutes once a week, with a few minutes at the end to coach you on what to try during the week."
  },
  {
    q: "What ages do you see?",
    a: "Birth through age 3. This is the sweet spot for early intervention work — and the moment when therapy can make the biggest difference."
  },
  {
    q: "Do I need a referral or diagnosis first?",
    a: "Nope. You can reach out directly — just book a free 15-minute call to get started."
  },
];

function Faq() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-plum">FAQ</span>
        <h1 className="mt-3 font-display text-5xl text-plum-deep">Questions parents ask.</h1>
        <p className="mt-4 text-lg text-foreground/80">Don't see yours? <Link to="/contact" className="font-semibold text-plum-deep underline">Reach out anytime.</Link></p>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group soft-card p-6 open:bg-accent/40 transition-colors">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-display text-lg text-plum-deep">
                {f.q}
                <span className="text-plum text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-foreground/85">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </Layout>
  );
}
