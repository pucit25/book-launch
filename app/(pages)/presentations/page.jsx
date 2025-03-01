"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

// Sample Data
const books = [
  {
    title: "International Trade and Carriage of Goods by Sea",
    images: ["/assets/mfon-usoro-book-cover.webp"],
    category: "book",
    slug: "international-trade-carriage",
  },
];

const presentations = [
  {
    title: "Optimizing Intra-African Transportation for AfCFTA",
    category: "presentation",
    slug: "optimizing-intra-africa-transportation",
  },
  {
    title: "Maritime Security in Africa",
    category: "presentation",
    slug: "maritime-security-africa",
  },
];

const categories = [
  { label: "All Publications", value: "all" },
  { label: "Books", value: "book" },
  { label: "Presentations", value: "presentation" },
  { label: "Articles", value: "article" },
];

const PublicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // **Filter Books**
  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        (filter === "all" || book.category === filter) &&
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, filter]);

  // **Filter Presentations**
  const filteredPresentations = useMemo(() => {
    return presentations.filter(
      (presentation) =>
        (filter === "all" || presentation.category === filter) &&
        presentation.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, filter]);

  return (
    <main className="mt-[32px] min-h-screen">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-normal text-[#1B1816]">Publications</h1>
      </header>

      {/* Filter & Search Section */}
      <section className="px-4 md:px-16 py-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Filter Tabs (Desktop) */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          {categories.map(({ label, value }) => (
            <span
              key={value}
              className={`cursor-pointer px-4 py-2 transition-all ${
                filter === value
                  ? "border-b-2 border-black text-black font-medium"
                  : "hover:text-black"
              }`}
              onClick={() => setFilter(value)}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Filter Dropdown (Mobile) */}
        <div className="relative w-full md:hidden">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 text-gray-700 px-4 py-2 w-full rounded-md focus:ring focus:ring-[#FFA947] appearance-none"
          >
            {categories.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <span className="absolute right-4 top-3 text-gray-500 pointer-events-none">▼</span>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-[300px]">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 text-gray-700 pl-10 pr-4 py-2 w-full rounded-md focus:ring focus:ring-[#FFA947]"
          />
        </div>
      </section>

      {/* Content Display */}
      <section className="px-4 md:px-16 py-8">
        {filter === "presentation" ? (
          // **Presentations Layout**
          filteredPresentations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredPresentations.map((presentation, index) => (
                <Link key={index} href={`/presentations/${presentation.slug}`}>
                  <div className="border border-gray-300 p-6 text-center cursor-pointer hover:shadow-lg transition bg-[#F9F5F0]">
                    <img
                      src="/assets/pdf-icon.png"
                      alt="PDF File"
                      className="mx-auto w-16"
                    />
                    <h2 className="mt-4 text-lg text-black font-medium">
                      {presentation.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No presentations found.</p>
          )
        ) : filteredBooks.length > 0 ? (
          // **Books Layout**
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredBooks.map((book, index) => (
              <Link key={index} href={`/books/${book.slug}`}>
                <div className="border border-gray-300 p-6 text-center cursor-pointer hover:shadow-lg transition">
                  <img
                    src={book.images[0]}
                    alt={book.title}
                    className="w-full rounded-md"
                  />
                  <h2 className="mt-4 text-lg text-black font-medium">
                    {book.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </section>
    </main>
  );
};

export default PublicationsPage;
