import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Eye, Calendar, Linkedin, Share2, ChevronLeft, ChevronRight, Check } from 'lucide-react';

// Image Carousel Component
const ImageCarousel = ({ images, projectName, className = "", contain = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return <img src={images[0]} alt={`${projectName} preview`} className={`w-full h-full ${contain ? 'object-contain' : 'object-cover'} ${className}`} />;
    }

    return (
        <div className="relative w-full h-full">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`${projectName} preview ${index + 1}`}
                    className={`absolute inset-0 w-full h-full ${contain ? 'object-contain' : 'object-cover'} transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
            {/* Navigation Arrows */}
            <button
                onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 rounded-full hover:bg-black/70 transition-all z-10"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 rounded-full hover:bg-black/70 transition-all z-10"
                aria-label="Next image"
            >
                <ChevronRight className="w-5 h-5 text-white" />
            </button>
            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const projects = [
    // --- Top Tier: Official & High-Impact Projects ---
    {
        id: 0,
        slug: "dog-registration",
        name: "DOG Registration Portal",
        url: "https://dog-registration.vercel.app/",
        postLink: null,
        description: "An official government services portal for Nagar Nigam Gorakhpur to register pets, manage vaccination records, and view owner details.",
        images: ["https://picsum.photos/id/237/800/600"],
        technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
        completedDate: "2025-06-05",
        category: "Government Services",
    },
    {
        id: 7,
        slug: "kalyan-mandapam",
        name: "Kalyan Mandapam Portal",
        url: "https://kalyan-mandapam.vercel.app/",
        postLink: null,
        description: "Online portal for booking and managing Kalyan Mandapam services, including event scheduling and payment processing.",
        images: ["https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=400&h=200&fit=crop"],
        technologies: ["React.js", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        completedDate: "2025-05-15",
        category: "Government Services"
    },
    {
        id: 1,
        slug: "dav-pg-college",
        name: "DAV PG College Website",
        url: "https://www.davpgcollegegkp.ac.in/",
        postLink: null,
        description: "The official, responsive website for DAV PG College, featuring a custom CMS for easy content management by staff.",
        images: ["https://picsum.photos/id/24/800/600"],
        technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
        completedDate: "2025-04-28",
        category: "Education",
    },
    {
        id: 10,
        slug: "hillriders-ngo",
        name: "HillRiders NGO Website",
        url: "https://hillridersmanavsewasamiti.vercel.app",
        postLink: null,
        description: "Official website for the HillRiders Manav Sewa Samiti NGO, showcasing their mission, initiatives, and community work.",
        images: ["https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=200&fit=crop"],
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        completedDate: "2025-07-15",
        category: "Charity"
    },

    // --- Second Tier: Advanced & Innovative Technology ---
    {
        id: 3,
        slug: "pothole-detection",
        name: "Pothole Detection",
        url: "https://road-lgct.onrender.com",
        postLink: "https://www.linkedin.com/posts/himanshu-upadhyay-2309a1298_aiforgood-yolov8-deeplearning-activity-7359199150917197824-vCPu",
        description: "A web-based tool utilizing computer vision to detect and classify road anomalies like potholes from uploaded images.",
        images: ["/road.png"],
        technologies: ["OpenCV", "Flask", "Python", "YOLOv8"],
        completedDate: "2024-11-20",
        category: "AI/ML"
    },
    {
        id: 12,
        slug: "wildfire-prediction",
        name: "𝗔𝗜-𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗪𝗶𝗹𝗱𝗳𝗶𝗿𝗲 𝗣𝗿𝗲𝗱𝗶𝗰𝘁𝗶𝗼𝗻 & 𝗦𝗶𝗺𝘂𝗹𝗮𝘁𝗶𝗼𝗻 𝗦𝘆𝘀𝘁𝗲𝗺",
        url: null,
        postLink: "https://www.linkedin.com/posts/himanshu-upadhyay-2309a1298_bharatiyaantarikshhackathon-isro-geospatialai-activity-7397224454512103424-Bfel?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgMngQB_oU5C_QaWRCL2aCTwEAr8HkYgcA",
        description: "An AI-driven system developed for ISRO's Bharatiya Antariksh Hackathon to predict and simulate wildfire spread using geospatial data.",
        images: ["/fire.png"],
        technologies: ["Python", "PyTorch", "Rasterio", "GDAL", "NumPy", "Matplotlib", "Scikit-learn"],
        completedDate: "2024-9-20",
        category: "AI/ML"
    },
    {
        id: 2,
        slug: "peek-pdf",
        name: "Peek PDF",
        url: "https://peek-pdf.netlify.app/",
        postLink: null,
        description: "A powerful document management system with an AI chatbot to query PDF content using natural language.",
        images: ["https://picsum.photos/id/1/800/600"],
        technologies: ["React", "GenAI", "Node.js", "Express"],
        completedDate: "2025-02-10",
        category: "Business"
    },

    // --- Third Tier: Full-Stack Applications & Mobile ---
    {
        id: 13,
        slug: "daily-need-app",
        name: "Daily Need App",
        url: null,
        postLink: null,
        description: "A grocery/general store e-commerce mobile app built with Expo React Native and Express.js + MongoDB backend. Features product browsing, shopping cart, order tracking, and Firebase authentication.",
        images: [
            "/dailyneed-logo.png",
            "/dailyneed-home.jpg",
            "/dailyneed-categories.jpg",
            "/dailyneed-cart.jpg",
            "/dailyneed-orders.jpg",
            "/dailyneed-profile.jpg"
        ],
        technologies: ["React-Native", "Expo", "Node.js", "Express.js", "MongoDB", "Firebase"],
        completedDate: "2025-08-01",
        category: "Mobile App"
    },
    {
        id: 11,
        slug: "numbr-barber",
        name: "Numbr - Barber Shop App",
        url: null,
        postLink: "https://play.google.com/store/apps/details?id=com.x2023021235.barber&pcampaignid=web_share",
        description: "A mobile application for barber shops to manage appointments and services, available on the Google Play Store.",
        images: ["/numbr.png"],
        technologies: ["React-Native", "CSS", "Firebase"],
        completedDate: "2025-09-10",
        category: "Mobile App"
    },
    {
        id: 4,
        slug: "bandhan",
        name: "Bandhan",
        url: null,
        postLink: "https://www.linkedin.com/posts/himanshu-upadhyay-2309a1298_rakshabandhan-familysafety-bandhanapp-activity-7359875721277685760-RSiE",
        description: "A React Native mobile application designed for families to keep track of each other's location, with offline-first capabilities.",
        images: ["/bandhan.jpg"],
        technologies: ["React-Native", "CSS"],
        completedDate: "2024-09-15",
        category: "Mobile App"
    },
    {
        id: 9,
        slug: "fitflow",
        name: "FitFlow",
        url: "https://rudraashwi-workout.vercel.app/",
        postLink: null,
        description: "A web application for tracking workouts and fitness progress, helping users stay motivated and achieve their goals.",
        images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"],
        technologies: ["React", "Tailwind", "Firebase"],
        completedDate: "2025-08-20",
        category: "Health & Fitness"
    },
    {
        id: 8,
        slug: "teachease",
        name: "TeachEase",
        url: "https://teach-ease.netlify.app/",
        postLink: null,
        description: "A comprehensive education platform for students and teachers, offering course management, assignments, and communication tools.",
        images: ["https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop"],
        technologies: ["React.js", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        completedDate: "2024-11-05",
        category: "Education"
    },
    {
        id: 6,
        slug: "sewa-bharat",
        name: "Sewa Bharat Goraksh",
        url: "https://sewabharatigoraksh.org/",
        postLink: null,
        description: "Website for a non-profit, showcasing their community services and initiatives, and featuring a donation portal.",
        images: ["https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&h=200&fit=crop"],
        technologies: ["React", "CSS"],
        completedDate: "2025-01-15",
        category: "Charity"
    },

    // --- Fourth Tier: Developer-Focused Projects ---
    {
        id: 5,
        slug: "cix",
        name: "CIX",
        url: null,
        postLink: null,
        description: "A utility tool designed to help developers quickly create and customize boilerplate for React components and div structures.",
        images: ["/cix.png"],
        technologies: ["JavaScript", "Reactjs", "CSS"],
        completedDate: "2024-07-30",
        category: "Developer Tool"
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [previewErrors, setPreviewErrors] = useState(new Set());
    const [copiedSlug, setCopiedSlug] = useState(null);
    const projectRefs = useRef({});

    // Handle URL hash on mount and hash change
    useEffect(() => {
        const scrollToProject = () => {
            const hash = window.location.hash.replace('#project-', '');
            if (hash) {
                const project = projects.find(p => p.slug === hash);
                if (project && projectRefs.current[project.slug]) {
                    setTimeout(() => {
                        projectRefs.current[project.slug].scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                        // Add highlight effect
                        projectRefs.current[project.slug].classList.add('ring-2', 'ring-blue-500', 'ring-offset-2', 'ring-offset-slate-900');
                        setTimeout(() => {
                            projectRefs.current[project.slug]?.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2', 'ring-offset-slate-900');
                        }, 2000);
                    }, 300);
                }
            }
        };

        scrollToProject();
        window.addEventListener('hashchange', scrollToProject);
        return () => window.removeEventListener('hashchange', scrollToProject);
    }, []);

    const handlePreviewError = (projectId) => {
        setPreviewErrors(prev => new Set(prev).add(projectId));
    };

    const handleShare = async (e, project) => {
        e.stopPropagation();
        const url = `${window.location.origin}${window.location.pathname}#project-${project.slug}`;

        try {
            await navigator.clipboard.writeText(url);
            setCopiedSlug(project.slug);
            setTimeout(() => setCopiedSlug(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
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
            'Charity': '#f472b6',
            'Health & Fitness': '#22d3ee',
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
                        <div
                            key={project.id}
                            ref={(el) => projectRefs.current[project.slug] = el}
                            id={`project-${project.slug}`}
                            className="group relative bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2"
                        >

                            {/* Conditional Preview Container */}
                            <div className="relative h-56 bg-slate-900 overflow-hidden">
                                {project.url && !previewErrors.has(project.id) ? (
                                    <iframe
                                        src={project.url}
                                        className="w-full h-full absolute inset-0 transform scale-50 origin-top-left"
                                        style={{ width: '200%', height: '200%', pointerEvents: 'none' }}
                                        title={`Preview of ${project.name}`}
                                        onError={() => handlePreviewError(project.id)}
                                        loading="lazy"
                                    />
                                ) : (
                                    <ImageCarousel images={project.images} projectName={project.name} />
                                )}

                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                                            aria-label="View Details"
                                        >
                                            <Eye className="w-6 h-6 text-white" />
                                        </button>

                                        {/* Share Button */}
                                        <button
                                            onClick={(e) => handleShare(e, project)}
                                            className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all relative"
                                            aria-label="Share Project"
                                        >
                                            {copiedSlug === project.slug ? (
                                                <Check className="w-6 h-6 text-green-400" />
                                            ) : (
                                                <Share2 className="w-6 h-6 text-white" />
                                            )}
                                        </button>

                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                                                aria-label="Visit Live Site"
                                            >
                                                <ExternalLink className="w-6 h-6 text-white" />
                                            </a>
                                        )}
                                        {project.postLink && (
                                            <a
                                                href={project.postLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                                                aria-label="View LinkedIn Post"
                                            >
                                                <Linkedin className="w-6 h-6 text-white" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-white pr-4">{project.name}</h3>
                                    <span
                                        className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                                        style={{ backgroundColor: `${getCategoryColor(project.category)}20`, color: getCategoryColor(project.category) }}
                                    >
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm mb-4 h-16 line-clamp-3">{project.description}</p>
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

            {/* --- MODAL WITH CAROUSEL SUPPORT --- */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
                    style={{ animation: 'fade-in 0.3s ease-out forwards' }}
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-slate-900 border border-slate-700 rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={(e) => handleShare(e, selectedProject)}
                                    className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all"
                                    aria-label="Share Project"
                                >
                                    {copiedSlug === selectedProject.slug ? (
                                        <Check className="w-5 h-5 text-green-400" />
                                    ) : (
                                        <Share2 className="w-5 h-5 text-slate-300" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-slate-400 hover:text-white text-3xl leading-none"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                        <div className="overflow-y-auto p-6">
                            {selectedProject.url ? (
                                <div className="relative h-96 bg-slate-800 rounded-lg overflow-hidden mb-6">
                                    <iframe
                                        src={selectedProject.url}
                                        className="w-full h-full"
                                        title={`Large preview of ${selectedProject.name}`}
                                    />
                                </div>
                            ) : (
                                <div className="relative h-96 bg-slate-800 rounded-lg overflow-hidden mb-6">
                                    <ImageCarousel images={selectedProject.images} projectName={selectedProject.name} contain={true} />
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
                        <div className="p-6 border-t border-slate-700 bg-slate-900/50 flex justify-center gap-4 flex-wrap">
                            {selectedProject.url && (
                                <a
                                    href={selectedProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    <span>Visit Live Site</span>
                                </a>
                            )}
                            {selectedProject.postLink && (
                                <a
                                    href={selectedProject.postLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-lg font-medium text-white transition-colors"
                                >
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