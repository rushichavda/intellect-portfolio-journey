
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
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
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-primary font-medium">AI Researcher & Developer</h2>
              <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight opacity-0">
                Transforming Data into <br /> 
                <span className="text-primary">Intelligent Solutions</span>
              </h1>
            </div>
            
            <p className="text-lg text-foreground/70 max-w-xl opacity-0 animate-fade-in delay-200">
              Final year student at IIT Bombay specializing in Artificial Intelligence with experience in NLP, Computer Vision, and Deep Learning. My research focuses on creating innovative AI solutions with real-world impact.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in delay-300">
              <a href="#experience" className="px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 border border-primary/20 text-primary rounded-lg font-medium transition-all hover:bg-primary/5 hover:-translate-y-0.5">
                Get In Touch
              </a>
            </div>
            
            <div className="space-y-2 opacity-0 animate-fade-in delay-400">
              <p className="text-sm text-foreground/50 font-medium">Research Areas</p>
              <div className="flex flex-wrap gap-2">
                {['Natural Language Processing', 'Computer Vision', 'Human-Computer Interaction', 'Medical AI', 'Foundation Models'].map((skill) => (
                  <span key={skill} className="badge bg-primary/10 text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] opacity-0 animate-fade-in delay-100">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl opacity-30 animate-float"></div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden glass-card border border-white/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 glass-card m-4 rounded-xl text-center">
                <div className="font-display font-medium">
                  <p className="text-sm text-foreground/70">Harvard University | IBM Research</p>
                  <p className="text-primary font-bold">AI & Deep Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
