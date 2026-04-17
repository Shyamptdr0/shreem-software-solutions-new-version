export default function InsightsPage() {
  const articles = [
    {
      tag: "Technology",
      title: "Why Headless Commerce is the Future of Scaling Brands",
      desc: "An in-depth look at how decoupling your frontend from your backend can drastically improve site performance and developer velocity."
    },
    {
      tag: "Process",
      title: "How to Reduce Development Time by 40% with Agile Sprints",
      desc: "Sharing our internal frameworks for running highly efficient discovery sessions and development cycles that deliver results faster."
    },
    {
      tag: "Design",
      title: "The Psychology of UI/UX: Why Minimalist Design Converts Better",
      desc: "Understanding how cognitive load affects user behavior and why simple, clean interfaces lead to higher trust and better conversion rates."
    },
    {
      tag: "Enterprise",
      title: "Automating the Mundane: A Guide to Custom ERP Solutions",
      desc: "Case studies on how medium-sized businesses are saving thousands of hours by replacing manual spreadsheets with custom automation tools."
    }
  ];

  return (
    <main className="pt-32 pb-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-medium text-gray-900 tracking-tight mb-12">
          Thoughts & <br />perspectives.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 mb-32">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/9] bg-gray-100 rounded-3xl mb-8 overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">{article.tag}</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {article.title}
              </h2>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {article.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-24">
          <div className="max-w-xl">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Stay updated</h3>
            <h2 className="text-3xl font-bold mb-8">Get our latest insights delivered to your inbox.</h2>
            <div className="flex gap-4">
              <input type="email" placeholder="Email address" className="flex-1 p-4 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-blue-100 transition-all" />
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">Join</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
