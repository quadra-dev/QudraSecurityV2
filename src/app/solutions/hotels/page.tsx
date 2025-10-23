import InterestedCard from "@/components/cards/InterestedCard";

import Buttonfunction from "@/components/Buttonfunction/Buttonfunction";
import data from "@/constants/solutionPage/hotels.json";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";

export const metadata = {
  title: "Hotel Security Solutions — Quadra Security",
  description:
    "Smart security solutions for hotels: CCTV, electronic locks, fire safety systems, and 24/7 monitoring to protect guests and staff.",
  alternates: { canonical: "https://www.quadrasecurity.com/solutions/hotels" },
  openGraph: {
    title: "Hotel Security Solutions — Quadra Security",
    description:
      "CCTV, access systems, and monitoring solutions tailored for hotels and hospitality businesses.",
    url: "https://www.quadrasecurity.com/solutions/hotels",
    images: [
      {
        url: "https://www.quadrasecurity.com/og/hotels-og.png",
        width: 1200,
        height: 630,
        alt: "Quadra Security - Hotel Security Systems",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};


export default function Hotels() {
  return (
    <div className="h-auto w-full pt-10">
      <h1 className="text-center text-6xl pt-10 font-bold">
        Solution Overview
      </h1>
      <p className="text-center pt-5 px-3 md:px-50">
        Security is the most important aspect in the hospitality industry.
        Guests expect not just comfort and luxury but also the safety that they
        are secure all the time. Hotels have check-ins, visitors coming and
        going, and busy lobbies, because of this, they’re more at risk of theft,
        emergencies, and trespassing. Quadra Security  provides advanced
        hospitality security solutions designed to safeguard your guests, staff,
        and property, 24/7.
      </p>
      <div className="pb-25 pt-5">
        <Buttonfunction data={data} />
      </div>
      <InterestedCard />
      <ContactForm1 />
    </div>
  );
}
