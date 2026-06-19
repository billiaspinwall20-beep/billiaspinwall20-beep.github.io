import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import billiAsset from "@/assets/billi.jpeg.asset.json";
import macLogo from "@/assets/mac_logo.png";
import { ArrowRight, HelpCircle, Plus, Minus, CheckCircle2, MessageCircle, Utensils } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mac & Cheese — In-home Speech & Feeding Therapy in NYC" },
      { name: "description", content: "In-home speech and feeding therapy for NYC kids ages 0–3. No waitlists. Private pay with superbills." },
    ],
  }),
  component: Index,
});

const serviceCards = [
  {
    id: "speech",
    icon: MessageCircle,
    title: "Speech & Language",
    short: "Late talkers, gestures, understanding directions, and building first words into phrases.",
    bullets: [
      "Late talkers & first-word support",
      "Receptive language: following directions, understanding",
      "Expressive language: words, phrases, sentences",
      "Gestures, imitation & social communication",
      "Early speech sounds",
    ],
  },
  {
    id: "feeding",
    icon: Utensils,
    title: "Feeding Therapy",
    short: "Picky eating, food refusal, mealtime behaviors, and safe oral-motor skills.",
    bullets: [
      "Extreme picky eating & food refusal",
      "Avoidance of entire food groups",
      "Mealtime behaviors & tantrums",
      "Bottle → cup, purée → solids transitions",
      "Oral-motor skills, chewing & safe swallowing",
    ],
  },
];

function Index() {
  const [openCard, setOpenCard] = useState<string | null>("speech");
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <Layout className="bg-cheddar text-white">
      {/* Hero — full viewport height on desktop */}
      <section className="mx-auto max-w-5xl px-6 md:min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-8 pb-16 text-center">
        <img
          src={macLogo}
          alt="Mac & Cheese — Speech & Feeding Therapy logo"
          className="mx-auto w-20 md:w-24 h-auto select-none pointer-events-none"
        />

        <h1 className="mt-8 flex flex-col items-center leading-none">
          <span className="font-hand text-5xl md:text-6xl text-cheddar-deep">mac &amp; cheese</span>
          <span className="font-display text-sm md:text-base tracking-[0.22em] uppercase text-white mt-2">speech &amp; feeding therapy</span>
        </h1>

        <p className="mt-4 text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed">
          Private speech, language, and feeding therapy provided in the comfort of your own home for children ages 0–3 in New York City.
        </p>

        <div className="mt-8 mx-auto h-px w-16 bg-white/40" />

        <div className="mt-8 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-cheddar-deep hover:bg-white/90 transition-colors"
          >
            Get started <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Bullets — evenly spaced across the section */}
        <ul className="mt-12 flex items-center justify-between max-w-3xl mx-auto w-full text-base md:text-lg text-white/90 px-4">
          <li className="flex items-center gap-2 italic font-bold">
            <span className="size-1.5 rounded-full bg-white/90" />
            Licensed SLP
          </li>
          <li className="flex items-center gap-2 italic font-bold">
            <span className="size-1.5 rounded-full bg-white/90" />
            Private Pay
          </li>
          <li className="flex items-center gap-2 italic font-bold">
            <span className="size-1.5 rounded-full bg-white/90" />
            NYC Based
          </li>
        </ul>
      </section>

      {/* Hey, so glad you're here! */}
      <section className="bg-white text-ink">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2">
          <div className="px-6 py-12 md:py-16 flex flex-col justify-center">
            <h2 className="font-hand text-3xl md:text-4xl text-cheddar-deep">hey, so glad you're here! 👋</h2>
            <p className="mt-4 text-base md:text-lg text-ink/85 leading-relaxed">
              I'm Billi, a speech-language pathologist with over 5 years of experience working with babies and toddlers, and the person behind Mac &amp; Cheese — Speech &amp; Feeding Therapy. I started this practice because I kept hearing the same thing from families: the waitlists are too long, the clinic is far.
            </p>
            <p className="mt-4 text-base md:text-lg text-ink/85 leading-relaxed">
              So I come to you instead. Therapy happens on your living room floor, with your kid's favorite toys, in the environment where they actually learn best. No commute, no waiting room, no rushing out the door with a snack and a stroller.
            </p>
            <p className="mt-4 text-base md:text-lg text-ink/85 leading-relaxed">
              Just really good therapy, right at home. I'd love to work with your family! Keep scrolling to learn more :).
            </p>
          </div>
          <div className="relative min-h-[320px] md:min-h-full">
            <img
              src={billiAsset.url}
              alt="Billi, speech-language pathologist and founder of Mac & Cheese"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* What we can help with */}
      <section className="bg-[#FFF8F0] text-ink py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center font-hand text-3xl md:text-4xl text-cheddar-deep">what we can help with</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {serviceCards.map(({ id, icon: Icon, title, short, bullets }) => {
              const isOpen = openCard === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setOpenCard(isOpen ? null : id)}
                  className={`text-left rounded-2xl border transition-all p-6 md:p-8 ${
                    isOpen
                      ? "border-cheddar/40 bg-white shadow-sm"
                      : "border-transparent bg-white/70 hover:bg-white/90"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 ${isOpen ? "bg-cheddar/15 text-cheddar-deep" : "bg-cheddar/10 text-cheddar"}`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-xl md:text-2xl text-ink">{title}</h3>
                        {isOpen ? <Minus className="size-5 text-cheddar-deep shrink-0" /> : <Plus className="size-5 text-cheddar shrink-0" />}
                      </div>
                      <p className="text-sm text-ink/70 mt-1 leading-snug">{short}</p>
                    </div>
                  </div>
                  {isOpen && (
                    <ul className="mt-5 space-y-2.5">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-ink/80">
                          <CheckCircle2 className="size-4 text-cheddar mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white text-ink py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center font-hand text-3xl md:text-4xl text-cheddar-deep">how it works</h2>

          <ol className="mt-6 space-y-3 max-w-2xl mx-auto">
            <li className="flex gap-3 items-start">
              <span className="mt-0.5 grid place-items-center size-7 rounded-full bg-cheddar/15 text-cheddar-deep font-bold text-sm shrink-0">1</span>
              <p className="text-sm text-ink/85 leading-relaxed">
                Fill out our{" "}
                <Link to="/contact" className="font-semibold text-cheddar-deep hover:underline underline-offset-4">
                  interest form
                </Link>
                .
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <span className="mt-0.5 grid place-items-center size-7 rounded-full bg-cheddar/15 text-cheddar-deep font-bold text-sm shrink-0">2</span>
              <div>
                <p className="text-sm text-ink/85 leading-relaxed inline">
                  We will reach out to you if you are a good fit
                </p>
                <button
                  type="button"
                  onClick={() => setInfoOpen(infoOpen === "fit" ? null : "fit")}
                  className="inline-flex ml-1 align-middle text-cheddar-deep hover:text-cheddar cursor-pointer"
                  aria-label="What does a good fit mean?"
                >
                  <HelpCircle className="size-4" />
                </button>
                {infoOpen === "fit" && (
                  <p className="mt-1 text-xs text-ink/70 bg-white rounded-xl border border-cheddar/20 p-3">
                    We typically work with children ages 0–3 in NYC who need support with speech, language, or feeding. We consider your goals, schedule, and whether our expertise aligns with your child's needs.
                  </p>
                )}
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <span className="mt-0.5 grid place-items-center size-7 rounded-full bg-cheddar/15 text-cheddar-deep font-bold text-sm shrink-0">3</span>
              <div>
                <p className="text-sm text-ink/85 leading-relaxed inline">
                  Schedule to do an initial evaluation
                </p>
                <button
                  type="button"
                  onClick={() => setInfoOpen(infoOpen === "eval" ? null : "eval")}
                  className="inline-flex ml-1 align-middle text-cheddar-deep hover:text-cheddar cursor-pointer"
                  aria-label="What is an initial evaluation?"
                >
                  <HelpCircle className="size-4" />
                </button>
                {infoOpen === "eval" && (
                  <p className="mt-1 text-xs text-ink/70 bg-white rounded-xl border border-cheddar/20 p-3">
                    An initial evaluation is a comprehensive session where we observe your child, review their history, and assess their speech, language, or feeding skills to build a personalized treatment plan.
                  </p>
                )}
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <span className="mt-0.5 grid place-items-center size-7 rounded-full bg-cheddar/15 text-cheddar-deep font-bold text-sm shrink-0">4</span>
              <p className="text-sm text-ink/85 leading-relaxed">
                After the evaluation is completed, we discuss whether your child could benefit from speech therapy and determine a treatment plan. Most commonly we do one time a week sessions for 60 minutes each.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </Layout>
  );
}
