"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-white">
      {/* Geometric Background mimicking the provided design */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Subtle base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-orange-50/30"></div>

        {/* SVG background shapes */}
        <svg
          className="absolute right-0 top-0 w-full md:w-[80%] h-full opacity-60"
          viewBox="0 0 1000 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: Blues */}
          <polygon points="400,0 700,0 500,400 200,400" fill="rgba(112, 214, 255, 0.4)" />
          <polygon points="650,0 950,0 750,400 450,400" fill="rgba(41, 171, 226, 0.2)" />

          {/* Layer 2: Purples */}
          <polygon points="500,200 800,200 600,600 300,600" fill="rgba(224, 170, 255, 0.3)" />
          <polygon points="750,150 1050,150 850,550 550,550" fill="rgba(130, 207, 255, 0.4)" />

          {/* Layer 3: Oranges/Yellows */}
          <polygon points="100,0 400,0 200,400 -100,400" fill="rgba(255, 184, 77, 0.3)" />
          <polygon points="300,300 600,300 400,700 100,700" fill="rgba(255, 184, 77, 0.2)" />

          {/* Extra Overlaps for complexity */}
          <polygon points="800,0 1100,0 900,400 600,400" fill="rgba(112, 214, 255, 0.5)" />
          <polygon points="400,400 700,400 500,800 200,800" fill="rgba(224, 170, 255, 0.2)" />
        </svg>

        {/* White fade at bottom to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-blue-600"></span>
            <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-[0.4em]">Shreem Software Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-12 leading-[1.1] tracking-tight">
            Software that solves. <br />
            <span className="text-gray-400">Software that scales.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-12">
            <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed font-light">
              We transform messy manual workflows into elegant digital systems. From custom ERPs to high-performance products, we build the tools you need to stay ahead.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-black/10"
              >
                Book a discovery call
              </Link>
              <Link 
                href="/case-studies" 
                className="text-sm font-bold uppercase tracking-widest border-b-2 border-black/10 hover:border-black transition-all py-1"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
