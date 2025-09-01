import FaqCard from "@/components/Accordion/FaqCard";
import { ContactForm1 } from "@/components/contactForms/ContactForm1";

export default function Contact() {
  return (
    <div className="h-auto w-full ">
      <ContactForm1 />
      <div>
        <h2 className="text-5xl font-bold text-center p-5">
          Frequently Asked Questions
        </h2>
        <div className=" flex flex-col items-center justify-center  p-6">
          <FaqCard question="question" answer="answer" />
          <FaqCard question="question" answer="answer" />
          <FaqCard question="question" answer="answer" />
          <FaqCard question="question" answer="answer" />
          <FaqCard question="question" answer="answer" />
          <FaqCard question="question" answer="answer" />
        </div>
      </div>
    </div>
  );
}
