export const metadata = {
  title: "Our Services | Shreem Software Solutions",
  description: "Explore our range of software development services, including custom software, web and mobile app development, UI/UX design, and digital transformation.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      name: "Engineering",
      tagline: "Building scalable, high-performance systems.",
      services: [
        { title: "Custom Web Development", desc: "Enterprise-grade web applications built with Next.js, React, and Node.js for maximum speed and scale." },
        { title: "Mobile App Development", desc: "Native and cross-platform mobile experiences (iOS & Android) that feel fluid and look stunning." },
        { title: "ERP & CRM Systems", desc: "Custom-built business automation tools that mirror your exact workflows and eliminate manual bottlenecks." }
      ]
    },
    {
      name: "Strategy",
      tagline: "Mapping out your digital success.",
      services: [
        { title: "Product Roadmap", desc: "Strategic planning to transform your initial idea into a market-ready product with clear milestones." },
        { title: "Tech Stack Audit", desc: "In-depth analysis of your current systems to identify inefficiencies and security risks." },
        { title: "Digital Transformation", desc: "Helping legacy businesses pivot to modern digital operations with minimal disruption." }
      ]
    },
    {
      name: "Design",
      tagline: "Creating intuitive, brand-first experiences.",
      services: [
        { title: "UI/UX Product Design", desc: "User-centric interfaces that reduce friction and guide your customers toward conversion." },
        { title: "Design Systems", desc: "Scalable component libraries that ensure consistency across all your digital products." },
        { title: "Prototyping", desc: "High-fidelity interactive prototypes that allow you to test your product before it's built." }
      ]
    }
  ];

  return (
    <main className="pt-32 pb-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <h1 className="text-5xl md:text-8xl font-medium text-gray-900 tracking-tight leading-[0.9] mb-10">
            Precision software <br />for modern business.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            We don't just build features. We build scalable digital products that solve complex business challenges and drive measurable growth.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-40">
          {serviceCategories.map((cat, i) => (
            <div key={i} className="border-t border-gray-100 pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{cat.name}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed">{cat.tagline}</p>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {cat.services.map((service, idx) => (
                    <div key={idx} className="group">
                      <div className="w-12 h-1 bg-blue-600 mb-8 transition-all group-hover:w-20"></div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-[15px]">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Approach Section */}
        <div className="mt-48 p-12 md:p-24 bg-gray-50 rounded-[3rem]">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-8">Our Approach</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              We focus on the outcome, not just the output.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Every project begins with a deep understanding of your business goals. We don't believe in technology for technology's sake. We choose the stack and the strategy that will give you the most significant competitive advantage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="block text-2xl font-bold text-gray-900 mb-2">Transparency</span>
                <p className="text-sm text-gray-500">Weekly updates and open communication throughout the build.</p>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900 mb-2">Velocity</span>
                <p className="text-sm text-gray-500">Agile sprints designed to get your product to market faster.</p>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900 mb-2">Quality</span>
                <p className="text-sm text-gray-500">Rigorous testing and clean code architecture by default.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
