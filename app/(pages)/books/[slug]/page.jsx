"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import booksData from "@/app/data/books"; // Create a local books.js file for data

const BookPage = () => {
  const { slug } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const foundBook = booksData.find((b) => b.slug === slug);
    setBook(foundBook);
  }, [slug]);

  if (!book) return <p className="text-center">Book not found.</p>;

  return (
    <main className="px-6 md:px-16 py-8">
      <h1 className="text-4xl font-semibold">{book.title}</h1>
      <img src={book.image} alt={book.title} className="mt-4 rounded-lg w-full max-w-[600px]" />
      <p className="mt-4 text-lg">{book.description}</p>
    </main>
  );
};

export default BookPage;
