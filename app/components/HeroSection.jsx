"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import dynamic from "next/dynamic";

// Fix: Import Swiper's default export
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });


const books = [
  { id: 1, src: "/assets/mfon-usoro-book-cover.webp", alt: "Book Cover 1" },
  { id: 2, src: "/assets/mfon-usoro-book-cover-2.webp", alt: "Book Cover 2" },
];

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-around px-4 md:px-16 pb-12 bg-gradient-to-r from-[#FDF7F3] via-[#FAE4DA] to-[#E3EAF2]">
      {/* Left Side - Swiper Carousel */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }} // Faster animation
        className="relative w-[368px] flex flex-col items-center p-6"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Faster slide transition
          pagination={{ clickable: true }}
          className="w-full h-[547px]"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id} className="flex justify-center">
              <Image
                src="/assets/mfon-usoro-book-cover.webp"
                alt="Book Cover 1"
                width={368}
                height={547}
                priority
                fetchPriority="high"
                className="shadow-lg rounded-lg object-cover flex-shrink-0 w-full h-[547px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }} // Reduced delay
        className="w-full md:w-[700px] text-left mt-10 md:mt-0 space-y-4"
      >
        <h1 className="text-[#1B1816] text-[32px] md:text-[64px] w-full leading-tight font-normal font-[RobotoSerif]">
          International Trade and Carriage of Goods by Sea
        </h1>
        <h2 className="text-[#1B1816] text-[20px] md:text-[32px] font-medium">
          Texts, Cases, and Materials
        </h2>
        <p className="text-[#1B1816] text-[16px] md:text-[18px] leading-[140%] max-w-[600px]">
          I am pleased to have been invited to write the Foreword to the book International Trade and
          Carriage of Goods by Sea: Text, Cases and Materials, not only because of the importance of
          the subject matter to the Nigerian economy but also because of the intellectual capacity and
          rich experience of the author in this field.
        </p>
        <p className="text-[#1B1816] text-[16px] md:text-[18px] leading-[140%] max-w-[600px]">
          As observed by the author, there are diverse laws, domestic and international, as well as
          international conventions and procedures governing the various stages of a contract for the
          international carriage of goods by sea.
        </p>
        <p className="launch text-[#B04632] text-[24px] md:text-[40px] font-medium">
          Launching Soon...
        </p>
      </motion.div>
    </section>
  );
}
