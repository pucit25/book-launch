"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      quote: `In "International Trade & Carriage of Goods by Sea", highly respected corporate lawyer and maritime law expert, Barrister Mfon Usoro takes readers on an enlightening journey through the intricate world of maritime law. With a focus on the international sale and transportation of goods, this comprehensive guide is an indispensable resource for professionals seeking to understand and navigate the complexities of this specialized field. Harnessing her extensive knowledge of the subject, garnered through decades of experience as a legal practitioner, national regulator, and international thought leader, the author delves chapter by chapter into text, cases and materials relevant to the legal, commercial, and operational issues related to international carriage of goods.`,
      author: "Aigboje Aig-Imoukhuede, CFR",
      position: "Chairman, Access Holdings Plc",
    },
    {
      quote: `I have had the privilege of witnessing firsthand, for well over 30 years, the exceptional expertise and dedication of the author, my dear friend and colleague, to the law and practice of international maritime law. This book is, in part, the culmination of her extensive experience and knowledge, offering a comprehensive and insightful guide that navigates the complex landscape of international trade and the carriage of goods by sea. I say, "in part" because I know this will not be her last book. With its meticulous analysis and lucid language garnished with a plethora of Nigerian cases, this work is an invaluable resource for anyone involved in international trade, from practitioners and academics to students and shipping professionals.`,
      author: "Funke Agbor, SAN, FCIArb",
      position: "Partner, Dentons ACAS-Law",
      extraTitle: "President, Nigerian Maritime Law Association",
    },
  ];

  return (
    <section className="w-full bg-[#FDF7F3] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 md:p-8 mb-8 border border-gray-200"
          >
            {/* Full text on desktop, truncated on mobile */}
            <p className="text-[16px] md:text-[18px] text-[#54504D] leading-[150%] md:line-clamp-none line-clamp-3">
              {testimonial.quote}
            </p>

            {/* "Read More" button (Only on mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setSelectedTestimonial(testimonial)}
                className="text-[#7F5283] font-semibold mt-2 inline-block"
              >
                Read More
              </button>
            </div>

            {/* Author details */}
            <p className="mt-4 font-bold text-[18px] md:text-[20px] text-[#333]">
              {testimonial.author}
            </p>
            <p className="text-[16px] font-medium text-[#54504D]">{testimonial.position}</p>
            {testimonial.extraTitle && (
              <p className="text-[16px] font-medium text-[#54504D]">{testimonial.extraTitle}</p>
            )}
          </div>
        ))}
      </div>

      {/* Modal for full text (Only on mobile) */}
      {selectedTestimonial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 md:hidden"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="bg-white p-6 md:p-8 rounded-lg max-w-md w-full relative max-h-[60vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 text-2xl"
              onClick={() => setSelectedTestimonial(null)}
            >
              &times;
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[50vh] pr-4">
              <p className="text-[16px] md:text-[18px] text-[#54504D] leading-[150%]">
                {selectedTestimonial.quote}
              </p>
              <p className="mt-4 font-bold text-[18px] md:text-[20px] text-[#333]">
                {selectedTestimonial.author}
              </p>
              <p className="text-[16px] font-medium text-[#54504D]">
                {selectedTestimonial.position}
              </p>
              {selectedTestimonial.extraTitle && (
                <p className="text-[16px] font-medium text-[#54504D]">
                  {selectedTestimonial.extraTitle}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
