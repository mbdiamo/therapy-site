// App.jsx — cleaned & fixed
// • PT badge removed
// • Netlify form posts to /thanks.html (no JS handler)
// • All tags validated to avoid EOF before closing tag errors

import React from "react";

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
        )}
        <div className="prose prose-slate max-w-none">{children}</div>
      </div>
    </section>
  );
}

function Nav() {
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Specialties", "#specialties"],
    ["Approach", "#approach"],
    ["Services & Fees", "#services"],
    ["Telehealth", "#telehealth"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold">Michelle Greenberg, LCSW-C</a>
        <ul className="hidden md:flex gap-5 text-sm">
          {links.map(([label, href]) => (
            <li key={href}>
              <a className="hover:underline" href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="md:hidden inline-block rounded-xl border px-3 py-1 text-sm">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-center text-white">
      {/* Beach background */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
        alt="Calming beach scene"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-sky-900/40" />

      <div className="relative max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Compassionate Therapy</h1>
        <p className="mt-6 text-lg text-sky-50">Creating space for reflection, growth, and resilience</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="rounded-xl bg-white text-sky-900 px-6 py-2 font-medium shadow hover:bg-slate-100">Request a Consultation</a>
          <a href="#about" className="rounded-xl border border-white px-6 py-2 font-medium hover:bg-white/10">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />

      <Section id="about" title="About">
  <div className="grid md:grid-cols-[1fr,240px] items-start gap-8 not-prose">
    {/* LEFT COLUMN */}
    <div className="space-y-6 leading-relaxed text-[1.05rem]">
      <p>
        For more than two decades, I’ve worked with adults, parents, and families across
        school settings and adoption services in New York City, Seattle, and San Diego.
        For the past 10 years, I have offered private practice in Maryland. I’m grateful
        to do this work and to help people build resilience and meaningful connection.
      </p>

      <p>
        My background includes domestic and international adoption, with pre and post
        adoption support focused on attachment, identity, openness, and family
        transitions. I have provided therapy in school settings, partnering with parents
        and teachers in addition to helping children build social skills and confidence.
        I have worked with adults living with chronic illness, supporting coping,
        communication, and sustainable routines. I facilitated Listening Mothers® groups
        that help parents strengthen bonding, attunement, and self-compassion.
      </p>

            {/* Credentials + Availability cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border p-5 md:p-6 w-full">
                <h3 className="font-medium mb-2">Credentials</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>B.S., Emory University</li>
                  <li>Master of Social Work (MSW), Columbia University</li>
                  <li>Licensed Clinical Social Worker (LCSW&#8209;C) in Maryland</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 md:p-6 w-full">
                <h3 className="font-medium mb-2">Availability</h3>
                <p>Telehealth only. Currently accepting new clients for virtual sessions.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (HEADSHOT) */}
          <img
            src="/headshot.png"
            alt="Michelle Greenberg, LCSW-C"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow justify-self-center md:justify-self-end"
          />
        </div>
      </Section>

      <Section id="specialties" title="Specialties">
        <ul className="list-disc ml-5 space-y-2">
          <li>Supporting parents navigating a child’s challenges at home and at school</li>
          <li>Emotion regulation &amp; stress management</li>
          <li>Family communication and routines</li>
          <li>Life transitions</li>
          <li>Anxiety, Depression and Chronic Illness</li>
        </ul>
      </Section>

      <Section id="approach" title="Approach">
  <div className="space-y-6 leading-relaxed text-[1.05rem]">
    <p>
      I work from a strengths-based, collaborative perspective. I strive to provide
      encouragement knowing that progress is well within reach. I have a nurturing and
      empathic style that helps individuals and families feel safe and comfortable. I
      believe that trust and safety in the therapeutic relationship are paramount.
    </p>

    <p>
      My initial goal is to build a secure relationship and create space to explore the
      challenges a person is experiencing. I view myself as a scientist—listening,
      examining, observing, and asking the questions needed to create a plan. I work
      collaboratively with my clients to help them meet their goals and live their best
      lives.
    </p>
  </div>
</Section>

      <Section id="services" title="Services &amp; Fees">
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium mb-2">Sessions</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Initial consultation (20–30 min): complimentary</li>
              <li>Individual session (60 min): $215</li>
              <li>Parent consultation (50 min): $195</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium mb-2">Insurance</h3>
            <p>
              I do <strong>not</strong> accept insurance. I can provide a superbill upon request.
            </p>
          </div>
        </div>
      </Section>

      <Section id="telehealth" title="Telehealth">
        <p>
          Sessions are conducted via a secure, HIPAA-aware video platform. You’ll receive a private link before each appointment.
          Please find a quiet, comfortable space and reliable internet connection.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p className="mb-6">
          Please share a few details below. I’ll be in touch to schedule a brief consultation.
        </p>

        {/* Netlify-handled form (no JS). Ensure hidden detection form exists in index.html. */}
        <form
          name="contact"
          method="POST"
          action="/thanks.html"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="grid gap-4 max-w-xl not-prose"
          netlify
        >
          {/* Netlify required hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field (hidden from humans) */}
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <label className="block">
            <span className="text-sm">Name</span>
            <input name="name" required className="mt-1 w-full rounded-lg border px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm">Email</span>
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm">Message</span>
            <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border px-3 py-2" />
          </label>

          <button className="rounded-xl bg-slate-900 text-white px-5 py-2 w-fit">Send</button>
          <p className="text-xs text-slate-500">By submitting, you consent to being contacted by email.</p>
        </form>
      </Section>

      <footer className="border-t mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>
            © {new Date().getFullYear()} Michelle Greenberg, LCSW-C · Telehealth only · Private practice in Maryland
          </div>
        </div>
      </footer>
    </div>
  );
}

// ————————————————————————————————————————————————
// index.html — add this hidden form block inside <body>, outside React, so Netlify detects it at build.
// <form name="contact" netlify netlify-honeypot="bot-field" hidden>
//   <input type="text" name="name" />
//   <input type="email" name="email" />
//   <textarea name="message"></textarea>
// </form>

// ————————————————————————————————————————————————
// thanks.html — place in /public (Vite) so it publishes at /thanks.html
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <title>Thanks — Michelle Greenberg, LCSW‑C</title>
//   </head>
//   <body style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; margin:0;">
//     <main style="max-width: 42rem; margin: 4rem auto; padding: 0 1rem;">
//       <h1>Thank you for reaching out!</h1>
//       <p>I’ll reply by email as soon as I can. If you don’t see a response within 2 business days, please check your spam folder.</p>
//       <p><a href="/">← Back to homepage</a></p>
//     </main>
//   </body>
// </html>
