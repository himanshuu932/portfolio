
import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit,FileText ,ToolCase } from 'lucide-react';

const  Achievements =()=>{
     const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <section id="achievements" className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">Achievements</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { icon: Trophy, text: "Hackathon 1st Runner-Up: HackBlitz by Google Developers Group (300+ participants)." },
                    { icon: Award, text: "CodeChef Starters-181: Global rank-309/38,000+." },
                    { icon: Star, text: "CodeChef Rating: 4★ (max-1827)" },
                    { icon: Star, text: "Codeforces Rating: Pupil (max-1313)" },
                  ].map((achievement, index) => (
                    <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex items-center gap-4">
                      <achievement.icon className="text-blue-400 flex-shrink-0" size={32} />
                      <p className="text-slate-300">{achievement.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    );
}
export default Achievements;