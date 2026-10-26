import React from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface SubSlideData {
  id: string;
  tabLabel: string;
  tabIcon?: React.ReactNode;
  kicker: string;
  title: string;
  imagePath: string;
  imageAlt: string;
  imageBadge?: string;
  visualMetaTitle: string;
  visualMetaDesc: string;
  content: React.ReactNode;
}

interface SubSlideLayoutProps {
  chamberNumber: number;
  chamberKicker: string;
  chamberTitle: string;
  chamberSubtitle: string;
  subSlides: SubSlideData[];
  currentSubSlide: number;
  onSubSlideChange: (index: number) => void;
  onContinue: () => void;
  onPrevChamber?: () => void;
  backgroundImage?: string;
  presenterName?: string;
}

export const SubSlideLayout: React.FC<SubSlideLayoutProps> = ({
  chamberNumber,
  chamberKicker,
  chamberTitle,
  chamberSubtitle,
  subSlides,
  currentSubSlide,
  onSubSlideChange,
  onContinue,
  onPrevChamber,
  backgroundImage = '/images/palace/palace-inner-hall.jpg',
  presenterName,
}) => {
  const activeSlide = subSlides[currentSubSlide] || subSlides[0];
  const totalSlides = subSlides.length;

  const handleNext = () => {
    if (currentSubSlide < totalSlides - 1) {
      onSubSlideChange(currentSubSlide + 1);
    } else {
      onContinue();
    }
  };

  const handlePrev = () => {
    if (currentSubSlide > 0) {
      onSubSlideChange(currentSubSlide - 1);
    } else if (onPrevChamber) {
      onPrevChamber();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.code === 'ArrowRight' || e.code === 'Space') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSubSlide, totalSlides, onContinue, onPrevChamber]);

  return (
    <section className="chamber-container" aria-label={`Chamber ${chamberNumber}: ${chamberTitle}`}>
      {/* Background Architectural Canvas */}
      <div
        className="chamber-bg-cover"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Architectural Header */}
        <div className="chamber-heading-wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div className="chamber-kicker">{chamberKicker}</div>
            {presenterName && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.2rem 0.65rem',
                borderRadius: '12px',
                background: 'rgba(197, 161, 90, 0.12)',
                border: '1px solid rgba(197, 161, 90, 0.35)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-accent)',
                letterSpacing: '0.08em',
                color: 'var(--color-antique-gold-bright)',
                textTransform: 'uppercase',
              }}>
                <span style={{ color: 'var(--color-antique-gold)' }}>❖</span>
                <span>Presenter: {presenterName}</span>
              </div>
            )}
          </div>
          <h2 className="chamber-title">{chamberTitle}</h2>
          <p className="chamber-subtitle-text">{chamberSubtitle}</p>
        </div>

        {/* Sub-Slide Pill Selector Navigation */}
        <div className="chamber-subslide-nav" role="tablist">
          <div className="subslide-pills-group">
            {subSlides.map((slide, idx) => {
              const isActive = idx === currentSubSlide;
              return (
                <button
                  key={slide.id}
                  className={`subslide-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onSubSlideChange(idx)}
                  role="tab"
                  aria-selected={isActive}
                  id={`subslide-tab-${chamberNumber}-${idx + 1}`}
                >
                  {slide.tabIcon}
                  <span>{slide.tabLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="subslide-counter-badge">
            <span>Slide {currentSubSlide + 1} of {totalSlides}</span>
          </div>
        </div>

        {/* Master Presentation Card Grid */}
        <div className="presentation-slide-grid">
          {/* Left Column: Visual Anchor */}
          <div className="presentation-visual-col">
            <div className="presentation-visual-frame">
              <img
                src={activeSlide.imagePath}
                alt={activeSlide.imageAlt}
                className="presentation-visual-img"
              />
              <div className="presentation-visual-scrim" />
              {activeSlide.imageBadge && (
                <span className="presentation-visual-badge">
                  <Sparkles size={11} />
                  <span>{activeSlide.imageBadge}</span>
                </span>
              )}
            </div>

            <div className="presentation-visual-meta">
              <h4 className="visual-meta-title">{activeSlide.visualMetaTitle}</h4>
              <p className="visual-meta-desc">{activeSlide.visualMetaDesc}</p>
            </div>
          </div>

          {/* Right Column: Structured Presentation Content */}
          <div className="presentation-content-col">
            <div>
              <div className="slide-main-header">
                <span className="slide-kicker-tag">{activeSlide.kicker}</span>
                <h3 className="slide-header-title">{activeSlide.title}</h3>
              </div>

              <div style={{ marginTop: '1rem' }}>
                {activeSlide.content}
              </div>
            </div>

            {/* Stepper Footer */}
            <div className="subslide-stepper-footer">
              <button
                className="stepper-nav-btn"
                onClick={handlePrev}
                disabled={currentSubSlide === 0 && !onPrevChamber}
                title="Go to previous slide or chamber"
              >
                <ChevronLeft size={16} />
                <span>{currentSubSlide === 0 ? 'Previous Chamber' : 'Previous Slide'}</span>
              </button>

              <div className="stepper-progress-indicator">
                {subSlides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`progress-dot ${idx === currentSubSlide ? 'active' : ''}`}
                    onClick={() => onSubSlideChange(idx)}
                    title={`Jump to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                className="stepper-nav-btn"
                onClick={handleNext}
                title="Advance to next slide or chamber"
              >
                <span>{currentSubSlide === totalSlides - 1 ? 'Next Chamber' : 'Next Slide'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
