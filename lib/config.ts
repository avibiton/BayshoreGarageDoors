export const BUSINESS = {
  name: "Bay Shore Garage Door",
  phone: "(631) 954-3148",
  phoneRaw: "6319543148",
  email: "info@bayshoregaragedoors.net",
  website: "bayshoregaragedoors.net",
  address: "",
  city: "Bay Shore",
  state: "NY",
  zip: "11706",
  county: "Suffolk County",
  hours: "24 Hours · 7 Days a Week",
  rating: "5.0",
  reviewCount: 147,
  licenseInfo: "Licensed & Insured",
};

export const SERVICE_AREAS = [
  { city: "Bay Shore", zip: "11706" },
  { city: "Islip", zip: "11751" },
  { city: "West Islip", zip: "11795" },
  { city: "Brentwood", zip: "11717" },
  { city: "Deer Park", zip: "11729" },
  { city: "Central Islip", zip: "11722" },
  { city: "East Islip", zip: "11730" },
  { city: "Great River", zip: "11739" },
  { city: "Brightwaters", zip: "11718" },
  { city: "Bay Shore", zip: "11706" },
];

export const SERVICES = [
  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    shortTitle: "Repair",
    description: "Same-day repair for broken springs, cables, rollers, tracks, and panels throughout Bay Shore NY.",
    icon: "🔧",
    price: "From $99",
  },
  {
    slug: "spring-replacement",
    title: "Spring Replacement",
    shortTitle: "Springs",
    description: "Torsion & extension spring replacement. High-cycle upgrades available. Both springs replaced as a pair.",
    icon: "🔩",
    price: "From $295",
  },
  {
    slug: "opener-repair",
    title: "Opener Repair & Installation",
    shortTitle: "Openers",
    description: "LiftMaster, Genie, Chamberlain & Craftsman. Belt drive, chain drive, wall-mount with MyQ & battery backup.",
    icon: "📡",
    price: "From $130",
  },
  {
    slug: "door-installation",
    title: "New Door Installation",
    shortTitle: "Installation",
    description: "Steel, insulated, carriage house, composite, & glass/aluminum doors. Free in-home estimate.",
    icon: "🚪",
    price: "Free Estimate",
  },
  {
    slug: "emergency-service",
    title: "Emergency Service",
    shortTitle: "Emergency",
    description: "24/7 emergency garage door repair. Technician dispatched day or night, evenings, weekends & holidays.",
    icon: "⚡",
    price: "Available 24/7",
  },
  {
    slug: "cable-repair",
    title: "Cable & Track Repair",
    shortTitle: "Cable/Track",
    description: "Galvanized cable replacement, track realignment, drum & bearing plate service for coastal Bay Shore homes.",
    icon: "⛓️",
    price: "From $125",
  },
];

export const COUPONS = [
  { code: "SPRING10", discount: "10% OFF", service: "Spring Replacement", expires: "12/31/2026" },
  { code: "OPENER99", discount: "$99 OFF", service: "New Opener Installation", expires: "12/31/2026" },
  { code: "NEWDOOR250", discount: "$250 OFF", service: "New Door Installation", expires: "12/31/2026" },
];
