import React from 'react';
import { DiyaLamp } from '../common/DiyaLamp';

interface HeroDoorwayProps {
  isDoorOpen: boolean;
}

export const HeroDoorway: React.FC<HeroDoorwayProps> = ({ isDoorOpen }) => {
  return (
    <div className={`monumental-doorway-stage ${isDoorOpen ? 'door-open' : ''}`}>
      {/* Outer Sandstone Archway */}
      <div className="doorway-stone-arch">
        <div className="doorway-arch-inner-border" />
      </div>

      {/* Flanking Brass Diyas on Stone Alcoves */}
      <div style={{ position: 'absolute', left: '-42px', bottom: '25px', zIndex: 30 }}>
        <DiyaLamp size="lg" />
      </div>
      <div style={{ position: 'absolute', right: '-42px', bottom: '25px', zIndex: 30 }}>
        <DiyaLamp size="lg" />
      </div>

      {/* Inner Hallway Illuminated Reveal (behind doors) */}
      <div className="doorway-inner-light">
        <div
          className="inner-hall-preview"
          style={{ backgroundImage: `url('/assets/images/palace-inner-hall.jpg')` }}
        />
      </div>

      {/* Crevice Light Spill when doors are closed/ajar */}
      <div className="doorway-crevice-glow" />

      {/* Left Monumental Wooden & Brass Door Leaf */}
      <div className="door-leaf door-left">
        <div className="door-brass-band">
          <div className="brass-stud" />
          <div className="brass-stud" />
          <div className="brass-stud" />
        </div>
        <div className="door-ring-handle" />
        <div className="door-brass-band">
          <div className="brass-stud" />
          <div className="brass-stud" />
          <div className="brass-stud" />
        </div>
      </div>

      {/* Right Monumental Wooden & Brass Door Leaf */}
      <div className="door-leaf door-right">
        <div className="door-brass-band">
          <div className="brass-stud" />
          <div className="brass-stud" />
          <div className="brass-stud" />
        </div>
        <div className="door-ring-handle" />
        <div className="door-brass-band">
          <div className="brass-stud" />
          <div className="brass-stud" />
          <div className="brass-stud" />
        </div>
      </div>
    </div>
  );
};
