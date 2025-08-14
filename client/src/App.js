import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Code, Database, Server, Globe, Award, Trophy, Star, Briefcase, GraduationCap, Calendar, MapPin, Users, BrainCircuit } from 'lucide-react';

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
              <button onClick={() => scrollToSection("about")} className="text-slate-400 hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection("experience")} className="text-slate-400 hover:text-blue-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection("projects")} className="text-slate-400 hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection("skills")} className="text-slate-400 hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection("achievements")} className="text-slate-400 hover:text-blue-400 transition-colors">Achievements</button>
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
              Passionate about creating innovative web solutions with modern technologies. Experienced in leading development teams and delivering high-quality applications.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              <a href="mailto:himanshuu932@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
              <a href="https://linkedin.com/in/Himanshu" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="https://github.com/himanshuu932" className="text-slate-400 hover:text-blue-400 transition-colors"><Github size={24} /></a>
              <a href="tel:+918601346552" className="text-slate-400 hover:text-blue-400 transition-colors"><Phone size={24} /></a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => scrollToSection("projects")} className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">View Projects</button>
              <a href="/resume.pdf" download className="px-8 py-3 text-lg border border-slate-600 text-white hover:bg-slate-800 bg-transparent rounded-lg transition-colors flex items-center justify-center gap-2">
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-400 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-blue-400 mb-2">DAV PG College</p>
                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                    <div className="flex items-center gap-1"><Calendar size={16} /><span>2022 - 2025</span></div>
                    <div className="flex items-center gap-1"><MapPin size={16} /><span>Gorakhpur, UP</span></div>
                  </div>
                  <p className="text-slate-300">Focused on software development, data structures, algorithms, and modern web technologies.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Award className="text-blue-400 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Higher Secondary (12th)</h3>
                  <p className="text-blue-400 mb-2">Intermediate College</p>
                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                    <div className="flex items-center gap-1"><Calendar size={16} /><span>2020 - 2022</span></div>
                    <div className="flex items-center gap-1"><MapPin size={16} /><span>Gorakhpur, UP</span></div>
                  </div>
                  <p className="text-slate-300">Science stream with Mathematics, Physics, and Chemistry. Strong foundation in analytical thinking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 h-full">
                <p className="text-lg leading-relaxed text-slate-300 mb-6">
                  I'm a passionate Full Stack Developer with a strong foundation in computer science and hands-on experience in building scalable web applications. My journey in technology started during my BCA studies, where I discovered my love for problem-solving and creating innovative solutions.
                </p>
                <p className="text-lg leading-relaxed text-slate-300 mb-6">
                  With expertise in modern web technologies like React, Node.js, and MongoDB, I've successfully led development teams and delivered complex projects from conception to deployment. I believe in writing clean, maintainable code and following best practices.
                </p>
                <p className="text-slate-400">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring fellow developers. I'm always excited to take on new challenges and collaborate on innovative projects.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Code, title: "Clean Code", desc: "Writing maintainable and scalable solutions", color: "text-green-400" },
                { icon: Users, title: "Team Leadership", desc: "Guiding teams to deliver exceptional results", color: "text-blue-400" },
                { icon: Server, title: "Full Stack", desc: "End-to-end application development", color: "text-purple-400" },
                { icon: Globe, title: "Innovation", desc: "Staying ahead with latest technologies", color: "text-orange-400" },
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <item.icon className={item.color} size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Experience</h2>
          <div className="relative border-l-2 border-slate-700/50 ml-3">
            {[
              {
                title: "Team Lead & Full Stack Developer",
                company: "Nagar Nigam Gorakhpur",
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
                    "Implemented a responsive frontend using React and Tailwind CSS, ensuring cross-device compatibility.",
                    "Built RESTful backend services with Node.js, Express, and MongoDB for dynamic content management."
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Numbr", description: "Revolutionary mobile app for barber shop queue management with real-time WebSocket updates and user-friendly interface.", tech: ["React Native", "Node.js", "WebSockets", "MongoDB"], icon: Star, featured: true },
              { title: "Peek-PDF", description: "AI-powered PDF management system with intelligent chatbot for content querying and document analysis.", tech: ["React", "Express", "AI Integration", "Document Processing"], icon: Database, featured: true },
              { title: "Sewa Bharti", description: "Modern donation platform with secure QR code integration and campaign showcase for NGO operations.", tech: ["React", "Payment Integration", "QR Codes"], icon: Trophy, featured: false },
            ].map((project, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-600/20 p-2 rounded-lg"><project.icon className="text-blue-400" size={24} /></div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.featured && (<span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Featured</span>)}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (<span key={techIndex} className="border border-blue-500/50 text-blue-300 px-2 py-1 rounded text-sm">{tech}</span>))}
                  </div>
                  <div className="flex gap-3">
                    <button className="border border-slate-600 hover:bg-slate-700 bg-transparent px-3 py-1 rounded text-sm flex items-center gap-2"><Github size={16} />Code</button>
                    <button className="border border-slate-600 hover:bg-slate-700 bg-transparent px-3 py-1 rounded text-sm flex items-center gap-2"><ExternalLink size={16} />Demo</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section -- UPDATED */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Languages", skills: ["Java", "Python", "JavaScript", "C++", "SQL"], icon: Code, color: "text-green-400" },
              { title: "Frontend", skills: ["React", "React Native", "HTML/CSS", "Tailwind"], icon: Globe, color: "text-blue-400" },
              { title: "Backend", skills: ["Node.js", "Express", "Flask", "REST API"], icon: Server, color: "text-purple-400" },
              { title: "AI/ML", skills: ["OpenCV", "Pandas", "Matplotlib", "Rasterio", "Generative AI"], icon: BrainCircuit, color: "text-pink-400" },
              { title: "Tools & DB", skills: ["Git", "GCP", "AWS (EC2)", "VS Code", "MongoDB", "MySQL"], icon: Database, color: "text-orange-400" },
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

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Achievements & Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Team Leadership", desc: "Successfully led multiple development teams with 100% project completion rate", icon: Award, metric: "6+ Projects" },
              { title: "Technical Excellence", desc: "Delivered high-quality applications using modern technologies and best practices", icon: Trophy, metric: "3+ Years" },
              { title: "Innovation", desc: "Created cutting-edge solutions for complex business problems and user needs", icon: Star, metric: "10+ Solutions" },
            ].map((achievement, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><achievement.icon className="text-blue-400" size={32} /></div>
                <div className="text-2xl font-bold text-blue-400 mb-2">{achievement.metric}</div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-slate-400 leading-relaxed">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-slate-400 mb-8 text-lg">Ready to collaborate on your next project? I'm always excited to work on innovative solutions.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://linkedin.com/in/Himanshu" className="text-slate-400 hover:text-blue-400 transition-colors p-3 bg-slate-800 rounded-full"><Linkedin size={24} /></a>
            <a href="https://github.com/himanshuu932" className="text-slate-400 hover:text-blue-400 transition-colors p-3 bg-slate-800 rounded-full"><Github size={24} /></a>
            <a href="mailto:himanshuu932@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors p-3 bg-slate-800 rounded-full"><Mail size={24} /></a>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">© 2025 Himanshu Upadhyay • Full Stack Developer • Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;