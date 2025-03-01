"use client";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Image = lazy(() => import("next/image"));

const books = [
  { id: 1, src: "/assets/mfon-usoro-book-cover.webp", alt: "Book Cover 1" },
  { id: 2, src: "/assets/mfon-usoro-book-cover-2.webp", alt: "Book Cover 2" },
];

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-around px-4 md:px-16 pb-12 bg-gradient-to-r from-[#FDF7F3] via-[#FAE4DA] to-[#E3EAF2]">
      {/* Left Side - Swiper Carousel */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.8 }}
        className="relative w-[368px] flex flex-col items-center p-6"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-[547px]"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id} className="flex justify-center">
              <Suspense fallback={<div className="w-full h-[547px] bg-gray-200 animate-pulse" />}>
                <Image
                  src={book.src}
                  alt={book.alt}
                  width={368}
                  height={547}
                  className="shadow-lg rounded-lg object-cover flex-shrink-0 w-full h-[547px]"
                />
              </Suspense>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
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
