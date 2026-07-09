import Link from "next/link";
import { SERVICES } from "@/lib/config";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Garage Door Services in Bay Shore, NY</h2>
          <p className="section-subtitle">Same-day service throughout Bay Shore NY 11706 and all of Suffolk County</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#e8390e] hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-[#0f1f3d] mb-2 group-hover:text-[#e8390e] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#e8390e] font-bold text-sm">{service.price}</span>
                <span className="text-[#0f1f3d] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
