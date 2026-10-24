import React, { useEffect } from 'react';
import { DRAUPADI_MASTER_IDENTITY } from '../../data/draupadiIdentity';
import { X, ShieldCheck, BookOpen } from 'lucide-react';

interface DraupadiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DraupadiModal: React.FC<DraupadiModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const data = DRAUPADI_MASTER_IDENTITY;

  return (
    <div
      className="identity-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="identity-modal-title"
    >
      <div className="identity-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Draupadi reference card"
        >
          <X size={20} />
        </button>

        {/* Master Portrait Column */}
        <div className="identity-portrait-col">
          <img
            src={data.imagePath}
            alt="Draupadi master visual portrait: regal Indian woman with dark brown complexion and royal silk drape"
            className="identity-portrait-img"
          />
        </div>

        {/* Narrative & Visual Identity Column */}
        <div className="identity-info-col">
          <div className="identity-heading-group">
            <h3 id="identity-modal-title">{data.name}</h3>
            <div className="identity-sanskrit">{data.sanskritName}</div>
            <div className="identity-epithet">{data.epithet}</div>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--color-ivory-muted)', lineHeight: '1.6' }}>
            {data.description}
          </p>

          <div>
            <div className="identity-section-title">
              <ShieldCheck size={16} />
              <span>Master Visual Identity (Strict Standard)</span>
            </div>
            <ul className="identity-list">
              {data.visualIdentityNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="identity-section-title">
              <BookOpen size={16} />
              <span>Key Novel Reinterpretations</span>
            </div>
            <ul className="identity-list">
              {data.novelThemes.map((theme, index) => (
                <li key={index}>{theme}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
