import InterestedCard from "@/components/cards/InterestedCard";
import Buttonfunction from "@/components/Buttonfunction/Buttonfunction";
import data from "@/constants/solutionPage/bank.json";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";

export const metadata = {
  title: "Bank Security Solutions — Quadra Security",
  description:
    "Comprehensive security systems for banks: high-definition CCTV, alarm systems, access control, and vault monitoring to protect assets and staff.",
  alternates: { canonical: "https://www.quadrasecurity.com/solutions/bank" },
  openGraph: {
    title: "Bank Security Solutions — Quadra Security",
    description:
      "Comprehensive security systems for banks: CCTV, alarms, access control, and vault monitoring.",
    url: "https://www.quadrasecurity.com/solutions/bank",
    images: [
      {
        url: "https://www.quadrasecurity.com/og/bank-og.png",
        width: 1200,
        height: 630,
        alt: "Quadra Security - Bank Security Systems",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};


export default function Bank() {
  return (
    <div className="h-auto w-full pt-10">
      <h1 className="text-center text-6xl pt-10 font-bold">
        Solution Overview
      </h1>
      <p className="text-center pt-5 px-3 md:px-50">
         Banks are one of the most sensitive institutions, requiring reliable,
        24/7 security measures to protect assets, staff, and customers. At
        Quadra Security, we deliver trusted and high-performance bank security
        solutions that ensure complete protection without compromising on
        efficiency. From the entrance to the vault, our systems keep every
        corner under watch
      </p>
      <div className="pb-25 pt-5">
        <Buttonfunction data={data} />
      </div>
      <InterestedCard />
      <ContactForm1/>
    </div>
  );
}
