export const metadata = {
  title: "Our Expertise | Shreem Software Solutions",
  description: "Learn about our technical capabilities in frontend, backend, data infrastructure, and AI innovation, and how we leverage these to build scalable digital products.",
};

export default function ExpertisePage() {
  const expertiseGroups = [
    {
      category: "Frontend Mastery",
      tagline: "Building high-performance, accessible user experiences.",
      skills: [
        { name: "Frameworks", techs: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript"] },
        { name: "Styling & UI", techs: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Framer Motion"] },
        { name: "State & Performance", techs: ["Redux", "Context API", "Performance Optimization", "Lazy Loading"] },
        { name: "Testing & QA", techs: ["React Testing Library", "Debugging", "Error Handling"] }
      ]
    },
    {
      category: "Backend Engineering",
      tagline: "Robust architectures and enterprise solutions.",
      skills: [
        { name: "Node.js Ecosystem", techs: ["Node.js", "Express.js", "RESTful APIs", "Middleware"] },
        { name: "Java Enterprise", techs: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate (ORM)"] },
        { name: "Architecture", techs: ["Microservices", "Distributed Systems", "MVC Pattern", "Event-Driven Architecture", "Scalable Apps"] },
        { name: "Security", techs: ["JWT Authentication", "OAuth2", "Role-Based Access Control (RBAC)", "API Security", "CORS"] }
      ]
    },
    {
      category: "Data & Infrastructure",
      tagline: "Scalable data management and cloud operations.",
      skills: [
        { name: "Databases", techs: ["MongoDB (Mongoose)", "PostgreSQL", "MySQL", "Redis (Caching)"] },
        { name: "Cloud & DevOps", techs: ["AWS", "Azure", "DigitalOcean", "Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "Vercel", "Netlify"] },
        { name: "Tools", techs: ["Git", "GitHub", "GitLab", "Postman", "NPM/Yarn", "Maven/Gradle", "Kafka", "Vite"] }
      ]
    },
    {
      category: "Modern Innovation",
      tagline: "Leveraging the power of AI and real-time connectivity.",
      skills: [
        { name: "AI & LLM", techs: ["OpenAI Integration", "Prompt Engineering", "LLM APIs", "AI Chatbots", "AI Assistants", "Content Generation"] },
        { name: "Advanced Systems", techs: ["Data Structures & Algorithms", "OOPs", "System Design", "API Optimization", "Clean Code"] },
        { name: "Emerging Tech", techs: ["WebSockets", "Real-time Applications", "Basic NLP", "Generative AI"] }
      ]
    }
  ];

  return (
    <main className="pt-32 pb-32 min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="max-w-4xl mb-32">
          <h1 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.9] mb-10">
            Advanced technical <br />capabilities.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            From modern web stacks to enterprise Java ecosystems and cutting-edge AI integration, our expertise is built to handle the most demanding digital challenges.
          </p>
        </div>

        {/* Expertise Groups */}
        <div className="space-y-32">
          {expertiseGroups.map((group, i) => (
            <div key={i} className="border-t border-gray-100 pt-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Side Header */}
                <div className="lg:col-span-4">
                  <h2 className="text-4xl font-bold mb-4">{group.category}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed">{group.tagline}</p>
                </div>
                
                {/* Skills Grid */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">{skill.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.techs.map(tech => (
                          <span key={tech} className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-[11px] font-semibold text-gray-700 rounded-md hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Philosophy */}
        <div className="mt-48 p-12 md:p-24 bg-gray-900 rounded-[3rem] text-white">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-[0.3em] mb-8">Our Engineering Code</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Built for stability. <br />Designed for scale.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-gray-400 leading-relaxed">
                We adhere to strict Clean Code principles, SOLID design patterns, and rigorous System Design standards. Every project is an opportunity to build a robust foundation for your business growth.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it's optimizing API response times, managing complex microservices, or integrating secure AI chatbots, our focus remains on creating maintainable and secure digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
