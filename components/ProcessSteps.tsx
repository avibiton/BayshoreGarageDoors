const steps = [
  {
    step: "01",
    icon: "📞",
    title: "You Call Us",
    desc: "Call (631) 954-3148 any time — day or night. A real technician answers, not an automated system.",
  },
  {
    step: "02",
    icon: "📅",
    title: "Same-Day Dispatch",
    desc: "We diagnose over the phone, identify parts needed, and schedule arrival within 2–4 hours.",
  },
  {
    step: "03",
    icon: "🚗",
    title: "Technician Arrives",
    desc: "We call 30 minutes before arrival. Free written estimate provided before any work begins.",
  },
  {
    step: "04",
    icon: "✅",
    title: "Repair Completed",
    desc: "Full 22-point safety inspection, auto-reverse test, and sensor check before we leave.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Fast, simple, and transparent — from first call to finished repair</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
              )}
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0f1f3d] text-3xl mb-4">
                {s.icon}
              </div>
              <div className="text-[#e8390e] font-black text-sm mb-1">STEP {s.step}</div>
              <h3 className="font-bold text-[#0f1f3d] text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
