
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Let's Connect
        </h2>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-slate-300 text-sm">hetshah573@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">GitHub</h4>
                <p className="text-slate-300 text-sm">@Hetshah573</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
                <p className="text-slate-300 text-sm">@hetshah573</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:hetshah573@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12 text-slate-400 text-sm">
          <p>© 2024 Het Shah. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
