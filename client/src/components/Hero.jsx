import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit, FileText, ToolCase } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-1 lg:order-2">
                    <div className="w-[360px] h-[360px] md:w-[420px] md:h-[420px] mx-auto rounded-full border-4 border-blue-400/20 overflow-hidden flex items-center justify-center bg-slate-800">
                        <img
                            src="/me.jpg"
                            alt="Himanshu Upadhyay"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                </div>
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Himanshu Upadhyay</h1>
                    <p className="text-2xl md:text-3xl text-blue-400 mb-6">I am an Engineer</p>
                    <p className="text-lg text-justify text-slate-300 mb-8 leading-relaxed">
                        Results-driven developer with a strong grasp of data structures, algorithms, and OOP. Proven ability to lead technical teams in delivering complex web applications using React, Node.js, and MongoDB.
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
                        <a href="mailto:himanshuu92@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
                        <a href="https://linkedin.com/in/Himanshu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
                        <a href="https://github.com/himanshuu92" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Github size={24} /></a>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button onClick={() => scrollToSection("projects")} className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">View Projects</button>
                        <a href="/HimanshuUpadhyayMMMUT.pdf" download="HimanshuUpadhyay-Resume.pdf" className="px-8 py-3 text-lg border border-slate-600 text-white hover:bg-slate-800 bg-transparent rounded-lg transition-colors flex items-center justify-center gap-2">
                            <Download size={20} /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;