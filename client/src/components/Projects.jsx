import React, { useState } from 'react';
// Ensure you have these icons imported in your main App.js file
import { ExternalLink, Eye, Calendar, Linkedin } from 'lucide-react';


const projects = [
     {
    id: 0,
      name: "Sewa Bharat Goraksh",
      url: "https://sewabharatigoraksh.org/",
      postLink: null,
      description: "Website for Sewa Bharat Goraksh, showcasing their services and initiatives in the community along with a donation portal for supporting their cause",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
      technologies: ["React", "CSS"],
      completedDate: "2025-01-15",
      category: "Charity"
     },
  {
    id: 1,
    name: "DOG Registration Portal",
    url: "https://dog-registration.vercel.app/",
    postLink: null,
    description: "An official government services portal for Nagar Nigam Gorakhpur to register pets, manage vaccination records, and view owner details.",
    image: "https://picsum.photos/id/237/800/600", // <-- REPLACE THIS
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    completedDate: "2025-06-05",
    category: "Government Services",
  },
  {
    id: 2,
    name: "Peek PDF",
    url: "https://peek-pdf.netlify.app/",
    postLink: null,
    description: "A powerful document management system with an AI chatbot to query PDF content using natural language.",
    image: "https://picsum.photos/id/1/800/600", 
    technologies: ["React", "GenAI", "Node.js", "Express"],
    completedDate: "2025-02-10",
    category: "Business"
  },
  {
    id: 3,
    name: "Road Detection",
    url: null,
    postLink: "https://www.linkedin.com/posts/himanshu-upadhyay-2309a1298_aiforgood-yolov8-deeplearning-activity-7359199150917197824-vCPu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgMngQB_oU5C_QaWRCL2aCTwEAr8HkYgcA",
    description: "A web-based tool utilizing computer vision to detect and classify road anomalies like potholes from uploaded images.",
    image: "/road.png", 
    technologies: ["OpenCV", "Flask"," Python", "pandas", "NumPy","YOLOv8"],
    completedDate: "2024-11-20",
    category: "AI/ML"
  },
  {
    id: 4,
    name: "Bandhan",
    url: null, 
    postLink: "https://www.linkedin.com/posts/himanshu-upadhyay-2309a1298_rakshabandhan-familysafety-bandhanapp-activity-7359875721277685760-RSiE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgMngQB_oU5C_QaWRCL2aCTwEAr8HkYgcA", // <-- REPLACE THIS
    description: "A React Native mobile application designed for families to keep track of each other's location, with offline-first capabilities.",
    image: "/bandhan.jpg", // <-- REPLACE THIS
    technologies: ["React-Native", "CSS"],
    completedDate: "2024-09-15",
    category: "Mobile App"
  },
  {
    id: 5,
    name: "CIX",
    url: null, 
    postLink: null, // <-- REPLACE THIS
    description: "A utility tool designed to help developers quickly create and customize boilerplate for React components and div structures.",
    image: "/cix.png", // <-- REPLACE THIS
    technologies: ["JavaScript", "Reactjs", "CSS"],
    completedDate: "2024-07-30",
    category: "Developer Tool"
  },
  {
    id: 6,
    name: "DAV PG College Website",
    url: "https://www.davpgcollegegkp.ac.in/",
    postLink: null,
    description: "The official, responsive website for DAV PG College, featuring a custom CMS for easy content management by staff.",
    image: "https://picsum.photos/id/24/800/600", // <-- REPLACE THIS
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    completedDate: "2025-04-28",
    category: "Education",
  },
      {
      id: 7,
      name: "Kalyan Mandapam Portal",
      url: "https://kalyan-mandapam.vercel.app/",
      postLink: null,
      description: "Online portal for booking and managing Kalyan Mandapam services, including event scheduling and payment processing",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      technologies: ["React.js", "CSS", "Tailwind"," Node.js", "Express.js", "MongoDB"],
      completedDate: "2025-05-15",
      category: "Government Services"
    },
      {
      id: 8,
      name: "TeachEase",
      url: "https://teach-ease.netlify.app/",
      postLink: null,
      description: "A comprehensive education platform for students and teachers, offering course management, assignments, and communication tools",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      technologies: ["React.js", "CSS", "Tailwind"," Node.js", "Express.js", "MongoDB"],
      completedDate: "2024-11-05",
      category: "Education"
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [previewErrors, setPreviewErrors] = useState(new Set());

    const handlePreviewError = (projectId) => {
        setPreviewErrors(prev => new Set(prev).add(projectId));
    };
    
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            year: 'numeric', month: 'short', day: 'numeric'
        });
    };

    const getCategoryColor = (category) => {
      const colors = {
        'Government Services': '#ef4444',
        'Business': '#60a5fa',
        'AI/ML': '#34d399',
        'Mobile App': '#a78bfa',
        'Developer Tool': '#f59e0b',
        'Education': '#5eead4',
      };
      return colors[category] || '#60a5fa';
    };

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#60a5fa] mb-4">My Projects</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">Here are a few projects I've worked on recently.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2">
                           
                            {/* Conditional Preview Container */}
                            <div className="relative h-56 bg-slate-900 overflow-hidden">
                                {project.url ? (
                                    <>
                                        {previewErrors.has(project.id) ? (
                                            <img src={project.image} alt={`${project.name} preview`} className="w-full h-full object-cover" />
                                        ) : (
                                            <iframe src={project.url} className="w-full h-full absolute inset-0 transform scale-50 origin-top-left" style={{ width: '200%', height: '200%', pointerEvents: 'none' }} title={`Preview of ${project.name}`} onError={() => handlePreviewError(project.id)} loading="lazy" />
                                        )}
                                    </>
                                ) : (
                                    <img src={project.image} alt={`${project.name} preview`} className="w-full h-full object-cover" />
                                )}
                                
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="flex space-x-4">
                                        <button onClick={() => setSelectedProject(project)} className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all" aria-label="View Details"><Eye className="w-6 h-6 text-white" /></button>
                                        
                                        {/* --- UPDATED LINK LOGIC --- */}
                                        {project.url && (
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all" aria-label="Visit Live Site"><ExternalLink className="w-6 h-6 text-white" /></a>
                                        )}
                                        {project.postLink && (
                                            <a href={project.postLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all" aria-label="View LinkedIn Post"><Linkedin className="w-6 h-6 text-white" /></a>
                                        )}
                                    </div>
                                </div>
                            </div>

                           {/* Card Content */}
                           <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-white pr-4">{project.name}</h3>
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: `${getCategoryColor(project.category)}20`, color: getCategoryColor(project.category) }}>{project.category}</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-4 h-16">{project.description}</p>
                                <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-700 pt-4">
                                     <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{formatDate(project.completedDate)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MODAL WITH UPDATED BUTTON LOGIC --- */}
            {selectedProject && (
                 <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm" style={{ animation: 'fade-in 0.3s ease-out forwards' }}>
                    <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
                        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2>
                            <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-white text-3xl leading-none">&times;</button>
                        </div>
                        <div className="overflow-y-auto p-6">
                            {selectedProject.url ? (
                                <div className="relative h-96 bg-slate-800 rounded-lg overflow-hidden mb-6">
                                    <iframe src={selectedProject.url} className="w-full h-full" title={`Large preview of ${selectedProject.name}`} />
                                </div>
                            ) : (
                                 <div className="relative h-96 bg-slate-800 rounded-lg overflow-hidden mb-6">
                                    <img src={selectedProject.image} alt={`${selectedProject.name} preview`} className="w-full h-full object-cover" />
                                </div>
                            )}
                            <p className="text-slate-300 mb-6">{selectedProject.description}</p>
                            <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 text-blue-300 text-sm rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>
                         <div className="p-6 border-t border-slate-700 bg-slate-900/50 text-center">
                            {selectedProject.url && (
                                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                    <span>Visit Live Site</span>
                                </a>
                            )}
                            {selectedProject.postLink && (
                                <a href={selectedProject.postLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-lg font-medium text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                    <span>View Post on LinkedIn</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;