
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Phone, Trophy } from "lucide-react";

const Contact = () => {
  const codingProfiles = [
    { platform: "Codeforces", rating: "Maximum Rating: 1112", handle: "hetshah573" },
    { platform: "Codechef", rating: "2-star (Maximum rating: 1523)", handle: "hetshah573" },
    { platform: "Hackerrank", rating: "5-Star C++", handle: "Het Shah" },
    { platform: "Leetcode", rating: "(Maximum rating: 1645)", handle: "Hetshah573" },
    { platform: "TryHackme", rating: "Rating: 0x9 MAGE(Top 6 percent)", handle: "" }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Coding Profiles Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center border-b-2 border-gray-300 pb-2">
            CODING PROFILES
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => (
              <Card key={profile.platform} className="border border-gray-200 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Trophy className="h-6 w-6 text-gray-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {profile.platform}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{profile.rating}</p>
                  {profile.handle && (
                    <p className="text-sm text-gray-600">Handle: {profile.handle}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-gray-300 pb-2">
              CONTACT
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-gray-600" />
                </div>
                <p className="text-gray-700 font-medium">+91-9313002737</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-gray-600" />
                </div>
                <p className="text-gray-700 font-medium">hetshah11904@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="h-8 w-8 text-gray-600" />
                </div>
                <p className="text-gray-700 font-medium">github.com/Hetshah573</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-gray-600" />
                </div>
                <p className="text-gray-700 font-medium">linkedin.com/in/hetshah573</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white"
                asChild
              >
                <a href="mailto:hetshah11904@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 Het Shah. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
