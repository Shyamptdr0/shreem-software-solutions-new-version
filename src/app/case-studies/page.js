export default function CaseStudiesPage() {
  const featuredCases = [
    {
      title: "Connecting Owners, Contractors, and Clients in Construction",
      problem: "Construction projects usually involve three parties who are rarely on the same page. Owners felt blind to progress, contractors were bogged down in paperwork, and clients were constantly calling to ask, 'When will my house be ready?' and 'Where did my payment go?'",
      solution: "We built a three-way platform. The Owner (Admin) has full control, the Contractor updates daily tasks and labor directly from the site, and the Client gets their own login to watch their dream home come to life, track every rupee paid, and see real-time progress photos.",
      impact: "No more 'guessing' games. Disputes over payments vanished, and clients felt 100% more confident because they could see exactly what they were paying for, day by day.",
    },
    {
      title: "Retiring the Pen & Paper in Busy Restaurant Kitchens",
      problem: "Waiters were scribbling orders on paper pads, kitchen staff couldn't read the handwriting, and the owner had no idea if they were running out of ingredients until a customer tried to order them. Manual billing was slow, and 'calculating the day's total' was a midnight nightmare.",
      solution: "We digitized the entire mess. Now, waiters add items to specific tables with two taps, bills print instantly in the kitchen (KOT), and the system automatically deducts used items from the inventory. We even added 'Item Analysis' so the owner knows which dish is a bestseller and which one is just taking up space in the fridge.",
      impact: "Zero order mistakes. The owner saves 10+ hours a week on inventory alone, and can finally see exactly which menu items are making money—all from a single digital dashboard.",
    },
    {
      title: "Replacing Big Manual Registers with a Unified School Ecosystem",
      problem: "The school was relying on massive paper registers to track everything. Teachers were spending 20 minutes a day just on attendance, the office staff was manually updating fees in dusty ledgers, and managing the school calendar or holidays meant printing and distributing hundreds of circulars.",
      solution: "We built a complete digital ecosystem. It starts with a modern School Website and flows into a powerful 'Super Admin' panel that manages students, teachers, and the entire office section. We added a dynamic calendar to manage holidays with one click and a dedicated Parents App where they can see their child's daily data and handle fee payments digitally.",
      impact: "No more 'lost' records in big registers. The Super Admin now has a bird's-eye view of the entire school, teachers have more time to teach, and parents are always in the loop about holidays and fees through their own app.",
    }
  ];

  return (
    <main className="pt-32 pb-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-medium text-gray-900 tracking-tight mb-12">
          Real world problems,<br />solved with code.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 text-lg leading-relaxed mb-24">
          <p>
            Software is only useful if it makes your day easier. We don't just sit in a dark room and write code; we go out to the construction sites and sit in the restaurant kitchens to understand where the actual pain points are.
          </p>
          <p>
            Our work isn't about fancy jargon. It's about building tools that site supervisors and restaurant waiters can use without a manual. If it doesn't solve a real-world headache, we don't build it.
          </p>
        </div>
        
        <div className="space-y-32">
          {featuredCases.map((c, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-gray-100 pt-16">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.title}</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">The Challenge</h3>
                    <p className="text-gray-500 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Our Solution</h3>
                    <p className="text-gray-500 leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 bg-gray-50 p-12 rounded-2xl flex flex-col justify-center">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Key Result</h3>
                <p className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                  {c.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
