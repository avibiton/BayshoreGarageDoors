import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS, SERVICES } from "@/lib/config";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

const serviceContent: Record<string, { body: string; bullets: string[]; price?: string }> = {
  "garage-door-repair": {
    body: `When a garage door fails in Bay Shore, the disruption is immediate — the car is trapped, the commute is delayed, and the security of your home is compromised. Bay Shore Garage Door provides emergency repair service throughout Bay Shore NY 11706 the same day you call.\n\nThe most common repair calls we receive in Bay Shore involve broken torsion springs, snapped lifting cables, and door systems that have come completely off their tracks. Each of these is a safety issue — not just an inconvenience. Bay Shore's proximity to Great South Bay also means we see significant salt air corrosion on hardware — particularly on older homes along 4th Avenue and the waterfront streets.\n\nEvery repair in Bay Shore includes a full 22-point inspection — not just the failing component. We check the spring balance, inspect both cables, examine all rollers and hinges, test the safety sensors, and verify the opener's auto-reverse before leaving.`,
    bullets: [
      "Broken torsion & extension spring repair",
      "Snapped cable replacement (galvanized standard)",
      "Off-track door realignment",
      "Roller & hinge replacement",
      "Panel repair & replacement",
      "Bottom seal & weather stripping",
      "22-point safety inspection included",
    ],
    price: "Starting from $99",
  },
  "spring-replacement": {
    body: `If you heard a loud bang coming from your garage in Bay Shore — like a gunshot — that was almost certainly your torsion spring breaking under tension. The torsion spring runs horizontally above the door opening along the torsion shaft, wound tightly to counterbalance the full weight of the door. When it breaks, that tension releases instantly and violently.\n\nDo not use the door or the opener. Call (631) 954-3148 for same-day torsion spring replacement in Bay Shore. We carry springs in every standard size on every truck — wound to the correct torque for your specific door weight.\n\nBay Shore's postwar colonials and cape homes typically use standard residential torsion springs rated for 10,000 cycles. Salt air from Great South Bay accelerates oxidation on the spring coil, sometimes cutting that lifespan to 5–6 years for waterfront-adjacent properties. We recommend zinc-coated springs for all Bay Shore installations.`,
    bullets: [
      "Torsion spring replacement (from $295)",
      "Extension spring replacement with safety cables",
      "High-cycle springs (25,000 cycles) available",
      "Ultra-cycle springs (50,000 cycles) available",
      "Both springs always replaced as a pair",
      "Zinc-coated springs for coastal Bay Shore homes",
      "10% off with code SPRING10",
    ],
    price: "Torsion springs from $295",
  },
  "opener-repair": {
    body: `The most common opener call we receive in Bay Shore: "The motor is running but the door isn't moving." The diagnosis is almost always the same — a stripped main drive gear. This nylon gear inside the opener head is designed to fail before the motor does, protecting the more expensive component.\n\nFor Bay Shore's attached garages — where the garage typically sits below a bedroom or beside the kitchen — noise matters significantly. We strongly recommend the LiftMaster 87504 belt drive for these applications.\n\nThe 87504 includes integrated battery backup, which is especially important in Bay Shore. Suffolk County's South Shore takes a direct hit from nor'easters and summer Atlantic storms — power outages are a recurring reality. With battery backup, the door continues to operate normally during outages.`,
    bullets: [
      "Gear & sprocket kit replacement (LiftMaster, Genie, Chamberlain, Craftsman)",
      "Safety sensor repair & replacement",
      "Logic board replacement",
      "Battery backup installation",
      "MyQ smart hub setup",
      "Remote & keypad programming",
      "$99 off new opener installation (code OPENER99)",
    ],
    price: "Gear repair from $130",
  },
  "door-installation": {
    body: `A new garage door is one of the highest-return improvements available to Bay Shore homeowners — improving curb appeal, energy efficiency in attached garages, and home value. The most requested style for Bay Shore's colonial and cape homes is the carriage house door — steel or composite overlay with deep wood-grain embossing.\n\nFor Bay Shore's attached garages — where the door shares a wall with the kitchen or a bedroom — we strongly recommend an insulated triple-layer steel door with R-12 polyurethane foam. The thermal improvement is immediately noticeable in adjacent rooms.\n\nInstallation includes removal of the old door, inspection of the opening framing, installation of the new door, spring system calibration to the exact door weight, opener connection, and a complete safety test. Most standard Bay Shore door installations are completed in a single day.`,
    bullets: [
      "Steel raised panel doors",
      "Insulated triple-layer (R-12) doors",
      "Carriage house style with decorative hardware",
      "Composite overlay (wood-grain appearance)",
      "Glass & aluminum doors (anodized, rust-resistant)",
      "Complete hardware & spring installation",
      "$250 off with code NEWDOOR250",
    ],
    price: "Free in-home estimate",
  },
  "emergency-service": {
    body: `Garage doors don't break on a schedule. Bay Shore Garage Door provides 24/7 emergency service throughout Bay Shore NY 11706 — evenings, weekends, holidays, and overnight. A real technician answers every call, day or night.\n\nEmergency situations we handle include: doors completely off their tracks, broken springs with the car trapped inside, snapped cables with one side of the door dropped, and openers that have failed with no manual override accessible.\n\nWe dispatch within 2–4 hours throughout Bay Shore and surrounding Suffolk County communities. No extra charge for evening or weekend calls — our pricing is the same any time of day.`,
    bullets: [
      "24/7 availability — evenings, weekends, holidays",
      "2–4 hour response throughout Bay Shore",
      "Off-track emergency repair",
      "Broken spring emergency replacement",
      "Snapped cable emergency repair",
      "Car-trapped-in-garage situations",
      "No extra charge for after-hours calls",
    ],
    price: "Available 24/7",
  },
  "cable-repair": {
    body: `Lifting cables are the steel cables that run from the bottom corner of each door panel up to the drum on the torsion shaft, transferring the spring's force to lift the door. When a cable snaps, the door drops hard on that side — a safety hazard and a sign you need immediate repair.\n\nBay Shore's proximity to Great South Bay puts standard steel cables at higher risk of corrosion. We use galvanized steel cables as standard for all Bay Shore cable replacements, and stainless steel for properties within direct line of the water.\n\nTrack issues — bent sections, misaligned vertical tracks, worn horizontal tracks — are another common Bay Shore repair. Most off-track situations are caused by accumulated debris in the track, a broken cable that caused one side to drop, or impact damage to the door or track from a vehicle.`,
    bullets: [
      "Galvanized cable replacement (standard for Bay Shore)",
      "Stainless steel cables for coastal properties",
      "Off-track emergency repair",
      "Track realignment & adjustment",
      "Drum & bearing plate replacement",
      "Nylon roller upgrades",
      "Cables from $125 · Rollers from $35 each",
    ],
    price: "Cables from $125",
  },
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Bay Shore NY | Bay Shore Garage Door`,
    description: `${service.description} Call ${BUSINESS.phone} for same-day service in Bay Shore NY 11706.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = serviceContent[slug];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f1f3d] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{service.title} — Bay Shore NY</h1>
          <p className="text-white/70 text-lg mb-6 max-w-2xl">{service.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
              📞 Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Service Online
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="md:col-span-2">
          {content?.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-5">{para}</p>
          ))}

          {content?.bullets && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-[#0f1f3d] mb-4">What&apos;s Included</h2>
              <ul className="space-y-2">
                {content.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <span className="text-[#e8390e] font-bold mt-0.5">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Internal links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-[#0f1f3d] mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm text-[#e8390e] border border-[#e8390e] px-3 py-1.5 rounded-full hover:bg-[#e8390e] hover:text-white transition-colors"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-[#0f1f3d] rounded-2xl p-6 sticky top-24">
            <div className="text-white font-bold text-lg mb-1">{service.title}</div>
            {content?.price && (
              <div className="text-[#e8390e] font-bold mb-4">{content.price}</div>
            )}
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-[#e8390e] text-white font-bold py-4 rounded-xl mb-3 hover:bg-[#c62d0a] transition-colors"
            >
              📞 {BUSINESS.phone}
            </a>
            <p className="text-white/60 text-xs text-center mb-6">Real technician answers · Available 24/7</p>

            <h3 className="text-white font-bold mb-3">Request Service</h3>
            <div className="bg-white rounded-xl p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
