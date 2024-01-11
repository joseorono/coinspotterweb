import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next'; // Import GetServerSideProps
import type { BlogPost } from '@prisma/client'
import BsCenteredContainer from '~/components/layout/BsCenteredContainer';
import PageLayout from '~/components/layout/PageLayout';
import Image from "next/image";
import { api } from "~/utils/api";

// This function will be executed on the server side
export async function getServerSideProps(
  context: any
): Promise<GetServerSideProps<any>> {
  // Fetch the article data from your data source using the context.params.articleId
  const articleId = context.params.articleId as string; // Explicitly specify the type

  // Currently using hardcoded articleData, but you should fetch it from your database or API.
  // Replace this placeholder content with your actual article data

  const articleData = {
    title: "La Mejor Ropa Deportiva de la Venta Anual de Nordstrom",
    author: "Leroy Jenkins",
    content: "Inserta aquí el contenido de texto real...",
    date: "2 de agosto de 2021",
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
  const { data } = api.blog.getPostById.useQuery({
    postId: Number(articleId),
  });
  console.log(data);

  // Fetch the article content based on the `articleId` here

  return (
    <>
      <PageLayout key={data?.id} pageTitle={data?.title}>
        <BsCenteredContainer extraClasses="mt-8">
          <div className="mx-auto p-5 sm:p-10 md:p-16">
            <div className="mx-auto flex max-w-3xl flex-col overflow-hidden rounded">
              <img
                src="https://source.unsplash.com/featured/?payments,digital"
                alt=""
                className="h-60 w-full dark:bg-gray-500 sm:h-96"
              />
              <div className="m-4 mx-auto -mt-16 space-y-6 bg-base-200 p-6 pb-12 sm:mx-12 sm:px-10 lg:max-w-2xl lg:rounded-md">
                <div className="space-y-2">
                  <a
                    href="#"
                    className="inline-block text-2xl font-semibold sm:text-3xl"
                  >
                    {data?.title}
                  </a>
                  <p>
                    <span className="text-xs font-medium uppercase text-gray-600 dark:text-gray-400">
                      {data?.published} #{data?.id}
                    </span>
                  </p>
                  <p className="text-xs dark:text-gray-400">
                    By
                    <a href="#" className="ml-2 text-xs hover:underline">
                      {data?.author}
                    </a>
                  </p>
                </div>
                <div className="dark:text-gray-100">
                  <p>{data?.content}</p>
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