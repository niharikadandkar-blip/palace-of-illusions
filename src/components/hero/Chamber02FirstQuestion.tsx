import React, { useState } from 'react';
import { BEGINNER_POLL_OPTIONS } from '../../data/firstQuestion';
import type { BeginnerPollOption } from '../../types';
import { RotateCcw, ArrowLeft, ArrowRight, UserCheck, Flame, BookOpen, Sparkles } from 'lucide-react';

interface Chamber02FirstQuestionProps {
  onBackToGateway: () => void;
  onContinueToBook: () => void;
  onOpenDraupadiModal: () => void;
}

export const Chamber02FirstQuestion: React.FC<Chamber02FirstQuestionProps> = ({
  onBackToGateway,
  onContinueToBook,
  onOpenDraupadiModal,
}) => {
  const [options, setOptions] = useState<BeginnerPollOption[]>(BEGINNER_POLL_OPTIONS);
  const [selectedCardId, setSelectedCardId] = useState<string>('panchaali');
  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  const handleVote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOptions((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt))
    );
  };

  const handleResetPoll = () => {
    setOptions(BEGINNER_POLL_OPTIONS);
  };

  return (
    <section
      className="chamber-two-container"
      style={{ backgroundImage: `url('/images/chambers/palace-courtyard.jpg')` }}
      aria-label="Chamber 2: The First Question"
    >
      <div className="chamber-two-backdrop" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-two-stage">
        {/* Header: Concise & Monumental */}
        <div className="chamber-two-header">
          <div className="chamber-kicker">Chamber II ❖ The Threshold of Perspective</div>
          <h2 className="chamber-two-prompt">
            “We have heard the story. But have we heard every voice within it?”
          </h2>
        </div>

        {/* Two-Column Balanced Visual Grid (1080p Projector Optimized) */}
        <div className="chamber-two-split-grid">
          {/* Left Column: Visual Primer for Beginners */}
          <div className="beginner-primer-card">
            {/* Visual Portrait Spotlight */}
            <div className="primer-visual-banner" onClick={onOpenDraupadiModal} role="button" tabIndex={0} title="Click to inspect Draupadi's master portrait">
              <img
                src="/images/characters/draupadi.jpg"
                alt="Panchaali Master Visual Portrait: dark-brown complexion, royal silks and temple jewelry"
                className="primer-draupadi-thumb"
              />
              <div className="primer-draupadi-text">
                <div className="primer-header-tag" style={{ margin: 0, padding: 0 }}>
                  <Flame size={13} style={{ color: 'var(--color-antique-gold)' }} />
                  <span>The Fire-Born Protagonist</span>
                </div>
                <h3 className="primer-draupadi-name">Panchaali (Krishnaa)</h3>
                <p className="primer-draupadi-note">The Queen whose voice reshapes the epic</p>
              </div>
            </div>

            <div className="primer-story-points">
              <div className="primer-point-item">
                <div className="primer-step-num">1</div>
                <div>
                  <h4 className="primer-point-title">The Ancient Mahabharata</h4>
                  <p className="primer-point-desc">
                    One of India’s greatest epics: a colossal dynastic conflict between two royal families of cousins—the righteous <strong>Pandavas</strong> and the ambitious <strong>Kauravas</strong>—over the throne of Hastinapur.
                  </p>
                </div>
              </div>

              <div className="primer-point-item">
                <div className="primer-step-num">2</div>
                <div>
                  <h4 className="primer-point-title">The Retelling: Through Draupadi’s Eyes</h4>
                  <p className="primer-point-desc">
                    For millennia, this story was framed by male warriors and bards. Author Chitra Banerjee Divakaruni reclaims the narrative through its fire-born queen, <strong>Panchaali</strong>—giving voice to her interior thoughts, pride, and private heartbreaks.
                  </p>
                </div>
              </div>

              <div className="primer-point-item highlight-box">
                <div className="primer-step-num" style={{ background: 'var(--color-antique-gold)', color: '#0B211D' }}>
                  <BookOpen size={14} />
                </div>
                <div>
                  <h4 className="primer-point-title" style={{ color: 'var(--color-antique-gold-bright)' }}>
                    The Central Mystery
                  </h4>
                  <p className="primer-point-desc" style={{ color: 'var(--color-ivory)' }}>
                    She was married to five legendary brothers, admired the archer Arjuna, formed an enigmatic bond with Krishna, and harbored secret questions about the outcast hero Karna.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Access to Draupadi's Authentic Master Portrait */}
            <button
              className="btn-palace-secondary primer-portrait-trigger"
              onClick={onOpenDraupadiModal}
              title="Inspect Draupadi's authentic master visual portrait"
            >
              <UserCheck size={16} style={{ color: 'var(--color-antique-gold)' }} />
              <span>Inspect Draupadi’s Authentic Identity</span>
            </button>
          </div>

          {/* Right Column: Interactive Visual Voice Cards */}
          <div className="beginner-interactive-column">
            <div className="column-kicker-row">
              <span className="column-kicker-text">
                <Sparkles size={14} style={{ color: 'var(--color-antique-gold)', display: 'inline', marginRight: '6px' }} />
                Audience Inquiry: What comes to mind when you hear “Mahabharata”?
              </span>
              {totalVotes > 0 && (
                <button
                  className="reset-tally-btn"
                  onClick={handleResetPoll}
                  title="Reset classroom vote counts"
                >
                  <RotateCcw size={12} />
                  <span>Reset ({totalVotes} votes)</span>
                </button>
              )}
            </div>

            <div className="beginner-cards-container">
              {options.map((opt) => {
                const isSelected = selectedCardId === opt.id;
                const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;

                return (
                  <div
                    key={opt.id}
                    className={`beginner-voice-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedCardId(opt.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="voice-card-top-row">
                      <div className="voice-symbol-badge">
                        {opt.imagePath ? (
                          <img
                            src={opt.imagePath}
                            alt={opt.label}
                            className="voice-card-thumb-img"
                          />
                        ) : (
                          <span className="voice-symbol-glyph">{opt.symbol}</span>
                        )}
                        <div>
                          <div className="voice-archetype-label">{opt.archetype}</div>
                          <h4 className="voice-card-heading">{opt.label}</h4>
                        </div>
                      </div>

                      {/* Live Vote Tally Button */}
                      <button
                        className="voice-vote-btn"
                        onClick={(e) => handleVote(opt.id, e)}
                        title="Click to register an audience hand-raise"
                        aria-label={`Vote for ${opt.label}`}
                      >
                        <span className="vote-count-number">{opt.votes}</span>
                        <span className="vote-count-text">votes</span>
                      </button>
                    </div>

                    {/* Dual Perspective Comparison */}
                    <div className="voice-perspectives-grid">
                      <div className="perspective-box traditional">
                        <div className="perspective-tag">TRADITIONAL MYTH</div>
                        <p className="perspective-desc">{opt.traditionalMyth}</p>
                      </div>

                      <div className="perspective-box novel">
                        <div className="perspective-tag gold">DIVAKARUNI’S LENS</div>
                        <p className="perspective-desc">{opt.novelLens}</p>
                      </div>
                    </div>

                    {/* Minimal Progress Bar */}
                    {totalVotes > 0 && (
                      <div className="voice-progress-track">
                        <div
                          className="voice-progress-fill"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Navigation Toolbar */}
        <div className="chamber-two-action-bar">
          <button
            className="btn-palace-secondary"
            onClick={onBackToGateway}
            id="return-to-gateway-btn"
          >
            <ArrowLeft size={16} />
            <span>Return to Palace Gateway</span>
          </button>

          <button
            className="btn-palace-primary"
            onClick={onContinueToBook}
            id="proceed-to-book-btn"
          >
            <span>Proceed to Chamber III: Open the Book</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
