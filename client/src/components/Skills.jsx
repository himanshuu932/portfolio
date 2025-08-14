
import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit,FileText ,ToolCase } from 'lucide-react';

const  Skills =()=>{
     const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
       <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Languages", skills: ["Java", "Python", "JavaScript", "C++", "SQL"], icon: Code, color: "text-green-400" },
              { title: "Frontend", skills: ["React", "React Native", "HTML/CSS", "Tailwind"], icon: Globe, color: "text-blue-400" },
              { title: "Backend", skills: ["Node.js", "Express", "Flask", "REST API"], icon: Server, color: "text-purple-400" },
              { title: "AI/ML", skills: ["OpenCV", "Pandas", "Matplotlib", "Rasterio", "Generative AI"], icon: BrainCircuit, color: "text-pink-400" },
              { title: "DB", skills: ["MongoDB", "MySQL","SQLite"], icon: Database, color: "text-orange-400" },
               { title: "Tools", skills: ["Git", "GCP", "AWS (EC2)", "VS Code",], icon: ToolCase, color: "text-red-400" },
            ].map((category, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="text-center pb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <category.icon className={category.color} size={32} />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (<div key={skillIndex} className="bg-slate-700/50 rounded-lg p-3 text-center"><span className="text-slate-200 font-medium">{skill}</span></div>))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
export default Skills;