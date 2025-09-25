import Image from "next/image";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";
import Link from "next/link";
export default function About() {
  const members = [
    {
      id: 1,
      name: "Jiyanshi Batra",
      role: "CEO & Founder",
      img: "",
      size: { width: 100, height: 180 },
    },
    {
      id: 2,
      name: "Jiyanshi Batra",
      role: "CEO & Co-Founder",
      img: "",
      size: { width: 100, height: 180 },
    },
    {
      id: 3,
      name: "Jiyanshi Batra",
      role: "Director",
      img: "",
      size: { width: 100, height: 180 },
    },
    {
      id: 4,
      name: "Jiyanshi Batra",
      role: "HR Manager",
      img: "",
      size: { width: 100, height: 180 },
    },
    {
      id: 5,
      name: "Jiyanshi Batra",
      role: "Technical Head",
      img: "",
      size: { width: 100, height: 180 },
    },
    {
      id: 6,
      name: "Jiyanshi Batra",
      role: "CEO & Founder",
      img: "",
      size: { width: 100, height: 180 },
    },
    {
      id: 7,
      name: "Jiyanshi Batra",
      role: "CEO & Founder",
      img: "",
      size: { width: 100, height: 180 },
    },
    {
      id: 8,
      name: "Aryan Raj",
      role: "Digital",
      img: "/AboutImages/teammember1.jpg",
      size: { width: 100, height: 100 },
    },
  ];
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
                Maximize Your Potential with Our Enterprise Technology
                Solutions. Let us help you unlock the full potential of your
                business with our innovative solutions.
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
              They like how we structure their business models
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="bg-[#F4BABA] p-4 rounded-lg shadow-xl">
                <h3 className="font-semibold text-lg">Define the strategy</h3>
                <p className="text-gray-800 mt-2">
                  A clear and well-defined strategy is essential for achieving
                  success in your business, outlines goals, and provides a
                  roadmap for achieving them.
                </p>
              </div>
              <div className="bg-[#EFD073] p-4 rounded-lg shadow-xl">
                <h3 className="font-semibold text-lg">
                  Re-structure business model
                </h3>
                <p className="text-gray-800 mt-2">
                  Re-structuring can help you streamline operations, improve
                  efficiency, and drive growth. A strategic re-structure can be
                  powerful for success.
                </p>
              </div>
              <div className="bg-[#98F1AE] p-4 rounded-lg shadow-xl">
                <h3 className="font-semibold text-lg">Improve Performance</h3>
                <p className="text-gray-800 mt-2">
                  Improving performance is key to achieving success and
                  enhancing business skills. There are many strategies that can
                  drive improvement.
                </p>
              </div>
              <div className="bg-[#C062EF] p-4 rounded-lg shadow-xl">
                <h3 className="font-semibold text-lg">
                  Testing and evaluation
                </h3>
                <p className="text-gray-800 mt-2">
                  This results in higher quality outcomes, increased customer
                  satisfaction, and the ability to compete in a demanding
                  market.
                </p>
              </div>
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

        {/* Team Section */}
        <section className="py-5bg-gradient-to-b from-fuchsia-200 to-fushia-100 pb-10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              We work according to the specialization and expertise of the team,
              knowledge, and project needs in the global market
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {members.map((member) => (
                <div key={member.id} className="flex flex-col items-center">
                  <Image
                    src={member.img}
                    alt={`Team member ${member.id}`}
                    width={member.size?.width || 180} // fallback to 180 if not provided
                    height={member.size?.height || 180} // fallback to 180 if not provided
                    className="rounded-lg shadow-lg object-fill"
                  />
                  <p className="mt-4 font-medium">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactForm1 />
    </div>
  );
}
