import { BUSINESS } from "@/lib/config";

const reasons = [
  {
    icon: "📞",
    title: "Real Technician Answers",
    desc: "No call centers. A garage door expert picks up and diagnoses your problem over the phone before we arrive.",
  },
  {
    icon: "⚡",
    title: "Same-Day Service",
    desc: "We arrive in 2–4 hours throughout Bay Shore, Islip, West Islip & Brentwood. 30-minute heads-up call before arrival.",
  },
  {
    icon: "📝",
    title: "Free Written Estimate",
    desc: "Full inspection, written price, your approval before we touch anything. Written price = final price. No surprises.",
  },
  {
    icon: "🛡️",
    title: "Written Warranty",
    desc: "Every repair backed in writing. If it's not right after we leave, we return at no charge.",
  },
  {
    icon: "🌊",
    title: "South Shore Specialists",
    desc: "Galvanized & stainless hardware for Bay Shore's salt air environment from Great South Bay.",
  },
  {
    icon: "✅",
    title: "100% Satisfaction",
    desc: "We don't leave until your door operates safely. Auto-reverse test, sensor check & balance test on every job.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ background: "#f8f9fa" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Bay Shore Calls Us First</h2>
          <p className="section-subtitle">
            Trusted by homeowners throughout Bay Shore NY 11706 and Suffolk County
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="text-3xl flex-shrink-0">{r.icon}</div>
              <div>
                <h3 className="font-bold text-[#0f1f3d] mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "24/7", label: "Always Available" },
            { value: "2–4hr", label: "Response Time" },
            { value: "5.0★", label: "Average Rating" },
            { value: "100%", label: "Satisfaction Guarantee" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-[#0f1f3d] rounded-xl py-6 px-4">
              <div className="text-3xl font-black text-[#e8390e]">{s.value}</div>
              <div className="text-white/80 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
