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
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>
      <ul className="space-y-4">

        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link className="text-blue-600 hover:underline" href={`/blog/${post.id}`}>     
                {post.title}
            </Link>
            <p className="text-gray-600">{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Blog;