
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header with contact info */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Het Shah
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Computer Science and Engineering
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Bachelor of Technology<br />
              Nirma University, Ahmedabad, Gujarat
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-9313002737</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hetshah11904@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>github.com/Hetshah573</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/hetshah573</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center border-b-2 border-gray-300 pb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Computer Science student with expertise in C++, Backend, Cyber Security and Machine Learning. Proven 
              ability to deliver solutions in web development and cybersecurity. Passionate about leveraging 
              problem-solving skills to develop innovative applications and optimize system efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
