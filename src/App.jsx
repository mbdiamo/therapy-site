import React from "react";

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        {title && <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>}
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
            <li key={href}><a className="hover:underline" href={href}>{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="md:hidden inline-block rounded-xl border px-3 py-1 text-sm">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center text-center text-white"
    >
      {/* Beach background */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
        alt="Calming beach scene"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-sky-900/40" />

      <div className="relative max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Compassionate Therapy
        </h1>
        <p className="mt-6 text-lg text-sky-50">
          Creating space for reflection, growth, and resilience 
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="rounded-xl bg-white text-sky-900 px-6 py-2 font-medium shadow hover:bg-slate-100"
          >
            Request a Consultation
          </a>
          <a
            href="#about"
            className="rounded-xl border border-white px-6 py-2 font-medium hover:bg-white/10"
          >
            Learn More
          </a>
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
    <div>
      <p>
        I’m an experienced licensed therapist who starts with where you are. My initial goal is to build a trusting relationship and create
        space to explore the challenges you’re experiencing. I listen, observe, and ask thoughtful questions to develop a plan together.
      </p>

      {/* Cards: Credentials + Availability side-by-side on md+ */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-5 md:p-6 w-full">
          <h3 className="font-medium mb-2">Credentials</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>B.S., Emory University</li>
            <li>Master of Social Work (MSW), Columbia University</li>
            {/* keep the whole line together */}
            <li className="whitespace-nowrap">
              Licensed Clinical Social Worker (LCSW&#8209;C)&nbsp;in&nbsp;Maryland
            </li>
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
          <li>Emotion regulation & stress management</li>
          <li>Family communication and routines</li>
          <li>Life transitions and caregiver support</li>
          <li>Anxiety, Depression and Chronic Illnesst</li>
        </ul>
      </Section>

      <Section id="approach" title="Approach">
  <p>
    I work from a strengths-based, collaborative perspective. I strive to provide encouragement knowing that progress is well within reach. 
    I have a nurturing and empathic style that helps individuals and families feel safe and comfortable. 
    I believe trust and safety in the therapeutic relationship are paramount. 

  </p>
</Section>

      <Section id="services" title="Services & Fees">
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium mb-2">Sessions</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Initial consultation (20–30 min): complimentary</li>
              <li>Individual session (60 min): $ 215</li>
              <li>Parent consultation (50 min): $ 195</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium mb-2">Insurance</h3>
            <p>I do <strong>not</strong> accept insurance. I can provide a superbill upon request.</p>
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

        {/* Netlify Forms integration */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid gap-4 max-w-xl not-prose"
        >
          {/* Netlify hidden input */}
          <input type="hidden" name="form-name" value="contact" />
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
            <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border px-3 py-2" />
          </label>
          <button className="rounded-xl bg-slate-900 text-white px-5 py-2 w-fit">Send</button>
          <p className="text-xs text-slate-500">By submitting, you consent to being contacted by email.</p>
        </form>
      </Section>

      <footer className="border-t">
        <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Michelle Greenberg, LCSW · Telehealth only
        </div>
      </footer>
    </div>
  );
}
