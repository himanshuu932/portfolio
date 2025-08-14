import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit,FileText ,ToolCase } from 'lucide-react';
import Projects from './Projects';
const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-400">Himanshu Upadhyay</h1>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection("experience")} className="text-slate-400 hover:text-blue-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection("projects")} className="text-slate-400 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection("skills")} className="text-slate-400 hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection("achievements")} className="text-slate-400 hover:text-blue-400 transition-colors">Achievements</button>
              <button onClick={() => scrollToSection("certifications")} className="text-slate-400 hover:text-blue-400 transition-colors">Certifications</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-2">
            <div className="w-80 h-80 mx-auto bg-slate-800 rounded-full border-4 border-blue-400/20 flex items-center justify-center">
              <img src="https://via.placeholder.com/300x300/1e293b/3b82f6?text=HU" alt="Himanshu Upadhyay" className="w-72 h-72 rounded-full object-cover" />
            </div>
          </div>
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Himanshu Upadhyay</h1>
            <p className="text-2xl md:text-3xl text-blue-400 mb-6">Full Stack Developer</p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Results-driven developer with a strong grasp of data structures, algorithms, and OOP. Proven ability to lead technical teams in delivering complex web applications using React, Node.js, and MongoDB.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              <a href="mailto:himanshuu932@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
              <a href="https://linkedin.com/in/Himanshu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="https://github.com/himanshuu932" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Github size={24} /></a>
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

      {/* Education Section */}
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
      
      {/* Experience Section */}
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
     

      {/* Projects Section */}
    <Projects />
      {/* Achievements Section */}
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

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: FileText, text: "Google Cloud Skills Boost", link: "#" },
              { icon: FileText, text: "IBM Skills Build", link: "#" },
            ].map((cert, index) => (
              <a href={cert.link} key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex items-center gap-4 hover:bg-slate-800/70 transition-colors">
                <cert.icon className="text-blue-400 flex-shrink-0" size={32} />
                <span className="text-slate-200 font-semibold text-lg">{cert.text}</span>
                <ExternalLink className="ml-auto text-slate-500" size={20}/>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <p className="text-slate-500">© 2025 Himanshu Upadhyay • Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
