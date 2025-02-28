"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSecond() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-[#FDF7F3] text-[#54504D]">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-[864px]"
      >
        <p className="text-[16px] md:text-[18px] leading-[140%]">
          Surprisingly, notwithstanding the universality of such contracts, there is a dearth of local
          literature that compiles these laws and comprehensively analyses them and their application in
          various circumstances, to serve as a guide to not only legal practitioners and judicial officers
          but all other stakeholders in the industry.
        </p>
        <p className="mt-4 text-[16px] md:text-[18px] leading-[140%]">
          The book, consisting of over 600 pages, is well organised into 9 chapters covering the most
          common areas of interest. The chapters are further subdivided for better elucidation. It contains
          extensive research and in-depth analysis of the applicable laws, rules, conventions and standard
          forms governing the subject matter as well as attendant risks. It explains the common terms
          associated with cross-border international maritime transactions and examines the rights and
          obligations of the parties and available remedies in the event of loss or damage. It relies
          primarily on case law with illustrations and diagrams for easy understanding. An entire chapter
          is dedicated to the fundamental issue of jurisdiction.
        </p>
        <p className="mt-4 text-[16px] md:text-[18px] leading-[140%]">
          The comprehensiveness of this work is a clear manifestation of the knowledge and experience
          of the author, Mfon Ekong Usoro, a shipping lawyer and maritime administrator with many
          years of practice in the maritime sector. Having delivered papers at numerous domestic and
          international conferences, she knows where the shoe pinches. The book reflects her deep
          understanding of the subject and provides a most valuable resource for judicial officers, legal
          practitioners and other stakeholders interested in this specialised area of law.
        </p>
        <p className="mt-4 text-[16px] md:text-[18px] leading-[140%]">
          I commend the industry exhibited by the author in the painstaking research that has culminated
          in a textbook that I have no hesitation in recommending to all who seek knowledge on the
          intricacies of International Trade and Carriage of Goods by Sea. I predict that it will become a
          much sought-after reference book on the subject. I encourage all to enrich their libraries with
          this exceptional work.
        </p>
        <p className="mt-4 font-bold text-[18px] md:text-[20px]">
          HON. JUSTICE KUDIRAT M.O. KEKERE-EKUN, CJN, CFR
        </p>
        <p className="text-[16px] font-medium text-[#54504D]">Chief Justice of Nigeria</p>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-[24px] py-[32px] bg-[#FFD4A3] text-[#5C3100] font-medium shadow-md"
        >
          FIND OUT MORE
        </motion.button>
      </motion.div>

      {/* Right Side - Book Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-[373px] mt-10 md:mt-0 flex justify-center"
      >
        <Image
          src="/assets/mfon-usoro-book-cover-2.png"
          alt="International Trade and Carriage of Goods by Sea"
          width={368}
          height={547}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}
