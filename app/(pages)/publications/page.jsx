"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import BooksSection from "@/app/components/BookSection";
import PresentationsSection from "@/app/components/PresentationSection";
import ArticlesSection from "@/app/components/ArticlesSection";

const sections = [
  { label: "Books", value: "books" },
  { label: "Presentations", value: "presentations" },
  { label: "Articles", value: "articles" },
];

const PublicationsPage = () => {
  const [activeSection, setActiveSection] = useState("books");
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <main className="mt-[64px] min-h-screen px-2 md:px-16">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-normal text-[#1B1816]">Publications</h1>
      </header>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-8">
        {/* Mobile Dropdown */}
        <div className="relative w-full md:hidden mb-4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md text-gray-600 bg-white"
          >
            {sections.find((s) => s.value === activeSection)?.label}
            <IoChevronDownOutline className="text-lg" />
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {sections.map(({ label, value }) => (
                <li
                  key={value}
                  onClick={() => {
                    setActiveSection(value);
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

        {/* Desktop Tabs */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          {sections.map(({ label, value }) => (
            <span
              key={value}
              className={`cursor-pointer px-4 py-2 transition-all ${
                activeSection === value
                  ? "border-b-2 border-black text-black font-medium"
                  : "hover:text-black"
              }`}
              onClick={() => setActiveSection(value)}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative">
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

      {/* Content Display Based on Section */}
      {activeSection === "books" && <BooksSection searchQuery={search} />}
      {activeSection === "presentations" && <PresentationsSection searchQuery={search} />}
      {activeSection === "articles" && <ArticlesSection searchQuery={search} />}
    </main>
  );
};

export default PublicationsPage;
