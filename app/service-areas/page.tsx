import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SERVICE_AREAS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Service Areas — Bay Shore Garage Door | Suffolk County NY",
  description: `Bay Shore Garage Door serves Bay Shore, Islip, West Islip, Brentwood, Deer Park and all of Suffolk County. Same-day service. Call ${BUSINESS.phone}.`,
};

const areaDetails = [
  {
    city: "Bay Shore",
    zip: "11706",
    desc: "Our home community. We service garage doors throughout Bay Shore every day — from 4th Avenue colonials to waterfront properties near Great South Bay. Galvanized hardware is standard for all Bay Shore installs.",
  },
  {
    city: "Islip",
    zip: "11751",
    desc: "Full garage door repair, spring replacement, and opener installation throughout Islip NY 11751. Same-day service from Bay Shore.",
  },
  {
    city: "West Islip",
    zip: "11795",
    desc: "Serving homeowners in West Islip NY 11795 with same-day garage door repair and installation. 2–4 hour response from our Bay Shore location.",
  },
  {
    city: "Brentwood",
    zip: "11717",
    desc: "Garage door repair and spring replacement in Brentwood NY 11717. Same-day service throughout this Suffolk County community.",
  },
  {
    city: "Deer Park",
    zip: "11729",
    desc: "Full-service garage door repair, opener installation, and new door service in Deer Park NY 11729. Same-day availability.",
  },
  {
    city: "Central Islip",
    zip: "11722",
    desc: "Serving Central Islip NY 11722 with emergency and scheduled garage door repair, spring service, and installations.",
  },
  {
    city: "East Islip",
    zip: "11730",
    desc: "East Islip garage door repair and installation. Same-day service available throughout East Islip NY 11730.",
  },
  {
    city: "Brightwaters",
    zip: "11718",
    desc: "Garage door service in Brightwaters NY 11718. Coastal salt-air hardware upgrades available for South Shore properties.",
  },
];

export default function ServiceAreasPage() {
  return (
    <div>
      <section className="relative py-24 px-4 text-center overflow-hidden flex items-center justify-center min-h-[320px]">
        <Image
          src="/images/technician-door.jpg"
          alt="Bay Shore Garage Door technician inspecting a residential garage door"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#091528]/80" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Service Areas — Bay Shore Garage Door</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Same-day garage door repair and installation throughout Bay Shore NY 11706 and all of Suffolk County, Long Island
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {areaDetails.map((area) => (
            <div key={area.city} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#e8390e] hover:shadow-md transition-all">
              <h2 className="text-lg font-bold text-[#0f1f3d] mb-1">
                {area.city} NY {area.zip}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{area.desc}</p>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#e8390e] font-semibold text-sm hover:underline">
                📞 Schedule Service →
              </a>
            </div>
          ))}
        </div>

        {/* All of Suffolk County */}
        <div className="bg-[#0f1f3d] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Serving All of Suffolk County</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Don&apos;t see your town? We serve all of Suffolk County, Long Island. Call us — a technician will confirm same-day availability for your area.
          </p>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 bg-[#e8390e] text-white font-black text-xl px-8 py-4 rounded-xl hover:bg-[#c62d0a] transition-colors">
            📞 {BUSINESS.phone}
          </a>
          <p className="text-white/50 text-sm mt-3">Available 24/7 · Same-day service</p>
        </div>
      </section>
    </div>
  );
}
