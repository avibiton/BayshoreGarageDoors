import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmergencyBanner from "@/components/EmergencyBanner";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { BUSINESS } from "@/lib/config";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://${BUSINESS.website}`,
    name: BUSINESS.name,
    description: "Same-day garage door repair, spring replacement, opener installation and new door service in Bay Shore NY 11706.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: `https://${BUSINESS.website}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "120 4th Ave",
      addressLocality: "Bay Shore",
      addressRegion: "NY",
      postalCode: "11706",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 40.7279, longitude: -73.2524 },
    openingHours: "Mo-Su 00:00-24:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: BUSINESS.reviewCount },
    areaServed: [
      { "@type": "City", name: "Bay Shore" },
      { "@type": "City", name: "Islip" },
      { "@type": "City", name: "West Islip" },
      { "@type": "City", name: "Brentwood" },
      { "@type": "AdministrativeArea", name: "Suffolk County" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garage Door Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garage Door Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spring Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Opener Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Door Installation" } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who repairs garage doors in Bay Shore NY?",
        acceptedAnswer: { "@type": "Answer", text: `Bay Shore Garage Door provides same-day repair throughout Bay Shore NY 11706. Call ${BUSINESS.phone}.` },
      },
      {
        "@type": "Question",
        name: "How much does spring repair cost in Bay Shore?",
        acceptedAnswer: { "@type": "Answer", text: "Extension spring repair starts from $165. Torsion spring replacement starts from $295. Free written estimate provided." },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <EmergencyBanner />
      <ProcessSteps />
      <Testimonials />
      <ServiceAreaSection />
      <FAQ />

      {/* Final contact section */}
      <section className="py-20 bg-white" id="request-service">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Request Service</h2>
            <p className="section-subtitle">
              Fill out the form and we&apos;ll call you back — or call us directly at{" "}
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#e8390e] font-bold">{BUSINESS.phone}</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
