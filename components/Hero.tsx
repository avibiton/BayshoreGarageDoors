import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center"
      style={{
        background: "linear-gradient(135deg, #091528 0%, #0f1f3d 50%, #1a3a6b 100%)",
      }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e8390e]/20 border border-[#e8390e]/40 rounded-full px-4 py-1.5 text-sm text-[#f97316] font-semibold mb-6">
            ⚡ 24/7 Same-Day Service — Bay Shore NY
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Same-Day<br />
            <span className="text-[#e8390e]">Garage Door</span><br />
            Repair in<br />
            Bay Shore, NY
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-lg">
            Specializing in spring replacement, cable repair, opener installation & emergency garage door service throughout Bay Shore NY 11706. A real technician answers every call.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="btn-primary text-lg px-8 py-4 justify-center"
            >
              📞 Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="btn-secondary text-lg px-8 py-4 justify-center"
            >
              Request Service
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { icon: "✅", text: "Licensed & Insured" },
              { icon: "⚡", text: "Same-Day Service" },
              { icon: "🚨", text: "24/7 Emergency" },
              { icon: "📝", text: "Free Written Estimate" },
              { icon: "🛡️", text: "Written Warranty" },
              { icon: "👨‍🔧", text: "Local Technicians" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-white/85 text-sm">
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: info card */}
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🏠</div>
              <div className="text-yellow-400 text-xl mb-1">⭐⭐⭐⭐⭐</div>
              <div className="text-white font-bold">Rated 5.0 · {BUSINESS.reviewCount}+ Reviews</div>
              <div className="text-white/60 text-sm">Bay Shore NY · Suffolk County</div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Response Time", value: "2–4 Hours" },
                { label: "Service Area", value: "All of Suffolk County" },
                { label: "Availability", value: "24/7 · 365 Days" },
                { label: "Estimate", value: "Free Written" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/70 text-sm">{item.label}</span>
                  <span className="text-white font-semibold text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="mt-6 flex items-center justify-center gap-2 bg-[#e8390e] hover:bg-[#c62d0a] text-white font-bold py-4 rounded-xl text-lg transition-colors w-full"
            >
              📞 {BUSINESS.phone}
            </a>
            <p className="text-center text-white/50 text-xs mt-2">10% Off For Internet Customers!</p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
