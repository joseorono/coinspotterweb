import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'; // Import GetServerSideProps
import type { BlogPost } from '@prisma/client'
import BsCenteredContainer from '~/components/layout/BsCenteredContainer';
import PageLayout from '~/components/layout/PageLayout';
import VerifiedPlacesMap from "~/components/gmaps/VerifiedPlacesMap";


function VerifiedPlaces() {
  const router = useRouter();
  const { articleId } = router.query;

  // Fetch the article content based on the `articleId` here



  return (
    <>
        <PageLayout pageTitle={"Lugares Verificados"}>
        <BsCenteredContainer extraClasses='mt-8'>
            <div className="p-5 mx-auto sm:p-10 md:p-16">
            Descubre con confianza los establecimientos que aceptan criptomonedas y métodos digitales en tiempo real. El mapa a continuación muestra lugares verificados, garantizando una experiencia segura y precisa. Explora con certeza los comercios adaptados a tus preferencias de pago.
            </div>
        </BsCenteredContainer>
        <VerifiedPlacesMap />
        </PageLayout>
    </>
  );
}

export default VerifiedPlaces;