import React from 'react'
import { GraduationCap, Award, Heart } from 'lucide-react'

export default function About({ darkMode }) {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'DMI College of Engineering',
      info: 'CGPA: 8.94 / 10',
      period: '2022 - 2026',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: "St. Mary's Matriculation Higher Secondary School",
      info: 'Percentage: 81.83%',
      period: 'Class of 2022',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'S R N M Matriculation Higher Secondary School',
      info: 'Percentage: 96.4%',
      period: 'Class of 2020',
    }
  ]

  const certifications = [
    'Foundation of Web Development (HTML, CSS, JavaScript) – Udemy',
    'JavaScript For Beginners Complete Course – Udemy',
    'Frontend Web Development – Reliance Foundation',
    'Python Bootcamp & JavaScript – Udemy',
    'Python, Java, JavaScript, React, SQL Bootcamp – Lets Upgrade',
    'Java Development Training – Campus Connection',
    'CCNA Networking with Hands-on Training – Tekksol Global',
    'Certification Program in Service Desk Operations – Capgemini & EduBridge (Score: 92%, Grade: A+)',
    'Introduction to Internet of Things – NPTEL, IIT Kharagpur (Score: 76%, Jul–Oct 2025)',
    'Distributed Systems – NPTEL, IIT Kanpur (Score: 80%, Jul–Sep 2024)',
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            About <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* About Me Summary */}
        <div className={`p-6 rounded-2xl border mb-10 transition-all ${
          darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
        }`}>
          <h3 className="font-display font-semibold text-lg flex items-center space-x-2 text-indigo-500 mb-4">
            <Heart size={18} />
            <span>About Me</span>
          </h3>
          <p className={`leading-relaxed text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Motivated B.Tech Information Technology graduate with hands-on internship and project experience, passionate about building scalable, secure, and user-centric web applications. I thrive on translating complex requirements into simple, beautiful, and robust code. Eager to contribute full stack technical skills in a dynamic organization while continuously learning and mastering modern frameworks and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Education Timeline */}
          <div className="lg:col-span-7">
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
            }`}>
              <h3 className="font-display font-semibold text-lg flex items-center space-x-2 text-indigo-500 mb-8">
                <GraduationCap size={20} />
                <span>Educational Background</span>
              </h3>
              <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800/80">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-10 group">
                    <div className={`absolute left-1 top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                      darkMode
                        ? 'bg-slate-950 border-indigo-500 group-hover:bg-indigo-500'
                        : 'bg-white border-indigo-500 group-hover:bg-indigo-600'
                    }`} />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <h4 className="font-display font-bold text-sm sm:text-base group-hover:text-indigo-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <span className={`text-[10px] sm:text-xs font-semibold px-2 py-1 rounded shrink-0 self-start ${
                        darkMode ? 'bg-slate-900 text-slate-400' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {edu.period}
                      </span>
                    </div>
                    <p className={`text-xs mt-1 font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {edu.institution}
                    </p>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {edu.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
            }`}>
              <h3 className="font-display font-semibold text-lg flex items-center space-x-2 text-cyan-500 mb-5">
                <Award size={18} />
                <span>Certifications</span>
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2.5 shrink-0" />
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
