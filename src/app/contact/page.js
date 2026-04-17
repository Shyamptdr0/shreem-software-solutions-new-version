export default function ContactPage() {
  const faqs = [
    { q: "How quickly do you start new projects?", a: "Typically, we can kick off a new project within 2-3 weeks of a signed agreement." },
    { q: "Do you offer post-launch support?", a: "Yes, we provide flexible ongoing maintenance and support packages for all our builds." },
    { q: "Can you work with our existing team?", a: "Absolutely. We often act as an extension of in-house teams to provide specialized expertise." }
  ];

  return (
    <main className="pt-32 pb-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-medium text-gray-900 tracking-tight mb-12">
          Let's talk <br />about you.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Whether you have a fully-fledged brief or just a rough idea, we're here to help you figure out the next steps. Our conversations are always no-pressure and focused on finding the best value for your business.
            </p>
            <div className="space-y-12">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-4">Direct Communication</span>
                <p className="text-2xl font-medium text-gray-900">hello@shreem.com</p>
                <p className="text-gray-500 mt-2">+91 98765 43210</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-4">Our Base</span>
                <p className="text-xl font-medium text-gray-900">123 Tech Park, Software Avenue<br />Digital City, 560001</p>
              </div>
            </div>

            <div className="mt-20 pt-16 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">What happens next?</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs flex items-center justify-center font-bold mr-4 shrink-0 mt-1">1</span>
                  <p className="text-gray-600 text-[15px]">We'll review your message and reach out within 24 hours to schedule a brief discovery call.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs flex items-center justify-center font-bold mr-4 shrink-0 mt-1">2</span>
                  <p className="text-gray-600 text-[15px]">During the call, we'll dive into your goals and provide initial technical recommendations.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <form className="space-y-6 bg-gray-50 p-8 md:p-12 rounded-[2rem]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 bg-white rounded-xl outline-none border border-transparent focus:border-blue-100 transition-all shadow-sm" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 bg-white rounded-xl outline-none border border-transparent focus:border-blue-100 transition-all shadow-sm" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Company</label>
                <input type="text" placeholder="Your Business" className="w-full p-4 bg-white rounded-xl outline-none border border-transparent focus:border-blue-100 transition-all shadow-sm" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2 block">How can we help?</label>
                <textarea placeholder="Tell us about your project..." rows="5" className="w-full p-4 bg-white rounded-xl outline-none border border-transparent focus:border-blue-100 transition-all shadow-sm"></textarea>
              </div>
              <button className="w-full md:w-auto bg-black text-white px-12 py-5 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-black/10">
                Start the conversation
              </button>
            </form>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
