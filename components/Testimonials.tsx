const testimonials = [
  {
    name: "Michael R.",
    location: "Bay Shore, NY",
    text: "Called at 7am with a broken spring — technician was at my house by 10am. Gave me a written estimate, fixed both springs, and did a full safety check. Price was exactly what they quoted. Couldn't be happier.",
    stars: 5,
    service: "Spring Replacement",
  },
  {
    name: "Jennifer L.",
    location: "Islip, NY",
    text: "Our door went off-track on a Sunday night. They actually answered the phone, diagnosed it over the phone, and had someone out within 3 hours. Professional, efficient, and fair pricing. Will definitely call again.",
    stars: 5,
    service: "Emergency Off-Track Repair",
  },
  {
    name: "Tom & Karen S.",
    location: "West Islip, NY",
    text: "We live close to the bay and our cables were rusting badly. They came out, replaced everything with galvanized cables, upgraded the rollers, and explained why coastal homes need the better hardware. Great service.",
    stars: 5,
    service: "Cable & Hardware Replacement",
  },
  {
    name: "Dave M.",
    location: "Brentwood, NY",
    text: "Had them install a new LiftMaster belt drive opener. They recommended the battery backup model — glad they did because we lost power in a storm and the door still worked perfectly. Great recommendation.",
    stars: 5,
    service: "Opener Installation",
  },
  {
    name: "Linda C.",
    location: "Bay Shore, NY",
    text: "Got a new insulated door installed. The difference in our garage temperature is remarkable — it's actually comfortable out there now. They finished the whole job in one day and cleaned up after themselves.",
    stars: 5,
    service: "New Door Installation",
  },
  {
    name: "Rick B.",
    location: "Deer Park, NY",
    text: "Fair, honest, and fast. Got a written estimate, approved it, they fixed the door, and left a written warranty. Exactly what you want from a service company. No games, no upselling, just solid work.",
    stars: 5,
    service: "Tune-Up & Safety Check",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20" style={{ background: "#f8f9fa" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">What Bay Shore Homeowners Say</h2>
          <p className="section-subtitle">⭐⭐⭐⭐⭐ Rated 5.0 · Trusted throughout Suffolk County</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-yellow-400 text-lg mb-3">{"⭐".repeat(t.stars)}</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-[#0f1f3d] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.location} · {t.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
