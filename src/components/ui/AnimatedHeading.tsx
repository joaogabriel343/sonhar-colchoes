
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  alignment?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  title,
  subtitle,
  className,
  subtitleClassName,
  delay = 0,
  as = 'h2',
  alignment = 'center',
  children
}) => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
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

  // Define alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Set heading element based on 'as' prop
  const HeadingTag = as;

  return (
    <div 
      ref={headingRef} 
      className={cn("opacity-0 transform translate-y-4 transition-all duration-700 ease-out", 
        alignmentClasses[alignment]
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-8 bg-sonhar-red-500 mr-3"></div>
          <div className="chip uppercase">Sonhar</div>
          <div className="h-px w-8 bg-sonhar-red-500 ml-3"></div>
        </div>
        
        <HeadingTag className={cn(`font-bold text-3xl md:text-4xl relative mb-4`, className)}>
          {title}
        </HeadingTag>
        
        {subtitle && (
          <p className={cn(`text-sonhar-black-500 max-w-xl mx-auto mb-8`, subtitleClassName)}>
            {subtitle}
          </p>
        )}
        
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedHeading;
