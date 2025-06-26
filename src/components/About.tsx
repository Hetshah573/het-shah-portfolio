
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Education & Achievements
          </span>
        </h2>
        
        <div className="space-y-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Bachelor of Technology in Computer Science Engineering
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">Minor: Cybersecurity</p>
                      <p className="text-gray-600 font-medium">Nirma University, Ahmedabad</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 font-medium">2022 - 2026</p>
                      <div className="bg-green-100 px-3 py-1 rounded-full mt-2">
                        <p className="text-green-800 font-bold">CGPA: 8.68</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Higher Secondary Certificate (HSC)
                      </h3>
                      <p className="text-gray-600 font-medium">St. Xavier's Loyola High School, Ahmedabad</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 font-medium">2021-22</p>
                      <div className="bg-green-100 px-3 py-1 rounded-full mt-2">
                        <p className="text-green-800 font-bold">97.43%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
