import React, { useState } from 'react';
import { EPIC_CHARACTERS } from '../../data/characters';
import type { EpicCharacter } from '../../data/characters';
import { Shield, Sparkles, User, Info } from 'lucide-react';

interface Chamber04CharacterAtlasProps {
  onContinue: () => void;
  onOpenDraupadiModal: () => void;
}

export const Chamber04CharacterAtlas: React.FC<Chamber04CharacterAtlasProps> = ({
  onContinue,
  onOpenDraupadiModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'pandava' | 'kaurava' | 'catalyst'>('all');
  const [hoveredChar, setHoveredChar] = useState<EpicCharacter | null>(null);
  const [selectedChar, setSelectedChar] = useState<EpicCharacter>(EPIC_CHARACTERS[0]);

  const filteredCharacters = EPIC_CHARACTERS.filter((char) => {
    if (filter === 'all') return true;
    return char.alliance === filter;
  });

  return (
    <section className="chamber-container" aria-label="Chamber 4: Character Atlas">
      <div
        className="chamber-bg-cover"
        style={{ backgroundImage: `url('/images/palace/palace-inner-hall.jpg')` }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber IV ❖ The Web of Destiny</div>
          <h2 className="chamber-title">Enter the Epic: Character Gallery</h2>
          <p className="chamber-subtitle-text">
            Every major figure of the epic has a face, a burden, and a destiny. Hover to inspect their role; click to explore their relationship with Panchaali.
          </p>
        </div>

        {/* Alliance Filter Toolbar */}
        <div className="atlas-filter-bar">
          <button
            className={`atlas-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Figures ({EPIC_CHARACTERS.length})
          </button>
          <button
            className={`atlas-filter-btn ${filter === 'pandava' ? 'active' : ''}`}
            onClick={() => setFilter('pandava')}
          >
            The Pandavas & Draupadi
          </button>
          <button
            className={`atlas-filter-btn ${filter === 'kaurava' ? 'active' : ''}`}
            onClick={() => setFilter('kaurava')}
          >
            The Kauravas & Karna
          </button>
          <button
            className={`atlas-filter-btn ${filter === 'catalyst' ? 'active' : ''}`}
            onClick={() => setFilter('catalyst')}
          >
            Krishna (The Catalyst)
          </button>
        </div>

        {/* Main Interactive Stage: Character Grid + Live Inspection Panel */}
        <div className="atlas-stage-grid">
          {/* Character Cards Roster with Illustrated Portraits & Hover Tooltips */}
          <div className="character-cards-grid">
            {filteredCharacters.map((char) => {
              const isSelected = selectedChar.id === char.id;
              const isHovered = hoveredChar?.id === char.id;

              return (
                <div
                  key={char.id}
                  className={`character-token-card ${isSelected ? 'selected' : ''}`}
                  onMouseEnter={() => setHoveredChar(char)}
                  onMouseLeave={() => setHoveredChar(null)}
                  onClick={() => setSelectedChar(char)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`${char.name}: ${char.role}`}
                >
                  {/* Illustrated Character Portrait Frame */}
                  <div className="char-card-portrait-frame">
                    <img
                      src={char.imagePath}
                      alt={`Portrait of ${char.name}`}
                      className="char-card-portrait-img"
                      loading="lazy"
                    />
                    <div className="char-card-portrait-scrim" />
                    <span className="char-symbol-overlay" aria-hidden="true">
                      {char.symbol}
                    </span>
                    <span
                      className="char-alliance-tag-overlay"
                      style={{ borderColor: char.accentColor, color: char.accentColor }}
                    >
                      {char.alliance.toUpperCase()}
                    </span>
                  </div>

                  <div className="char-card-name-group">
                    <h3 className="char-name">{char.name}</h3>
                    <div className="char-sanskrit">{char.sanskritName}</div>
                    <div className="char-role">{char.role}</div>
                  </div>

                  {/* HOVER TOOLTIP POPOVER (Hover reveals name & concise needed info) */}
                  {isHovered && (
                    <div className="char-hover-popover" role="tooltip">
                      <div className="popover-title-row">
                        <span className="popover-name">{char.name}</span>
                        <span className="popover-symbol">{char.symbol}</span>
                      </div>
                      <p className="popover-info">{char.shortInfo}</p>
                      <div className="popover-hint">Click card to inspect full perspective ➔</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Side Spotlight Drawer: Selected Character Large Visual Portrait & Detail */}
          <div className="atlas-detail-panel">
            {/* Hero Visual Spotlight */}
            <div className="detail-hero-banner">
              <img
                src={selectedChar.imagePath}
                alt={`Large portrait of ${selectedChar.name}`}
                className="detail-hero-portrait-img"
              />
              <div className="detail-hero-scrim" />
              <div className="detail-hero-content">
                <span className="detail-hero-symbol">{selectedChar.symbol}</span>
                <div>
                  <h3 className="detail-panel-name">{selectedChar.name}</h3>
                  <div className="detail-panel-epithet">{selectedChar.epithet} • {selectedChar.sanskritName}</div>
                </div>
              </div>
            </div>

            <div className="detail-panel-subbar">
              <span
                className="char-alliance-pill"
                style={{ borderColor: selectedChar.accentColor, color: selectedChar.accentColor }}
              >
                {selectedChar.alliance.toUpperCase()} ALLIANCE
              </span>

              {selectedChar.id === 'draupadi' && (
                <button
                  className="hud-button"
                  onClick={onOpenDraupadiModal}
                  style={{ background: 'var(--color-antique-gold)', color: '#0B211D', padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  title="Inspect Master Visual Portrait"
                >
                  <User size={13} />
                  <span>Master Identity Standards</span>
                </button>
              )}
            </div>

            <div className="detail-body-block">
              <div className="detail-section">
                <div className="detail-section-label">
                  <Info size={14} />
                  <span>Essential Role in Epic</span>
                </div>
                <p className="detail-text">{selectedChar.shortInfo}</p>
              </div>

              <div className="detail-section">
                <div className="detail-section-label">
                  <Sparkles size={14} />
                  <span>In *The Palace of Illusions*</span>
                </div>
                <p className="detail-text">{selectedChar.novelPerspective}</p>
              </div>

              <div className="detail-section">
                <div className="detail-section-label">
                  <Shield size={14} />
                  <span>Epic Canon Fact</span>
                </div>
                <p className="detail-text" style={{ fontStyle: 'italic', color: 'var(--color-sandstone-light)' }}>
                  {selectedChar.epicFact}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
          <button className="btn-palace-primary" onClick={onContinue}>
            <span>Proceed to Chamber V: Meet Krishnaa →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
