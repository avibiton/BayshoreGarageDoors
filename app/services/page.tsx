import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SERVICES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Garage Door Services — Bay Shore Garage Door",
  description: `Garage door repair, spring replacement, opener installation, and new door service in Bay Shore NY. Same-day service. Call ${BUSINESS.phone}.`,
};

export default function ServicesPage() {
  return (
    <div>
      <section className="relative py-24 px-4 text-center overflow-hidden flex items-center justify-center min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Garage door services — Bay Shore NY"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#091528]/80" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Garage Door Services in Bay Shore, NY</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Same-day repair, installation, and maintenance throughout Bay Shore NY 11706 and all of Suffolk County
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.slug} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#e8390e] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-[#0f1f3d] mb-3">{service.title}</h2>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#e8390e] font-bold">{service.price}</span>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex-1 text-center bg-[#0f1f3d] text-white font-bold py-2.5 rounded-lg text-sm hover:bg-[#091528] transition-colors"
                >
                  Learn More
                </Link>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex-1 text-center bg-[#e8390e] text-white font-bold py-2.5 rounded-lg text-sm hover:bg-[#c62d0a] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0f1f3d] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need Service Today?</h2>
          <p className="text-white/70 mb-6">A real technician answers. Same-day service throughout Bay Shore NY and Suffolk County.</p>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 bg-[#e8390e] text-white font-black text-xl px-8 py-4 rounded-xl hover:bg-[#c62d0a] transition-colors">
            📞 {BUSINESS.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
