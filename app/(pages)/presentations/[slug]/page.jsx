"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import presentationsData from "@/app/data/presentations";

const PresentationPage = () => {
  const { slug } = useParams();
  const [presentation, setPresentation] = useState(null);

  useEffect(() => {
    const foundPresentation = presentationsData.find((p) => p.slug === slug);
    setPresentation(foundPresentation);
  }, [slug]);

  if (!presentation) return <p className="text-center">Presentation not found.</p>;

  return (
    <main className="px-6 md:px-16 py-8">
      <h1 className="text-4xl font-semibold">{presentation.title}</h1>
      <p className="mt-4 text-lg">{presentation.content}</p>
    </main>
  );
};

export default PresentationPage;
