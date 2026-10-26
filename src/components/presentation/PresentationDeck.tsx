import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PRESENTATION_SLIDES, type PresentationSlide } from '../../data/presentationDeck';
import { CinematicSlide } from './CinematicSlide';
import { ChamberMap } from '../common/ChamberMap';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Map,
} from 'lucide-react';

interface PresentationDeckProps {
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const PresentationDeck: React.FC<PresentationDeckProps> = ({
  isReducedMotion,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isChamberMapOpen, setIsChamberMapOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = PRESENTATION_SLIDES.length;
  const currentSlide: PresentationSlide = PRESENTATION_SLIDES[currentSlideIndex];

  // Floating golden lights particles (stable across renders)
  const goldenParticles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${(i * 6.3 + 4) % 96}%`,
      top: `${(i * 7.7 + 6) % 92}%`,
      size: `${3 + (i % 4) * 2}px`,
      duration: `${4 + (i % 5) * 1.5}s`,
      delay: `${(i * 0.4) % 3}s`,
      opacity: 0.25 + (i % 3) * 0.15,
    }));
  }, []);

  // Slide Navigation Handlers
  const handleNextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const handlePrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  // Jump to specific chamber's first slide
  const handleJumpToChamber = useCallback((chamberNum: number) => {
    const targetIdx = PRESENTATION_SLIDES.findIndex((s) => s.chamberNumber === chamberNum);
    if (targetIdx !== -1) {
      setCurrentSlideIndex(targetIdx);
      setIsChamberMapOpen(false);
    }
  }, []);

  // Jump to next/prev chamber
  const handleNextChamber = useCallback(() => {
    const nextChamberNum = currentSlide.chamberNumber + 1;
    if (nextChamberNum <= 12) {
      handleJumpToChamber(nextChamberNum);
    }
  }, [currentSlide.chamberNumber, handleJumpToChamber]);

  const handlePrevChamber = useCallback(() => {
    const prevChamberNum = currentSlide.chamberNumber - 1;
    if (prevChamberNum >= 1) {
      handleJumpToChamber(prevChamberNum);
    }
  }, [currentSlide.chamberNumber, handleJumpToChamber]);

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'ArrowRight' || e.code === 'Space' || e.code === 'PageDown') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.code === 'ArrowLeft' || e.code === 'PageUp' || e.code === 'Backspace') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        handleNextChamber();
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        handlePrevChamber();
      } else if (e.key === 'm' || e.key === 'M') {
        setIsChamberMapOpen((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.code === 'Home') {
        setCurrentSlideIndex(0);
      } else if (e.code === 'End') {
        setCurrentSlideIndex(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, handleNextChamber, handlePrevChamber, totalSlides]);

  return (
    <div
      className="golden-lights-backdrop"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Floating Golden Light Embers */}
      {!isReducedMotion && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 2,
            overflow: 'hidden',
          }}
        >
          {goldenParticles.map((p) => (
            <div
              key={p.id}
              style={{
                position: 'absolute',
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                borderRadius: '50%',
                backgroundColor: '#FFE89E',
                boxShadow: '0 0 12px #F5C542, 0 0 20px rgba(245, 197, 66, 0.6)',
                animation: `goldenBokehDrift ${p.duration} ease-in-out infinite alternate`,
                animationDelay: p.delay,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>
      )}

      {/* 16:9 Presentation Canvas Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '0.75rem 1.25rem',
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            aspectRatio: '16 / 9',
            maxHeight: 'calc(100vh - 74px)',
            maxWidth: '177.78vh',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95), 0 0 35px rgba(245, 197, 66, 0.22)',
            border: '2px solid rgba(245, 197, 66, 0.45)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#0A0807',
          }}
        >
          {/* Animated Slide Transition */}
          <div
            key={currentSlideIndex}
            style={{
              width: '100%',
              height: '100%',
              animation: isReducedMotion ? 'none' : 'pptSlideFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <CinematicSlide slide={currentSlide} isReducedMotion={isReducedMotion} />
          </div>
        </div>
      </div>

      {/* Clean, Eye-Pleasing Golden Presentation Control Bar */}
      <footer
        style={{
          position: 'relative',
          zIndex: 50,
          width: '100%',
          height: '60px',
          backgroundColor: 'rgba(15, 12, 10, 0.92)',
          borderTop: '1px solid rgba(245, 197, 66, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* Left: Slide Progress & Current Chamber */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={() => setIsChamberMapOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: 'rgba(245, 197, 66, 0.12)',
              border: '1px solid rgba(245, 197, 66, 0.4)',
              color: 'var(--color-royal-gold-bright)',
              borderRadius: '8px',
              padding: '0.35rem 0.85rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-accent)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title="Open Chamber Map [M]"
          >
            <Map size={13} />
            <span>Map [M]</span>
          </button>

          <span
            style={{
              fontSize: '0.86rem',
              fontFamily: 'var(--font-accent)',
              color: 'var(--color-royal-gold-bright)',
              letterSpacing: '0.08em',
              fontWeight: 600,
            }}
          >
            SLIDE {String(currentSlideIndex + 1).padStart(2, '0')} / {totalSlides}
          </span>
          <span style={{ color: 'rgba(245, 197, 66, 0.35)' }}>❖</span>
          <span
            style={{
              fontSize: '0.82rem',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-parchment-soft)',
              fontStyle: 'italic',
            }}
          >
            Chamber {currentSlide.chamberRoman}: {currentSlide.chamberTitle}
          </span>
        </div>

        {/* Center: Eye-Pleasing Golden Roman Numerals Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          {[
            { num: 1, roman: 'I', title: 'Enter the Palace' },
            { num: 2, roman: 'II', title: 'The Book' },
            { num: 3, roman: 'III', title: 'A Different Voice' },
            { num: 4, roman: 'IV', title: 'Born of Fire' },
            { num: 5, roman: 'V', title: 'The Maya Sabha' },
            { num: 6, roman: 'VI', title: 'The Dice Hall' },
            { num: 7, roman: 'VII', title: 'Karna' },
            { num: 8, roman: 'VIII', title: 'Cost of Victory' },
            { num: 9, roman: 'IX', title: 'Why Retell?' },
            { num: 10, roman: 'X', title: "Reader's Verdict" },
            { num: 11, roman: 'XI', title: 'Beyond Illusion' },
            { num: 12, roman: 'XII', title: 'The Final Door' },
          ].map((c) => {
            const isActive = currentSlide.chamberNumber === c.num;
            return (
              <button
                key={c.num}
                onClick={() => handleJumpToChamber(c.num)}
                style={{
                  padding: '0.25rem 0.55rem',
                  borderRadius: '6px',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive
                    ? 'var(--color-royal-gold)'
                    : 'rgba(30, 24, 18, 0.6)',
                  color: isActive ? '#090807' : 'var(--color-parchment)',
                  border: isActive
                    ? '1px solid var(--color-royal-gold-bright)'
                    : '1px solid rgba(245, 197, 66, 0.25)',
                  boxShadow: isActive
                    ? '0 0 14px rgba(245, 197, 66, 0.55)'
                    : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
                title={`Chamber ${c.roman}: ${c.title}`}
              >
                {c.roman}
              </button>
            );
          })}
        </div>

        {/* Right: Slide Controls & Fullscreen */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: 'rgba(245, 197, 66, 0.1)',
              border: '1px solid rgba(245, 197, 66, 0.3)',
              color: 'var(--color-royal-gold-bright)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title="Toggle Fullscreen [F]"
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>

          {/* Prev Slide */}
          <button
            onClick={handlePrevSlide}
            disabled={currentSlideIndex === 0}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              backgroundColor: 'rgba(30, 24, 18, 0.75)',
              border: '1px solid rgba(245, 197, 66, 0.35)',
              color: currentSlideIndex === 0 ? 'rgba(255,255,255,0.25)' : 'var(--color-ivory)',
              borderRadius: '6px',
              padding: '0.35rem 0.85rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-accent)',
              cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
            title="Previous Slide [Left Arrow]"
          >
            <ChevronLeft size={16} />
            <span>Prev</span>
          </button>

          {/* Next Slide (Primary Gold Glow Button) */}
          <button
            onClick={handleNextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              backgroundColor: currentSlideIndex === totalSlides - 1
                ? 'rgba(30, 24, 18, 0.4)'
                : 'var(--color-royal-gold)',
              border: '1px solid rgba(245, 197, 66, 0.7)',
              color: currentSlideIndex === totalSlides - 1 ? 'rgba(255,255,255,0.25)' : '#090807',
              fontWeight: 700,
              borderRadius: '6px',
              padding: '0.35rem 1.05rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-accent)',
              cursor: currentSlideIndex === totalSlides - 1 ? 'not-allowed' : 'pointer',
              boxShadow: currentSlideIndex === totalSlides - 1
                ? 'none'
                : '0 0 16px rgba(245, 197, 66, 0.45)',
              transition: 'all 0.2s ease',
            }}
            title="Next Slide [Right Arrow or Space]"
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </footer>

      {/* Chamber Map Drawer */}
      <ChamberMap
        isOpen={isChamberMapOpen}
        currentChamber={currentSlide.chamberNumber}
        onSelectChamber={handleJumpToChamber}
        onClose={() => setIsChamberMapOpen(false)}
      />
    </div>
  );
};
