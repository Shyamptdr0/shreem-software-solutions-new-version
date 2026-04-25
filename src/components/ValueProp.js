export default function ValueProp() {
  return (
    <section className="py-20 md:py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Label Side */}
          <div className="lg:col-span-3">
            <div className="md:sticky md:top-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-blue-600"></span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">Our Philosophy</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed uppercase tracking-wider font-medium">
                Results-driven engineering <br />for modern founders.
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-9 mt-12 lg:mt-0">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-[1.1] tracking-tight mb-12 md:mb-20">
              At Shreem Software Solutions, we transform <span className="text-blue-600">complex ideas</span> into modern digital products.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-24">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 md:mb-6">What we build</h3>
                <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                  From smart websites to custom mobile apps and enterprise software, we develop solutions that actually deliver measurable business results.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 md:mb-6">Our Focus</h3>
                <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                  We prioritize clean UI/UX and scalable architecture, ensuring your business grows faster with technology that's built for the long haul.
                </p>
              </div>
            </div>

            {/* Subtle Metric/Callout */}
            <div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-gray-100 flex flex-col md:flex-row gap-10 md:gap-12 items-start md:items-center">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">100%</span>
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">
                  Commitment to <br />Clean Code
                </p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">2x</span>
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">
                  Faster Time <br />to Market
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
