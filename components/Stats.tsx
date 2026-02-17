import React, { useEffect, useState, useRef } from 'react';
import { useContent } from '../contexts/ContentContext';
import DynamicIcon from './DynamicIcon';

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isNaN(numericValue)) return;
    
    let startTime: number;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      setCount(Math.floor(ease * numericValue));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, numericValue]);

  return <span ref={ref}>{isNaN(numericValue) ? value : count.toLocaleString() + suffix}</span>;
};

const Stats: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center py-12 px-4 text-center group">
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors duration-300">
                <DynamicIcon name={stat.icon} className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;