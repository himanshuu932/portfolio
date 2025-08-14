
import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit,FileText ,ToolCase } from 'lucide-react';

const  Experience =()=>{
     const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
         <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Internship Experience</h2>
          <div className="relative border-l-2 border-slate-700/50 ml-3">
            {[
              {
                title: "Team Lead & Full Stack Developer",
                company: "Nagar Nigam Gorakhpur (Dog Licensing System)",
                period: "May 2025 – Present",
                description: [
                    "Led a team to build a dog licensing system covering registration, renewals, and certificate issuance.",
                    "Developed client-facing and admin panels with React (frontend) and Node.js + MongoDB (backend).",
                    "Ensured pixel-perfect alignment of views, robust API endpoints, and secure data workflows."
                ],
              },
              {
                title: "Project Lead & Full Stack Developer",
                company: "DAV PG College Official Website",
                period: "Mar 2025 – May 2025",
                description: [
                    "Led a team of six to design and develop the official website for DAV PG College Gorakhpur.",
                    "Implemented responsive frontend using React and Tailwind CSS, ensuring cross-device compatibility building reusable UI components following modular design practices.",
                    "Built RESTful backend services with Node.js, Express, and MongoDB for dynamic content management.",
                    "Integrated a custom CMS dashboard for administrative staff to update news, events, and faculty profiles."
                ],
              },
            ].map((exp, index) => (
              <div key={index} className="relative pl-12 pb-12 last:pb-0">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-slate-900 border-2 border-blue-400 rounded-full flex items-center justify-center">
                    <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                    <p className="text-sm text-slate-400 mb-1">{exp.period}</p>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-lg text-blue-400 mb-4">{exp.company}</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-300">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
export default Experience;