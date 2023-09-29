// This is a placeholder for the blog index page using Dummy data. 
// ToDo: Replace this with a proper blog index page later.

import React from 'react';
import Link from 'next/link';

// Placeholder data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    slug: 'first-blog-post',
    date: '2023-08-01',
    excerpt: 'This is the first blog post on our website.',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    slug: 'second-blog-post',
    date: '2023-08-05',
    excerpt: 'Here is our second blog post with some interesting content.',
  },
  // Add more blog posts as needed
];

function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-semibold">Blog</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          // <li key={post.id}>
          //   <Link className="text-blue-600 hover:underline" href={`/blog/${post.id}`}>
          //       {post.title}
          //   </Link>
          //   <p className="text-gray-600">{post.date}</p>
          //   <p>{post.excerpt}</p>
          // </li>
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="mt-12 flex w-full flex-col items-center">
              <h3 className="mt-12 flex w-[90%] items-center justify-between rounded-[30px] rounded-bl-none rounded-br-none rounded-tl-[30px] rounded-tr-[30px] bg-[#1f2539] px-12 pt-6 text-2xl font-medium">
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
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Blog;