import { BUSINESS, SERVICES } from "@/lib/config";

const promises = [
  {
    icon: "📝",
    title: "Free Written Estimate",
    desc: "Full inspection, written price, your approval before we touch anything. Written price = final price. No surprises.",
  },
  {
    icon: "🛡️",
    title: "Written Warranty",
    desc: "Every repair backed in writing. If it's not right after we leave, we return at no charge.",
  },
  {
    icon: "✅",
    title: BUSINESS.licenseInfo,
    desc: "Garage door repair, spring replacement, opener installation & new door service throughout Bay Shore NY 11706 and Suffolk County.",
  },
];

export default function OurPromise() {
  return (
    <section className="py-20" style={{ background: "#f8f9fa" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Promise</h2>
          <p className="section-subtitle">What every Bay Shore homeowner gets when they call us</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((p) => (
            <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-[#0f1f3d] mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#0f1f3d] mb-4 text-center">Upfront Starting Prices</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.filter((s) => s.price.startsWith("From")).map((s) => (
              <div key={s.slug} className="flex justify-between items-center border-b border-gray-100 pb-2 text-sm">
                <span className="text-gray-700">{s.title}</span>
                <span className="text-[#e8390e] font-bold">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
