
import React from 'react';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { FadeIn } from './components/FadeIn';
import { PROJECTS, RESEARCH, SOCIAL_LINKS, PUBLICATIONS, EXPERIENCE, EDUCATION, SKILLS, HACKATHONS, CERTIFICATES } from './constants';
import { ArrowRight, FileText, ExternalLink, GraduationCap, Code2, Trophy, Award, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-gray-200">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 md:pt-60 md:pb-32 px-6 min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto">
        <FadeIn delay={100}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary leading-[1.1] mb-12">
            Atharva Sawant. <br />
            <span className="text-gray-300">AI & Computer Vision.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={300}>
          <div className="max-w-2xl text-lg text-secondary leading-relaxed font-light mb-10">
            <p>
              After completing my Bachelor's of Engineering in AI & Data Science, I am currently a Master’s student in Applied Artificial Intelligence at Stevens Institute of Technology. Specializing in Deep Learning, Computer Vision, and optimizing SOTA models for real-time inference.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <a 
            href="https://drive.google.com/file/d/1pN3lGNrWVf6L0RVVGkZo6LsHRqc3zYjn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 shadow-soft hover:shadow-hover hover:-translate-y-1"
          >
            Get Resume
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16 border-b border-gray-100 pb-6">
              <h2 className="font-display text-3xl font-semibold text-primary">Selected Projects</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">01 — Development</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <FadeIn key={project.id} delay={index * 150}>
                <Card data={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-background border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16 border-b border-gray-200 pb-6">
              <h2 className="font-display text-3xl font-semibold text-primary">Experience</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">02 — Career</span>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 150}>
                <div className="group relative bg-white rounded-2xl p-8 md:p-10 border border-border hover:border-gray-300 transition-all duration-300 transform-gpu hover:shadow-hover hover:-translate-y-1 hover:scale-[1.01]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-primary mb-1 group-hover:text-gray-800">
                        {exp.role}
                      </h3>
                      <div className="text-lg text-secondary font-medium mb-2 md:mb-0">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="text-sm font-mono text-primary bg-gray-100 px-3 py-1 rounded-md">
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-400 mt-1">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start text-secondary text-sm leading-relaxed">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-accent/40 rounded-full flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Research Experience Section */}
      <section id="research" className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16 border-b border-gray-100 pb-6">
              <h2 className="font-display text-3xl font-semibold text-primary">Research Experience</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">03 — Innovation</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH.map((item, index) => (
              <FadeIn key={item.id} delay={index * 150}>
                <div className="group relative bg-background rounded-2xl p-10 border border-border hover:border-gray-300 transition-all duration-300 transform-gpu hover:shadow-hover hover:-translate-y-1 hover:scale-[1.02]">
                  <span className="font-mono text-xs text-accent mb-4 block">{item.year}</span>
                  <h3 className="text-2xl font-display font-semibold text-primary mb-4 group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">
                    View Details <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons/Competitions Section */}
      <section id="hackathons" className="py-24 px-6 bg-background border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16 border-b border-gray-200 pb-6">
              <h2 className="font-display text-3xl font-semibold text-primary">Hackathons & Competitions</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">04 — Competitions</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HACKATHONS.map((hack, index) => (
              <FadeIn key={hack.id} delay={index * 150}>
                <div className="group flex flex-col p-8 bg-white rounded-2xl border border-border hover:border-accent/40 hover:shadow-soft transition-all duration-300 transform-gpu hover:-translate-y-1 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                      <Trophy size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                      {hack.date}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-semibold text-primary mb-1">
                      {hack.project}
                    </h3>
                    <div className="text-sm font-medium text-accent mb-1">
                      {hack.achievement}
                    </div>
                    <div className="text-xs text-gray-400">
                      {hack.name} • {hack.location}
                    </div>
                  </div>

                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {hack.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {hack.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16 border-b border-gray-100 pb-6">
              <h2 className="font-display text-3xl font-semibold text-primary">Education</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">05 — Academic</span>
            </div>
          </FadeIn>

          <div className="relative ml-3 md:ml-6">
            {/* Vertical Line */}
            <div className="absolute left-0 top-3 bottom-0 w-px bg-gray-200"></div>
            
            <div className="space-y-12 pb-4">
            {EDUCATION.map((edu, index) => (
              <FadeIn key={edu.id} delay={index * 150}>
                <div className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-4px] top-3 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300 group-hover:border-accent group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_0_8px_rgba(255,255,255,1)]"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-6 mb-2">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                        {edu.school}
                      </h3>
                      <div className="text-lg text-secondary font-medium mb-1">
                        {edu.degree}
                      </div>
                      {edu.grade && (
                         <div className="inline-flex items-center bg-green-50/50 text-green-700 text-xs font-medium px-2 py-1 rounded border border-green-100/50 mt-1">
                           {edu.grade}
                         </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                      <span className="font-mono text-sm text-primary bg-gray-50 border border-gray-100 px-3 py-1 rounded-md">
                        {edu.period}
                      </span>
                      <span className="text-xs text-gray-400">
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  
                  {edu.coursework && (
                    <div className="mt-6">
                       <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                         <BookOpen size={12} />
                         Relevant Coursework
                       </div>
                       <div className="flex flex-wrap gap-2">
                         {edu.coursework.map((course) => (
                           <span key={course} className="text-xs text-secondary bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-accent/30 hover:bg-blue-50/30 transition-all duration-300">
                             {course}
                           </span>
                         ))}
                       </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 bg-background border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-10 border-b border-gray-200 pb-6">
              <h2 className="font-display text-3xl font-semibold text-primary">Certifications</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">06 — Credentials</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {CERTIFICATES.map((cert, index) => (
               <FadeIn key={cert.id} delay={index * 100}>
                 <div className="flex flex-col p-6 bg-white rounded-xl border border-border hover:border-gray-300 hover:shadow-sm transition-all duration-300 group h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Award size={18} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-primary text-base leading-tight mb-1">{cert.name}</h4>
                        <p className="text-xs text-gray-400 mb-1">{cert.issuer} • {cert.date}</p>
                      </div>
                      {cert.link && cert.link !== "#" && (
                        <a href={cert.link} className="text-gray-300 hover:text-primary transition-colors">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    
                    {cert.description && (
                      <p className="text-sm text-secondary mb-4 leading-relaxed">
                        {cert.description}
                      </p>
                    )}

                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {cert.skills.map(skill => (
                          <span key={skill} className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
             <div className="flex items-baseline justify-between mb-16 border-b border-gray-100 pb-6">
              <h2 className="font-display text-3xl font-semibold text-primary">Technical Skills</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">07 — Expertise</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.map((category, index) => (
              <FadeIn key={category.title} delay={index * 100}>
                <div className="p-8 rounded-2xl bg-background border border-border hover:border-gray-300 transition-all duration-300 transform-gpu hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                      <Code2 size={16} />
                    </div>
                    <h3 className="font-display font-medium text-lg text-primary">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-secondary hover:border-accent/50 hover:text-primary hover:shadow-sm transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 px-6 bg-background border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16 border-b border-gray-200 pb-6">
              <h2 className="font-display text-3xl font-semibold text-primary">Publications</h2>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">08 — Academic</span>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {PUBLICATIONS.map((pub, index) => (
              <FadeIn key={pub.id} delay={index * 150}>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white rounded-2xl border border-border hover:border-accent/30 hover:shadow-hover hover:bg-gray-50/50 transition-all duration-300 transform-gpu hover:scale-[1.01]"
                >
                  <div className="mb-6 md:mb-0 max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-md bg-gray-100 text-xs font-mono text-gray-500">
                        {pub.year}
                      </span>
                      <span className="text-xs font-mono text-accent tracking-wide uppercase">
                        Published Paper
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-primary mb-2 group-hover:text-gray-800 transition-colors">
                      {pub.title}
                    </h3>
                    <div className="flex items-center text-secondary text-sm">
                      <FileText size={16} className="mr-2 opacity-70" />
                      {pub.journal}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-primary bg-white px-5 py-3 rounded-full border border-gray-200 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                    Read Paper
                    <ExternalLink size={16} />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 text-primary">
              Let's Connect
            </h2>
            <p className="text-xl text-secondary font-light mb-12 max-w-xl mx-auto">
              I’m currently open to research projects, internships, and collaborative opportunities in Machine Learning and Computer Vision.
            </p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=asawant10@stevens.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Email Me
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
