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
      <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <a href="#home" className="flex items-center gap-3 min-w-0">
          <img
            src="/michelle-greenberg-logo.png"
            alt=""
            width={56}
            height={56}
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
          />
          <span className="leading-tight">
            <span className="block font-semibold text-sm sm:text-base">Michelle Greenberg</span>
            <span className="block mt-1 text-xs tracking-wider text-slate-600">LCSW-C, PMH-C</span>
          </span>
        </a>

        <ul className="hidden md:flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {links.map(([label, href]) => (
            <li key={href}>
              <a className="hover:underline" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="md:hidden inline-block rounded-xl border px-3 py-1 text-sm"
        >
          Contact
        </a>
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
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
        alt="Calming beach scene"
        className="absolute inset-0 w-full h-full object-cover"
      />
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
