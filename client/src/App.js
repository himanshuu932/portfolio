import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit,FileText ,ToolCase } from 'lucide-react';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
     
     <Navbar/>
     <Hero/>
     <Education/> 
     <Experience />
     <Skills/>
     <Projects />
     <Achievements/>
     <Certifications />
     <Footer />
     </div>
  );
};

export default Portfolio;
