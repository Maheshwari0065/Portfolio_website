import React, { useState } from 'react'
import { Layers, Server, Database, Wrench } from 'lucide-react'

export default function Skills({ darkMode }) {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layers size={18} className="text-indigo-400" />,
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design']
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: <Server size={18} className="text-cyan-400" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Django', 'Flask', 'JWT Authentication', 'Socket.io']
    },
    {
      id: 'database',
      title: 'Database Management',
      icon: <Database size={18} className="text-emerald-400" />,
      skills: ['MongoDB', 'Microsoft SQL Server', 'PostgreSQL', 'MySQL']
    },
    {
      id: 'tools',
      title: 'Languages & Tools',
      icon: <Wrench size={18} className="text-amber-400" />,
      skills: ['Python', 'Java', 'SQL', 'Git', 'GitHub', 'VS Code', 'Figma', 'OpenCV', 'MediaPipe', 'NumPy', 'Eclipse']
    }
  ]

  const [activeTab, setActiveTab] = useState('all')

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Technical <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${
              activeTab === 'all'
                ? 'bg-indigo-600 border-indigo-500 text-white'
                : darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-indigo-600'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${
                activeTab === category.id
                  ? 'bg-indigo-600 border-indigo-500 text-white'
                  : darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-indigo-600'
              }`}
            >
              {category.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories
            .filter((cat) => activeTab === 'all' || cat.id === activeTab)
            .map((category) => (
              <div
                key={category.id}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-2.5 rounded-lg ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all hover:border-indigo-500/50 hover:text-indigo-400 cursor-default ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  )
}
