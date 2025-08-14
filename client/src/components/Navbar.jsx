import React, { useState } from 'react'; // 1. Import useState
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit, FileText, ToolCase, Menu, X } from 'lucide-react'; // 2. Import Menu and X icons

const Navbar = () => {
  // 3. Add state to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-400">Himanshu Upadhyay</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection("experience")} className="text-slate-400 hover:text-blue-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection("projects")} className="text-slate-400 hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection("skills")} className="text-slate-400 hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection("achievements")} className="text-slate-400 hover:text-blue-400 transition-colors">Achievements</button>
            <button onClick={() => scrollToSection("certifications")} className="text-slate-400 hover:text-blue-400 transition-colors">Certifications</button>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection("experience")} className="text-slate-400 hover:text-blue-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection("projects")} className="text-slate-400 hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection("skills")} className="text-slate-400 hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection("achievements")} className="text-slate-400 hover:text-blue-400 transition-colors">Achievements</button>
            <button onClick={() => scrollToSection("certifications")} className="text-slate-400 hover:text-blue-400 transition-colors">Certifications</button>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;