
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface ProjectProps {
  title: string;
  period: string;
  authors: string;
  description: string[];
  tags: string[];
  delay: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, period, authors, description, tags, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      className={`glass-card p-6 opacity-0 animate-fade-in delay-${delay} overflow-hidden transition-all duration-300`}
      style={{ height: expanded ? 'auto' : '320px' }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold font-display">{title}</h3>
        <span className="badge bg-primary/10 text-primary font-medium">
          {period}
        </span>
      </div>
      
      <p className="text-foreground/70 font-medium mb-4">{authors}</p>
      
      <div className={cn(
        "transition-all duration-300 mb-4",
        expanded ? "" : "line-clamp-4"
      )}>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-primary">•</span>
              <span className="text-foreground/80 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="badge bg-secondary text-foreground/70">
            {tag}
          </span>
        ))}
      </div>
      
      <button 
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-primary font-medium hover:underline"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const projects = [
    {
      title: "Classification of Diagnosed Social Media Text Related to Disease Using BERT and LightGBM",
      period: "2023",
      authors: "Chavda R., Makwana D., Patel V., Shukla A.",
      description: [
        "Prestigious AMIA 23rd Annual Symposium, USA accepted and featured my peer-reviewed full paper as one of top presentations",
        "Pioneered top-performing NLP model in Social Media Mining for Health - 2023 (SMM4H-23) shared task, set new field benchmark",
        "Achieved exceptional performance of 0.94 F1 Score by conceptualizing fine-tuned BERT embedding with LightGBM model pipeline"
      ],
      tags: ["NLP", "BERT", "LightGBM", "Healthcare", "Social Media Analysis"]
    },
    {
      title: "Continuous Emotional State Modelling | Human Computer Interaction",
      period: "2023-2024",
      authors: "Chavda R., Pandey S., Upadhyay A.",
      description: [
        "Full length paper under peer-review in the Proceedings of National Academy of Science, USA",
        "Regressively predicted accurate human emotional state, using 9 physiological signals, derived key input features using Neurokit lib",
        "Achieved Avg. RMSE of 1.33 across different generalizing test data scenario on Decision Tree Regressor model with early stopping"
      ],
      tags: ["HCI", "Emotional State Modelling", "Physiological Signals", "Machine Learning"]
    }
  ];
  
  return (
    <section id="projects" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h2 className="text-lg md:text-xl text-primary font-medium mb-2">Research Work</h2>
          <h1 className="section-title">Featured Projects</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My research focuses on applications of artificial intelligence in healthcare, human-computer interaction,
            and natural language processing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              period={project.period}
              authors={project.authors}
              description={project.description}
              tags={project.tags}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
