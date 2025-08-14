
import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit,FileText ,ToolCase } from 'lucide-react';

const  Certifications =()=>{
     const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
       <section id="certifications" className="py-20 px-6 bg-slate-900/60">
               <div className="max-w-6xl mx-auto">
                 <h2 className="text-4xl font-bold text-center mb-16 text-white">Certifications</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                   {[
                     { icon: FileText, text: "Google Cloud Skills Boost", link: "https://www.credly.com/users/himanshu-upadhyay.06916fac" },
                     { icon: FileText, text: "IBM Skills Build", link: "https://www.credly.com/badges/03acac60-4daf-492c-936a-365bc2dcd343/public_url" },
                   ].map((cert, index) => (
                     <a href={cert.link} target="_blank" key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex items-center gap-4 hover:bg-slate-800/70 transition-colors">
                       <cert.icon className="text-blue-400 flex-shrink-0" size={32} />
                       <span className="text-slate-200 font-semibold text-lg">{cert.text}</span>
                       <ExternalLink className="ml-auto text-slate-500" size={20}/>
                     </a>
                   ))}
                 </div>
               </div>
             </section>
    );
}
export default Certifications;