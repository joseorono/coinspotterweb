import React from 'react';
import PageLayout from '~/components/layout/PageLayout';
import ContactForm from '~/components/support-and-help/ContactForm';
import FaqAccordion from '~/components/support-and-help/faqAccordion';
import Image from "next/image";
import FaQImage from "src/assets/contactImg.jpg";
import GoogleMapWideEmbed from "~/components/gmaps/gmapWideEmbed";

const questions = [
  {
    question: "¿Qué es CoinSpotter?",
    answer:
      "CoinSpotter es una aplicación web diseñada para ayudar a los usuarios a localizar empresas y entidades que aceptan pagos con criptomonedas, como USDT, USDC y otros, junto con métodos populares como PayPal y Payoneer. Inicialmente se lanzará en Venezuela y se expandirá a otros países de la región.",
  },
  {
    question: "¿Cómo funciona CoinSpotter?",
    answer:
      "CoinSpotter permite a los usuarios buscar empresas por nombre, tipo de negocio, métodos de pago aceptados y utilizar la geolocalización para encontrar establecimientos cercanos. Proporciona detalles de ubicación e información de contacto de estas empresas, incluyendo las criptomonedas específicas que aceptan y sus respectivos métodos de pago.",
  },
  {
    question: "¿Es CoinSpotter un procesador de pagos?",
    answer:
      "No, CoinSpotter no es un procesador de pagos. Es una plataforma que ayuda a los usuarios a encontrar empresas y entidades que aceptan diversos métodos de pago, incluyendo criptomonedas. No procesamos pagos; simplemente proporcionamos información y capacidades de búsqueda basadas en la ubicación.",
  },
  {
    question: "¿En qué países opera CoinSpotter?",
    answer:
      "CoinSpotter se lanza inicialmente en Venezuela y tiene planes de expandirse a otros países de la región. El objetivo es facilitar a los usuarios la búsqueda de empresas que acepten criptomonedas, sin importar dónde se encuentren.",
  },
  {
    question: "¿Cómo puedo filtrar mi búsqueda en CoinSpotter?",
    answer:
      "Puede filtrar su búsqueda en CoinSpotter según diversos criterios, incluyendo el nombre de la empresa, el tipo de negocio, los métodos de pago aceptados y la ubicación. Esto facilita encontrar las empresas exactas que se ajusten a sus preferencias.",
  },
  {
    question: "¿CoinSpotter está afiliado a proveedores de criptomonedas?",
    answer:
      "No, CoinSpotter es una plataforma independiente y no está afiliada a ningún proveedor de criptomonedas específico. Nuestro objetivo es proporcionar información imparcial sobre empresas que aceptan diversos métodos de pago.",
  },
  {
    question: "¿Está disponible CoinSpotter como una aplicación móvil?",
    answer:
      "CoinSpotter es actualmente una aplicación web accesible a través de su navegador web. Sin embargo, podríamos considerar desarrollar una aplicación móvil en el futuro para mejorar la experiencia del usuario.",
  },
] satisfies IFaqQuestion[];

const SupportPage = () => {
  return (
    <PageLayout pageTitle="Help Center">
      <main>
        <div className='max-w-screen-xl mx-auto rounded-md bg-white p-16 lg:rounded-r-lg shadow-md shadow-primary-focus'>

        <h1 className="text-primary-focus">Preguntas Frecuentes</h1>

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
                No garantizamos respuesta inmediata. Te responderemos tan pronto podamos. 
              </small>
            </div>
          </div>
          {/* Panel 2 */}
          <div className="flex flex-[1] flex-col bg-white p-8 rounded-tr-md rounded-br-md">
            <h1 className="mb-6 text-primary-focus text-center">Contáctanos</h1>
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