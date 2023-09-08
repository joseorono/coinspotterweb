import React from 'react';
import PageLayout from '~/components/layout/PageLayout';
import ContactForm from '~/components/support-and-help/ContactForm';
import FaqAccordion from '~/components/support-and-help/faqAccordion';

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
          <div className="faqWrapper col-span-2 h-full w-full lg:rounded-l-lg"></div>
          <div className="col-span-3 flex w-full flex-col justify-items-end gap-4 rounded-md bg-white p-16 lg:rounded-r-lg">
            <h1 className="text-primary-focus">Frequently Asked Questions</h1>
            <FaqAccordion questions={questions} />
          </div>
        </div>

        <div className="w-50 mt-20 max-w-md px-10">
          <h1>Contact Us</h1>
          <ContactForm />
        </div>
      </main>
    </PageLayout>
  );
};

export default SupportPage;