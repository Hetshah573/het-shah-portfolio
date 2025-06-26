
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Developing scalable web applications using React, Node.js, and cloud technologies. Leading frontend development and collaborating with cross-functional teams.",
      skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      title: "Software Engineer Intern",
      company: "Startup Inc.",
      period: "2022 - 2023",
      description: "Built responsive web applications and RESTful APIs. Contributed to code reviews and implemented best practices for software development.",
      skills: ["JavaScript", "Python", "MongoDB", "Git"]
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2021 - 2022",
      description: "Created custom websites for small businesses and startups. Focused on user experience and modern design principles.",
      skills: ["HTML/CSS", "JavaScript", "React", "Figma"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.title}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-300 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-full text-sm text-blue-300 border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
