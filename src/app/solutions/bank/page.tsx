import InterestedCard from "@/components/cards/InterestedCard";
import ContactForm from "@/components/contactForms/Contactform";
import Buttonfunction from "@/components/Buttonfunction/Buttonfunction";
import data from "@/constants/solutionPage/bank.json";

export default function Bank() {
  return (
    <div className="h-auto w-full ">
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
      <ContactForm />
    </div>
  );
}
