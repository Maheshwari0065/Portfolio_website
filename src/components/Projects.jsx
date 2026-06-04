import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ShieldCheck, HeartPulse, Landmark, Hand, Eye, Camera, Clock, Globe } from 'lucide-react'

export default function Projects({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: 'SecureBank – Biometric Auth System',
      category: 'web',
      icon: <ShieldCheck size={20} className="text-indigo-400" />,
      description: 'A full-stack corporate banking portal with continuous biometric authentication using typing rhythm, keypress duration, and mouse dynamics for real-time session anomaly detection.',
      highlights: [
        'Integrated One-Class SVM for session profiling and anomaly detection.',
        'Implemented dual-factor authentication via Google Authenticator and JWT.'
      ],
      tech: ['React.js', 'Flask', 'Microsoft SQL Server', 'One-Class SVM', 'JWT'],
      github: 'https://github.com/Maheshwari0065/SecureBank-Cont_Auth_system',
      demo: null,
    },
    {
      id: 2,
      title: 'MediBot – AI Healthcare Assistant',
      category: 'web',
      icon: <HeartPulse size={20} className="text-rose-400" />,
      description: 'An AI-powered healthcare assistant platform with Google Gemini API for real-time symptom screening, prescription parsing, and voice-based interaction.',
      highlights: [
        'Integrated Web Speech API for voice input and speech synthesis.',
        'Secured with Role-Based Access Control and WebSocket communications.'
      ],
      tech: ['React 19', 'Node.js', 'PostgreSQL', 'Socket.io', 'Gemini API'],
      github: 'https://github.com/Maheshwari0065/Healthcare_chatbot',
      demo: null,
    },
    {
      id: 3,
      title: 'Expense Management Platform',
      category: 'web',
      icon: <Landmark size={20} className="text-emerald-400" />,
      description: 'A full-stack expense tracking application for splitting bills, monitoring monthly category spending, and securing transaction histories with JWT authentication.',
      highlights: [
        'Engineered fast RESTful API endpoints for secure expense logs.',
        'Designed interactive dashboards with category breakdown statistics.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'Microsoft SQL Server', 'REST APIs'],
      github: 'https://github.com/Maheshwari0065/Expense_Manager',
      demo: null,
    },
    {
      id: 4,
      title: 'AirSketch – AI Touchless Drawing',
      category: 'ai',
      icon: <Hand size={20} className="text-purple-400" />,
      description: 'A real-time gesture-based drawing application that enables users to draw in the air without physical contact using hand tracking and an interactive canvas.',
      highlights: [
        'Real-time hand gesture recognition at 30+ FPS using 21 landmark detection.',
        'Adaptive line smoothing, brush size control, and image saving features.'
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      github: 'https://github.com/Maheshwari0065/Air_Sketch',
      demo: null,
    },
    {
      id: 5,
      title: 'Emotion Detection System',
      category: 'ai',
      icon: <Eye size={20} className="text-amber-400" />,
      description: 'Real-time face, eye, and basic emotion detection with OpenCV, featuring color-coded visualization and simple emotion classification from a live webcam feed.',
      highlights: [
        'Detects face and eye regions using pre-trained Haar Cascade classifiers.',
        'Color-coded bounding boxes for visual emotion classification indicators.'
      ],
      tech: ['Python', 'OpenCV', 'NumPy'],
      github: 'https://github.com/Maheshwari0065/Emotion_detection',
      demo: null,
    },
    {
      id: 6,
      title: 'Face Detection System',
      category: 'ai',
      icon: <Camera size={20} className="text-cyan-400" />,
      description: "Real-time face detection using OpenCV's Haar Cascade classifier with a live webcam feed and snapshot saving functionality.",
      highlights: [
        'Live face detection on webcam stream with high accuracy.',
        'Snapshot capture and save functionality for detected frames.'
      ],
      tech: ['Python', 'OpenCV'],
      github: 'https://github.com/Maheshwari0065/Face_Detection',
      demo: null,
    },
    {
      id: 7,
      title: 'Personal Portfolio Website',
      category: 'web',
      icon: <Globe size={20} className="text-indigo-400" />,
      description: 'A modern, fully responsive personal portfolio website built to showcase projects, skills, experience, and certifications to recruiters and collaborators.',
      highlights: [
        'Dark/light mode toggle with smooth transitions and glassmorphic UI.',
        'Project filtering, animated skill tags, vertical experience timeline, and contact form.'
      ],
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/Maheshwari0065',
      demo: null,
    }
  ]

  const [filter, setFilter] = useState('all')

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true
    return project.category === filter
  })

  const DemoButton = ({ demo, github }) => {
    if (demo === 'local') {
      return (
        <span className={`flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-semibold border cursor-default ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'
        }`}>
          <Clock size={13} />
          <span>Runs Locally</span>
        </span>
      )
    }
    if (!demo) {
      return (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={`flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
            darkMode ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30' : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-300'
          }`}
        >
          <Clock size={13} />
          <span>Deploy Soon</span>
        </a>
      )
    }
    return (
      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-all"
      >
        <ExternalLink size={13} />
        <span>Live Demo</span>
      </a>
    )
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Featured <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web Applications' },
            { id: 'ai', label: 'AI & Vision' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${
                filter === tab.id
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                  : darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-indigo-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  darkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                    : 'bg-white border-slate-100 shadow-sm hover:border-slate-200'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-4">
                    <div className={`p-2.5 rounded-xl ${darkMode ? 'bg-slate-950/80' : 'bg-slate-50'}`}>
                      {project.icon}
                    </div>
                    <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/10 text-indigo-500">
                      {project.category === 'ai' ? 'AI' : 'Web App'}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg tracking-tight mb-2">
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-[11px] leading-relaxed">
                        <span className="h-1 w-1 rounded-full bg-slate-500 mt-1.5 mr-2 shrink-0" />
                        <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[9px] font-semibold px-2 py-1 rounded border ${
                          darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-300'
                      }`}
                    >
                      <Github size={14} />
                      <span>View Code</span>
                    </a>
                    <DemoButton demo={project.demo} github={project.github} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  )
}
