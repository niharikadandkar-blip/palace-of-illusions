import { useState, useEffect, useCallback, useTransition } from 'react';
import { Chamber01Hero } from './components/hero/Chamber01Hero';
import { Chamber02FirstQuestion } from './components/hero/Chamber02FirstQuestion';
import { Chamber03Book } from './components/chambers/Chamber03Book';
import { Chamber04CharacterAtlas } from './components/chambers/Chamber04CharacterAtlas';
import { Chamber05MeetKrishnaa } from './components/chambers/Chamber05MeetKrishnaa';
import { Chamber06MayaSabha } from './components/chambers/Chamber06MayaSabha';
import { Chamber07DiceHall } from './components/chambers/Chamber07DiceHall';
import { Chamber08KarnaDilemma } from './components/chambers/Chamber08KarnaDilemma';
import { Chamber09CostOfWar } from './components/chambers/Chamber09CostOfWar';
import { Chamber10WhyRetell } from './components/chambers/Chamber10WhyRetell';
import { Chamber11Reviews } from './components/chambers/Chamber11Reviews';
import { Chamber12Finale } from './components/chambers/Chamber12Finale';

import { NavigationHUD } from './components/common/NavigationHUD';
import { ChamberMap } from './components/common/ChamberMap';
import { DraupadiModal } from './components/common/DraupadiModal';
import { CHAMBERS } from './data/chambers';

export function App() {
  const [currentChamber, setCurrentChamber] = useState<number>(1);
  const [isDraupadiModalOpen, setIsDraupadiModalOpen] = useState<boolean>(false);
  const [isChamberMapOpen, setIsChamberMapOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [, startTransition] = useTransition();

  // Reduced motion detection & manual toggle
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const handleToggleReducedMotion = () => {
    setIsReducedMotion((prev) => !prev);
  };

  // Synchronize .reduced-motion class on root element
  useEffect(() => {
    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [isReducedMotion]);

  // Safe navigation transition with timeout watchdog
  const navigateToChamber = useCallback(
    (targetChamber: number) => {
      if (isTransitioning) return;
      if (targetChamber < 1 || targetChamber > CHAMBERS.length) return;

      setIsTransitioning(true);

      startTransition(() => {
        setCurrentChamber(targetChamber);
      });

      // Watchdog timeout guarantees transition lock is always released
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, isReducedMotion ? 100 : 700);

      return () => clearTimeout(timer);
    },
    [isTransitioning, isReducedMotion]
  );

  const handleNext = useCallback(() => {
    if (currentChamber < CHAMBERS.length) {
      navigateToChamber(currentChamber + 1);
    }
  }, [currentChamber, navigateToChamber]);

  const handlePrev = useCallback(() => {
    if (currentChamber > 1) {
      navigateToChamber(currentChamber - 1);
    }
  }, [currentChamber, navigateToChamber]);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.code === 'Space' || e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'r' || e.key === 'R') {
        handleToggleReducedMotion();
      } else if (e.key === 'm' || e.key === 'M') {
        setIsChamberMapOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const activeMeta = CHAMBERS.find((c) => c.id === currentChamber) || CHAMBERS[0];

  return (
    <div className="palace-viewport">
      {/* Top Architectural Lintel Bar */}
      <header className="palace-top-lintel">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: 'var(--color-antique-gold)', fontSize: '0.9rem' }}>❖</span>
          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-parchment-soft)',
            }}
          >
            The Palace of Illusions — Chamber {currentChamber}: {activeMeta.title}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontSize: '0.78rem',
              color: 'var(--color-sandstone-light)',
              fontFamily: 'var(--font-accent)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {activeMeta.speakerRole}
          </span>
        </div>
      </header>

      {/* Main Chamber Stage */}
      <main style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        {currentChamber === 1 && (
          <Chamber01Hero
            onEnter={() => navigateToChamber(2)}
            onBypass={() => navigateToChamber(2)}
            isReducedMotion={isReducedMotion}
            isTransitioning={isTransitioning}
          />
        )}

        {currentChamber === 2 && (
          <Chamber02FirstQuestion
            onBackToGateway={() => navigateToChamber(1)}
            onContinueToBook={() => navigateToChamber(3)}
            onOpenDraupadiModal={() => setIsDraupadiModalOpen(true)}
          />
        )}

        {currentChamber === 3 && (
          <Chamber03Book onContinue={() => navigateToChamber(4)} />
        )}

        {currentChamber === 4 && (
          <Chamber04CharacterAtlas
            onContinue={() => navigateToChamber(5)}
            onOpenDraupadiModal={() => setIsDraupadiModalOpen(true)}
          />
        )}

        {currentChamber === 5 && (
          <Chamber05MeetKrishnaa
            onContinue={() => navigateToChamber(6)}
            onOpenDraupadiModal={() => setIsDraupadiModalOpen(true)}
          />
        )}

        {currentChamber === 6 && (
          <Chamber06MayaSabha onContinue={() => navigateToChamber(7)} />
        )}

        {currentChamber === 7 && (
          <Chamber07DiceHall onContinue={() => navigateToChamber(8)} />
        )}

        {currentChamber === 8 && (
          <Chamber08KarnaDilemma onContinue={() => navigateToChamber(9)} />
        )}

        {currentChamber === 9 && (
          <Chamber09CostOfWar onContinue={() => navigateToChamber(10)} />
        )}

        {currentChamber === 10 && (
          <Chamber10WhyRetell onContinue={() => navigateToChamber(11)} />
        )}

        {currentChamber === 11 && (
          <Chamber11Reviews onContinue={() => navigateToChamber(12)} />
        )}

        {currentChamber === 12 && (
          <Chamber12Finale onReturnToEntrance={() => navigateToChamber(1)} />
        )}
      </main>

      {/* Bottom Architectural Lintel & Presenter Navigation HUD */}
      <NavigationHUD
        currentChamber={currentChamber}
        totalChambers={CHAMBERS.length}
        activeChamberTitle={activeMeta.title}
        onPrev={handlePrev}
        onNext={handleNext}
        canPrev={currentChamber > 1}
        canNext={currentChamber < CHAMBERS.length}
        isReducedMotion={isReducedMotion}
        onToggleReducedMotion={handleToggleReducedMotion}
        onOpenDraupadiModal={() => setIsDraupadiModalOpen(true)}
        onOpenChamberMap={() => setIsChamberMapOpen(true)}
      />

      {/* Slide-out Palace Chamber Map Drawer */}
      <ChamberMap
        isOpen={isChamberMapOpen}
        currentChamber={currentChamber}
        onSelectChamber={(id) => navigateToChamber(id)}
        onClose={() => setIsChamberMapOpen(false)}
      />

      {/* Master Draupadi Visual Reference Inspection Modal */}
      <DraupadiModal
        isOpen={isDraupadiModalOpen}
        onClose={() => setIsDraupadiModalOpen(false)}
      />
    </div>
  );
}

export default App;
