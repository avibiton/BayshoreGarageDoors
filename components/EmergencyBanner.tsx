import { BUSINESS } from "@/lib/config";

export default function EmergencyBanner() {
  return (
    <section className="bg-[#e8390e] py-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="text-3xl mb-3">🚨</div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
          24/7 Emergency Garage Door Service — Bay Shore, NY
        </h2>
        <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
          Door off-track? Broken spring? Car trapped? We dispatch a technician the same day — evenings, weekends, and holidays included.
        </p>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="inline-flex items-center gap-3 bg-white text-[#e8390e] font-black text-xl px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
        >
          📞 Call Now — {BUSINESS.phone}
        </a>
        <p className="text-white/70 text-sm mt-3">Real technician answers · No call center · Free estimate</p>
      </div>
    </section>
  );
}
