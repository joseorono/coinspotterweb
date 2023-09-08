import React from 'react';
import PageLayout from '~/components/layout/PageLayout';
import ContactForm from '~/components/support-and-help/ContactForm';
import FaqAccordion from '~/components/support-and-help/faqAccordion';
import Image from "next/image";
import FaQImage from "src/assets/contactImg.jpg";

const questions = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building server-side rendered and static websites.",
  },
  {
    question: "What is DaisyUI?",
    answer:
      "DaisyUI is a UI library for Tailwind CSS that provides ready-to-use components and styles.",
  },
  // Add more questions here
] satisfies IFaqQuestion[];

const SupportPage = () => {
  return (
    <PageLayout pageTitle="CoinSpotter">
      <main>
        <div className="m-10 flex flex-col shadow-md shadow-primary-focus lg:grid lg:grid-cols-5">
          {/* <div className="faqWrapper col-span-2 h-full w-full lg:rounded-l-lg"></div> */}
          <Image
            src={FaQImage}
            width="32px"
            height="32px"
            alt="/"
            className="col-span-2 hidden h-full w-full lg:block lg:rounded-l-lg"
          />
          <div className="col-span-3 flex w-full flex-col justify-items-end gap-4 rounded-md bg-white p-16 lg:rounded-r-lg">
            <h1 className="text-primary-focus">Frequently Asked Questions</h1>
            <FaqAccordion questions={questions} />
          </div>
        </div>

        <div className="mx-auto m-6 flex shadow-md shadow-onyx-200 lg:max-w-4xl rounded-md">
          {/* Panel 1
           old container classes:
           lg:grid lg:grid-cols-5


            min-h-[960px]
            */}
          <div className="hidden md:flex contact-col-left flex-col p-4 max-w-[320px] justify-end rounded-tl-md rounded-bl-md">
            <div>
              <h4 className="text-center mb-6 text-secondary">CoinSpotter</h4>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque labore provident vel perspiciatis at. 
              </small>
            </div>
          </div>
          {/* Panel 2 */}
          <div className="flex flex-[1] flex-col bg-white p-8 rounded-tr-md rounded-br-md">
            <h1 className="mb-6 text-primary-focus">Contact Us</h1>
            <ContactForm />
          </div>

        </div>
      </main>
    </PageLayout>
  );
};

export default SupportPage;