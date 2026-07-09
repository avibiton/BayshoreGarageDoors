import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/config";

export default function ServiceAreaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Serving Bay Shore & All of Suffolk County</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bay Shore Garage Door provides same-day repair and installation service throughout Bay Shore NY 11706 and surrounding Suffolk County communities. We know South Shore Long Island — its homes, its hardware challenges, and what coastal salt air does to garage door components.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Bay Shore&apos;s proximity to Great South Bay means we carry galvanized steel cables and stainless steel hardware as standard — protecting your door from the salt air corrosion that shortens component life in coastal environments.
            </p>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-[#e8390e] font-semibold hover:underline"
            >
              View All Service Areas →
            </Link>
          </div>

          <div>
            <div className="bg-[#0f1f3d] rounded-2xl p-8">
              <h3 className="text-white font-bold text-lg mb-6">📍 Communities We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {SERVICE_AREAS.slice(0, 8).map((area) => (
                  <div key={area.city + area.zip} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="text-[#e8390e]">✓</span>
                    <span>{area.city} {area.zip}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-white/60 text-sm">+ All of Suffolk County, Long Island</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
