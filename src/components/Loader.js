"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for window load
    const handleLoad = () => {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'unset';
      }, 1500);
      return () => clearTimeout(timer);
    };

    // Lock scroll during loading
    document.body.style.overflow = 'hidden';

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
        document.body.style.overflow = 'unset';
      };
    }
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500">
          <div className="relative mb-8">
            <Image
              src="/mainlogosvg.svg"
              alt="Shreem Logo"
              width={240}
              height={100}
              className="animate-pulse opacity-90"
              priority
            />
          </div>
          <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
            <div className="h-full bg-blue-600 absolute left-0 top-0 animate-loader-progress"></div>
          </div>
          <style jsx>{`
            @keyframes progress {
              0% { left: -100%; width: 100%; }
              50% { left: 0%; width: 50%; }
              100% { left: 100%; width: 100%; }
            }
            .animate-loader-progress {
              animation: progress 2s infinite ease-in-out;
              width: 40%;
            }
          `}</style>
        </div>
      )}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </div>
    </>
  );
}
