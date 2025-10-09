import React, { useState, useMemo } from "react";
import headshot from "./assets/headshot.png"; // Styled photo

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-lg bg-white/80 backdrop-blur p-6 ${className}`}>{children}</div>
);
const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide">{children}</span>
);

export default function TherapyPracticeSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = new Date().getFullYear();

  const brand = useMemo(
    () => ({
      primary: "#2F4B6E",
      secondary: "#7FB7BE",
      accent: "#E0E7FF",
      neutral: "#0F172A",
    }),
    []
  );

  const nav = [
    { href: "#about", label: "About" },
    { href: "#specialties", label: "Specialties" },
    { href: "#services", label: "Services" },
    { href: "#approach", label: "Approach" },
    { href: "#fees", label: "Fees & Insurance" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const toEmail = "michelle@example.com";
  const phone = "(301) 555‑0123";
  const address = "Bethesda, Maryland — I do not accept insurance";

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Client Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen text-slate-800" style={{ background: `linear-gradient(180deg, ${brand.accent} 0%, #F8FAFC 60%)` }}>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full" style={{ backgroundColor: brand.secondary }} />
            <div className="leading-tight">
              <div className="text-lg font-semibold" style={{ color: brand.primary }}>Michelle D. Greenberg, LCSW‑C</div>
              <div className="text-xs text-slate-500">Parent Support • Adults • Bethesda, MD</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-slate-900">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow" style={{ backgroundColor: brand.primary }}>Book a Consult</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: brand.primary }}>
              Compassionate therapy for real‑life change
            </h1>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Evidence‑based care for parents and adults. Together we’ll build practical strategies and a kinder inner voice so you can feel grounded, connected, and capable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl px-5 py-3 font-semibold text-white shadow" style={{ backgroundColor: brand.primary }}>Free 15‑minute consultation</a>
              <a href="#services" className="rounded-xl px-5 py-3 font-semibold border" style={{ borderColor: brand.primary, color: brand.primary }}>Explore services</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 border-[6px] border-white">
              <img alt="Michelle Greenberg headshot" className="h-full w-full object-cover rounded-3xl" src={headshot} />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold" style={{ color: brand.primary }}>About Michelle</h2>
          <div className="prose prose-slate max-w-none mt-4">
            <p>
              As an experienced therapist, I begin with where you are. My initial goal is to build a trusting relationship and create space to explore the challenges you are experiencing. I view myself as a scientist—listening, examining, observing, and asking the questions needed to create a plan. I work collaboratively with my clients to help them meet their goals and live their best lives.
            </p>
            <p>
              I specialize in supporting parents as they navigate their child’s challenges at home and at school. Using a strengths-based approach, I work with parents to help them better understand themselves and their child. I also work with adults who are managing chronic illness by creating space for clients as they process and manage their health needs.
            </p>
            <p>
              I love what I do! I strive to provide encouragement knowing that progress is well within reach. I have a nurturing and empathetic style that helps individuals and families feel safe and comfortable. I believe that trust and safety in the therapeutic relationship are paramount.
            </p>
          </div>
        </div>
        <Card>
          <img src={headshot} alt="Michelle Greenberg portrait" className="rounded-3xl mb-4 border-[6px] border-white shadow-lg" />
          <h3 className="text-xl font-semibold" style={{ color: brand.primary }}>Credentials</h3>
          <ul className="mt-3 text-slate-700 space-y-2 text-sm">
            <li>Licensed Certified Social Worker‑Clinical (LCSW‑C), Maryland</li>
            <li>Specialized training in Mindfulness‑Based Stress Reduction (MBSR)</li>
            <li>Experience with parent coaching & family systems</li>
            <li>Bachelor of Science, Emory University</li>
            <li>Master of Social Work, Columbia University</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
