import React from 'react'
import { Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className={`border-t py-12 transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="flex items-center">
            <span className="text-xs font-semibold">
              © {new Date().getFullYear()} Maheshwari S. All Rights Reserved.
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <a
                href="https://github.com/Maheshwari0065"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors text-slate-500 ${darkMode ? 'hover:text-white' : 'hover:text-indigo-600'}`}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/maheshwari--s"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors text-slate-500 ${darkMode ? 'hover:text-white' : 'hover:text-indigo-600'}`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-850 hover:bg-slate-850 hover:border-slate-700 text-white'
                  : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 hover:text-indigo-650'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  )
}
