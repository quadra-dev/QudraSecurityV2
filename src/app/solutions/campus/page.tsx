import InterestedCard from "@/components/cards/InterestedCard";

import Buttonfunction from "@/components/Buttonfunction/Buttonfunction";
import data from "@/constants/solutionPage/campus.json";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";

export default function Campus() {
  return (
    <div className="h-auto w-full pt-10">
      <h1 className="text-center text-6xl pt-10 font-bold">
        Solution Overview
      </h1>
      <p className="text-center pt-5 px-3 md:px-50">
         Student safety is the foremost priority for any campus and so is
        protecting staff and property. A campus should be a secure, trusted, and
        well-ordered environment where students can focus on their goals without
        worrying about security threats At Quadra Security, we help you create
        a safe and disciplined atmosphere by providing reliable, modern campus
        security systems tailored to your needs. With our advanced technology,
        you can conduct daily activities with complete peace of mind.
      </p>
      <div className="pb-25 pt-5">
        <Buttonfunction data={data} />
      </div>
      <InterestedCard />
      <ContactForm1/>
    </div>
  );
}
