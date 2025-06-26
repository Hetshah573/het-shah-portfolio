
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-gray-300 pb-2">
          EDUCATION
        </h2>
        
        <div className="space-y-6">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bachelor of Technology in CSE (Minors In Cybersecurity)
                  </h3>
                  <p className="text-gray-600 italic">Nirma University</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2022-Present</p>
                  <p className="text-gray-600">CGPA: 8.62</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    HSC (12th Grade)
                  </h3>
                  <p className="text-gray-600 italic">St.Xaviers Loyola High School, Ahmedabad</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2021-22</p>
                  <p className="text-gray-600">Percentile: 97.43</p>
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
