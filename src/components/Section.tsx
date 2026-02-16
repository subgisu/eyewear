import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`py-24 md:py-36 ${className}`}>
    <div className="container mx-auto px-6">{children}</div>
  </section>
);

export default Section;
