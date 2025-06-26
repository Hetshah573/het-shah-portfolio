
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Shield, Brain, Trophy, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["C++", "JavaScript", "Python", "HTML/CSS", "React.js", "Node.js", "Express.js"]
    },
    {
      title: "Cybersecurity & Tools",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: ["Network Security", "Digital Forensics", "Hashcat", "Nmap", "Penetration Testing", "Security Analysis"]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["MySQL", "MongoDB", "Cloud Computing", "Database Management", "API Development"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-violet-500",
      skills: ["Machine Learning", "CNN", "TensorFlow", "Data Analysis", "Predictive Modeling"]
    },
    {
      title: "Competitive Programming",
      icon: Trophy,
      color: "from-orange-500 to-yellow-500",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Code Optimization", "Contest Programming"]
    },
    {
      title: "Professional Skills",
      icon: Users,
      color: "from-indigo-500 to-blue-500",
      skills: ["Team Leadership", "Project Management", "Technical Presentations", "Code Review", "Mentoring"]
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
