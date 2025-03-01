"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="bg-[#FDF7F3] h-[60px] flex items-center justify-between fixed top-0 left-0 w-full z-[9999] shadow-md">
      {/* Logo */}
      <h1 className="text-[#1B1816] text-[25px] font-normal tracking-wide border border-l-0 border-[#E0E0E0] border-opacity-10 p-[11px] z-50">
        <a href="/">MU</a>
      </h1>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center flex-grow justify-end">
        <div className="flex border border-[#E0E0E0] overflow-hidden w-[600px]">
          {["About", "Publications", "Events", "Contact"].map((name, index) => (
            <Link
              key={index}
              href={`/${name.toLowerCase().replace(/\s/g, "")}`}
              className="text-[#1B1816] text-[14px] font-normal flex-1 text-center py-[20px] border-r border-[#E0E0E0] last:border-r-0 hover:bg-[#FFD4A3] hover:text-[#5C3100] transition-all"
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="bg-[#FFD4A3] text-[#5C3100] px-[32px] py-[21px] text-[14px] font-medium leading-[128%] tracking-tight">
          FIND OUT MORE
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#1B1816] text-2xl p-2 z-[999] relative"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] bg-[#FDF7F3] shadow-lg flex flex-col items-start pt-24 pl-6 gap-6 transition-transform duration-500 ease-in-out z-[9999] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {["About", "Publications", "Events", "Contact"].map((name, index) => (
          <Link
            key={index}
            href={`/${name.toLowerCase().replace(/\s/g, "")}`}
            className="text-[#1B1816] text-[18px] font-medium py-3 w-full border-b border-[#E0E0E0] last:border-b-0"
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        ))}
        <div className="bg-[#FFD4A3] text-[#5C3100] px-[32px] py-[20px] text-[14px] font-medium leading-[128%]">
          FIND OUT MORE
        </div>
      </div>
    </nav>
  );
}
