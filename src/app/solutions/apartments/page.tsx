import InterestedCard from "@/components/cards/InterestedCard";

import Buttonfunction from "@/components/Buttonfunction/Buttonfunction";
import data from "@/constants/solutionPage/apartments.json"
import { ContactForm1 } from "@/components/contactForms/ContactForm1";

export const metadata = {
  title: "Apartment Security Solutions — Quadra Security",
  description: "Advanced security solutions for apartments: CCTV, access control, intercoms and ANPR. Protect residents 24/7.",
  alternates: { canonical: "https://www.quadrasecurity.in/solutions/apartments" },
  openGraph: {
    title: "Apartment Security Solutions — Quadra Security",
    description: "Advanced security solutions for apartments: CCTV, access control, intercoms and ANPR.",
    url: "https://www.quadrasecurity.in/solutions/apartments",
    images: [{ url: "https://www.quadrasecurity.in/og/apartments-og.png", width: 1200, height: 630 }],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },

};


export default function Apartment() {
  return (
    <div className="h-auto w-full pt-10">
      <h1 className="text-center text-6xl pt-10 font-bold">
        Solution Overview
      </h1>
      <p className="text-center pt-5 px-3 md:px-50">
        Safety is a top most priority for every property manager, especially in
        today’s world where we see the rising cases of unauthorised access to
        theft and emergency situations almost everyday. As cities grow and the
        number of tourists rises, it has become more essential to find a
        reliable and advanced solution for security. We provide advanced
        security solutions for residential, commercial and mixed-use properties
        at Quadra Security. We have systems in place that protect residents,
        visitors, and valuable assets while giving you peace of mind 24/7.
      </p>
      <div className="pb-25 pt-5">
        <Buttonfunction data={data} />
      </div>
      <InterestedCard />
      
      <ContactForm1/>
    </div>
  );
}
