"use client";
import { useState } from "react";

export default function Features() {
  const [activeId, setActiveId] = useState("01");

  const outcomes = [
    {
      id: "01",
      title: "CUSTOM WEBSITE DEVELOPMENT",
      description: "We don't do boring templates. We build fast, beautiful websites that actually tell your brand's story and turn random visitors into loyal customers.",
      color: "bg-[#fbb03b]",
    },
    {
      id: "02",
      title: "ERP SOFTWARE SOLUTIONS",
      description: "Stop juggling a dozen different spreadsheets. We build a 'central brain' for your business that handles everything from stock to staff, so you can stop worrying and start growing.",
      color: "bg-[#8ce1ff]",
    },
    {
      id: "03",
      title: "CRM DEVELOPMENT",
      description: "Keep your customers close without the manual effort. We build smart tools that help you track every conversation and never miss a follow-up, making your sales process feel effortless.",
      color: "bg-[#cbb8ff]",
    },
    {
      id: "04",
      title: "MOBILE APP DEVELOPMENT",
      description: "Your business, right in their pocket. We create smooth Android and iOS apps that people actually enjoy using, keeping your brand just a single tap away from your customers.",
      color: "bg-[#ffb8f1]",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-tight">
              Our Core<br className="hidden lg:block" /> Services
            </h2>
            <div className="mt-8 text-xs font-bold text-gray-400 uppercase tracking-widest hidden lg:block">
              WHAT WE DO
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-2">
            {outcomes.map((outcome) => {
              const isActive = outcome.id === activeId;
              
              return (
                <div 
                  key={outcome.id} 
                  onClick={() => setActiveId(outcome.id)}
                  className={`${outcome.color} rounded-sm overflow-hidden transition-all duration-300 ${isActive ? 'p-8 md:p-12' : 'p-4 md:px-8 md:py-5'} flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer`}
                >
                  {isActive ? (
                    <>
                      <div className="max-w-md">
                        <div className="flex items-center space-x-4 mb-8">
                          <span className="text-sm font-bold opacity-80">{outcome.id} <span className="mx-1">→</span></span>
                          <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider">{outcome.title}</h3>
                        </div>
                        <p className="text-[13px] md:text-[15px] font-medium leading-relaxed opacity-80 mb-6">
                          {outcome.description}
                        </p>
                      </div>
                      
                      <div className="mt-6 md:mt-0 self-end md:self-center">
                        <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full flex items-center space-x-6">
                      <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider opacity-80">{outcome.title}</h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
