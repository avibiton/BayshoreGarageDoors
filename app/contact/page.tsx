import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { BUSINESS, COUPONS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact & Request Service — Bay Shore Garage Door",
  description: `Call ${BUSINESS.phone} for same-day garage door repair in Bay Shore NY. Request service online. Free written estimate. Real technician answers 24/7.`,
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f1f3d] py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Contact Bay Shore Garage Door</h1>
        <p className="text-white/70 text-lg mb-6">Call any time — a real technician answers, not a call center</p>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="inline-flex items-center gap-2 bg-[#e8390e] text-white font-black text-2xl px-8 py-4 rounded-xl hover:bg-[#c62d0a] transition-colors"
        >
          📞 {BUSINESS.phone}
        </a>
        <p className="text-white/50 text-sm mt-3">Available 24 hours · 7 days a week · Same-day service</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div>
          <h2 className="text-2xl font-bold text-[#0f1f3d] mb-6">Get in Touch</h2>

          <div className="space-y-6 mb-10">
            {[
              {
                icon: "📞",
                label: "Main Phone",
                value: BUSINESS.phone,
                sub: "Available 24/7. Same-day service throughout Bay Shore NY 11706 and all of Suffolk County.",
                href: `tel:${BUSINESS.phoneRaw}`,
              },
              {
                icon: "🕐",
                label: "Hours",
                value: "24 Hours · 7 Days a Week",
                sub: "Available when you need us — mornings, evenings, weekends, and holidays.",
              },
              {
                icon: "📍",
                label: "Service Area",
                value: "Bay Shore NY 11706 · Suffolk County",
                sub: "Bay Shore · Islip · West Islip · Brentwood · Deer Park · Central Islip",
              },
              {
                icon: "🌐",
                label: "Website",
                value: BUSINESS.website,
                sub: "Visit us online for service information and coupons.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-[#e8390e] font-bold text-lg hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-bold text-[#0f1f3d]">{item.value}</div>
                  )}
                  <div className="text-gray-500 text-sm mt-1">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Coupons */}
          <div id="coupons">
            <h3 className="text-xl font-bold text-[#0f1f3d] mb-4">Current Coupons</h3>
            <div className="space-y-3">
              {COUPONS.map((c) => (
                <div
                  key={c.code}
                  className="border-2 border-dashed border-[#e8390e] rounded-xl p-4 bg-red-50"
                >
                  <div className="text-[#e8390e] font-black text-xl">{c.discount}</div>
                  <div className="font-bold text-[#0f1f3d]">{c.service}</div>
                  <div className="text-sm text-gray-600">Code: <span className="font-mono font-bold">{c.code}</span> · Expires {c.expires}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#0f1f3d] mb-6">Request Service</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below and a technician will call you back shortly. For immediate service, call{" "}
            <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#e8390e] font-bold">{BUSINESS.phone}</a>.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
