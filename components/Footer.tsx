import Link from "next/link";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#091528] text-white">
      {/* Final CTA strip */}
      <div className="bg-[#0f1f3d] py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Need Garage Door Service in Bay Shore, NY?</h2>
        <p className="text-white/70 mb-5">Same-day service · Free written estimate · Written warranty · 100% satisfaction guaranteed</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
            📞 Call {BUSINESS.phone}
          </a>
          <Link href="/contact" className="btn-secondary">
            Request Service Online
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <div className="text-white font-black text-xl">Bay Shore Garage Door</div>
            <div className="text-[#e8390e] text-sm font-semibold mt-0.5">Bay Shore NY 11706</div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Professional garage door repair, spring replacement, opener installation & new door service throughout Bay Shore NY 11706 and all of Suffolk County, Long Island.
          </p>
          <div className="space-y-1 text-sm">
            <div>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#e8390e] font-bold hover:underline">
                📞 {BUSINESS.phone}
              </a>
            </div>
            <div className="text-white/60">📍 {BUSINESS.address}</div>
            <div className="text-white/60">🕐 {BUSINESS.hours}</div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/60 hover:text-white text-sm transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/service-areas", label: "Service Areas" },
              { href: "/contact", label: "Contact / Request Service" },
              { href: "/contact#coupons", label: "Coupons & Discounts" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service areas */}
        <div>
          <h3 className="font-bold text-white mb-4">Service Areas</h3>
          <ul className="space-y-2">
            {SERVICE_AREAS.slice(0, 6).map((area) => (
              <li key={area.city + area.zip}>
                <Link
                  href={`/service-areas`}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {area.city} NY {area.zip}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-4 text-center">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Bay Shore Garage Door · {BUSINESS.website} · Bay Shore NY 11706 · Suffolk County ·{" "}
          {BUSINESS.licenseInfo} · {BUSINESS.phone}
        </p>
        <p className="text-white/30 text-xs mt-1">
          Serving Long Island NY · #bayshoregaragedoor #bayshoregaragedoorrepair #garagedoorrepairBayShoreNY #suffolkcountygaragedoor
        </p>
      </div>
    </footer>
  );
}
