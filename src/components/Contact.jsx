import React, { useState } from 'react'
import { Mail, Linkedin, Github, Send, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '25e29f5c-ba84-4886-98d1-bc8a7ead96d5',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      })
      
      const data = await response.json()
      if (data.success) {
        setIsSent(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Auto reset success message after 5 seconds
        setTimeout(() => setIsSent(false), 5000)
      } else {
        alert('Oops! Something went wrong. Please try sending directly to maheshwari6625@gmail.com')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Oops! Something went wrong. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    {
      name: 'Email Address',
      value: 'maheshwari6625@gmail.com',
      href: 'mailto:maheshwari6625@gmail.com',
      icon: <Mail size={18} className="text-indigo-400" />
    },
    {
      name: 'LinkedIn Profile',
      value: 'linkedin.com/in/maheshwari--s',
      href: 'https://linkedin.com/in/maheshwari--s',
      icon: <Linkedin size={18} className="text-cyan-400" />
    },
    {
      name: 'GitHub Profile',
      value: 'github.com/Maheshwari0065',
      href: 'https://github.com/Maheshwari0065',
      icon: <Github size={18} className="text-slate-400" />
    }
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Get In <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Info Card Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-100 shadow-sm'
            }`}>
              <h3 className="font-display font-bold text-base sm:text-lg mb-4 flex items-center space-x-2 text-indigo-550 text-indigo-500">
                <MessageSquare size={18} />
                <span>Let's Connect!</span>
              </h3>
              <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Have a job opening, internship opportunity, or a web development project to collaborate on? Feel free to reach out via the form, or ping me directly on my socials. I will get back to you as soon as possible!
              </p>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center space-x-3.5 p-3.5 rounded-xl border text-xs font-medium transition-all ${
                      darkMode 
                        ? 'bg-slate-950/40 border-slate-850 hover:bg-slate-950 hover:border-slate-800' 
                        : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-30 shadow-sm'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-900' : 'bg-white shadow-sm'}`}>
                      {link.icon}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 block">{link.name}</span>
                      <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Input Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/40 border-slate-850' : 'bg-white border-slate-100 shadow-sm'
            }`}>
              
              {isSent ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 size={48} className="text-emerald-555 text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="font-display font-bold text-lg">Message Sent Successfully!</h3>
                  <p className={`text-xs max-w-sm mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Thank you for reaching out. Maheshwari will respond shortly to your email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full text-xs px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all ${
                          darkMode 
                            ? 'bg-slate-950/80 border-slate-850 text-white focus:border-indigo-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full text-xs px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all ${
                          darkMode 
                            ? 'bg-slate-955 border-slate-850 text-white focus:border-indigo-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>

                  </div>

                  {/* Subject input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full text-xs px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all ${
                        darkMode 
                          ? 'bg-slate-955 border-slate-850 text-white focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                      }`}
                      placeholder="Opportunity / Collaboration Inquiry"
                    />
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-slate-500">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full text-xs px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none ${
                        darkMode 
                          ? 'bg-slate-955 border-slate-850 text-white focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                      }`}
                      placeholder="Hi Maheshwari, I would love to talk about a full-stack opportunity..."
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wide uppercase transition-all shadow-md hover:shadow-indigo-500/10 flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={14} className={isSubmitting ? 'animate-pulse' : ''} />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
