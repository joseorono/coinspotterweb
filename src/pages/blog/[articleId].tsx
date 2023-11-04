import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'; // Import GetServerSideProps
import type { BlogPost } from '@prisma/client'
import BsCenteredContainer from '~/components/layout/BsCenteredContainer';
import PageLayout from '~/components/layout/PageLayout';

// This function will be executed on the server side
export async function getServerSideProps(context: any): Promise<  GetServerSideProps<any> > {
    // Fetch the article data from your data source using the context.params.articleId
    const articleId = context.params.articleId as string; // Explicitly specify the type

    // Currently using hardcoded articleData, but you should fetch it from your database or API.
    // Replace this placeholder content with your actual article data

    const articleData = {
        title: 'La Mejor Ropa Deportiva de la Venta Anual de Nordstrom',
        author: 'Leroy Jenkins',
        content: 'Inserta aquí el contenido de texto real...',
        date: '2 de agosto de 2021',
    };

    // Pass the articleData as props
    return {
        props: {
            articleData,
        },
    };
}

function Article({ articleData }: any) {
  const router = useRouter();
  const { articleId } = router.query;

  // Fetch the article content based on the `articleId` here



  return (
    <>
        <PageLayout pageTitle={articleData.title}>
        <BsCenteredContainer extraClasses='mt-8'>
            <div className="p-5 mx-auto sm:p-10 md:p-16">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="w-full h-60 sm:h-96 bg-base-100 "
                />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-base-200">
                <div className="space-y-2">
                    <a
                    href="#"
                    className="inline-block text-2xl font-semibold sm:text-3xl"
                    >
                    {articleData.title}
                    </a>
                    <p>
                        <span className="text-xs font-medium text-gray-600 uppercase dark:text-gray-400">
                            {articleData.date} #{articleId}
                        </span>
                    </p>
                    <p className="text-xs dark:text-gray-400">
                    By 
                    <a href="#" className="text-xs hover:underline">
                        {articleData.author}
                    </a>
                    </p>
                </div>
                <div className="dark:text-gray-100">
                    <p>{articleData.content}</p>
                </div>
                </div>
            </div>
            </div>
        </BsCenteredContainer>
        </PageLayout>
    </>
  );
}

export default Article;