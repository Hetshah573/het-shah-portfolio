
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Header */}
          <div className="mb-12">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Het Shah
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Code className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Software Engineer</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="text-purple-800 font-medium">Cybersecurity Specialist</span>
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-4">
              Computer Science & Engineering Student
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nirma University, Ahmedabad • CGPA: 8.62
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50" asChild>
                <a href="mailto:hetshah11904@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="border-gray-200 hover:bg-gray-50" asChild>
                <a href="https://github.com/Hetshah573" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50" asChild>
                <a href="https://linkedin.com/in/hetshah573" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Overview
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              Passionate Computer Science student specializing in <span className="font-semibold text-blue-600">Software Engineering</span> and 
              <span className="font-semibold text-purple-600"> Cybersecurity</span>. Experienced in full-stack development, 
              security analysis, and competitive programming. Proven track record in building scalable applications, 
              threat detection systems, and machine learning solutions. Seeking opportunities to contribute to innovative 
              software development and security initiatives.
            </p>
            
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
