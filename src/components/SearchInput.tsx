"use client";

import { useRouter } from "next/router";
import { useState } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    router.query.q ? router.query.q.toString() : ""
  );
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const categories = [
    "All categories",
    "Places",
    "Places imagen",
    "Payment methods",
    "Currencies",
    "Payment methods accepted",
    "Productos", 
  ];

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/app/search?q=${encodedSearchQuery}&category=${selectedCategory}`);
  };

  return (
    <form onSubmit={onSearch} className="flex flex-row justify-center">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-1/3 rounded-l-lg border border-gray-300 bg-gray-100 px-2 py-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 sm:w-1/3 sm:text-sm"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="flex flex-row">
        <input
          value={searchQuery || ""}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="w-2/3 flex-1 bg-zinc-800 px-5 py-1 text-xs text-zinc-200 placeholder:text-zinc-400 focus:bg-black focus:outline-none focus:ring-[1px] focus:ring-green-700 sm:px-5 sm:py-3 sm:text-sm"
          placeholder="¿Qué Estás Buscando?"
        />
        <button
          type="submit"
          className="rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;

