import React, { useState, useEffect } from 'react';
import type { PresentationSlide } from '../../data/presentationDeck';
import { Sparkles, Camera, ZoomIn, X } from 'lucide-react';

interface CinematicSlideProps {
  slide: PresentationSlide;
  isReducedMotion: boolean;
}

export const CinematicSlide: React.FC<CinematicSlideProps> = ({ slide, isReducedMotion }) => {
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPhotoLightboxOpen) {
        setIsPhotoLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPhotoLightboxOpen]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#0C0A08',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Radiant Golden Light Ambient Pools & Jali Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 30%, rgba(245, 197, 66, 0.14) 0%, transparent 60%), radial-gradient(ellipse at 25% 75%, rgba(229, 169, 50, 0.1) 0%, transparent 55%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        className="jali-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Top Architectural Lintel Bar with Golden Accents */}
      <header
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.85rem 2.25rem',
          borderBottom: '1px solid rgba(245, 197, 66, 0.3)',
          background: 'linear-gradient(90deg, rgba(15, 12, 10, 0.95) 0%, rgba(26, 20, 14, 0.88) 100%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: 'var(--color-royal-gold)', fontSize: '0.95rem' }}>❖</span>
          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.88rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-royal-gold-bright)',
              fontWeight: 600,
            }}
          >
            Chamber {slide.chamberRoman}: {slide.chamberTitle}
          </span>
          <span style={{ color: 'rgba(245, 197, 66, 0.35)' }}>|</span>
          <span
            style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-accent)',
              color: 'var(--color-parchment-soft)',
              letterSpacing: '0.06em',
            }}
          >
            Chamber {slide.chamberNumber} of 12
          </span>
        </div>

        {/* Presenter Badge with Warm Golden Glow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.95rem',
            borderRadius: '20px',
            backgroundColor: 'rgba(24, 18, 13, 0.85)',
            border: `1.5px solid ${slide.presenterColor}88`,
            boxShadow: `0 2px 12px rgba(0, 0, 0, 0.5), 0 0 14px ${slide.presenterColor}33`,
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: slide.presenterColor,
              boxShadow: `0 0 10px ${slide.presenterColor}`,
            }}
          />
          <span
            style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-accent)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFDF8',
              fontWeight: 600,
            }}
          >
            {slide.presenterRole}
          </span>
        </div>
      </header>

      {/* Main Slide Content: 2-Column Balanced Master Layout */}
      <main
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: '2.5rem',
          alignItems: 'center',
          padding: '1.25rem 2.5rem',
          maxWidth: '1360px',
          margin: '0 auto',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Left Column: Dedicated High-Clarity Photo Showcase Frame with Royal Gold Border */}
        <div
          onClick={() => setIsPhotoLightboxOpen(true)}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            maxHeight: 'min(500px, 66vh)',
            borderRadius: '14px',
            backgroundColor: '#070605',
            border: '2px solid rgba(245, 197, 66, 0.65)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 35px rgba(245, 197, 66, 0.22)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
            animation: isReducedMotion ? 'none' : 'pptPhotoIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          title="Click to view photo in full size"
        >
          {/* Ornate Indian Corner Accents in Bright Gold */}
          <div
            style={{
              position: 'absolute',
              top: '6px',
              left: '8px',
              color: 'var(--color-royal-gold-bright)',
              fontSize: '0.8rem',
              zIndex: 3,
              pointerEvents: 'none',
              textShadow: '0 0 8px rgba(245, 197, 66, 0.6)',
            }}
          >
            ❖
          </div>
          <div
            style={{
              position: 'absolute',
              top: '6px',
              right: '8px',
              color: 'var(--color-royal-gold-bright)',
              fontSize: '0.8rem',
              zIndex: 3,
              pointerEvents: 'none',
              textShadow: '0 0 8px rgba(245, 197, 66, 0.6)',
            }}
          >
            ❖
          </div>

          {/* Actual Uncropped, Razor-Sharp Photo Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#050403',
              padding: '0.5rem',
              overflow: 'hidden',
            }}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '6px',
              }}
            />
          </div>

          {/* Bottom Photo Title Badge with Amber-Gold Styling */}
          <div
            style={{
              padding: '0.55rem 1rem',
              backgroundColor: 'rgba(15, 12, 10, 0.96)',
              borderTop: '1px solid rgba(245, 197, 66, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Camera size={13} style={{ color: 'var(--color-royal-gold-bright)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-parchment)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {slide.photoBadge}
              </span>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.72rem',
                color: 'var(--color-royal-gold-bright)',
                fontFamily: 'var(--font-accent)',
              }}
            >
              <ZoomIn size={12} />
              <span>Click to Expand</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Focus with PPT Animation & Golden Typography */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: '0.5rem',
            animation: isReducedMotion ? 'none' : 'pptTextIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Kicker in Radiant Gold */}
          <div
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-royal-gold-bright)',
              marginBottom: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <Sparkles size={13} style={{ color: 'var(--color-royal-gold)' }} />
            <span>{slide.kicker}</span>
          </div>

          {/* Headline with Gleaming Gold Gradient Text */}
          <h2
            className="gold-gradient-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
              filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.8))',
            }}
          >
            {slide.headline}
          </h2>

          {/* Essential Narrative Text (18–30 words, eye-pleasing warm contrast) */}
          <div
            style={{
              borderLeft: '4px solid var(--color-royal-gold)',
              paddingLeft: '1.25rem',
              marginBottom: '1.25rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.15rem, 1.55vw, 1.35rem)',
                lineHeight: 1.5,
                color: '#FFFDF8',
                margin: 0,
                textShadow: '0 2px 10px rgba(0,0,0,0.9)',
              }}
            >
              {slide.essentialText}
            </p>
          </div>

          {/* Poignant Quote Block in Translucent Golden Amber Card */}
          {slide.quote && (
            <div
              style={{
                background: 'rgba(22, 17, 12, 0.85)',
                border: '1px solid rgba(245, 197, 66, 0.4)',
                borderRadius: '8px',
                padding: '0.85rem 1.15rem',
                marginBottom: '1.25rem',
                boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.95rem, 1.25vw, 1.05rem)',
                  lineHeight: 1.45,
                  color: 'var(--color-parchment-soft)',
                }}
              >
                {slide.quote.text}
              </div>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--color-royal-gold-bright)',
                  marginTop: '0.35rem',
                  letterSpacing: '0.04em',
                }}
              >
                — {slide.quote.source}
              </div>
            </div>
          )}

          {/* Highlights Badges in Golden Pill Boxes */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
            {slide.highlights.map((h, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.32rem 0.9rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(28, 22, 15, 0.85)',
                  border: '1px solid rgba(245, 197, 66, 0.4)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-accent)',
                  color: '#FFFDF8',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                }}
              >
                <span style={{ color: 'var(--color-royal-gold)' }}>❖</span>
                <span>{h}</span>
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Decorative Bottom Arch Gold Line */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(245, 197, 66, 0.7) 50%, transparent 100%)',
          boxShadow: '0 0 10px rgba(245, 197, 66, 0.5)',
        }}
      />

      {/* High-Clarity Full Photo Lightbox Overlay */}
      {isPhotoLightboxOpen && (
        <div
          onClick={() => setIsPhotoLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 4, 3, 0.95)',
            backdropFilter: 'blur(14px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          {/* Top Bar with Badge & Close button */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              padding: '0.6rem 1.25rem',
              backgroundColor: 'rgba(20, 16, 12, 0.9)',
              borderRadius: '8px',
              border: '1px solid rgba(245, 197, 66, 0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Camera size={16} style={{ color: 'var(--color-royal-gold-bright)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-ivory)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {slide.photoBadge}
              </span>
              <span style={{ color: 'rgba(245, 197, 66, 0.4)' }}>|</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-parchment-soft)' }}>
                {slide.imageAlt}
              </span>
            </div>

            <button
              onClick={() => setIsPhotoLightboxOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(245, 197, 66, 0.15)',
                border: '1px solid rgba(245, 197, 66, 0.5)',
                borderRadius: '6px',
                padding: '0.35rem 0.85rem',
                color: 'var(--color-royal-gold-bright)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-accent)',
                cursor: 'pointer',
              }}
              title="Close [Esc]"
            >
              <X size={15} />
              <span>Close (Esc)</span>
            </button>
          </div>

          {/* Full Resolution Photo Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1200px',
              maxHeight: '80vh',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 45px rgba(245, 197, 66, 0.35)',
              border: '2px solid rgba(245, 197, 66, 0.75)',
              backgroundColor: '#040302',
            }}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
