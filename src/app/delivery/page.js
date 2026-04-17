export default function DeliveryPage() {
  const steps = [
    { 
      step: "01", 
      title: "Discovery & Deep Dive", 
      desc: "We start by listening. We immerse ourselves in your business to understand your vision, your users, and the real-world problems you're trying to solve. This phase is about alignment and setting the stage for success.",
      outcome: "Project Roadmap & Feature Backlog"
    },
    { 
      step: "02", 
      title: "Design & Prototyping", 
      desc: "Before a single line of code is written, we visualize the solution. We create interactive prototypes that allow you to feel the user experience and provide feedback early, saving time and resources down the line.",
      outcome: "High-Fidelity UI/UX Designs"
    },
    { 
      step: "03", 
      title: "Agile Sprints", 
      desc: "We build in short, focused bursts called sprints. This keeps the momentum high and allows for continuous feedback. You'll see progress every two weeks, ensuring the product evolves exactly as you envisioned.",
      outcome: "Functional Product Increments"
    },
    { 
      step: "04", 
      title: "Launch & Support", 
      desc: "Deployment is just the beginning. We manage the launch process meticulously and stay by your side post-launch to monitor performance, squash bugs, and plan for future scaling.",
      outcome: "Live Product & Growth Plan"
    },
  ];

  return (
    <main className="pt-32 pb-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-medium text-gray-900 tracking-tight mb-12">
          Our way <br />of working.
        </h1>
        <div className="max-w-3xl mb-24">
          <p className="text-2xl text-gray-600 font-light leading-relaxed">
            We don't believe in 'throw it over the wall' development. Our process is collaborative, transparent, and designed to minimize risk while maximizing speed to market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {steps.map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">{item.step} / {item.title}</span>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {item.desc}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Outcome</span>
                <span className="text-sm font-semibold text-gray-900">{item.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-gray-900 rounded-[3rem] text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our commitment to quality.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Every project we deliver goes through rigorous automated and manual testing. We don't ship until it meets our high standards for performance, security, and accessibility. That's how we build products that last.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <span className="block text-2xl font-bold">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Code Ownership</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">24/7</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Support Access</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">0%</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Tech Debt Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
