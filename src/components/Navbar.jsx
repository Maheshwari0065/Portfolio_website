import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-4 shadow-lg' : 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-md'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <span className="font-display font-bold text-xl tracking-tight">
              Maheshwari<span className="text-indigo-500">.S</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-indigo-500 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-850 hover:border-slate-700' 
                  : 'bg-white border-slate-200 text-indigo-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg border transition-all ${
                darkMode 
                  ? 'bg-slate-900 border-slate-850 text-amber-400' 
                  : 'bg-white border-slate-200 text-indigo-600'
              }`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-slate-900 text-slate-400' : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
      }`}>
        <div className={`px-4 pt-2 pb-6 space-y-2 border-b shadow-xl ${
          darkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3.5 rounded-xl text-base font-medium transition-all ${
                darkMode 
                  ? 'text-slate-350 hover:bg-slate-900 hover:text-white' 
                  : 'text-slate-650 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
