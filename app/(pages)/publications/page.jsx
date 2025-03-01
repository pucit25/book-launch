"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IoChevronDownOutline } from "react-icons/io5"; // Dropdown icon
import "swiper/css";
import "swiper/css/pagination";
import Locations from "@/app/components/OurLocations";

// Sample book data with slug
const books = [
  {
    title: "International Trade and Carriage of Goods by Sea",
    images: ["/assets/mfon-usoro-book-cover.webp", "/assets/mfon-usoro-book-cover-2.webp"],
    category: "book",
    slug: "international-trade-carriage",
  }
];

const categories = [
  { label: "All", value: "all" },
  { label: "Books", value: "book" },
  { label: "Presentations", value: "presentation" },
  { label: "Articles", value: "article" },
];

const BooksPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for mobile dropdown

  // Filter books based on active category and search
  const filteredBooks = books.filter(
    (book) =>
      (activeCategory === "all" || book.category === activeCategory) &&
      book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="mt-[64px] min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-[#1B1816]">Publications</h1>
      </header>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pb-8">
        {/* ✅ Mobile Dropdown Filter */}
        <div className="relative w-full md:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white"
          >
            {categories.find((c) => c.value === activeCategory)?.label}
            <IoChevronDownOutline className="text-lg" />
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {categories.map(({ label, value }) => (
                <li
                  key={value}
                  onClick={() => {
                    setActiveCategory(value);
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ✅ Desktop Tabs */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          {categories.map(({ label, value }) => (
            <span
              key={value}
              className={`cursor-pointer px-4 py-2 transition-all ${
                activeCategory === value
                  ? "border-b-2 border-black text-black font-medium"
                  : "hover:text-black"
              }`}
              onClick={() => setActiveCategory(value)}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mt-4 md:mt-0">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border border-gray-300 text-black pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
          {filteredBooks.map((book, index) => (
            <Link key={index} href={`/books/${book.slug}`}>
              <div className="border border-gray-300 p-6 text-center cursor-pointer hover:shadow-lg transition">
                {/* Swiper for multiple images */}
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  modules={[Pagination, Autoplay]}
                  className="w-full max-w-xs mx-auto"
                >
                  {book.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img src={image} alt={book.title} className="w-full rounded-md" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Book Title */}
                <h2 className="mt-4 text-lg text-black font-medium">{book.title}</h2>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <p className="text-center text-gray-500 text-lg py-10">
          No results found for "{search}" in {categories.find((c) => c.value === activeCategory)?.label}.
        </p>
      )}
      <div className="mt-12">
        <Locations />
      </div>
    </main>
  );
};

export default BooksPage;
