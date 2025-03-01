"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import articlesData from "@/app/data/articles";

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articlesData.find((a) => a.slug === slug);
    setArticle(foundArticle);
  }, [slug]);

  if (!article) return <p className="text-center">Article not found.</p>;

  return (
    <main className="px-6 md:px-16 py-8">
      <h1 className="text-4xl font-semibold">{article.title}</h1>
      <p className="mt-4 text-lg">{article.content}</p>
    </main>
  );
};

export default ArticlePage;
