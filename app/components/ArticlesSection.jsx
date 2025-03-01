"use client";

import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Locations from "./OurLocations";

const presentations = [
  {
    id: 1,
    title: "Optimizing Intra-African Transportation for AfCFTA",
    pdfUrl: "/path/to/pdf1.pdf",
    date: "12 Jan 2024",
    publisher: "Mfon Ekong Usoro, FCILT, President, CITL Nigeria.",
    language: "English",
  },
  {
    id: 2,
    title:
      "Nigeria: Domestication of the African Continental Free Trade Area (AfCFTA) Agreement",
    pdfUrl: "/path/to/pdf2.pdf",
    date: "25 April 2023",
    publisher: "Mfon Ekong Usoro, FCILT, President, CITL Nigeria.",
    language: "English",
  },
];

const ArticlesSection = () => {
  const [selectedPresentation, setSelectedPresentation] = useState(null);

  return (
    <main className="min-h-screen px-4 md:px-16 py-8">
      {selectedPresentation ? (
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* PDF Thumbnail */}
          <div className="w-full max-w-[650px] flex justify-center">
            <img
              src="/assets/pdf.png"
              alt="PDF Icon"
              className="w-full max-w-[600px]"
            />
          </div>

          {/* Presentation Details */}
          <div className="w-full max-w-[500px] mt-6 md:mt-[-30px] md:pl-10">
            <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
              {selectedPresentation.title}
            </h1>

            {/* Divider */}
            <hr className="my-4 border-gray-300" />

            {/* Metadata Section */}
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div>
                <p className="text-sm font-medium">Publisher</p>
                <p className="text-lg">{selectedPresentation.publisher}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Language</p>
                <p className="text-lg">{selectedPresentation.language}</p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href={selectedPresentation.pdfUrl}
              download
              className="mt-6 inline-block bg-[#FFD4A3] text-[#5C3100] px-6 py-3 text-[14px] font-medium leading-[128%] hover:bg-[#e89a60] transition"
            >
              Download Presentation
            </a>

            {/* Divider */}
            <hr className="my-4 border-gray-300" />

            {/* Social Share Section */}
            <h4 className="text-lg font-medium text-gray-700 mb-3">
              Share This On
            </h4>
            <div className="flex space-x-2">
              <a className="border border-gray-600 p-2 rounded-lg" href="">
                <FaFacebook className="w-7 h-7 text-[#1877F2] hover:text-[#1358a5] transition" />
              </a>
              <a className="border border-gray-600 p-2 rounded-lg" href="">
                <FaLinkedin className="w-7 h-7 text-[#0077B5] hover:text-[#004b77] transition" />
              </a>
              <a className="border border-gray-600 p-2 rounded-lg" href="">
                <FaInstagram className="w-7 h-7 text-[#E1306C] hover:text-[#9b1747] transition" />
              </a>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setSelectedPresentation(null)}
              className="mt-6 flex items-center text-gray-700 hover:text-black"
            >
              <IoChevronBack className="mr-1" /> Back to Presentations
            </button>
          </div>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {presentations.map((presentation) => (
            <div
              key={presentation.id}
              onClick={() => setSelectedPresentation(presentation)}
              className="border border-gray-300 bg-[#FAF7F3] p-6 text-center cursor-pointer hover:shadow-lg transition rounded-lg"
            >
              <img
                src="/assets/pdf.png"
                alt="PDF Icon"
                className="w-20 mx-auto mb-4"
              />
              <h2 className="text-lg font-medium">{presentation.title}</h2>
            </div>
          ))}
        </section>
      )}

      {/* Healthy Spacing for Locations Component */}
      <div className="mt-16 md:mt-24">
        <Locations />
      </div>
    </main>
  );
};

export default ArticlesSection;
