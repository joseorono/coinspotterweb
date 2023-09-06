import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'; // Import GetServerSideProps
import type { BlogPost } from '@prisma/client'

// This function will be executed on the server side
export async function getServerSideProps(context: any): Promise<  GetServerSideProps<any> > {
    // Fetch the article data from your data source using the context.params.articleId
    const articleId = context.params.articleId as string; // Explicitly specify the type

    // Currently using hardcoded articleData, but you should fetch it from your database or API.
    // Replace this placeholder content with your actual article data

    const articleData = {
        title: 'The Best Activewear from the Nordstrom Anniversary Sale',
        author: 'Leroy Jenkins',
        content: 'Insert the actual text content here...',
        date: 'August 2, 2021',
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
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
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
    </>
  );
}

export default Article;