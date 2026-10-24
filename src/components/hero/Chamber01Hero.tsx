import React, { useState } from 'react';
import { HeroDoorway } from './HeroDoorway';
import { Compass, Sparkles } from 'lucide-react';

interface Chamber01HeroProps {
  onEnter: () => void;
  onBypass: () => void;
  isReducedMotion: boolean;
  isTransitioning: boolean;
}

export const Chamber01Hero: React.FC<Chamber01HeroProps> = ({
  onEnter,
  onBypass,
  isReducedMotion,
  isTransitioning,
}) => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const handleEnterClick = () => {
    if (isTransitioning || isEntering) return;

    if (isReducedMotion) {
      onEnter();
      return;
    }

    setIsEntering(true);
    setIsDoorOpen(true);

    setTimeout(() => {
      onEnter();
    }, 1100);
  };

  const handleBypassClick = () => {
    if (isTransitioning || isEntering) return;
    onBypass();
  };

  return (
    <section
      className={`hero-container ${isEntering ? 'entering' : ''}`}
      aria-label="The Palace of Illusions — Monumental Entrance"
    >
      {/* Background Indian Royal Palace Gateway at Dusk */}
      <div
        className="hero-background-layer"
        style={{ backgroundImage: `url('/images/palace/hero-palace-gate.jpg')` }}
      />

      {/* Atmospheric Mist & Warm Diya Glow */}
      <div className="hero-atmosphere" />
      <div className="palace-frame-overlay jali-overlay" />

      {/* TOP BANNER: Clean, concise title (Zero overlap with the central doors) */}
      <div className="hero-top-banner">
        <div className="hero-supertitle">
          <span>An Interactive Literary Journey</span>
        </div>
        <h1 className="hero-main-title">THE PALACE OF ILLUSIONS</h1>
        <p className="hero-subtitle">
          “A journey through a story we thought we knew.”
        </p>
      </div>

      {/* CENTER STAGE: Completely unobscured 3D monumental doors */}
      <div className="hero-center-stage">
        <HeroDoorway isDoorOpen={isDoorOpen} />
      </div>

      {/* BOTTOM ACTION DOCK: Clear buttons & keyboard hint */}
      <div className="hero-bottom-dock">
        <div className="hero-actions-group">
          <button
            className="btn-palace-primary"
            onClick={handleEnterClick}
            disabled={isEntering || isTransitioning}
            id="enter-palace-btn"
            title="Open the carved palace doors and step inside"
          >
            <Sparkles size={18} style={{ color: 'var(--color-antique-gold-bright)' }} />
            <span>Enter the Palace</span>
          </button>

          <button
            className="btn-palace-secondary"
            onClick={handleBypassClick}
            disabled={isEntering || isTransitioning}
            id="explore-story-btn"
            title="Skip straight to the opening discussion question"
          >
            <Compass size={16} />
            <span>Explore the Story</span>
          </button>
        </div>

        <div className="hero-keyboard-hint">
          <span>Press </span>
          <span className="keyboard-key">Space</span>
          <span> or </span>
          <span className="keyboard-key">→</span>
          <span> to enter</span>
        </div>
      </div>
    </section>
  );
};
