import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: "About — Bay Shore Garage Door",
  description: `Learn about Bay Shore Garage Door — your local garage door experts in Bay Shore NY 11706. Same-day service, free estimates, written warranty. Call ${BUSINESS.phone}.`,
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative py-24 px-4 text-center overflow-hidden flex items-center justify-center min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
          alt="Bay Shore neighborhood homes with garages"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#091528]/80" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Your Local Garage Door Experts in Bay Shore, NY</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Bay Shore Garage Door serves homeowners throughout Bay Shore NY 11706 and all of Suffolk County. We know South Shore Long Island.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-[#0f1f3d] mb-4">Who We Are</h2>
          <p className="mb-6 leading-relaxed">
            Bay Shore is one of Suffolk County&apos;s most active South Shore communities — a mix of postwar colonials and cape-style homes along 4th Avenue and the surrounding residential streets, alongside more recently renovated properties near Great South Bay. We service garage doors throughout Bay Shore every day and we know this community&apos;s homes, its hardware challenges, and what it takes to fix a door right the first time.
          </p>

          <h2 className="text-2xl font-bold text-[#0f1f3d] mb-4">The South Shore Difference</h2>
          <p className="mb-6 leading-relaxed">
            The biggest factor distinguishing Bay Shore garage door service from inland communities is Great South Bay. The moisture and salt air coming off the bay accelerates corrosion on standard steel lifting cables, spring coils, and exposed hinges significantly faster than inland Suffolk County locations. When you call Bay Shore Garage Door, we come prepared — carrying galvanized steel cables as standard, and stainless steel hardware for properties closest to the water.
          </p>

          <h2 className="text-2xl font-bold text-[#0f1f3d] mb-4">How We Work</h2>
          <p className="mb-6 leading-relaxed">
            Every service call starts with a free written estimate. A real technician answers your call, diagnoses the problem over the phone, and dispatches the same day. We call 30 minutes before arrival, complete a full 22-point system inspection, and leave only after a safety test confirms everything is working correctly.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 my-10">
            {[
              { icon: "📞", title: "Real Technician Answers", desc: "No call centers. A garage door expert picks up and diagnoses your problem over the phone before we arrive." },
              { icon: "📝", title: "Free Written Estimate", desc: "Full inspection, written price, your approval before we touch anything. Written price = final price." },
              { icon: "🛡️", title: "Written Warranty", desc: "Every repair backed in writing. If it's not right after we leave, we return at no charge." },
              { icon: "🌊", title: "Coastal Specialists", desc: "Galvanized & stainless hardware for Bay Shore's salt air environment from Great South Bay." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 flex gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0f1f3d] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
            📞 Call {BUSINESS.phone}
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-[#0f1f3d] text-[#0f1f3d] font-bold px-6 py-3 rounded-md hover:bg-[#0f1f3d] hover:text-white transition-colors">
            Request Service Online
          </Link>
        </div>
      </section>
    </div>
  );
}
