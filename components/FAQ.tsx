"use client";
import { useState } from "react";
import { BUSINESS } from "@/lib/config";

const faqs = [
  {
    q: "Who repairs garage doors in Bay Shore NY?",
    a: `Bay Shore Garage Door provides same-day repair throughout Bay Shore NY 11706. Call ${BUSINESS.phone} — a real technician answers, diagnoses over the phone, and dispatches the same day. We typically arrive within 2–4 hours throughout Bay Shore, Islip, West Islip, and surrounding Suffolk County communities.`,
  },
  {
    q: "How much does spring repair cost in Bay Shore?",
    a: `Extension spring repair in Bay Shore starts from $165. Torsion spring replacement starts from $295. We provide a free written estimate before any work begins. The price we quote is the final price — no additions after the job is done. Use code SPRING10 for 10% off. Call ${BUSINESS.phone}.`,
  },
  {
    q: "Do you work evenings and weekends in Bay Shore NY?",
    a: `Yes — Bay Shore Garage Door is available evenings, weekends, and holidays throughout Bay Shore NY 11706. Call ${BUSINESS.phone} any time. A real technician answers every call — not an automated system.`,
  },
  {
    q: "Is there a warranty on garage door repairs in Bay Shore?",
    a: `Yes — every repair Bay Shore Garage Door completes comes with a written warranty. We also run a full safety test before leaving every job — auto-reverse check, sensor alignment, spring balance, and full operation cycle. If anything isn't right after we leave, we return at no charge.`,
  },
  {
    q: "Why does hardware rust faster near Great South Bay in Bay Shore?",
    a: `Bay Shore's proximity to Great South Bay puts your garage door hardware in a salt air environment. Standard steel lifting cables and spring coils oxidize significantly faster here than inland Suffolk County properties — sometimes reducing service life by 30–50%. We use galvanized steel cables as standard for all Bay Shore installations and stainless steel for waterfront-adjacent properties.`,
  },
  {
    q: "How long does a garage door spring last in Bay Shore?",
    a: `Standard residential torsion springs are rated for 10,000 cycles. In a household that uses the garage as the primary entrance (twice daily), that's approximately 3,500 cycles per year — a 7–10 year service life. Salt air from Great South Bay can reduce this to 5–6 years for waterfront properties. We offer high-cycle springs rated at 25,000 cycles for homeowners who want to avoid repeat spring failures.`,
  },
  {
    q: "What's the quietest garage door opener for a home in Bay Shore?",
    a: `For Bay Shore homes with attached garages — where the garage shares a wall with bedrooms or the kitchen — we strongly recommend the LiftMaster 87504 belt drive or the LiftMaster 8500W wall-mount opener. Both include battery backup (essential for Suffolk County storms), MyQ smart connectivity, and operate at a fraction of the noise of chain drive systems.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ background: "#f8f9fa" }}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Bay Shore Garage Door — Common Questions</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-[#0f1f3d] hover:text-[#e8390e] transition-colors"
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="text-xl flex-shrink-0 ml-4">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Have more questions? Call us any time — a real technician answers.</p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="btn-primary"
          >
            📞 Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
