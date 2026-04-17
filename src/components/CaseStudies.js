import Image from "next/image";
import Link from "next/link";

const BackgroundShape = ({ color = "bg-gray-100" }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Back Layer */}
      <div
        className={`absolute w-[120%] h-[110%] ${color} opacity-40 rounded-2xl transform rotate-6`}
      />

      {/* Middle Layer */}
      <div
        className={`absolute w-[110%] h-[100%] ${color} opacity-70 rounded-2xl transform -rotate-3`}
      />

      {/* Front Layer */}
      <div
        className={`absolute w-full h-full ${color} opacity-90 rounded-2xl`}
      />
    </div>
  );
};

export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "Restaurant Billing Software streamlines operations with analytics.",
      category: "SAAS & RESTAURANT",
      image: "/6.webp",
      layout: "horizontal",
      shapeColor: "bg-purple-200",
    },
    {
      id: 2,
      title: "A seamless Coffee Shop App with modern cart and ordering features.",
      category: "FOOD & BEVERAGE",
      image: "/9.webp",
      layout: "vertical",
      shapeColor: "bg-yellow-200",
    },
    {
      id: 3,
      title: "Creative Homes helps users explore, book, and manage properties.",
      category: "REAL ESTATE",
      image: "/8.webp",
      layout: "vertical",
      shapeColor: "bg-blue-200",
    },
    {
      id: 4,
      title: "School Website provides a modern responsive management portal.",
      category: "EDUCATION",
      image: "/7.webp",
      layout: "horizontal",
      shapeColor: "bg-red-200",
    },

  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-tight">
            Our Portfolio &<br />Case Studies
          </h2>
          <div className="mt-8 md:mt-0 max-w-[280px] md:text-right flex flex-col md:items-end">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 leading-relaxed">
              Explore our recent projects and success stories
            </p>
            <Link
              href="/case-studies"
              className="bg-[#2d2d2d] text-white px-6 py-2.5 rounded text-xs font-bold hover:bg-black transition-all inline-block"
            >
              All case studies
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-40">
          {cases.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col group cursor-pointer ${item.layout === "horizontal" ? "md:flex-row md:items-center gap-16" : ""
                } ${index % 2 === 1 ? "md:mt-32" : ""}`}
            >
              {/* Image Container with Background Shape */}
              <div
                className={`relative flex-shrink-0 transition-transform duration-500 hover:-translate-y-2 ${item.layout === "horizontal"
                    ? "w-full md:w-1/2 aspect-[4/3]"
                    : "w-full aspect-[4/5]"
                  }`}
              >
                {/* Background Shape */}
                <div className="absolute inset-0 -m-6 z-0">
                  <BackgroundShape color={item.shapeColor} />
                </div>

                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-white/20 blur-2xl z-0" />

                {/* Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative w-[80%] h-[80%] rounded-xl overflow-hidden shadow-2xl border border-white/40 bg-white">
                    <Image
                      src={item.image}
                      alt={item.category}
                      fill
                      className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className={`flex flex-col relative z-20 ${item.layout === "horizontal" ? "md:w-1/2" : "mt-12"}`}>
                <div className="flex items-start mb-4">
                  <span className="text-lg mr-2 text-gray-900 font-light">→</span>
                  <h3 className="text-xl md:text-2xl text-gray-900 leading-tight font-normal">
                    {item.title}
                  </h3>
                </div>
                <div className="inline-block">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-200 pb-1">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




