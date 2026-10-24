import React, { useState } from 'react';
import { ChevronDown, ShieldAlert, Users, Scale } from 'lucide-react';

interface Chamber07DiceHallProps {
  onContinue: () => void;
}

export const Chamber07DiceHall: React.FC<Chamber07DiceHallProps> = ({ onContinue }) => {
  const [revealedQuestions, setRevealedQuestions] = useState<number[]>([1]);

  const toggleQuestion = (num: number) => {
    setRevealedQuestions((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const participants = [
    {
      name: 'Draupadi',
      role: 'The Defiant Questioner',
      image: '/images/characters/draupadi.jpg',
      stance: 'Challenged the assembly: “Can a pawn who lost himself gamble another human being?”',
    },
    {
      name: 'Yudhishthira',
      role: 'The Silent Stakeholder',
      image: '/images/characters/yudhishthira.jpg',
      stance: 'Blinded by royal code, he staked his kingdom, brothers, and wife on a roll of ivory dice.',
    },
    {
      name: 'Duryodhana',
      role: 'The Vengeful Victor',
      image: '/images/characters/duryodhana.jpg',
      stance: 'Orchestrated the humiliation to avenge his wounded pride in the Palace of Illusions.',
    },
    {
      name: 'Karna',
      role: 'The Harsh Accuser',
      image: '/images/characters/karna.jpg',
      stance: 'Egging on the Kauravas, calling her a woman without modesty in bitter retribution.',
    },
  ];

  return (
    <section className="chamber-container" aria-label="Chamber 7: The Dice Hall">
      <div
        className="chamber-bg-cover"
        style={{
          backgroundImage: `url('/images/chambers/dice-hall.jpg')`,
          filter: 'brightness(0.35) contrast(1.2) hue-rotate(-10deg)',
        }}
      />
      <div
        className="chamber-dark-scrim"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(89, 43, 53, 0.85) 0%, rgba(11, 33, 29, 0.98) 85%)',
        }}
      />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker" style={{ color: '#E2A4AE' }}>
            Chamber VII ❖ The Collapse of Justice
          </div>
          <h2 className="chamber-title" style={{ textShadow: '0 4px 20px rgba(89, 43, 53, 0.9)' }}>
            The Dice Hall: Silence of the Elders
          </h2>
          <p className="chamber-subtitle-text">
            “So many revered elders sat in the royal assembly. When a woman challenged the law, who spoke?”
          </p>
        </div>

        {/* Master Scene Visual Stage: Painting + Legal Debate */}
        <div className="dice-hall-split-grid">
          {/* Left Column: Substantial Scene Illustration & Character Rogues */}
          <div className="dice-hall-visual-col">
            <div className="dice-scene-frame">
              <img
                src="/images/chambers/dice-hall.jpg"
                alt="Raja Ravi Varma’s celebrated painting Draupadi Vastraharan, depicting Draupadi before the assembly of silent Kuru elders"
                className="dice-scene-img"
              />
              <div className="dice-scene-scrim" />
              <div className="dice-scene-caption-bar">
                <span className="scene-citation">RAJA RAVI VARMA ❖ DRAUPADI VASTRAHARAN (ROYAL ASSEMBLY)</span>
              </div>
            </div>

            {/* Key Figures Involved Strip */}
            <div className="dice-participants-strip">
              {participants.map((p, idx) => (
                <div key={idx} className="participant-badge-item" title={`${p.name}: ${p.stance}`}>
                  <img src={p.image} alt={p.name} className="participant-thumb" />
                  <div className="participant-meta">
                    <span className="participant-name">{p.name}</span>
                    <span className="participant-role">{p.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Constitutional Challenge & Classroom Discussion Reveals */}
          <div className="dice-hall-stage-card">
            <div className="dice-hall-event-block">
              <div className="dice-hall-event-title">
                <ShieldAlert size={18} style={{ color: '#E2A4AE' }} />
                <span>The Fatal Legal Question</span>
              </div>
              <blockquote className="dice-hall-quote">
                “Did the prince lose himself first, or did he lose me? If he was already a masterless pawn who owned nothing, by what law could he gamble my freedom?”
              </blockquote>
              <p className="dice-hall-summary">
                When dragged before the Kuru court, Draupadi did not weep for mercy—she mounted a formidable constitutional challenge. Yet Bhishma, Drona, and the revered elders looked down at the stone floor, murmuring about the subtleties of <em>dharma</em>.
              </p>
            </div>

            {/* Sequential Classroom Discussion Reveals */}
            <div className="dice-hall-questions-group">
              <div className="dice-question-item">
                <button
                  className="dice-question-header-btn"
                  onClick={() => toggleQuestion(1)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Scale size={16} style={{ color: 'var(--color-antique-gold)' }} />
                    <span className="question-text-title">Discussion Point 1: Complicity & The Bystander Effect</span>
                  </div>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: revealedQuestions.includes(1) ? 'rotate(180deg)' : 'none',
                      transition: 'transform 200ms ease',
                    }}
                  />
                </button>
                {revealedQuestions.includes(1) && (
                  <div className="dice-question-body">
                    <p>
                      Why is the silence of the honorable elders (Bhishma and Drona) portrayed by Divakaruni as far more morally corrosive than Duryodhana’s overt cruelty? How does institutional silence enable violence?
                    </p>
                  </div>
                )}
              </div>

              <div className="dice-question-item">
                <button
                  className="dice-question-header-btn"
                  onClick={() => toggleQuestion(2)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Users size={16} style={{ color: 'var(--color-antique-gold)' }} />
                    <span className="question-text-title">Discussion Point 2: The Transformation of Panchaali</span>
                  </div>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: revealedQuestions.includes(2) ? 'rotate(180deg)' : 'none',
                      transition: 'transform 200ms ease',
                    }}
                  />
                </button>
                {revealedQuestions.includes(2) && (
                  <div className="dice-question-body">
                    <p>
                      In this hall, the trusting queen of Indraprastha dies. In her place stands an avenger whose unbound hair will remain open for thirteen years until washed in Duhshasana’s blood.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <button className="btn-palace-primary" onClick={onContinue}>
            <span>Proceed to Chamber VIII: Karna’s Dilemma →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
