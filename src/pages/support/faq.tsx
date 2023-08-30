import React from 'react';
import FaqAccordion from '~/components/support-and-help/faqAccordion';

const questions = [
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework for building server-side rendered and static websites.',
  },
  {
    question: 'What is DaisyUI?',
    answer: 'DaisyUI is a UI library for Tailwind CSS that provides ready-to-use components and styles.',
  },
  // Add more questions here
] satisfies IFaqQuestion[];

const FaqPage = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <FaqAccordion questions={questions} />
    </div>
  );
};

export default FaqPage;