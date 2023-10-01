import React from 'react';
import PageLayout from '~/components/layout/PageLayout';
import ContactForm from '~/components/support-and-help/ContactForm';
import FaqAccordion from '~/components/support-and-help/faqAccordion';
import Image from "next/image";
import FaQImage from "src/assets/contactImg.jpg";
import GoogleMapWideEmbed from "~/components/gmaps/gmapWideEmbed";

const questions = [
  {
    question: "What is CoinSpotter?",
    answer:
      "CoinSpotter is a web application designed to help users locate businesses and entities that accept cryptocurrency payments, such as USDT, USDC, and others, along with popular methods like PayPal and Payoneer. It's initially launching in Venezuela and expanding to other countries in the region.",
  },
  {
    question: "How does CoinSpotter work?",
    answer:
      "CoinSpotter allows users to search for businesses by name, business type, accepted payment methods, and utilize geolocation to find nearby establishments. It provides location details and contact information for these businesses, including the specific cryptocurrencies they accept and their respective payment methods.",
  },
  {
    question: " Is CoinSpotter a payment processor?",
    answer:
      "No, CoinSpotter is not a payment processor. It's a platform that helps users find businesses and entities that accept various payment methods, including cryptocurrencies. We do not process payments; we simply provide information and location-based search capabilities.",
  },
  {
    question: "Which countries does CoinSpotter cover?",
    answer:
      "CoinSpotter initially launches in Venezuela and plans to expand to other countries in the region. The goal is to make it easier for users to discover cryptocurrency-accepting businesses wherever they are.",
  },
  {
    question: "How can I filter my search on CoinSpotter?",
    answer:
      "You can filter your search on CoinSpotter by various criteria, including business name, business type, accepted payment methods, and location. This makes it simple to find the exact businesses that meet your preferences.",
  },
  {
    question: "Is CoinSpotter affiliated with any cryptocurrency providers?",
    answer:
      "No, CoinSpotter is an independent platform and is not affiliated with any specific cryptocurrency providers. We aim to provide unbiased information about businesses that accept various payment methods.",
  },
  {
    question: "Is CoinSpotter available as a mobile app?",
    answer:
      "CoinSpotter is currently a web application accessible through your web browser. However, we may consider developing a mobile app in the future to enhance the user experience.",
  },
  
] satisfies IFaqQuestion[];

const SupportPage = () => {
  return (
    <PageLayout pageTitle="Help Center">
      <main>
        <div className='max-w-screen-xl mx-auto rounded-md bg-white p-16 lg:rounded-r-lg shadow-md shadow-primary-focus'>

        <h1 className="text-primary-focus">Frequently Asked Questions</h1>

          <div className="flex flex-col lg:grid lg:grid-cols-5 ">
            
            <div className="col-span-3 flex w-full flex-col justify-items-end mt-4 lg:mt-20">
              
              <FaqAccordion questions={questions} />
            </div>

            <div  className="col-span-2 hidden lg:flex">
              <Image
                src={FaQImage}
                alt="/"
                className="w-full h-auto lg:rounded-l-lg"
              />
            </div>

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
            <h1 className="mb-6 text-primary-focus text-center">Contact Us</h1>
            <ContactForm />
          </div>

        </div>
      </main>
      <div>
        <GoogleMapWideEmbed latitude={33} longitude={4} />
      </div>
    </PageLayout>
  );
};

export default SupportPage;