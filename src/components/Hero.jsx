import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Award } from 'lucide-react'
import profilePhoto from '../public/profile.jpg'
import resumePdf from '../public/Maheshwari_Portfolio_Resume.pdf'

export default function Hero({ darkMode }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse duration-[8000ms]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tag / Status badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Available for Full-time Roles</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Maheshwari S</span>
            </motion.h1>

            {/* Role Header */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`font-display font-bold text-2xl sm:text-3xl mt-4 ${
                darkMode ? 'text-slate-350' : 'text-slate-755'
              }`}
            >
              Full Stack Developer
            </motion.h2>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`mt-6 text-lg max-w-xl leading-relaxed mx-auto lg:mx-0 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              I build scalable, secure and user-centric web applications using the MERN stack. Motivated B.Tech IT graduate with hands-on project experience in AI systems, biometric security, and real-world full stack development.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#projects" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium shadow-lg hover:shadow-indigo-500/25 transition-all group"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href={resumePdf}
                download="Maheshwari_S_Resume.pdf"
                className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border font-medium transition-all ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-850 hover:border-slate-700 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-indigo-600'
                }`}
              >
                <Download size={18} className="mr-2" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-6 text-slate-500"
            >
              <a 
                href="https://github.com/Maheshwari0065" 
                target="_blank" 
                rel="noreferrer" 
                className={`transition-colors ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'}`}
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://linkedin.com/in/maheshwari--s" 
                target="_blank" 
                rel="noreferrer" 
                className={`transition-colors ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'}`}
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </motion.div>

          </div>

          {/* Hero Right Content (Interactive Tech Visualizer) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85"
            >
              {/* Outer decorative spinning ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/30 animate-[spin_40s_linear_infinite]" />
              
              {/* Inner gradient glowing orb */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 blur-[10px] animate-pulse" />

              {/* Beautiful Rounded Portrait Frame */}
              <div className={`absolute inset-4 rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <img 
                  src={profilePhoto} 
                  alt="Maheshwari S" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Fallback stylized initials avatar */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-700 via-indigo-600 to-cyan-500 text-white font-display font-extrabold text-5xl select-none -z-10">
                  <span>MS</span>
                  <span className="text-xs font-medium tracking-widest uppercase mt-3 text-indigo-200">Maheshwari S</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
