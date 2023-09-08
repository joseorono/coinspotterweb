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

        <div className="contactUsWrapper m-10 flex flex-col rounded-md bg-cover p-0 shadow-md shadow-primary-focus lg:grid lg:grid-cols-5">
          <div className="col-span-2 flex flex-col rounded-md bg-white p-8">
            <h1 className="mb-6 text-primary-focus">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default SupportPage;