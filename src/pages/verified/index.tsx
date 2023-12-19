import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'; // Import GetServerSideProps
import type { BlogPost } from '@prisma/client'
import BsCenteredContainer from '~/components/layout/BsCenteredContainer';
import PageLayout from '~/components/layout/PageLayout';


function VerifiedPlaces() {
  const router = useRouter();
  const { articleId } = router.query;

  // Fetch the article content based on the `articleId` here



  return (
    <>
        <PageLayout pageTitle={"Lugares Verificados"}>
        <BsCenteredContainer extraClasses='mt-8'>
            <div className="p-5 mx-auto sm:p-10 md:p-16">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At maxime minus nulla nostrum fuga suscipit molestias, asperiores nam nisi laborum voluptas eveniet quod, quisquam fugit magni eius a quia hic.
            </div>
        </BsCenteredContainer>
        {/*<VerifiedPlacesMap /> */}
        </PageLayout>
    </>
  );
}

export default VerifiedPlaces;