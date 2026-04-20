export const metadata = {
  title: "About Us | Shreem Software Solutions",
  description: "Learn more about Shreem Software Solutions, our mission, our values, and our commitment to delivering high-end technology solutions.",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-medium text-gray-900 tracking-tight mb-12">
          Small team, <br />big ambitions.
        </h1>
        <div className="max-w-4xl">
          <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed mb-20">
            Shreem Software Solutions was born out of a simple idea: that high-end technology shouldn't be reserved only for the giants. We started as a small group of passionate engineers who wanted to build software that actually solves problems, not just occupies space.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <div>
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Our Mission</h2>
              <p className="text-lg text-gray-900 font-medium leading-relaxed">
                To empower businesses with custom digital tools that foster growth, streamline operations, and create delightful user experiences. We don't just ship code; we deliver competitive advantages.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Our Philosophy</h2>
              <p className="text-gray-500 leading-relaxed">
                We believe in radical transparency. Whether things are going perfectly or we've hit a technical snag, you'll know exactly where we stand. No jargon, no hidden fees—just honest, expert partnership.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-gray-100 mb-32">
            <div>
              <span className="block text-4xl font-bold text-gray-900 mb-2">50+</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Projects</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-gray-900 mb-2">10+</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Experts</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-gray-900 mb-2">95%</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Retention</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-gray-900 mb-2">24h</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Response</span>
            </div>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 underline decoration-blue-600 decoration-4 underline-offset-8">Why work with us?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Because we care about your business as much as you do. We don't just look at a list of features; we look at your ROI. Every technical decision we make is aimed at one goal: helping your business succeed.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
