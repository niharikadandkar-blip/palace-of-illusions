import React, { useState } from 'react';
import { HeroDoorway } from './HeroDoorway';
import { Compass, Sparkles, BookOpen, Users, ArrowRight, Layers } from 'lucide-react';

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
  const [showRoadmap, setShowRoadmap] = useState(false);

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
      aria-label="Chamber 1: Enter the Palace"
    >
      {/* Background Indian Royal Palace Gateway at Dusk */}
      <div
        className="hero-background-layer"
        style={{ backgroundImage: `url('/images/palace/hero-palace-gate.jpg')` }}
      />

      {/* Atmospheric Mist & Warm Diya Glow */}
      <div className="hero-atmosphere" />
      <div className="palace-frame-overlay jali-overlay" />

      {/* TOP BANNER: Complete context & academic metadata */}
      <div className="hero-top-banner">
        <div className="hero-supertitle">
          <span>Chitra Banerjee Divakaruni's Novel ❖ A Group Literary Presentation</span>
        </div>
        <h1 className="hero-main-title">THE PALACE OF ILLUSIONS</h1>
        <p className="hero-subtitle">
          “A journey through a story we thought we knew — Reconsidering the ancient epic through Draupadi’s voice.”
        </p>

        {/* Academic Presentation Purpose Banner */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          marginTop: '0.65rem',
          fontSize: '0.86rem',
          color: 'var(--color-parchment-soft)',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={14} style={{ color: 'var(--color-antique-gold)' }} />
            <span><strong>Novel:</strong> The Palace of Illusions (2008)</span>
          </span>
          <span style={{ color: 'var(--color-antique-gold)' }}>❖</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Users size={14} style={{ color: 'var(--color-antique-gold)' }} />
            <span><strong>Presented by:</strong> Sahil, Niharika, Riya, Lakshya, Anushka & Sukruti</span>
          </span>
          <span style={{ color: 'var(--color-antique-gold)' }}>❖</span>
          <span><strong>Purpose:</strong> Agency, Perspective & The Human Cost of Epic War</span>
        </div>
      </div>

      {/* CENTER STAGE: 3D Monumental Palace Doors OR Presentation Roadmap Modal */}
      <div className="hero-center-stage">
        {!showRoadmap ? (
          <HeroDoorway isDoorOpen={isDoorOpen} />
        ) : (
          <div style={{
            background: 'rgba(11, 33, 29, 0.92)',
            border: '1px solid rgba(197, 161, 90, 0.45)',
            borderRadius: '16px',
            padding: '1.5rem',
            maxWidth: '850px',
            width: '92%',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            backdropFilter: 'blur(12px)',
            maxHeight: '440px',
            overflowY: 'auto',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(197, 161, 90, 0.25)', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} style={{ color: 'var(--color-antique-gold-bright)' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-ivory)' }}>
                  The 12-Chamber Literary Journey (6 Presenters)
                </h3>
              </div>
              <button
                onClick={() => setShowRoadmap(false)}
                style={{ background: 'none', border: 'none', color: 'var(--color-parchment)', cursor: 'pointer', fontFamily: 'var(--font-accent)', fontSize: '0.85rem' }}
              >
                ✕ Close Roadmap
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem' }}>
              {[
                { num: 1, title: 'Enter the Palace', speaker: 'Sahil' },
                { num: 2, title: 'The Book', speaker: 'Sahil' },
                { num: 3, title: 'A Different Voice', speaker: 'Niharika' },
                { num: 4, title: 'Born of Fire — Desires & Destiny', speaker: 'Niharika' },
                { num: 5, title: 'The Maya Sabha — Palace of Illusions', speaker: 'Riya' },
                { num: 6, title: 'The Dice Hall', speaker: 'Riya' },
                { num: 7, title: 'Karna — Sympathy & Accountability', speaker: 'Lakshya' },
                { num: 8, title: 'Exile & The Road to War', speaker: 'Lakshya' },
                { num: 9, title: 'The Kurukshetra War', speaker: 'Anushka' },
                { num: 10, title: 'The Cost of Victory & Imperial Rule', speaker: 'Anushka' },
                { num: 11, title: 'Beyond the Illusion', speaker: 'Sukruti' },
                { num: 12, title: 'Audience Verdict — The Final Door', speaker: 'Sukruti & All' },
              ].map((c) => (
                <div key={c.num} style={{ background: 'rgba(18, 60, 50, 0.5)', border: '1px solid rgba(197, 161, 90, 0.2)', borderRadius: '8px', padding: '0.55rem 0.75rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-antique-gold-bright)', fontFamily: 'var(--font-accent)' }}>
                    CHAMBER {c.num} · {c.speaker}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-ivory)', fontWeight: 600 }}>
                    {c.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM ACTION DOCK: Clear buttons & presentation entry */}
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
            onClick={() => setShowRoadmap((prev) => !prev)}
            id="roadmap-toggle-btn"
            title="Preview the 12-chamber roadmap"
          >
            <Layers size={16} />
            <span>{showRoadmap ? 'View Palace Doors' : 'Presentation Roadmap'}</span>
          </button>

          <button
            className="btn-palace-secondary"
            onClick={handleBypassClick}
            disabled={isEntering || isTransitioning}
            id="explore-story-btn"
            title="Advance directly to Chamber 2: The Book"
          >
            <Compass size={16} />
            <span>Begin Presentation</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="hero-keyboard-hint">
          <span>Press </span>
          <span className="keyboard-key">Space</span>
          <span> or </span>
          <span className="keyboard-key">→</span>
          <span> to open the doors and enter</span>
        </div>
      </div>
    </section>
  );
};
