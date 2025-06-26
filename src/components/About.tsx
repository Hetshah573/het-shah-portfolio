
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Hello! I'm Het Shah
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                  I love creating efficient, scalable solutions and turning complex problems into 
                  simple, beautiful designs.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg">
                  <h4 className="text-blue-300 font-semibold mb-2">🎓 Education</h4>
                  <p className="text-slate-300 text-sm">Computer Science & Engineering</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg">
                  <h4 className="text-green-300 font-semibold mb-2">💼 Experience</h4>
                  <p className="text-slate-300 text-sm">Full Stack Development & Software Engineering</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg">
                  <h4 className="text-purple-300 font-semibold mb-2">🚀 Focus</h4>
                  <p className="text-slate-300 text-sm">Modern Web Technologies & Scalable Solutions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
