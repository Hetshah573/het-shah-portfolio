
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages and Tools",
      skills: ["C++", "Javascript", "HTML", "CSS", "Bash Scripting", "Python", "Hashcat", "Nmap"]
    },
    {
      title: "Libraries and Frameworks",
      skills: ["C++ STL", "NodeJS", "ExpressJS", "ReactJS", "PostMan API"]
    },
    {
      title: "Databases",
      skills: ["MySql", "MongoDB"]
    },
    {
      title: "Relevant Coursework",
      skills: ["Data Structures & Algorithms", "Operating Systems", "Information and Network Security", "Digital Forensics", "Machine Learning", "OOP", "DBMS", "Cloud Computing"]
    },
    {
      title: "Areas of Interest",
      skills: ["Machine Learning", "CyberSecurity", "Competitive Programming"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Self-learning", "Presentation"]
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b-2 border-gray-300 pb-2">
          TECHNICAL SKILLS AND INTERESTS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.title}:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {category.skills.join(", ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
