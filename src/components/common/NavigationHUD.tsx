import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2, Eye, ChevronLeft, ChevronRight, Activity, Map, Clock, ScrollText } from 'lucide-react';

interface NavigationHUDProps {
  currentChamber: number;
  totalChambers: number;
  activeChamberTitle: string;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
  onOpenDraupadiModal: () => void;
  onOpenChamberMap: () => void;
  onOpenSpeakerScript?: () => void;
}

export const NavigationHUD: React.FC<NavigationHUDProps> = ({
  currentChamber,
  totalChambers,
  activeChamberTitle,
  onPrev,
  onNext,
  canPrev,
  canNext,
  isReducedMotion,
  onToggleReducedMotion,
  onOpenDraupadiModal,
  onOpenChamberMap,
  onOpenSpeakerScript,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // 12-15 min presentation timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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

  return (
    <footer className="palace-bottom-lintel">
      {/* Left: Chamber index & Active Chamber Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        <button
          className="hud-button"
          onClick={onOpenChamberMap}
          title="Open Palace Floor Plan [Hotkey: M]"
          style={{ borderColor: 'var(--color-antique-gold)' }}
        >
          <Map size={15} style={{ color: 'var(--color-antique-gold-bright)' }} />
          <span>Palace Map ({currentChamber}/{totalChambers})</span>
        </button>

        <span
          style={{
            fontSize: '0.82rem',
            color: 'var(--color-parchment)',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            letterSpacing: '0.02em',
          }}
          className="speaker-badge-desktop"
        >
          {activeChamberTitle}
        </span>
      </div>

      {/* Center/Right: Presenter Utility Controls */}
      <div className="hud-container">
        {/* Presentation Timer */}
        <button
          className="hud-button timer-pill"
          onClick={() => setIsTimerRunning((prev) => !prev)}
          title="Presentation timer [Target: 12–15 mins]. Click to pause/resume."
        >
          <Clock size={13} style={{ color: elapsedSeconds > 900 ? '#FF6B6B' : 'var(--color-antique-gold)' }} />
          <span>{formatTimer(elapsedSeconds)}</span>
        </button>

        {/* Group Speaker Script Prompter */}
        {onOpenSpeakerScript && (
          <button
            className="hud-button"
            onClick={onOpenSpeakerScript}
            title="Open 6-Speaker Discussion Script & Cue Prompter [Hotkey: S]"
            style={{
              borderColor: 'rgba(197, 161, 90, 0.65)',
              background: 'rgba(197, 161, 90, 0.15)',
            }}
          >
            <ScrollText size={14} style={{ color: 'var(--color-antique-gold-bright)' }} />
            <span style={{ color: 'var(--color-antique-gold-bright)', fontWeight: 600 }}>Script [S]</span>
          </button>
        )}

        {/* Draupadi Identity Reference */}
        <button
          className="hud-button"
          onClick={onOpenDraupadiModal}
          title="Inspect Draupadi's master visual identity standard"
        >
          <Eye size={14} />
          <span>Draupadi</span>
        </button>

        {/* Reduced Motion Toggle */}
        <button
          className={`hud-button ${isReducedMotion ? 'active' : ''}`}
          onClick={onToggleReducedMotion}
          title="Toggle Reduced Motion mode [Hotkey: R]"
        >
          <Activity size={14} />
          <span>{isReducedMotion ? 'Reduced' : 'Smooth'}</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          className="hud-button"
          onClick={toggleFullscreen}
          title="Toggle Fullscreen presentation mode [Hotkey: F]"
        >
          {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
        </button>

        {/* Navigation Step Arrows */}
        <button
          className="hud-button"
          onClick={onPrev}
          disabled={!canPrev}
          style={{ opacity: canPrev ? 1 : 0.4, cursor: canPrev ? 'pointer' : 'not-allowed' }}
          title="Previous Chamber [Hotkey: Left Arrow]"
        >
          <ChevronLeft size={16} />
          <span>Prev</span>
        </button>

        <button
          className="hud-button"
          onClick={onNext}
          disabled={!canNext}
          style={{
            opacity: canNext ? 1 : 0.4,
            cursor: canNext ? 'pointer' : 'not-allowed',
            background: canNext ? 'var(--color-antique-gold)' : undefined,
            color: canNext ? 'var(--color-midnight-forest)' : undefined,
            fontWeight: 600,
          }}
          title="Next Chamber [Hotkey: Right Arrow or Space]"
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </footer>
  );
};
