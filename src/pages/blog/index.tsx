// This is a placeholder for the blog index page using Dummy data. 
// ToDo: Replace this with a proper blog index page later.

import React from 'react';
import Link from 'next/link';
import PageLayout from '~/components/layout/PageLayout';
import BsCenteredContainer from '~/components/layout/BsCenteredContainer';

// Placeholder data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Primer Artículo del Blog',
    slug: 'primer-articulo-del-blog',
    date: '2023-08-01',
    excerpt: 'Este es el primer artículo del blog en nuestro sitio web.',
  },
  {
    id: 2,
    title: 'Segundo Artículo del Blog',
    slug: 'segundo-articulo-del-blog',
    date: '2023-08-05',
    excerpt: 'Aquí tienes nuestro segundo artículo del blog con contenido interesante.',
  },
  // Agrega más artículos del blog según sea necesario
];

function Blog() {
  return (
    <PageLayout pageTitle="Blog">

    
    <BsCenteredContainer extraClasses='mt-8'>
      <h1 className="block text-5xl font-semibold uppercase">Últimos artículos</h1>
      <div className="">
        {blogPosts.map((post) => (
          // <li key={post.id}>
          //   <Link className="text-blue-600 hover:underline" href={`/blog/${post.id}`}>
          //       {post.title}
          //   </Link>
          //   <p className="text-gray-600">{post.date}</p>
          //   <p>{post.excerpt}</p>
          // </li>
            <div className="flex flex-col mt-12">
              <Link key={post.id} href={`/blog/${post.id}`}>
              <h3 className="flex w-[90%] items-center justify-between rounded-[30px] rounded-bl-none rounded-br-none rounded-tl-[30px] rounded-tr-[30px] bg-[#1f2539] px-12 pt-6 text-2xl font-medium">
                {post.title}
              </h3>
              <div className="flex w-[90%] justify-between rounded-bl-[25px] rounded-br-[25px] rounded-tl-none rounded-tr-none bg-[#1f2539] p-6  duration-500 ease-in">
                <div className="flex">
                  <div className="flex flex-col gap-4 px-6">
                    <p>{post.excerpt}</p>
                    <p>{post.date}</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
        ))}
      </div>
    </BsCenteredContainer>
    </PageLayout>
  );
}

export default Blog;