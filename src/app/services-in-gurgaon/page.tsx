import Head from "next/head";
import Link from "next/link";
import { ServicePageContactForm } from "@/components/contactForms/ServicePageContactForm";
import { TestimonialCarousel } from "@/components/carousels/TestimonialCarousel";
import {
  CheckCircle,
  Shield,
  Clock,
  Award,
  Wrench,
  Users,
  MapPin,
  Phone,
  Camera,
  Server,
  Lock,
  ScanFace,
  Fingerprint,
  MonitorPlay,
  Bell,
  Search,
  Key,
} from "lucide-react";

export const metadata = {
  title: "CCTV Camera Installation Gurgaon | CCTV Dealers | Quadra Security",
  description:
    "Quadra Security offers professional CCTV camera installation in Gurgaon. Authorized dealers for Hikvision, Prama, CP Plus. Covering all sectors & nearby cities with fast service & expert consultation.",
  keywords: [
    "CCTV camera installation Gurgaon",
    "CCTV installation near me",
    "CCTV camera near me",
    "CCTV repair near me",
    "CCTV dealers in Gurgaon",
    "Hikvision CCTV camera",
    "CP Plus CCTV camera",
    "Dahua CCTV camera",
    "CCTV security system Gurgaon",
    "CCTV camera for home",
    "CCTV camera shop near me",
    "CCTV service provider near me",
    "CCTV installer near me",
    "CCTV shop near me",
    "Outdoor CCTV camera",
    "Indoor CCTV camera",
    "Night vision CCTV camera",
    "CCTV installation DLF Phase 1/2/3",
    "CCTV camera dealer Sohna Road",
    "CCTV supplier Cyber City",
    "CCTV in Gurgaon",
    "CCTV Camera in Gurgaon",
    "CCTV Camera Dealer in Gurgaon",
    "CCTV Camera Dealers in Gurgaon",
    "CCTV Dealer in Gurgaon",
    "CCTV Dealers in Gurgaon",
    "CCTV Camera Supplier in Gurgaon",
    "CCTV Camera Suppliers in Gurgaon",
    "CCTV Suppliers in Gurgaon",
    "CCTV Distributor in Gurgaon",
    "CCTV Camera Distributor in Gurgaon",
    "CCTV Camera Service Provider",
    "CCTV Camera Installation",
    "CCTV Camera Price List",
    "CCTV Camera Provider",
    "CCTV Camera Shop in Gurgaon",
    "CCTV Camera Company in Gurgaon",
    "CCTV Camera for Home in Gurgaon",
    "CCTV Camera for Office in Gurgaon",
    "CCTV Camera for Factory in Gurgaon",
    "CCTV Camera Online in Gurgaon",
    "CCTV Camera System in Gurgaon",
    "Hikvision Dealers in Gurgaon",
    "Hikvision CCTV in Gurgaon",
    "Hikvision CCTV Camera Dealer in Gurgaon",
    "Hikvision Distributor in Gurgaon",
    "Hikvision Gurgaon",
    "Hikvision Camera Dealer in Gurgaon",
    "Hikvision Camera Price in Gurgaon",
    "Hikvision Camera Price List in Gurgaon",
    "Hikvision CCTV Camera Suppliers in Gurgaon",
    "CCTV Camera in Manesar",
    "CCTV Camera in Bhiwadi",
    "CCTV Camera in Faridabad",
    "CCTV Camera in Neemrana",
    "CCTV Dealer in Faridabad",
    "CCTV Camera in Bawal",
    "CCTV Camera in Udyog Vihar",
    "CCTV Camera in Delhi",
    "CCTV Camera in Dharuhera",
    "CCTV Camera in Rewari",
    "DLF Phase 1",
    "DLF Phase 2",
    "DLF Phase 3",
    "DLF Phase 4",
    "DLF Phase 5",
    "New Palam Vihar",
    "Ashok Vihar Phase II",
    "Ashok Vihar Phase III",
    "Bhondsi",
    "Civil Lines",
    "Dwarka Expressway",
    "Golf Course Extn",
    "Golf Course Road",
    "Gurgaon-Faridabad Road",
    "Gwal Pahari",
    "Khandsa Road",
    "Manesar",
    "MG Road",
    "New Gurgaon",
    "NH 8",
    "Palam Vihar",
    "Palam Vihar Extension",
    "Pataudi",
    "Patel Nagar",
    "Sector-1",
    "Sector-2",
    "Sector-3",
    "Sector-3 A",
    "Sector-4",
    "Sector-5",
    "Sector-10",
    "Sector-10 A",
    "Sector-11",
    "Sector-12",
    "Sector-12 A",
    "Sector-13",
    "Sector-14",
    "Sector-15",
    "Sector-16",
    "Sector-17",
    "Sector-18",
    "Sector-19",
    "Sector-20",
    "Sector-21",
    "Sector-22",
    "Sector-23",
    "Sector-23 A",
    "Sector-24",
    "Sector-24 A",
    "Sector-25",
    "Sector-26",
    "Sector-27",
    "Sector-28",
    "Sector-29",
    "Sector-30",
    "Sector-31",
    "Sector-32",
    "Sector-33",
    "Sector-34",
    "Sector-35",
    "Sector-36",
    "Sector-37",
    "Sector-37 A",
    "Sector-37 B",
    "Sector-37 C",
    "Sector-37 D",
    "Sector-38",
    "Sector-39",
    "Sector-40",
    "Sector-41",
    "Sector-42",
    "Sector-43",
    "Sector-44",
    "Sector-45",
    "Sector-46",
    "Sector-47",
    "Sector-48",
    "Sector-49",
    "Sector-50",
    "Sector-51",
    "Sector-52",
    "Sector-53",
    "Sector-54",
    "Sector-55",
    "Sector-56",
    "Sector-94",
    "Sector-95",
    "Sector-100",
    "Sector-101",
    "Sector-102",
    "Sector-103",
    "Sector-103A",
    "Sector-104",
    "Sector-105",
    "Sector-106",
    "Sector-107",
    "Sector-108",
    "Sector-109",
    "Sector-110",
    "Sector-110 A",
    "Sector-111",
    "Sector-112",
    "Sector-113",
    "Sector-114",
    "Sector-116",
    "Sohna",
    "Sohna Road",
    "South City",
    "Sikanderpur",
    "Sushant Lok Phase 1",
    "Sushant Lok Phase 2",
    "Sushant Lok Phase 3",
  ],
};

export default function CCTVInstallationGurgaon() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Quadra Security",
    image: "https://www.quadrasecurity.com/images/logo.jpg",
    description: "Professional CCTV camera installation services in Gurgaon",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4595",
      longitude: "77.0266",
    },
    url: "https://www.quadrasecurity.com/cctv-camera-installation-gurgaon",
    telephone: "+911234567890",
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
    priceRange: "₹₹",
    sameAs: [
      "https://www.facebook.com/quadrasecurity",
      "https://www.instagram.com/quadrasecurity",
    ],
  };

  const faqs = [
    {
      question: "What is the cost of CCTV installation in Gurgaon?",
      answer: "The cost depends on the number of cameras, brand (Hikvision/Prama/CP Plus), and type (IP/HD). Contact us for a free customized quote.",
    },
    {
      question: "Do you provide after-sales support and AMC?",
      answer: "Yes, we offer comprehensive Annual Maintenance Contracts (AMC) and on-demand repair services for all security systems.",
    },
    {
      question: "How quickly can you install the system?",
      answer: "We typically complete residential installations within 24 hours and commercial projects within 2-3 days, depending on the scale.",
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes, all our products come with a standard manufacturer warranty (usually 1-2 years), plus our installation guarantee.",
    },
    {
      question: "Can I view the CCTV footage on my mobile?",
      answer: "Absolutely. We configure remote viewing on your smartphone so you can monitor your property from anywhere in the world.",
    },
  ];

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <main className="bg-white font-[family-name:var(--font-urbanist)]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-block bg-blue-700/50 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
                  #1 CCTV Installation Service in Gurgaon
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Secure Your World with <span className="text-yellow-400">Quadra Security</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-xl">
                  Authorized dealers for Hikvision, Prama, CP Plus. Professional installation, 24/7 support, and expert consultation for homes and businesses.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg border border-blue-700">
                    <Shield className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium">Certified Experts</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg border border-blue-700">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium">Fast Service</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-5/12 w-full pl-0 lg:pl-12 pt-8 lg:pt-0">
                <ServicePageContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Quadra Security?</h2>
              <p className="text-gray-600 text-lg">
                We combine technical expertise with customer-centric service to deliver the best security solutions in Gurgaon.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-10 h-10 text-blue-600" />,
                  title: "Authorized Dealers",
                  desc: "Direct partners with Hikvision, Prama, CP Plus ensuring genuine products.",
                },
                {
                  icon: <Wrench className="w-10 h-10 text-blue-600" />,
                  title: "Expert Installation",
                  desc: "Certified technicians ensuring precise camera placement and neat wiring.",
                },
                {
                  icon: <Clock className="w-10 h-10 text-blue-600" />,
                  title: "Quick Support",
                  desc: "Fast response time for installation, maintenance, and repairs across Gurgaon.",
                },
                {
                  icon: <Shield className="w-10 h-10 text-blue-600" />,
                  title: "Comprehensive Warranty",
                  desc: "Full manufacturer warranty on products plus our service guarantee.",
                },
                {
                  icon: <Users className="w-10 h-10 text-blue-600" />,
                  title: "Custom Solutions",
                  desc: "Tailored security setups for homes, offices, factories, and societies.",
                },
                {
                  icon: <MapPin className="w-10 h-10 text-blue-600" />,
                  title: "Local Presence",
                  desc: "Deeply rooted in Gurgaon, serving all sectors from DLF to Manesar.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Comprehensive Services</h2>
            <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
              {[
                {
                  title: "CCTV Installation",
                  icon: <Camera className="w-6 h-6" />,
                  items: ["Home Security", "Office Surveillance", "Industrial Setup"]
                },
                {
                  title: "Repair & AMC",
                  icon: <Wrench className="w-6 h-6" />,
                  items: ["Quick Repairs", "Annual Maintenance", "System Upgrades"]
                }
              ].map((service, index) => (
                <div key={index} className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition-colors">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content / SEO Section - Preserved & Styled */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided by Quadra Security</h2>
                <div className="prose prose-blue max-w-none text-gray-600">
                  <p className="mb-4">
                    At Quadra Security, we are proud to be the most trusted name when it comes to{" "}
                    <strong>CCTV Distributor in Gurgaon</strong>, offering an unmatched range of CCTV Camera Systems, surveillance technologies, and end-to-end security solutions.
                  </p>
                  <p className="mb-4">
                    Our services are designed to cater to the ever-evolving needs of urban societies, commercial businesses, and industrial setups. Whether you are looking for{" "}
                    <strong>CCTV installation near me</strong> for a small residence or a complete{" "}
                    <strong>CCTV camera security system in Gurgaon</strong> for a large commercial project, our expert team delivers quality products, professional consultations, and reliable post-sales service.
                  </p>
                  <p>
                    We work closely with our clients to understand their specific security concerns and provide them with customized surveillance systems backed by the latest technologies.
                  </p>
                </div>
              </div>

              {/* Comprehensive Solutions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive CCTV Solutions in Gurgaon</h2>
                <div className="prose prose-blue max-w-none text-gray-600">
                  <p className="mb-4">
                    At Quadra Security, we specialize in full-spectrum <strong>CCTV camera installation in Gurgaon</strong>, ranging from basic home setups to complex multi-site industrial surveillance. We offer both wired CCTV cameras known for their reliability and wireless CCTV cameras for flexible installation and remote access.
                  </p>
                  <p className="mb-4 font-semibold">Our diverse product catalog includes:</p>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
                    <li>Outdoor CCTV camera systems with weatherproof casings</li>
                    <li>Indoor CCTV camera setups for discreet surveillance</li>
                    <li>Night vision CCTV camera models with infrared sensors</li>
                    <li>CCTV camera for home security with mobile viewing</li>
                    <li>CCTV camera for office premises with motion detection</li>
                    <li>CCTV camera for factory spaces with rugged build</li>
                    <li>CCTV camera system in Gurgaon for all property types</li>
                  </ul>
                  <p className="mt-6">
                    As a dedicated <strong>CCTV service provider near me</strong>, we serve across Gurgaon’s prime areas, including DLF Phase 1/2/3, Golf Course Road, Cyber City, Sohna Road, and Manesar.
                  </p>
                </div>
              </div>

              {/* Top Brands */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Brands – Wide Availability</h2>
                <div className="prose prose-blue max-w-none text-gray-600">
                  <p className="mb-4">
                    Recognized as a leading <strong>CCTV Camera Dealer in Gurgaon</strong>, Quadra Security proudly offers surveillance systems from the most reliable global brands.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl mb-6">
                    <h3 className="font-bold text-blue-900 mb-3">We provide:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <span><strong>Hikvision:</strong> Genuine systems for home and enterprise.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <span><strong>Prama:</strong> Advanced options with smart video analytics.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                        <span><strong>CP Plus:</strong> Robust installations for industry-grade needs.</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    As an authorized <strong>Hikvision Dealer in Gurgaon</strong> and official <strong>Hikvision Distributor in Gurgaon</strong>, we ensure direct-to-customer pricing, factory warranty, and original firmware updates.
                  </p>
                </div>
              </div>

              {/* Local Experts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Search Experts – Always Near You</h2>
                <div className="prose prose-blue max-w-none text-gray-600">
                  <p className="mb-4">
                    Are you searching for <strong>CCTV camera near me</strong>, <strong>CCTV camera shop near me</strong>, or <strong>CCTV installer near me</strong>? Your search ends here!
                  </p>
                  <p className="mb-4">At Quadra Security, we serve as:</p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100">Premium CCTV Camera Shop in Gurgaon</li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100">Reliable CCTV Camera Company in Gurgaon</li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100">Experienced CCTV Camera Provider</li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100">Trusted CCTV Camera Suppliers</li>
                    <li className="bg-gray-50 p-3 rounded-lg border border-gray-100">Leading CCTV Camera Distributor</li>
                  </ul>
                </div>
              </div>

              {/* Coverage Areas */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation and Services in Every Sector</h2>
                <div className="prose prose-blue max-w-none text-gray-600">
                  <p className="mb-4">
                    We provide professional-grade <strong>CCTV Camera in Gurgaon</strong> solutions for both residential and commercial environments.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Residential Areas</h3>
                      <ul className="text-sm space-y-1">
                        <li>DLF Phase 1 to Phase 5</li>
                        <li>Palam Vihar & Extension</li>
                        <li>Golf Course Road</li>
                        <li>Sohna Road</li>
                        <li>Sushant Lok Phases 1-3</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Commercial Hubs</h3>
                      <ul className="text-sm space-y-1">
                        <li>Cyber City</li>
                        <li>Udyog Vihar</li>
                        <li>MG Road</li>
                        <li>Golf Course Extn</li>
                        <li>Manesar Industrial Area</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Nearby Cities</h3>
                      <ul className="text-sm space-y-1">
                        <li>Delhi NCR</li>
                        <li>Faridabad</li>
                        <li>Neemrana</li>
                        <li>Bhiwadi</li>
                        <li>Rewari</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <h3 className="font-bold text-yellow-800 mb-2">Full Sector Coverage</h3>
                    <p className="text-sm text-yellow-900">
                      From Sector-1 to Sector-116, including Sector-14, 15, 21, 23, 29, 31, 46, 49, 56, 102, 104, and more. Our dedicated sector-wise deployment teams ensure urgent surveillance requirements are met with speed.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-gray-200 rounded-lg bg-gray-50 open:bg-white open:ring-1 open:ring-blue-500/20 transition-all">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 list-none">
                    <span>{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-blue-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Property?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the best CCTV installation service in Gurgaon with Quadra Security. 
              Expert consultation, genuine products, and unbeatable support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-xl transition duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Contact Us Now
              </Link>
              <Link
                href="tel:+911234567890" // Replace with actual number if available
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition duration-300"
              >
                Call Our Experts
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}