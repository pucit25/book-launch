"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Locations from "./OurLocations";

const books = [
  {
    title: "International Trade and Carriage of Goods by Sea",
    description: "Texts, Cases, and Materials",
    images: ["/assets/mfon-usoro-book-cover.webp", "/assets/mfon-usoro-book-cover-2.webp"],
    category: "book",
    slug: "international-trade-carriage",
  }
];

const BooksSection = () => {
  const [search, setSearch] = useState("");

  // Filter books based on search
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 px-4 md:px-16 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                <p className="mt-4 text-lg text-black font-medium">{book.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No books found.</p>
      )}
      <div className="mt-8">
        <Locations />
      </div>
    </div>
  );
};

export default BooksSection;
