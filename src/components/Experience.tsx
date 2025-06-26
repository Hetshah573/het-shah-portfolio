
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Security Analyst Intern",
      company: "Sharkstriker Inc",
      period: "May 2025 - Present",
      location: "Offline",
      description: "Assist in monitoring, detecting, and analyzing security events to help protect the organization's digital landscape."
    },
    {
      title: "Gujarat Gopalak Kanya Kelvani Mandal (NGO)",
      company: "Volunteer",
      period: "July 2023 - July 2023",
      location: "Offline",
      description: "Organized engaging sports and drawing activities for 50+ primary school students."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b-2 border-gray-300 pb-2">
          EXPERIENCE
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 font-medium italic">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
