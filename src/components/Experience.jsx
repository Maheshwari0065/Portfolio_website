import React from 'react'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience({ darkMode }) {
  const experiences = [
    {
      role: 'Full Stack Web Developer Intern',
      company: 'L&T Construction',
      period: 'Feb 2026 – May 2026',
      duration: '3 Months',
      location: 'Chennai, India',
      highlights: [
        'Developed full-stack applications using React.js, Django REST Framework, Python, and Microsoft SQL Server.',
        'Implemented Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) to secure corporate portals.'
      ]
    },
    {
      role: 'Full Stack Intern',
      company: 'OneYes Infotech Solutions',
      period: 'Jul 2025 – Aug 2025',
      duration: '1.5 Months',
      location: 'Chennai, India',
      highlights: [
        'Built and deployed full-stack web applications using HTML, CSS, JavaScript, and Node.js.',
        'Collaborated in real-time project teams contributing to frontend rendering performance optimization.'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'Prodigy InfoTech',
      period: 'Feb 2025 – Mar 2025',
      duration: '1 Month',
      location: 'Remote',
      highlights: [
        'Developed clean software applications using JavaScript and core object-oriented programming principles.',
        'Gained hands-on experience in Git workflows and agile software development processes.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'Codsoft',
      period: 'Jan 2025 – Feb 2025',
      duration: '1 Month',
      location: 'Remote',
      highlights: [
        'Developed responsive web interfaces using HTML, CSS, and JavaScript as part of structured internship tasks.',
        'Worked on real-world frontend projects and gained exposure to professional development workflows.'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'TechnoHacks EduTech',
      period: 'Jan 2025 – Feb 2025',
      duration: '1 Month',
      location: 'Remote',
      highlights: [
        'Developed software applications and solutions using Python and JavaScript for structured internship assignments.',
        'Gained hands-on experience in software development best practices and version control with Git.'
      ]
    },
    {
      role: 'Blockchain Intern',
      company: 'VOIS LMS Platform',
      period: 'Jan 2025 – Feb 2025',
      duration: '1 Month',
      location: 'Remote',
      highlights: [
        'Researched blockchain platforms for credential validation, tamper-proof certifications, and decentralized logs.',
        'Studied Solidity smart contract principles and explored integration with decentralized applications.'
      ]
    },
    {
      role: 'UI/UX Design Intern',
      company: 'Codec Technologies India',
      period: 'Dec 2024 – Jan 2025',
      duration: '1 Month',
      location: 'Chennai, India',
      highlights: [
        'Designed high-fidelity mockups and interactive user flows for internal dashboards using Figma.',
        'Collaborated with developers to translate wireframes into responsive Tailwind CSS components.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Internship <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          <div className={`absolute left-4 top-2 bottom-2 w-[2px] ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-14 group">
                {/* Circle Pin */}
                <div className={`absolute left-[9px] top-5 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                  index === 0
                    ? 'bg-indigo-500 border-indigo-500 shadow-md shadow-indigo-500/30'
                    : darkMode
                      ? 'bg-slate-950 border-slate-700 group-hover:border-indigo-500 group-hover:bg-indigo-500'
                      : 'bg-white border-slate-300 group-hover:border-indigo-500 group-hover:bg-indigo-500'
                }`} />

                {/* Card */}
                <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  darkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-100 shadow-sm hover:border-slate-200'
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-sm sm:text-base group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 mt-1">
                        <span className={`text-xs font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                          {exp.company}
                        </span>
                        <span className="text-slate-500 text-xs">•</span>
                        <div className="flex items-center space-x-1 text-slate-500 text-xs">
                          <MapPin size={11} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex items-center space-x-1 text-slate-500 text-xs">
                        <Calendar size={11} />
                        <span>{exp.period}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        darkMode ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/10' : 'bg-indigo-50 text-indigo-600'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500 mt-1.5 mr-2 shrink-0" />
                        <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
