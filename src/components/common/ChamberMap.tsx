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
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(5, 4, 3, 0.92)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease-out',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '88vh',
          backgroundColor: '#0F0C0A',
          border: '2px solid rgba(245, 197, 66, 0.65)',
          borderRadius: '16px',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95), 0 0 40px rgba(245, 197, 66, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          padding: '1.75rem',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(245, 197, 66, 0.3)',
            paddingBottom: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <MapPin size={20} style={{ color: 'var(--color-royal-gold)' }} />
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                color: 'var(--color-royal-gold-bright)',
                margin: 0,
                letterSpacing: '0.04em',
              }}
            >
              The Palace Floor Plan: 12 Chambers
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'rgba(245, 197, 66, 0.12)',
              border: '1px solid rgba(245, 197, 66, 0.35)',
              borderRadius: '8px',
              color: 'var(--color-royal-gold-bright)',
              padding: '0.35rem 0.65rem',
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            title="Close [Esc]"
          >
            <X size={18} />
          </button>
        </div>

        <p
          style={{
            fontSize: '0.86rem',
            fontFamily: 'var(--font-accent)',
            color: 'var(--color-parchment-soft)',
            marginBottom: '1.25rem',
          }}
        >
          Click any chamber to jump directly to that slide. Press <kbd style={{ padding: '0.1rem 0.4rem', borderRadius: '4px', background: 'rgba(245, 197, 66, 0.2)', border: '1px solid rgba(245, 197, 66, 0.4)' }}>M</kbd> or <kbd style={{ padding: '0.1rem 0.4rem', borderRadius: '4px', background: 'rgba(245, 197, 66, 0.2)', border: '1px solid rgba(245, 197, 66, 0.4)' }}>Esc</kbd> to return.
        </p>

        {/* 12 Chambers Architectural Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '0.85rem',
            overflowY: 'auto',
            paddingRight: '0.35rem',
          }}
        >
          {CHAMBERS.map((chamber) => {
            const isActive = chamber.id === currentChamber;

            return (
              <button
                key={chamber.id}
                onClick={() => {
                  onSelectChamber(chamber.id);
                  onClose();
                }}
                style={{
                  textAlign: 'left',
                  padding: '0.9rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: isActive
                    ? 'rgba(245, 197, 66, 0.22)'
                    : 'rgba(24, 18, 14, 0.8)',
                  border: isActive
                    ? '1.5px solid var(--color-royal-gold)'
                    : '1px solid rgba(245, 197, 66, 0.25)',
                  boxShadow: isActive
                    ? '0 0 16px rgba(245, 197, 66, 0.35)'
                    : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-accent)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: isActive ? 'var(--color-royal-gold-bright)' : 'var(--color-sandstone-light)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Chamber {chamber.id}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      color: 'rgba(245, 197, 66, 0.7)',
                      fontFamily: 'var(--font-accent)',
                    }}
                  >
                    {chamber.estimatedMinutes}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#FFFDF8',
                    lineHeight: 1.25,
                  }}
                >
                  {chamber.title}
                </div>

                <div
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--color-parchment-soft)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {chamber.speakerRole}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
