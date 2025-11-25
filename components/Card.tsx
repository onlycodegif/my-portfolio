
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface CardProps {
  data: Project;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const Component = data.link ? 'a' : 'div';
  const props = data.link ? {
    href: data.link,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <Component 
      {...props}
      className={`group relative bg-surface rounded-2xl p-8 border border-border hover:border-gray-300 transition-all duration-300 transform-gpu hover:shadow-hover hover:-translate-y-1 hover:scale-[1.02] flex flex-col h-full ${data.link ? 'cursor-pointer' : ''}`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
          {data.year}
        </span>
        <div className={`transition-opacity duration-300 text-gray-400 ${data.link ? 'group-hover:text-accent group-hover:scale-110 opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </div>
      </div>
      
      <h3 className="text-xl font-display font-semibold text-primary mb-3 group-hover:text-gray-800">
        {data.title}
      </h3>
      
      <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
        {data.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {data.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[11px] font-medium tracking-wide text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 group-hover:border-gray-200 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </Component>
  );
};
