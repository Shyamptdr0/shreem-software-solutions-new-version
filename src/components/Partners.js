export default function Partners() {
  const technologies = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Hibernate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Expo", logo: "https://avatars.githubusercontent.com/u/12504344?s=200&v=4" },
  ];

  return (
    <section className="bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] py-8">
          Technologies we excel in
        </p>
        
        <div className="border-t border-l border-gray-200 flex flex-wrap">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="w-1/2 md:w-1/3 lg:w-1/5 border-r border-b border-gray-200 h-24 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 gap-3 group"
            >
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0" 
              />
              <span className="text-sm font-bold text-gray-700 tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
