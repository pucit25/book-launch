"use client"
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import HeroSecond from "./components/HeroSecond";
import About from "./components/AboutSection";
import Testimonials from "./components/testimonialsSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <HeroSecond />
      <About />
      <Testimonials />
    </div>
  );
}
