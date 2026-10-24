import React from 'react';

interface DiyaLampProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DiyaLamp: React.FC<DiyaLampProps> = ({ size = 'md', className = '' }) => {
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.35 : 1;

  return (
    <div
      className={`diya-component ${className}`}
      style={{ transform: `scale(${scale})` }}
      aria-hidden="true"
    >
      <div className="diya-flame" />
      <div className="diya-bowl" />
    </div>
  );
};
