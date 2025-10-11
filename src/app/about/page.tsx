import Image from "next/image";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative  bg-gradient-to-b from-blue-900 to-indigo-700 text-white">
          <div className="container mx-auto px-6 pt-28 pb-20 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Building Trust Through Advanced Security: Our Commitment to
                Protecting What Matters Most.
              </h1>
              <p className="mt-6 text-lg text-gray-200">
                At Quadra Security, we go beyond products — we deliver complete
                electronic security and automation solutions that protect homes,
                businesses, and institutions. With years of expertise in CCTV,
                biometric systems, access control, alarm systems, and smart
                surveillance, our mission is to ensure safety, reliability, and
                peace of mind for every client.
              </p>
              <Link href="/contact">
                <button className="px-4 py-3 bg-[#434CFF] text-white rounded-3xl shadow-md hover:bg-yellow-600 flex gap-2 mt-6">
                  Explore More
                  <img
                    src="/ServicesImages/LinkArrow.svg"
                    alt="icon"
                    width={30}
                    height={30}
                  />
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/AboutImages/AboutUsimg5.jpg"
                alt="Team working"
                width={550}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 🔹 INSERTED NEW ABOUT CONTENT SECTION HERE 🔹 */}
       {/* Quadra Security Infographic Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Why Choose Quadra Security
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Customized Quotation",
          desc: "Every project is unique — and so are its security needs. We offer customized quotations based on your property type, scale, and budget.",
          icon: "/AboutImages/aboutsvg1.svg",
        },
        {
          title: "Free Consultation & Site Visit",
          desc: "We provide a free on-site survey and consultation to identify risks and recommend the right mix of cameras and systems.",
          icon: "/AboutImages/aboutsvg2.svg",
        },
        {
          title: "Transparent Pricing",
          desc: "No hidden charges. Clear, upfront pricing for installations, ensuring you always know what you’re paying for.",
          icon: "/AboutImages/aboutsvg3.svg",
        },
        {
          title: "Skilled Technicians",
          desc: "Trained professionals ensure seamless installation, optimal camera placement, and reliable integration.",
          icon: "/AboutImages/aboutsvg4.svg",
        },
        {
          title: "Customized Security Solutions",
          desc: "From smart surveillance to automation, we design security ecosystems for homes, offices, and industries.",
          icon: "/AboutImages/aboutsvg5.svg",
        },
        {
          title: "24×7 Customer Support",
          desc: "Our dedicated support team provides continuous maintenance and assistance to ensure smooth operation.",
          icon: "/AboutImages/aboutsvg6.svg",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
        >
          <div className="mb-4">
            <img
              src={card.icon}
              alt={card.title}
              width={64}
              height={64}
              className="mx-auto"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* 🔹 END OF NEW INSERTED SECTION 🔹 */}

        {/* Testimonial Section */}
        <section className="bg-purple-700 text-white py-16">
          <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <Image
              src="/AboutImages/AboutUsimg6.webp"
              alt="Client photo"
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
            <div>
              <p className="text-lg italic max-w-2xl">
                “Working with <span className="font-bold">Ruffleyo</span> helped
                us realize projects that are creative and researchable. Their
                work is always excellent, we enjoy how they build all the study
                cases and make them like a puzzle. Then, we have the product
                like magic”
              </p>
              <p className="mt-4 font-semibold">Jacon Somber</p>
              <p className="text-sm text-gray-200">Founder of Numina Studio</p>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-fuchsia-300 to-fushia-200">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              We have succeeded in increasing various company services with
              innovations and product improvement
            </h2>
            <div className="flex justify-center gap-20">
              <div>
                <p className="text-4xl font-bold text-purple-700">300+</p>
                <p className="text-gray-600 mt-2">Enterprise collaboration</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-700">180+</p>
                <p className="text-gray-600 mt-2">
                  Projects & product innovations
                </p>
              </div>
            </div>
            <div className="mt-12 rounded-xl ">
              <Image
                src="/AboutImages/aboutcarouselimage1.svg"
                alt="Team meeting"
                width={350}
                height={200}
                className="rounded-xl  mx-auto  "
              />
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="py-10 bg-white">
          <Image
            src="/AboutImages/AboutUsimgCircular.svg"
            alt="about"
            width={450}
            height={350}
            className="mx-auto py-4"
          />
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              They Like How We Structure Their Security Strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="bg-[#F4BABA] p-4 rounded-lg shadow-xl">
                <h3 className="font-semibold text-lg">Define the strategy</h3>
                <p className="text-gray-800 mt-2">
                  Every strong security plan begins with a clear strategy. We
                  start by understanding your site, your risks, and your goals —
                  then design a structured roadmap that aligns advanced
                  technologies like CCTV, VDP, biometric access, and alarm
                  systems into one cohesive protection framework.
                </p>
              </div>
              <div className="bg-[#EFD073] p-4 rounded-lg shadow-xl">
                <h3 className="font-semibold text-lg">
                  Structure the Security Model
                </h3>
                <p className="text-gray-800 mt-2">
                  Security requirements evolve with time — and so should your
                  system. We help you upgrade and optimize your existing setup
                  to improve coverage, integrate smart features, and enhance
                  overall reliability. From analog to IP-based solutions, our
                  strategic restructuring ensures your infrastructure grows with
                  your needs.
                </p>
              </div>
              <div className="bg-[#98F1AE] p-4 rounded-lg shadow-xl">
                <h3 className="font-semibold text-lg">Improve Performance</h3>
                <p className="text-gray-800 mt-2">
                  Our focus is on long-term performance. Through proper
                  installation, calibration, and preventive maintenance, we make
                  sure every device — whether it’s a camera, biometric scanner,
                  or door lock — operates at peak efficiency. Consistent
                  performance means consistent safety.
                </p>
              </div>
              <div className="bg-[#C062EF] p-4 rounded-lg shadow-xl">
                <h3 className="font-semibold text-lg">
                  Testing and evaluation
                </h3>
                <p className="text-gray-800 mt-2">
                  Every Quadra Security project goes through rigorous testing
                  and real-world evaluation. We verify system connectivity,
                  camera angles, storage reliability, and alert responsiveness —
                  ensuring the entire setup performs flawlessly under any
                  condition. Because in security, precision matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        
      </main>
      <ContactForm1 />
    </div>
  );
}
