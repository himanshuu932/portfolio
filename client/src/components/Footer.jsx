
import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit,FileText ,ToolCase } from 'lucide-react';

const  Footer =()=>{
     const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
         <footer className="py-16 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Seeking opportunities to leverage technical leadership and problem-solving skills in software development roles.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://linkedin.com/in/Himanshu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors p-3 bg-slate-800 rounded-full"><Linkedin size={24} /></a>
            <a href="https://github.com/himanshuu932" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors p-3 bg-slate-800 rounded-full"><Github size={24} /></a>
            <a href="mailto:himanshuu932@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors p-3 bg-slate-800 rounded-full"><Mail size={24} /></a>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">© 2025 Himanshu Upadhyay </p>
          </div>
        </div>
      </footer>
      
    );
}
export default Footer;