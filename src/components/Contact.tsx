
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Trophy, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);

  const codingProfiles = [
    { 
      platform: "Codeforces", 
      rating: "Max Rating: 1112", 
      handle: "hetshah573",
      color: "from-blue-500 to-cyan-500",
      url: "https://codeforces.com/profile/hetshah573"
    },
    { 
      platform: "CodeChef", 
      rating: "2⭐ (Max: 1523)", 
      handle: "hetshah573",
      color: "from-orange-500 to-red-500",
      url: "https://www.codechef.com/users/hetshah573"
    },
    { 
      platform: "HackerRank", 
      rating: "5⭐ C++", 
      handle: "Het Shah",
      color: "from-green-500 to-emerald-500",
      url: "https://www.hackerrank.com/profile/hetshah11904"
    },
    { 
      platform: "LeetCode", 
      rating: "Max Rating: 1645", 
      handle: "Hetshah573",
      color: "from-yellow-500 to-orange-500",
      url: "https://leetcode.com/u/Hetshah573/"
    },
    { 
      platform: "TryHackMe", 
      rating: "MAGE (Top 6%)", 
      handle: "Cybersecurity Expert",
      color: "from-purple-500 to-pink-500",
      url: "https://tryhackme.com/p/Het573"
    }
  ];

  const handleContactClick = () => {
    setShowPhone(true);
  };

  const handleProfileClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:hetshah11904@gmail.com", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/Hetshah573", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/hetshah573", "_blank");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-rose-50 via-white to-orange-50">
      <div className="container mx-auto max-w-6xl">
        {/* Coding Profiles Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
              Competitive Programming
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Demonstrating problem-solving skills across multiple platforms
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => (
              <Card 
                key={profile.platform} 
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => handleProfileClick(profile.url)}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`bg-gradient-to-r ${profile.color} p-3 rounded-xl`}>
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {profile.platform}
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 mb-2">{profile.rating}</p>
                  <p className="text-sm text-gray-600">{profile.handle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Ready to contribute to innovative projects in software engineering and cybersecurity
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center group cursor-pointer" onClick={handleEmailClick}>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-semibold">hetshah11904@gmail.com</p>
              </div>
              
              <div className="text-center group cursor-pointer" onClick={handleGitHubClick}>
                <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-semibold">github.com/Hetshah573</p>
              </div>
              
              <div className="text-center group cursor-pointer" onClick={handleLinkedInClick}>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-semibold">linkedin.com/in/hetshah573</p>
              </div>
            </div>
            
            <div className="text-center">
              {!showPhone ? (
                <Button 
                  size="lg"
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg cursor-pointer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              ) : (
                <div className="bg-green-100 p-4 rounded-xl inline-block">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-semibold text-lg">+91-9313002737</span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8 text-gray-500">
          <p>© 2024 Het Shah. Crafted with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
