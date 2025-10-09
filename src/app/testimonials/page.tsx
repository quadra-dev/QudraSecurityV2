// app/page.tsx (App Router) or pages/index.tsx (Pages Router)
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
export default function Home() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Safe",
    },
    {
      text: "Future",
    },
    {
      text: "with",
    },
    {
      text: "Quadra",
      className: "text-gray-500 dark:text-blue-500",
    }, 
    {
      text: "Security",
      className: "text-indigo-400 dark:text-blue-500",
    },
  ];
  return (
    <main className="bg-white text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="text-center py-10">
        <div className="flex flex-col items-center justify-center h-[25rem] bg-gradient-to-b from-blue-900 to-indigo-700 px-6">
          <p className="text-black dark:text-neutral-200 text-base  mb-10">
            The road to freedom starts from here
          </p>
          <TypewriterEffect words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Signup
            </button>
          </div>
        </div>

        {/* Images Row */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto py-8">
          <div className="text-left">
            <Image
              src="/lamp1.jpg"
              alt="Lamp Design 1"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            <p className="mt-2 text-sm text-black">
              We understand that true quality isn’t just about craftsmanship.
            </p>
          </div>
          <div>
            <Image
              src="/lamp2.jpg"
              alt="Lamp Design 2"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            <Image
              src="/lamp3.jpg"
              alt="Lamp Design 3"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            <p className="mt-2 text-sm text-black">
              Designed for those who appreciate the finer things in life.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="max-w-3xl mx-auto text-center py-16">
        <p className="text-lg leading-relaxed">
          WITH A LEGACY BUILT ON PRECISION AND QUALITY, WE REMAIN COMMITTED TO
          SHOWCASING THE KNOW-HOW OF BRITISH CRAFTSMANSHIP
        </p>
      </section>

      {/* Material Showcase */}
      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-6">
        <div>
          <Image
            src="/lamp4.jpg"
            alt="Silvered Oxidised Brass"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <p className="mt-2 text-sm text-black uppercase">
            Silvered Oxidised Brass
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="/material1.jpg"
            alt="Material 1"
            width={200}
            height={200}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/material2.jpg"
            alt="Material 2"
            width={200}
            height={200}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/material3.jpg"
            alt="Material 3"
            width={200}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 uppercase">
          Overview of the Process Steps
        </h2>

        <div className="grid md:grid-cols-5 gap-8 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold">01</h3>
            <p>Material Preparation</p>
          </div>
          <div>
            <h3 className="font-semibold">02</h3>
            <p>Filament Installation</p>
          </div>
          <div>
            <h3 className="font-semibold">03</h3>
            <p>Gas Filling</p>
          </div>
          <div>
            <h3 className="font-semibold">04</h3>
            <p>Sealing and Testing</p>
          </div>
          <div>
            <h3 className="font-semibold">05</h3>
            <p>Packaging and Distribution</p>
          </div>
        </div>
      </section>

      {/* Subscribe + Footer */}
      <footer className="bg-neutral-100 border-t py-12 text-sm px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Don’t Miss Out On Our Latest Updates And Exclusive Offers
            </p>
            <button className="px-6 py-2 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col md:items-end">
            <p>9 Cloudesley Road, London, N1 0FH</p>
            <p>+44 (0) 20 7686 8700</p>
            <p className="mt-2 uppercase tracking-wide">Made in England</p>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-center mt-16">
          LUMINATE
        </h1>
      </footer>
    </main>
  );
}
