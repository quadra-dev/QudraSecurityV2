import InterestedCard from "@/components/cards/InterestedCard";
import ContactForm from "@/components/contactForms/Contactform";
import Buttonfunction from "@/components/Buttonfunction/Buttonfunction";
import data from "@/constants/solutionPage/retails.json";

export default function Retail() {
  return (
    <div className="h-auto w-full ">
      <h1 className="text-center text-6xl pt-10 font-bold">
        Solution Overview
      </h1>
      <p className="text-center pt-5 px-3 md:px-50">
         As window shopping is so common and shoplifting rates are on the rise
        now-a-days, it has become essential for retailers to have a reliable and
        efficient system to safeguard their stocks and shop items. At Quadra
        Security, we provide best-in-class retail security services including
        high-quality CCTV cameras, metal detectors, burglar alarms, and more —
        all designed to protect your store and staff. Contact us today to learn
        how to make your shop more secure than ever.
      </p>
      <div className="pb-25 pt-5">
        <Buttonfunction data={data} />
      </div>
      <InterestedCard />
      <ContactForm />
    </div>
  );
}
