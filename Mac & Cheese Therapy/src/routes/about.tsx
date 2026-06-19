import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mac & Cheese Speech & Feeding Therapy" },
      { name: "description", content: "Meet the speech-language pathologist behind Mac & Cheese — an in-home pediatric practice in NYC." },
      { property: "og:title", content: "About — Mac & Cheese Speech & Feeding Therapy" },
      { property: "og:description", content: "Meet the SLP behind Mac & Cheese." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-plum">About</span>
        <h1 className="mt-3 font-display text-5xl text-plum-deep">Comfort-food therapy for tiny humans.</h1>
        <p className="mt-5 text-base text-foreground/80">
          Mac &amp; Cheese was born from a simple idea: getting your child the help they need shouldn't feel
          intimidating, clinical, or impossible to access. I'm a licensed speech-language pathologist
          serving families across NYC, right in your home, where your child already feels safe.
        </p>

        <div className="mt-10 space-y-4 text-base text-foreground/85">
          <p>
            Too many families spend months on Early Intervention waitlists — or never get the call back.
            Meanwhile, the 0–3 window is when therapy is most powerful. I started this practice to bridge
            that gap, offering warm, play-based, parent-coaching-rich sessions that fit into your everyday
            routines.
          </p>
          <p>
            Whether your toddler isn't using words yet, refuses every food except crackers, melts down at
            mealtimes, or you just have a gut feeling something's off — you're in the right place.
          </p>
          <p>
            Sessions are private pay only, and I provide detailed superbills so you can request out-of-network
            reimbursement from your insurance.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-accent p-8">
          <h2 className="font-display text-2xl text-plum-deep">My approach</h2>
          <ul className="mt-4 space-y-3 text-base text-foreground/85">
            <li><strong>Play first.</strong> Therapy that looks like fun — because that's how little kids learn.</li>
            <li><strong>Family-coached.</strong> You're with your child 168 hours a week. I'll show you what works.</li>
            <li><strong>In your home.</strong> Real routines, real foods, real toys — not a sterile clinic.</li>
            <li><strong>No judgment.</strong> Parenting is hard. I'm here to help, not to grade you.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
