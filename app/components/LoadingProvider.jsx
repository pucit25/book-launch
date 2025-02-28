"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    document.body.classList.add("overflow-hidden"); // Prevent scrolling during loading
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden"); // Restore scrolling
    }, 1500);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove("overflow-hidden"); // Ensure scrolling is restored
    };
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-lg z-[9999]">
          <Loader />
        </div>
      )}
      {!loading && children}
    </>
  );
}
