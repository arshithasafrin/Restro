import { useState, type ReactNode } from "react";
import {
  Blue,
  Eyebrow,
  Footer,
  H2,
  Icon,
  Lead,
  Nav,
  TextLink,
} from "./components/ui";
import {
  FeedbackPhone,
  FeedbackSnippet,
  MenuPhone,
  MiniConcern,
  MiniKpis,
  NotificationsPhone,
  ProfilePhone,
  ProfileSnippet,
  QrPhone,
  QrStand,
  RatingBars,
  ReportCard,
  SplashPhone,
} from "./components/mockups";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

const OUTCOMES = [
  ["More opportunities to collect genuine Google reviews.", <MiniKpis key="k" />],
  ["Earlier visibility into lower-rated guest experiences.", <MiniConcern key="c" />],
  ["Better understanding of customer satisfaction.", <div key="r" className="rounded-[10px] border border-[#e4eaf3] bg-white p-3"><RatingBars compact /></div>],
  ["More organised reputation management across locations.", <div key="o" className="rounded-[10px] border border-[#e4eaf3] bg-white p-3 text-[12px]"><p className="font-semibold text-[#152742]">Outlet</p><p className="mt-1 rounded-lg border border-[#8eb6ff] px-2 py-1.5">Outlet 2 · selected</p></div>],
] as const;

const PROBLEMS = [
  ["Happy guests often forget to review.", "A customer may enjoy your food, service and ambience but leave without sharing their experience online."],
  ["Unhappy guests may go straight to Google.", "Management might discover a problem only after a negative review appears publicly."],
  ["Owners don’t always see recurring problems.", "Without organised feedback, it can be difficult to identify repeated complaints about waiting time, service, food quality or staff behaviour."],
  ["Restrosights brings these experiences into one system.", "Give guests an easy way to share feedback after dining. Help happy customers continue to Google and give management earlier visibility into lower-rated experiences."],
];

const BENEFITS = [
  ["Build a Steadier Flow of Genuine Reviews", "Make it easier for happy diners to continue to Google and share their genuine experiences."],
  ["Capture Guest Feedback Earlier", "Understand lower-rated experiences privately through your feedback dashboard, giving management an opportunity to investigate and respond."],
  ["Strengthen Your Local Reputation", "A healthier flow of genuine, descriptive customer reviews can support local relevance and Google Maps visibility over time."],
  ["Understand What Customers Really Think", "Use monthly guest-insight reports to identify what customers appreciate, what needs attention and what management should improve."],
];

const STEPS = [
  ["Place Your Review Stand", "We provide a professional Restrosights QR Review Stand for your restaurant."],
  ["Guests Scan the QR Code", "Customers scan the code after dining and share their experience."],
  ["Guests Share Their Feedback", "Customers rate their experience and provide feedback through the review journey."],
  ["Happy Guests Continue to Google", "Guests with positive experiences can continue to Google and leave a genuine review."],
  ["Management Understands the Feedback", "Lower-rated experiences are captured in your dashboard so your team can review concerns and take appropriate action."],
];

const FAQS = [
  ["We already have a QR code. Why do we need Restrosights?", "A QR code is only an entry point. Restrosights provides the feedback journey, dashboard, monthly guest insights and reputation support behind it."],
  ["We already receive Google reviews. What additional value do we get?", "Restrosights helps make the review collection process more structured. It also gives management access to private guest feedback and monthly insights that are not available from public reviews alone."],
  ["Does Restrosights remove negative Google reviews?", "We do not remove legitimate customer criticism. If a review appears fake, spammy or in violation of platform policies, we can help assess it and support the appropriate reporting process."],
  ["Will Restrosights improve our Google Maps ranking?", "Genuine, descriptive reviews can support local relevance and customer trust over time. We do not guarantee rankings or specific positions."],
  ["How does the feedback process work?", "Guests scan your QR Review Stand, rate their experience and share feedback. Positive experiences can continue to Google, while lower-rated experiences are captured in your dashboard for management review."],
  ["Can we use Restrosights for multiple outlets?", "Yes. The system is designed to support restaurant owners and multi-location groups that want a more organised way to understand guest feedback across their locations."],
  ["What is included in the monthly report?", "The report helps identify what customers appreciate, recurring complaints and areas that may need attention."],
];

const GROWTH_INCLUDED = [
  "Professional QR Review Stand.",
  "Restrosights app and dashboard.",
  "Guest feedback collection.",
  "Genuine Google review journey.",
  "Monthly guest-insight report.",
  "Google Business Profile support.",
  "Fake-review assistance where policy violations exist.",
];

export default function Page({ onDemo }: { onDemo: () => void }) {
  return (
    <>
      <Nav onDemo={onDemo} />
      <main id="main">
        <Hero onDemo={onDemo} />
        <Intro />
        <Problem />
        <Benefits />
        <How />
        <Features />
        <Local onDemo={onDemo} />
        <Monthly />
        <Multi onDemo={onDemo} />
        <Results />
        <Testimonials />
        <Pricing onDemo={onDemo} />
        <Faq onDemo={onDemo} />
        <FinalCta onDemo={onDemo} />
      </main>
      <Footer onDemo={onDemo} />
    </>
  );
}

function Hero({ onDemo }: { onDemo: () => void }) {
  return (
    <section id="home" className="bg-mist pt-[88px]">
      <div className="wrap grid items-center gap-10 pb-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-0">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-ink">
            <img src="/apple-touch-icon.png" alt="" className="h-5 w-5 rounded-md" />
            BUILT FOR RESTAURANTS
          </div>
          <h1 className="h1 mt-5 max-w-[640px] text-[32px] leading-[34px] sm:text-[44px] sm:leading-[46px] lg:text-[52px] lg:leading-[54px]">
            Turn Happy Diners Into Genuine Reviews. Understand Every Guest Experience.
          </h1>
          <p className="mt-5 max-w-[620px] text-[18px] leading-[28px] text-body sm:text-[20px] sm:leading-[30px]">
            Your restaurant serves customers every day. But are their experiences reflected in your online reputation?
          </p>
          <p className="mt-3 max-w-[620px] text-[16px] leading-6 text-body">
            Restrosights helps restaurants collect genuine Google reviews, capture lower-rated guest feedback earlier and understand what diners really think about their experience.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn btn-primary" onClick={onDemo}>
              Book a Free Demo <Icon name="arrow" className="h-4 w-4" />
            </button>
            <a className="btn btn-secondary" href="#how-it-works">
              See How It Works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 pb-8">
            <img src="/apple-touch-icon.png" alt="" className="h-10 w-10 rounded-full" />
            <p className="max-w-sm text-[14px] font-medium leading-5 text-ink">
              A smarter reputation and guest-feedback system for restaurants, cafés and multi-location groups.
            </p>
          </div>
        </Reveal>
        <div className="float relative z-10 lg:translate-y-8">
          <SplashPhone />
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="intro-title">
      <div className="wrap">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <H2 id="intro-title">
            Your Restaurant Deserves a Reputation That <Blue>Reflects Its Experience.</Blue>
          </H2>
          <div className="space-y-4">
            <Lead>
              Every day, customers visit your restaurant. Some leave reviews. Many leave without sharing their experience. And sometimes, unhappy guests share their complaints publicly before your team even knows what happened.
            </Lead>
            <Lead>
              Restrosights helps bridge that gap by giving restaurant owners a structured way to collect feedback, encourage genuine reviews and understand guest satisfaction.
            </Lead>
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {OUTCOMES.map(([text, visual]) => (
            <article key={text} className="soft-card flex flex-col gap-4">
              <div className="min-h-[92px]">{visual}</div>
              <p className="text-[16px] leading-6 tracking-[-0.02em] text-body">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-white pb-8 md:pb-16" aria-labelledby="problem-title">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <picture className="mx-auto block w-full max-w-[520px]">
          <source srcSet="/qr-stand.webp" type="image/webp" />
          <img
            src="/qr-stand.jpg"
            alt="Restrosights Google review QR stand on a restaurant counter"
            width={1200}
            height={1200}
            className="h-auto w-full rounded-[24px] shadow-[0_18px_40px_rgba(16,35,41,0.12)]"
          />
        </picture>
        <div>
          <H2 id="problem-title">
            What Happens After a Guest <Blue>Leaves Your Restaurant?</Blue>
          </H2>
          <ul className="mt-8 space-y-5">
            {PROBLEMS.map(([title, body]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue text-white">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="block font-display text-[18px] font-medium text-black">{title}</span>
                  <span className="mt-1 block text-[15px] leading-[22.5px] tracking-[-0.02em] text-body">{body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-white py-8 md:py-12" aria-labelledby="benefits-title">
      <div className="wrap">
        <div className="blue-band band grid items-center gap-8 px-6 py-10 text-white md:px-12 md:py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[13px] font-medium">
              <Icon name="spark" className="h-4 w-4" /> Benefits
            </span>
            <H2 id="benefits-title" light className="mt-4">
              More Than Reviews. A Better Way to <span className="text-white">Understand Your Guests.</span>
            </H2>
            <ol className="mt-6 space-y-4">
              {BENEFITS.map(([title, body], index) => (
                <li key={title} className="flex gap-3">
                  <span className="font-geist text-[13px] font-semibold text-white/80">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[15px] font-semibold">{title}</span>
                    <span className="mt-0.5 block text-[14px] leading-5 text-white/85">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="float">
            <MenuPhone />
          </div>
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how-it-works" className="bg-white py-8 md:py-12" aria-labelledby="how-title">
      <div className="wrap">
        <div className="band grid items-center gap-8 bg-white px-6 py-10 shadow-[0_10px_40px_rgba(16,35,41,0.04)] ring-1 ring-black/5 md:px-12 md:py-14 lg:grid-cols-2">
          <div className="float order-2 lg:order-1">
            <FeedbackPhone />
          </div>
          <div className="order-1 lg:order-2">
            <H2 id="how-title">
              One Simple Scan. <Blue>Better Guest Insights.</Blue>
            </H2>
            <ol className="mt-6 space-y-4">
              {STEPS.map(([title, body], index) => (
                <li key={title} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e8f1ff] text-[12px] font-bold text-[#1769ee]">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-ink">{title}</span>
                    <span className="mt-0.5 block text-[14px] leading-5 text-body">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <TextLink href="#features">See the Full Review Journey</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24" aria-labelledby="features-title">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Features</Eyebrow>
          <H2 id="features-title" className="mt-3">
            Everything Your Restaurant Needs to Manage <Blue>Its Reputation</Blue>
          </H2>
        </div>
        <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_300px_1fr]">
          <div className="grid gap-4">
            <Feature title="QR Review Stand" body="A professional physical stand that gives diners an easy way to access your feedback and review journey.">
              <QrStand />
            </Feature>
            <Feature title="Guest Feedback Collection" body="Capture customer ratings and feedback to understand their dining experience.">
              <FeedbackSnippet />
            </Feature>
          </div>
          <div className="float">
            <MenuPhone size="md" />
            <p className="mt-3 text-center text-[15px] font-medium text-ink">Restrosights App & Dashboard</p>
            <p className="text-center text-[13px] text-muted">View guest responses and manage feedback through a central dashboard.</p>
          </div>
          <div className="grid gap-4">
            <Feature title="Monthly Guest-Insight Reports" body="Understand what guests love, recurring complaints and areas that need management attention.">
              <ReportCard />
            </Feature>
            <Feature title="Google Business Profile Support" body="Get support for managing and improving your restaurant’s business profile.">
              <ProfileSnippet />
            </Feature>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="soft-card">
            <h3 className="font-display text-[18px] font-medium">Fake Review Assistance</h3>
            <p className="mt-2 text-[15px] leading-6 text-body">Get help assessing suspicious reviews and reporting those that appear to violate platform policies. Legitimate customer criticism is not removed.</p>
            <div className="mt-4"><FeedbackSnippet /></div>
          </article>
          <article className="soft-card">
            <h3 className="font-display text-[18px] font-medium">Instagram Bio Optimisation</h3>
            <p className="mt-2 text-[15px] leading-6 text-body">Improve your restaurant’s Instagram profile presentation and business information.</p>
          </article>
          <article className="soft-card">
            <h3 className="font-display text-[18px] font-medium">Restaurant Brand Videos</h3>
            <p className="mt-2 text-[15px] leading-6 text-body">A Brand Story video and a Location Highlight video.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, body, children }: { title: string; body: string; children: ReactNode }) {
  return (
    <article className="soft-card">
      <div className="mb-4">{children}</div>
      <h3 className="font-display text-[18px] font-medium text-black">{title}</h3>
      <p className="mt-2 text-[15px] leading-6 tracking-[-0.02em] text-body">{body}</p>
    </article>
  );
}

function Local({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="bg-white py-8 md:py-12" aria-labelledby="local-title">
      <div className="wrap">
        <div className="band grid items-center gap-8 bg-mist px-6 py-10 md:px-12 md:py-14 lg:grid-cols-2">
          <div>
            <H2 id="local-title">
              Your Customer Reviews Can Do More Than <Blue>Build Trust.</Blue>
            </H2>
            <div className="mt-4 space-y-3 text-[16px] leading-6 text-body">
              <p>Genuine customer reviews help potential diners understand what makes your restaurant worth visiting.</p>
              <p>When customers naturally describe their experiences, they may mention your cuisine, dishes, location, service and ambience.</p>
              <p>These descriptive reviews provide useful context for potential customers and can support your restaurant’s local relevance over time.</p>
              <p>Restrosights helps create a more consistent process for collecting genuine customer experiences.</p>
            </div>
            <p className="mt-4 font-medium text-ink">What this supports:</p>
            <ul className="mt-2 space-y-2 text-[15px] text-body">
              {[
                "A steadier flow of genuine customer reviews.",
                "More descriptive feedback from real diners.",
                "Stronger customer confidence when choosing your restaurant.",
                "Ongoing support for local reputation and Google Maps visibility.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> {item}
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn-primary mt-6" onClick={onDemo}>
              Improve Your Restaurant’s Review Journey <Icon name="arrow" className="h-4 w-4" />
            </button>
            <p className="mt-3 text-[13px] italic text-muted">No artificial reviews, forced keywords or guaranteed ranking claims.</p>
          </div>
          <div className="float">
            <ProfilePhone />
          </div>
        </div>
      </div>
    </section>
  );
}

function Monthly() {
  const points = [
    "What customers appreciate most.",
    "Common complaints and recurring issues.",
    "Feedback about food, service and ambience.",
    "Areas that may need management attention.",
    "What your team should focus on improving next.",
  ];
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="monthly-title">
      <div className="wrap">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <H2 id="monthly-title">
            Discover What Your Customers Love. Find Out <Blue>What Needs Fixing.</Blue>
          </H2>
          <div className="space-y-3">
            <Lead>Your reviews and feedback contain valuable information about your restaurant.</Lead>
            <Lead>But are you regularly analysing it?</Lead>
            <Lead>Restrosights helps turn guest responses into a monthly restaurant intelligence report.</Lead>
          </div>
        </div>
        <p className="mt-8 font-medium text-ink">What you’ll understand:</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="soft-card md:col-span-2">
            <ReportCard />
          </article>
          {points.map((point, index) => (
            <article key={point} className="soft-card">
              <p className="font-geist text-[13px] font-semibold text-blue">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-[16px] leading-6 text-ink">{point}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[17px] font-medium text-ink">The objective: Help restaurant owners make better decisions using actual customer feedback.</p>
      </div>
    </section>
  );
}

function Multi({ onDemo }: { onDemo: () => void }) {
  const items = [
    "Monitor guest feedback across locations.",
    "Understand which outlets need more attention.",
    "Identify recurring customer complaints.",
    "Review location-level guest insights.",
    "Make more informed operational decisions.",
  ];
  return (
    <section className="bg-white py-8 md:py-12" aria-labelledby="multi-title">
      <div className="wrap">
        <div className="band grid items-center gap-10 bg-white px-6 py-10 ring-1 ring-black/5 md:px-12 lg:grid-cols-2">
          <div>
            <H2 id="multi-title">
              One Reputation System for <Blue>Every Restaurant Location.</Blue>
            </H2>
            <Lead className="mt-4">Managing one restaurant is challenging. Managing multiple outlets makes reputation monitoring even more important.</Lead>
            <Lead className="mt-3">Restrosights helps restaurant operators bring guest feedback and reputation management into a more organised process.</Lead>
            <p className="mt-4 font-medium text-ink">For restaurant groups:</p>
            <ul className="mt-3 space-y-2">
              {items.map((item) => (
                <li key={item} className="flex gap-2 text-[15px] text-body">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue" /> {item}
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn-primary mt-6" onClick={onDemo}>
              Discuss Your Restaurant Group <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
          <div className="float">
            <QrPhone />
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const items = [
    ["Genuine Reviews", "Make it easier for satisfied customers to share their experiences.", "star"],
    ["Earlier Feedback", "Understand lower-rated experiences before issues go unnoticed.", "bell"],
    ["Customer Trust", "Help potential diners discover more genuine information about your restaurant.", "shield"],
    ["Better Decisions", "Use monthly insights to understand customer expectations and improve operations.", "chart"],
  ] as const;
  return (
    <section className="bg-white py-12 md:py-16" aria-labelledby="results-title">
      <div className="wrap">
        <div className="rounded-[32px] bg-mist px-5 py-10 md:px-10 md:py-12">
          <div className="grid items-end gap-6 md:grid-cols-2">
            <H2 id="results-title">
              Build a Better Connection Between Guest Experience and <Blue>Online Reputation.</Blue>
            </H2>
            <Lead>Restrosights focuses on four important areas of restaurant growth.</Lead>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map(([title, body, icon]) => (
              <article key={title} className="rounded-[20px] bg-white p-5 shadow-[0_8px_24px_rgba(16,35,41,0.04)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8f1ff] text-[#1769ee]">
                  <Icon name={icon} />
                </span>
                <h3 className="mt-4 font-display text-[18px] font-medium">{title}</h3>
                <p className="mt-2 text-[14px] leading-5 text-body">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STORIES = [
  {
    initials: "AM",
    name: "Arjun Menon",
    role: "Owner, cafe in Kochi",
    quote:
      "A cluster of fake 1-star reviews appeared from accounts that had never visited. Our rating suffered and weekend walk-ins slowed. With Restrosights we spotted the suspicious pattern, got help reporting the ones that looked like policy violations, and kept genuine reviews coming in.",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    role: "Founder, family restaurant in Bengaluru",
    quote:
      "One difficult service night turned into public 1-star reviews before I even knew what had happened. Now lower ratings reach my dashboard privately first, so I can look into the issue early instead of finding out only after it is already public.",
  },
  {
    initials: "RV",
    name: "Rahul Verma",
    role: "GM, multi-outlet group in Pune",
    quote:
      "We had plenty of star-only ratings and almost no words. I could not tell what to fix, and new diners had little to go on. Now guests leave descriptive feedback, and the reviews that continue to Google mention dishes and service.",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#eaf5fd] py-16 md:py-24" aria-labelledby="stories-title">
      <div className="wrap">
        <H2 id="stories-title" className="text-center">
          Trusted by Restaurants That Care About <Blue>Their Reputation.</Blue>
        </H2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[18px] font-medium text-ink">
          Real Restaurant Experiences. Real Feedback. Better Decisions.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {STORIES.map((story) => (
            <article key={story.name} className="flex flex-col rounded-[24px] bg-white p-6 text-left shadow-[0_10px_30px_rgba(16,35,41,0.05)]">
              <p className="font-display text-5xl leading-none text-blue" aria-hidden>
                “
              </p>
              <blockquote className="mt-2 flex-1 text-[16px] leading-6 tracking-[-0.02em] text-[#212121]">
                <p>{story.quote}</p>
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e8f3fd] font-geist text-[13px] font-semibold text-blue" aria-hidden>
                  {story.initials}
                </span>
                <span>
                  <span className="block text-[15px] font-medium text-ink">{story.name}</span>
                  <span className="block text-[13px] text-muted">{story.role}</span>
                </span>
              </footer>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-[13px] text-muted">Illustrative owner stories based on common restaurant challenges.</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-blue" />
    </section>
  );
}

function Pricing({ onDemo }: { onDemo: () => void }) {
  return (
    <section id="pricing" className="bg-white py-16 md:py-24" aria-labelledby="pricing-title">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <H2 id="pricing-title" className="mt-3">
            Choose the Right Plan for <Blue>Your Restaurant.</Blue>
          </H2>
          <Lead className="mt-4">
            A complete reputation and guest-feedback solution for restaurants looking to build a stronger review process and understand customer experiences.
          </Lead>
        </div>
        <div className="mx-auto mt-14 grid max-w-[860px] items-stretch gap-5 pt-6 md:grid-cols-2">
          <article className="flex flex-col rounded-[24px] bg-white p-6 ring-1 ring-[#ececec] md:p-7">
            <h3 className="font-geist text-[20px] font-semibold tracking-[-0.03em] text-black">Growth</h3>
            <p className="mt-1 text-[15px] text-muted">For restaurants building a stronger review process</p>
            <p className="mt-5 font-display text-[40px] font-medium leading-none tracking-[-0.04em] text-black">
              ₹12,499<span className="text-[16px] font-medium text-muted"> / 6 months</span>
            </p>
            <button type="button" className="btn btn-primary btn-pill mt-6" onClick={onDemo}>
              Get Started with Growth
            </button>
            <p className="mt-6 text-sm font-semibold text-ink">What’s included:</p>
            <ul className="mt-3 space-y-2.5">
              {GROWTH_INCLUDED.map((item) => (
                <li key={item} className="flex gap-2 text-[14px] leading-5 text-body">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#1769ee]" /> {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="relative flex flex-col rounded-[24px] bg-mist p-6 ring-1 ring-gold md:p-7">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold px-3 py-1 text-[12px] font-semibold text-ink">
              Popular
            </span>
            <h3 className="font-geist text-[20px] font-semibold tracking-[-0.03em] text-black">Premium</h3>
            <p className="mt-1 text-[15px] text-muted">Everything in Growth</p>
            <p className="mt-5 font-display text-[40px] font-medium leading-none tracking-[-0.04em] text-black">
              ₹24,999<span className="text-[16px] font-medium text-muted"> / 12 months</span>
            </p>
            <button type="button" className="btn btn-gold mt-6" onClick={onDemo}>
              Get Started with Premium
            </button>
            <p className="mt-6 text-sm font-semibold text-ink">What’s included:</p>
            <ul className="mt-3 space-y-2.5">
              {GROWTH_INCLUDED.map((item) => (
                <li key={item} className="flex gap-2 text-[14px] leading-5 text-body">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#1769ee]" /> {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-[12px] leading-5 text-muted">
          Confirm the final billing terms, setup charges and subscription conditions before publishing.
        </p>
      </div>
    </section>
  );
}

function Faq({ onDemo }: { onDemo: () => void }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-white py-16 md:py-24" aria-labelledby="faq-title">
      <div className="wrap grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Eyebrow>FAQs</Eyebrow>
          <H2 id="faq-title" className="mt-3">
            Frequently Asked <Blue>Questions</Blue>
          </H2>
          <div
            className="mt-8 rounded-[28px] bg-mist p-6"
            style={{
              backgroundImage:
                "linear-gradient(#ececec 1px, transparent 1px), linear-gradient(90deg, #ececec 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          >
            <div className="flex justify-center gap-3">
              {["bell", "message", "shield"].map((name) => (
                <span key={name} className="grid h-12 w-12 place-items-center rounded-full bg-white text-blue shadow">
                  <Icon name={name as "bell"} />
                </span>
              ))}
            </div>
            <p className="mt-4 text-center font-display text-[18px] font-medium">Ready to improve your restaurant’s reputation?</p>
            <p className="mt-1 text-center text-[14px] text-body">Book a demo today.</p>
            <button type="button" className="btn btn-primary mx-auto mt-4" onClick={onDemo}>
              Book a Free Demo
            </button>
          </div>
        </div>
        <div className="space-y-3">
          {FAQS.map(([q, a], index) => {
            const expanded = open === index;
            return (
              <div key={q} className="rounded-2xl bg-mist">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[15px] font-medium text-ink"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span>
                      <span className="mr-2 font-geist text-[12px] text-muted">{String(index + 1).padStart(2, "0")}</span>
                      {q}
                    </span>
                    <Icon name="plus" className={`h-4 w-4 shrink-0 transition ${expanded ? "rotate-45" : ""}`} />
                  </button>
                </h3>
                {expanded && <p className="px-4 pb-4 text-[15px] leading-6 text-body">{a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="bg-white px-4 pb-16 md:px-8" aria-labelledby="cta-title">
      <div className="blue-band band mx-auto grid max-w-[1160px] items-center gap-8 px-6 py-10 md:px-12 md:py-14 lg:grid-cols-2">
        <div className="text-white">
          <p className="text-[14px] font-medium text-white/90">Restrosights</p>
          <H2 id="cta-title" light className="mt-3">
            Your Guests Are Already Sharing Their Experiences. <span className="text-white">Are You Listening?</span>
          </H2>
          <p className="mt-4 max-w-xl text-[16px] leading-7 text-white/90">
            Every guest interaction is an opportunity to understand what your restaurant is doing well and where it can improve.
          </p>
          <p className="mt-3 max-w-xl text-[16px] leading-7 text-white/90">
            Build a more consistent review process, capture guest feedback earlier and make better decisions with Restrosights.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn btn-white" onClick={onDemo}>
              Book Your Free Demo
            </button>
            <button type="button" className="btn btn-ghost" onClick={onDemo}>
              Talk to Our Team
            </button>
          </div>
        </div>
        <div className="float">
          <NotificationsPhone />
        </div>
      </div>
    </section>
  );
}

export { Page };
