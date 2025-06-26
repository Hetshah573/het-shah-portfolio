
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Security Analyst Intern",
      company: "Sharkstriker Inc",
      period: "May 2025 - Present",
      location: "On-site",
      description: "Leading cybersecurity initiatives including threat monitoring, incident response, and security event analysis. Developing automated security solutions and contributing to the organization's digital defense strategy.",
      icon: Briefcase,
      color: "from-blue-500 to-purple-500",
      type: "Professional"
    },
    {
      title: "Community Volunteer",
      company: "Gujarat Gopalak Kanya Kelvani Mandal",
      period: "July 2023",
      location: "Ahmedabad",
      description: "Organized educational and recreational activities for 50+ primary school students. Led sports competitions and creative workshops, demonstrating leadership and community engagement skills.",
      icon: Heart,
      color: "from-pink-500 to-red-500",
      type: "Volunteer"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Building expertise through hands-on experience and community involvement
        </p>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card key={exp.title} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${exp.color} p-3 rounded-xl flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {exp.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              exp.type === 'Professional' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-pink-100 text-pink-800'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-lg font-semibold text-indigo-600 mb-1">
                            {exp.company}
                          </p>
                          <p className="text-gray-600 font-medium">
                            {exp.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="bg-gray-100 px-3 py-1 rounded-full">
                            <p className="text-gray-700 font-medium">{exp.period}</p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
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

export default Experience;
