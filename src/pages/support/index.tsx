import React from 'react';
import PageLayout from '~/components/layout/PageLayout';
import ContactForm from '~/components/support-and-help/ContactForm';
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



const SupportPage = () => {
  return (
    <PageLayout pageTitle="CoinSpotter">
        <main>
            <div>
                <h1>Frequently Asked Questions</h1>
                <FaqAccordion questions={questions} />
            </div>

            <div className='w-50 max-w-md'>
                <h1>Contact Us</h1>
                <ContactForm />
            </div>
        </main>
    
    </PageLayout>
  );
};

export default SupportPage;