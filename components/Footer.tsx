
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center items-center">
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
