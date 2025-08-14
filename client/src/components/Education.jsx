
import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit,FileText ,ToolCase } from 'lucide-react';

const  Education =()=>{
     const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
       <section id="education" className="py-20 px-6 bg-slate-900/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Education</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-start gap-6">
                <GraduationCap className="text-blue-400 mt-1" size={40} />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Madan Mohan Malaviya University of Technology (MMMUT)</h3>
                  <p className="text-blue-400 text-lg mb-3">Bachelor of Technology in Computer Science and Engineering</p>
                  <div className="flex items-center gap-6 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} />
                      <span>CGPA: 8.45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    );
}
export default Education;