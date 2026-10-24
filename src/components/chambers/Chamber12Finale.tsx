import React, { useState } from 'react';
import { FINALE_QUESTIONS } from '../../data/discussionQuestions';
import { MessageSquare, Sparkles, LogOut, Check } from 'lucide-react';

interface Chamber12FinaleProps {
  onReturnToEntrance: () => void;
}

export const Chamber12Finale: React.FC<Chamber12FinaleProps> = ({ onReturnToEntrance }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);
  const [discussedIds, setDiscussedIds] = useState<number[]>([]);

  const toggleDiscussed = (id: number) => {
    setDiscussedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const activeQuestion = FINALE_QUESTIONS.find((q) => q.id === selectedQuestionId) || FINALE_QUESTIONS[0];

  return (
    <section className="chamber-container" aria-label="Chamber 12: Your Turn to Interpret">
      <div
        className="chamber-bg-cover"
        style={{
          backgroundImage: `url('/images/palace/hero-palace-gate.jpg')`,
          filter: 'brightness(0.35) contrast(1.15)',
        }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber XII ❖ The Circle Closes & The Return</div>
          <h2 className="chamber-title">Your Turn to Interpret: Classroom Dialogue</h2>
          <p className="chamber-subtitle-text">
            “You have entered the palace, witnessed the illusions, and heard the unheard voice. What do you see differently now?”
          </p>
        </div>

        {/* 3 Discussion Question Selector Cards */}
        <div className="finale-questions-grid">
          {FINALE_QUESTIONS.map((q) => {
            const isSelected = selectedQuestionId === q.id;
            const isDone = discussedIds.includes(q.id);

            return (
              <div
                key={q.id}
                className={`finale-question-card ${isSelected ? 'active' : ''} ${isDone ? 'discussed' : ''}`}
                onClick={() => setSelectedQuestionId(q.id)}
                role="button"
                tabIndex={0}
              >
                <div className="q-card-top">
                  <span className="q-number">Question {q.id}</span>
                  {isDone && (
                    <span className="q-done-pill">
                      <Check size={12} />
                      <span>Discussed</span>
                    </span>
                  )}
                </div>
                <h3 className="q-card-heading">{q.title}</h3>
                <p className="q-card-body">{q.question}</p>
              </div>
            );
          })}
        </div>

        {/* Active Question Focus Spotlight with Draupadi & Karna Portraits */}
        <div className="finale-focus-panel">
          <div className="focus-panel-top">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MessageSquare size={18} style={{ color: 'var(--color-antique-gold)' }} />
              <h3 className="focus-panel-title">Active Dialogue Spotlight: {activeQuestion.title}</h3>
            </div>

            <button
              className="hud-button"
              onClick={() => toggleDiscussed(activeQuestion.id)}
            >
              <Check size={14} />
              <span>{discussedIds.includes(activeQuestion.id) ? 'Mark as Pending' : 'Mark as Discussed'}</span>
            </button>
          </div>

          <div className="finale-spotlight-content-row">
            {/* Prominent Dual Character Anchors: Draupadi & Karna */}
            <div className="finale-character-anchors">
              <div className="finale-char-pill">
                <img
                  src="/images/characters/draupadi.jpg"
                  alt="Panchaali Master Portrait"
                  className="finale-char-thumb"
                />
                <div className="finale-char-meta">
                  <span className="finale-char-name">Panchaali</span>
                  <span className="finale-char-role">The Reclaimed Voice</span>
                </div>
              </div>

              <div className="finale-char-pill">
                <img
                  src="/images/characters/karna.jpg"
                  alt="Karna"
                  className="finale-char-thumb"
                />
                <div className="finale-char-meta">
                  <span className="finale-char-name">Karna</span>
                  <span className="finale-char-role">The Unresolved Question</span>
                </div>
              </div>
            </div>

            {/* Central Prominent Prompt */}
            <div className="focus-prompt-column">
              <div className="focus-main-question">
                “{activeQuestion.question}”
              </div>

              <div className="focus-probe-box">
                <div className="probe-label">
                  <Sparkles size={14} />
                  <span>Presenter Facilitation Prompt</span>
                </div>
                <p className="probe-text">{activeQuestion.probePrompt}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grand Finale Closing Action: Return to Entrance */}
        <div className="finale-closing-dock">
          <div className="closing-quote-banner">
            “Sometimes the story stays the same. The perspective changes everything.”
          </div>

          <button
            className="btn-palace-primary"
            onClick={onReturnToEntrance}
            id="return-to-entrance-btn"
            style={{ padding: '0.9rem 2.2rem' }}
          >
            <LogOut size={18} />
            <span>Exit the Palace & Return to Gateway</span>
          </button>
        </div>
      </div>
    </section>
  );
};
