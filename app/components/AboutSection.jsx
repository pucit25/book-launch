"use client";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Image = lazy(() => import("next/image"));

export default function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 pt-12 pb-4 relative bg-[#FDF7F3]">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-left md:p-10 rounded-lg"
      >
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-[#FFA947] rounded-full mt-4"></span>
          <h2 className="text-[#1B1816] text-[20px] mt-4 font-medium tracking-[2%] leading-[116%]">
            Meet The Author
          </h2>
        </div>
        <p className="text-[#54504D] text-[16px] leading-[140%] mt-4 max-w-[672px]">
            Mfon Ekong Usoro has extensive experience as a shipping lawyer and a maritime
            administrator with an avid interest in research, trade law, supply chain and transport, and
            speaking at international and domestic conferences. She is the pioneer and past Director
            General of the Nigerian Maritime Administration and Safety Agency and the immediate past
            Secretary General of the Memorandum of Understanding on Port State Control for West and
            Central Africa. She was, for several years an officer of the Nigerian Maritime Law
            Association (a national chapter of the Comite Maritime International).
        </p>
        <p className="text-[#54504D] text-[16px] leading-[140%] mt-4 max-w-[672px]">
        Usoro is a member of
        the Governing Board of the International Maritime Institute of Nigeria, set up by the Nigerian
        Navy, and is an Independent Non-Executive Director of First City Monument Bank and The
        Infrastructure Bank. Mfon Usoro is the Vice-Chair of the International Bar Association Bar
        Issues Committee on International Trade in Legal Services.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-[24px] py-[32px] bg-[#FFD4A3] text-[#5C3100] font-medium shadow-md"
        >
          READ MORE
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Suspense fallback={<div className="w-[750px] h-[500px] bg-gray-200" />}>
          <Image
            src="/assets/author.png"
            alt="Mfon Usoro"
            width={750}
            height={500}
            className="object-contain"
          />
        </Suspense>
      </motion.div>
    </section>
  );
}
