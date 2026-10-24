import React, { useEffect } from 'react';
import { CHAMBERS } from '../../data/chambers';
import { X, MapPin } from 'lucide-react';

interface ChamberMapProps {
  isOpen: boolean;
  currentChamber: number;
  onSelectChamber: (id: number) => void;
  onClose: () => void;
}

export const ChamberMap: React.FC<ChamberMapProps> = ({
  isOpen,
  currentChamber,
  onSelectChamber,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'm' || e.key === 'M') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="chamber-map-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-drawer-title"
    >
      <div className="chamber-map-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="map-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <MapPin size={20} style={{ color: 'var(--color-antique-gold)' }} />
            <h3 id="map-drawer-title" className="map-drawer-title">
              The Palace Floor Plan: Chamber Navigation
            </h3>
          </div>

          <button className="modal-close-btn" onClick={onClose} aria-label="Close Palace Map">
            <X size={18} />
          </button>
        </div>

        <p className="map-drawer-desc">
          Jump directly to any chamber during the live school discussion. Press <kbd>M</kbd> or <kbd>Esc</kbd> to close.
        </p>

        {/* 12 Chambers Architectural Grid */}
        <div className="chambers-grid-list">
          {CHAMBERS.map((chamber) => {
            const isActive = chamber.id === currentChamber;

            return (
              <button
                key={chamber.id}
                className={`chamber-nav-card ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onSelectChamber(chamber.id);
                  onClose();
                }}
              >
                <div className="chamber-card-num-row">
                  <span className="chamber-badge-num">Chamber {chamber.id}</span>
                  <span className="chamber-time-pill">{chamber.estimatedMinutes}</span>
                </div>

                <div className="chamber-card-name">{chamber.title}</div>
                <div className="chamber-card-speaker">{chamber.speakerRole}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
