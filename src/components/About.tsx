
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  const skills = [
    {
      category: "Machine Learning & Deep Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-Learn", "LightGBM", "Neural Networks", "Transformer Models"]
    },
    {
      category: "Natural Language Processing",
      items: ["BERT", "GPT Models", "LLaMA", "Mistral", "Named Entity Recognition", "Sentiment Analysis", "Text Classification"]
    },
    {
      category: "Computer Vision",
      items: ["OpenCV", "Image Processing", "Object Detection", "CNNs", "Vision Transformers"]
    },
    {
      category: "Programming Languages & Tools",
      items: ["Python", "R", "SQL", "MATLAB", "Git", "Docker", "Cloud Computing (AWS/GCP)"]
    }
  ];
  
  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div ref={sectionRef} className="opacity-0">
              <h2 className="text-lg md:text-xl text-primary font-medium mb-2">About Me</h2>
              <h1 className="section-title">AI Researcher <br />& Developer</h1>
              
              <div className="space-y-4 text-foreground/70">
                <p>
                  I am a final year student at IIT Bombay, passionate about developing innovative AI solutions
                  with real-world applications. My research interests span natural language processing,
                  computer vision, and human-computer interaction.
                </p>
                <p>
                  Throughout my academic and professional journey, I've collaborated with prestigious
                  institutions including Harvard University and IBM Research, where I've applied cutting-edge
                  AI techniques to solve complex problems in various domains.
                </p>
                <p>
                  I'm particularly interested in how AI can be leveraged to create meaningful impact in
                  healthcare, improving diagnostics and patient care through intelligent systems.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold font-display mb-4">Education</h3>
                <div className="glass-card p-6">
                  <div className="flex justify-between items-start flex-wrap mb-2">
                    <h4 className="text-lg font-bold">Indian Institute of Technology, Bombay</h4>
                    <span className="badge bg-primary/10 text-primary font-medium">
                      Present
                    </span>
                  </div>
                  <p className="text-foreground/70 font-medium">B.Tech, Final Year</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3" ref={skillsRef}>
            <div className="glass-card p-8 opacity-0">
              <h2 className="text-2xl font-bold font-display mb-6">Technical Skills</h2>
              
              <div className="space-y-8">
                {skills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex} className="space-y-3">
                    <h3 className="text-lg font-bold text-primary">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-3 py-1.5 bg-white/50 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Awards & Recognition</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-foreground/80">
                      Awarded Letter of Recommendation from Director of NIT, Surat for AI research acumen
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-foreground/80">
                      Awarded LOR from Head Prof at Harvard University for exemplary performance
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-foreground/80">
                      Paper accepted at AMIA 23rd Annual Symposium, USA
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-foreground/80">
                      Abstract under peer review at American Geophysical Union (AGU), USA
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
