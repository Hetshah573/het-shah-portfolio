
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Shield, Database, Brain, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Email Threat Analysis Tool",
      description: "Advanced cybersecurity solution using Ollama's LLM for intelligent phishing detection and email threat analysis. Implements machine learning algorithms to identify suspicious patterns and malicious content with high accuracy.",
      tech: ["Python", "Machine Learning", "Ollama LLM", "Cybersecurity", "Threat Detection"],
      github: "https://github.com/Hetshah573/Email-Threat-Analysis-Tool",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Multi-User Contact Management API",
      description: "Scalable RESTful API built with modern backend technologies. Features comprehensive user authentication, authorization with JWT tokens, and complete CRUD operations for contact management.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      github: "https://github.com/Hetshah573/Contact-Management-API",
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI-Powered Wildfire Detection",
      description: "Computer vision solution using Convolutional Neural Networks for real-time wildfire detection from satellite imagery. Advanced image processing algorithms for emergency response teams.",
      tech: ["CNN", "Computer Vision", "Python", "Image Processing", "Machine Learning"],
      github: "https://huggingface.co/spaces/Hetshah573/Wildfire_Prediction",
      icon: Brain,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Keylogger Detector With Virustotal",
      description: "A Python-based tool that scans running processes for potential keylogger activity using both static heuristics (import scanning and YARA rules) and online threat intelligence (VirusTotal).",
      tech: ["Python", "YARA", "C", "VirusTotal"],
      github: "https://github.com/Hetshah573/KEYLOGGER_DETECTOR_WITH_VIRUSTOTAL",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
     {
      title: "Hospital Network Design",
      description: "We have implemented various Networking Concepts like VLAN,Wireless Access Point connection,Static IP, Dynamic IP using Cisco Packet Tracer. We have made a server room having variuos servers like DHCP,DNS,WEB,EMAIL Server.",
      tech: ["Cisco Packet tracer", "DNS", "DHCP", "Networking", "VLAN"],
      github: "https://github.com/Hetshah573/HOSPITAL-NETWORK-DESIGN-",
      icon: Shield,
      color: "from-blue-600 to-indigo-500"
    }
  ];

  const handleGitHubClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Showcasing innovative solutions in cybersecurity, AI, and full-stack development
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.title} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-r ${project.color} p-3 rounded-xl`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 cursor-pointer" 
                      onClick={() => handleGitHubClick(project.github)}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
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

export default Projects;
