import { useState, useEffect } from 'react';
import { PresentationDeck } from './components/presentation/PresentationDeck';

export function App() {
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

  return (
    <PresentationDeck
      isReducedMotion={isReducedMotion}
      onToggleReducedMotion={handleToggleReducedMotion}
    />
  );
}

export default App;
