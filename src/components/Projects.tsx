
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Email-Threat-Analysis-Tool",
      description: "A Python-based Kaggle tool leveraging Ollama's LLM to analyze email threats and detect phishing attempts. This tool uses a large language model from ollama to assess the likelihood of phishing attempts and flags suspicious elements within emails.",
      tech: ["Python", "Kaggle", "Ollama", "Phishing Detection"],
      github: "https://github.com/Hetshah573",
      live: "#"
    },
    {
      title: "Contact Management API",
      description: "A multi-user Contact Management API built with Node.js, Express.js and MongoDB. Features Provided: CRUD API, Authentication, Authorization, JWT Token",
      tech: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Hetshah573",
      live: "#"
    },
    {
      title: "Wildfire Detection from Satellite Images",
      description: "Wildfire prediction using CNN on satellite images, deployed on Hugging Face with a basic frontend.",
      tech: ["CNN", "TensorFlow", "Kaggle", "HuggingFaces"],
      github: "https://github.com/Hetshah573",
      live: "#"
    },
    {
      title: "BookStore Management System",
      description: "It showcases basic CRUD Operations on books store in MERN Stack",
      tech: ["MongoDB", "Express.js", "React.js"],
      github: "https://github.com/Hetshah573",
      live: "#"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b-2 border-gray-300 pb-2">
          PERSONAL PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Technology Used:</p>
                  <p className="text-sm text-gray-700">{project.tech.join(", ")}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
