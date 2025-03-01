"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full min-h-screen bg-[#FDF7F3] py-4 px-4 md:px-16 flex justify-center items-center">
      <div className="max-w-9xl w-full mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-32">
        
        {/* ✅ Image Section (Appears on top in mobile view) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[400px] flex justify-center items-center mx-auto order-1 md:order-2"
        >
          <Image
            src="/assets/mfon-ekong-usoro.png"
            alt="Mfon Ekong Usoro"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* ✅ Text Content (Appears below image on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-5/5 text-left space-y-6 order-2 md:order-1"
        >
          <h1 className="text-[#1B1816] text-[32px] md:text-[48px] font-medium">
            Meet The Author
          </h1>
          <p className="text-[#54504D] text-[16px] md:text-[18px] leading-[150%]">
            Mfon Ekong Usoro has extensive experience as a shipping lawyer and a maritime
            administrator with an avid interest in research, trade law, supply chain and transport, and
            speaking at international and domestic conferences. She is the pioneer and past Director
            General of the Nigerian Maritime Administration and Safety Agency and the immediate past
            Secretary General of the Memorandum of Understanding on Port State Control for West and
            Central Africa. She was, for several years an officer of the Nigerian Maritime Law
            Association (a national chapter of the Comite Maritime International). 
          </p>
          <p className="text-[#54504D] text-[16px] md:text-[18px] leading-[150%]">
            Usoro is a member of
            the Governing Board of the International Maritime Institute of Nigeria, set up by the Nigerian
            Navy, and is an Independent Non-Executive Director of First City Monument Bank and The
            Infrastructure Bank. Mfon Usoro is the Vice-Chair of the International Bar Association Bar
            Issues Committee on International Trade in Legal Services.
          </p>
          <p className="text-[#54504D] text-[16px] md:text-[18px] leading-[150%]">
            Usoro obtained her LL.M in Maritime Law from the University College London, BL from the
            Nigerian Law School, LL.B (Hons) from the University of Buckingham, United Kingdom
            and B.Sc (Hons) Sociology from the University of Calabar, Nigeria. She is a recipient of
            national honours - Chevalier de l’Ordre du Merite Maritime, a national honour of the
            Republic of Cote D’ Ivoire, 2015 and Officier de L’Ord de Mono, a national honour of the
            Republic of Togo, 2002. She has been honoured by her State of origin, Akwa Ibom State,
            Nigeria, with the Productivity Order of Merit Award in 2022 and Merit Award in 2006. She is
            a practicing maritime lawyer and the Managing Partner at Paul Usoro & Co.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
