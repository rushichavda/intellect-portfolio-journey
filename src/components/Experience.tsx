
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, organization, period, description, delay }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
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
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={itemRef} className={`timeline-item opacity-0 animate-fade-in delay-${delay}`}>
      <span className="timeline-dot"></span>
      <div className="glass-card p-6">
        <div className="flex justify-between items-start flex-wrap mb-2">
          <h3 className="text-xl font-bold font-display">{title}</h3>
          <span className="badge bg-primary/10 text-primary font-medium mt-1">
            {period}
          </span>
        </div>
        <p className="text-foreground/70 font-medium mb-3">{organization}</p>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-primary">•</span>
              <span className="text-foreground/80 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
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
  
  const experiences = [
    {
      title: "AI Research Intern",
      organization: "IBM AI Research",
      period: "Jun'24 - Present",
      description: [
        "Introduced novel soil moisture estimation, using satellite images by fine-tuning the Prithvi-100, GFM (Geospatial Foundation Model)",
        "Compiled and processed dataset of 3 yrs of satellite images of 40 soil sensors' data of Texas regions with Rasterio and Geedim library",
        "Achieved a test MAE of 0.0357, RMSE of 0.055 in the moisture prediction with U-Net as baseline model using custom loss function"
      ]
    },
    {
      title: "Gen AI for Hardware",
      organization: "Harvard University",
      period: "May'24 - Jul'24",
      description: [
        "Developed pipeline to automatically annotate dataset for hardware research corpus (200mn tokens) using few-shot LLM evaluation",
        "Optimized evaluation parameters by formulating custom task in YAML framework, and seamlessly integrated evaluation pipeline",
        "Achieved a 94% F1-Score, by Implementing the cutting-edge LLM models, including GPT-4, GPT-4o, Llama3-8b and Mistral-7b"
      ]
    },
    {
      title: "Gen AI Intern",
      organization: "Ernst & Youngs (EY)",
      period: "Jun'23 - Aug'23",
      description: [
        "Developed the proof of concept for Automatic ESG Reporting using fine-tuned LLM, that assist the client in speeding up reporting",
        "Reduced the LLM cloud hosting cost to 45% using Low-rank Adaptation fine tuning framework, with equivalent response quality",
        "Achieved a 86% BERTScore and 81% correctness in responses compared to gold standards, leading to a reduction in human hours"
      ]
    },
    {
      title: "NLP Intern",
      organization: "IntelEhealth",
      period: "Jun'23 - Nov'23",
      description: [
        "Built an AI medical assistance system using medical books, can suggest diagnose to patients, implemented on Gradio user interface",
        "Reduced cost by 31%, by utilizing LoRA (Low Rank Adaptation) Framework to fine tune LLaMA 13B using less compute and storage",
        "Improved correctness to 76%, BERTScore 87%, reduce response time by 39%, by using Langchain Agent with GPT-3.5-turbo APIs"
      ]
    },
    {
      title: "Computer Vision Intern",
      organization: "Reliance JIO",
      period: "Jun'22 - Aug'22",
      description: [
        "Deployed AI-based smart technology to ensure perimeter security measures of venue for large-scale event, worked in a team of 2",
        "Implemented Number plate recognition system using the video feed of vehicle number plates from the entrance of the parking",
        "Enhanced accuracy to 84% and reduced character error rate by utilizing advanced image processing techniques to limit motion blur"
      ]
    },
    {
      title: "Data Science Intern",
      organization: "TechnoBrain",
      period: "Jun'22 - Oct'22",
      description: [
        "Achieved 78% Intersection over union, in the personalized vegetable recommendation model, improving the customer experience",
        "Trained LightGBM model as recommendation engine, by deriving impactful input features from raw data using statistical data analysis"
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-20 px-6 md:px-10 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h2 className="text-lg md:text-xl text-primary font-medium mb-2">Professional Journey</h2>
          <h1 className="section-title">Work Experience</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My professional journey includes research and internships at prestigious institutions and companies,
            where I've applied cutting-edge AI techniques to solve real-world challenges.
          </p>
        </div>
        
        <div className="timeline ml-3 md:ml-4 pl-4 md:pl-6">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              organization={exp.organization}
              period={exp.period}
              description={exp.description}
              delay={index * 100 > 500 ? 500 : index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
