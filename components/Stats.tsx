import React, { useEffect, useState, useRef } from 'react';
import { useContent } from '../contexts/ContentContext';
import DynamicIcon from './DynamicIcon';

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Extract numeric value and suffix (e.g., "2,500+" -> 2500 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    if (isVisible && !isNaN(numericValue)) {
      let startTime: number | null = null;
      const duration = 2000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(ease * numericValue));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, numericValue]);

  return (
    <span ref={ref}>
      {isNaN(numericValue) ? value : count.toLocaleString() + suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="py-12 bg-blue-50 relative z-20 -mt-8 mx-4 md:mx-0 rounded-xl md:rounded-none shadow-lg md:shadow-none">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {content.stats.map((stat) => {
            return (
              <div key={stat.label} className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-700 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <DynamicIcon name={stat.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1 tabular-nums">
                  <AnimatedCounter value={stat.value} />
                </h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
