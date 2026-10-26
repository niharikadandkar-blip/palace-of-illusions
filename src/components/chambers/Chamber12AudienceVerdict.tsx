import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Users, Award, RotateCcw, QrCode, MessageSquare } from 'lucide-react';

interface Chamber12AudienceVerdictProps {
  onReturnToEntrance: () => void;
  onPrevChamber?: () => void;
}

export const Chamber12AudienceVerdict: React.FC<Chamber12AudienceVerdictProps> = ({
  onReturnToEntrance,
  onPrevChamber,
}) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'audience-dialogue-perspective',
      tabLabel: '1. Changing How We See It',
      tabIcon: <MessageSquare size={14} />,
      kicker: 'FINAL AUDIENCE DIALOGUE ❖ THE OPENING QUESTION REVISITED',
      title: 'When You Think of Draupadi Now, Has Your Understanding Changed?',
      imagePath: '/images/palace/hero-palace-gate.jpg',
      imageAlt: 'The monumental royal palace gates in golden evening dusk',
      imageBadge: 'The Final Threshold',
      visualMetaTitle: 'The Architecture of Perspective',
      visualMetaDesc: 'The palace doors open onto a quiet horizon: does the story change, or do we change the way we see it?',
      content: (
        <div className="slide-body-narrative">
          <p>
            We began this journey at the palace gates with a single inquiry: <em>When you hear the name Draupadi, what is the first thing that comes to mind?</em>
          </p>

          <div style={{
            background: 'rgba(18, 60, 50, 0.55)',
            borderLeft: '4px solid var(--color-antique-gold)',
            padding: '1rem 1.25rem',
            borderRadius: '0 8px 8px 0',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--color-ivory)',
            lineHeight: 1.5,
            margin: '0.75rem 0',
          }}>
            “When we read a familiar story from a different perspective, does the story change—or do we change the way we see it?”
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-accent)', marginTop: '0.35rem', color: 'var(--color-antique-gold-bright)', fontStyle: 'normal' }}>
              — Final Discussion Prompt for the Audience
            </div>
          </div>

          <p>
            <strong>Our Group's Core Reflections:</strong>
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Understanding vs. Approving:</strong> We can take a character’s pain and experiences seriously without needing to approve of every decision they make.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Larger Than Relationships:</strong> Affection, desire, and loyalty complicate a person's life, but never fully define who they are.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Beyond Single Labels:</strong> Draupadi is neither only a victim of the dice hall, nor a flawless heroine, nor an instrument of divine retribution. She is a complete human being living through circumstances she could not always control.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'core-literary-takeaways',
      tabLabel: '2. Four Core Takeaways',
      tabIcon: <Award size={14} />,
      kicker: 'CRITICAL LITERARY EVALUATION ❖ TIMELESS LESSONS',
      title: 'Four Core Takeaways: Agency, Masculine Hubris & Vengeance',
      imagePath: '/images/characters/draupadi-master-portrait.jpg',
      imageAlt: 'Master visual portrait of Queen Draupadi in deep royal silks',
      imageBadge: 'The Literary Verdict',
      visualMetaTitle: 'The Lessons of the Retelling',
      visualMetaDesc: 'Four enduring literary insights that define Divakaruni’s contribution to world literature.',
      content: (
        <div className="slide-body-narrative">
          <p>
            Our group identifies four enduring literary contributions that define <em>The Palace of Illusions</em>:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">1.</span>
              <div className="point-text-block">
                <strong>Agency Within Destiny:</strong> Panchaali could not rewrite cosmic prophecies or stop the war, but her agency lay in refusing silent submission—demanding justice in the Dice Hall and determining how she met her fate with dignity.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">2.</span>
              <div className="point-text-block">
                <strong>The Fragility of Male Honor:</strong> The novel exposes how male chivalric codes (<em>kshatriya dharma</em>) frequently masked gambling addictions, fragile egos, and moral cowardice, ultimately treating women’s bodies as collateral for male pride.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">3.</span>
              <div className="point-text-block">
                <strong>The Emptiness of Retribution:</strong> Fulfilling vows of blood brought no peace to Hastinapur. The novel demonstrates that vengeance is an illusion; it burns down the temple, leaving you alone in the ashes.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">4.</span>
              <div className="point-text-block">
                <strong>Living Mythology:</strong> Ancient epics are not frozen museum pieces. They are dynamic cultural narratives that must be re-examined, challenged, and renewed by every generation.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'group-conclusion-credits-qr',
      tabLabel: '3. Group Roll & QR Code',
      tabIcon: <Users size={14} />,
      kicker: 'PRESENTATION CONCLUSION ❖ ACKNOWLEDGMENTS & ACCESS',
      title: 'The Final Door: Six Presenters, Twelve Chambers & Access QR',
      imagePath: '/images/palace/palace-inner-hall.jpg',
      imageAlt: 'The grand pillared royal hall in warm lamp glow',
      imageBadge: 'Presentation Complete',
      visualMetaTitle: 'Six Presenters, Twelve Chambers',
      visualMetaDesc: 'Thank you for journeying through the Palace of Illusions with our group.',
      content: (
        <div className="slide-body-narrative">
          {/* Group Members Grid */}
          <div style={{
            background: 'rgba(18, 60, 50, 0.65)',
            border: '1px solid rgba(197, 161, 90, 0.45)',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '0.85rem',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              color: 'var(--color-antique-gold-bright)',
              marginBottom: '0.65rem',
              textAlign: 'center',
            }}>
              Group Presenters & Discussion Chambers
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '0.6rem',
            }}>
              {[
                { name: 'Riya', chambers: 'Chambers 1, 5, 6, 8, 9, 12', topic: 'Dice Hall, War Cost, Perspective' },
                { name: 'Sahil', chambers: 'Chambers 1, 2, 5, 6, 9, 11', topic: 'Gateway, Author, Maya Sabha' },
                { name: 'Sukruti', chambers: 'Chambers 1, 2, 4, 8, 10, 12', topic: 'Audience Dialogue, Critique, Closing' },
                { name: 'Lakshya', chambers: 'Chambers 2, 3, 5, 6, 7, 8, 11', topic: 'Karna Dilemma, Desire vs Duty' },
                { name: 'Anushka', chambers: 'Chambers 2, 3, 5, 6, 7, 8, 10', topic: 'Upapandavas, Accountability, Critique' },
                { name: 'Niharika', chambers: 'Chambers 1, 2, 3, 4, 6, 8, 11, 12', topic: 'Subjective Lens, Hinglish Context, Beyond Maya' },
              ].map((member) => (
                <div
                  key={member.name}
                  style={{
                    background: 'rgba(11, 33, 29, 0.85)',
                    border: '1px solid rgba(197, 161, 90, 0.25)',
                    borderRadius: '8px',
                    padding: '0.55rem 0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ color: 'var(--color-ivory)', fontSize: '0.92rem' }}>{member.name}</strong>
                    <span style={{ fontSize: '0.68rem', color: 'var(--color-antique-gold)', fontFamily: 'var(--font-accent)' }}>
                      {member.chambers}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-parchment-soft)', marginTop: '0.2rem' }}>
                    {member.topic}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code & Closing Gratitude Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '0.85rem 1.15rem',
            background: 'rgba(197, 161, 90, 0.12)',
            borderRadius: '10px',
            border: '1px solid rgba(197, 161, 90, 0.3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              {/* Stylized QR Code Badge */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.45rem',
                borderRadius: '8px',
                background: '#FFF9EE',
                color: '#0B211D',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}>
                <QrCode size={40} />
                <span style={{ fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.05em', marginTop: '2px' }}>
                  SCAN DECK
                </span>
              </div>

              <div>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-ivory)', fontWeight: 600 }}>
                  “We hope the illusions end here, but the questions stay with you.”
                </p>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-parchment-soft)' }}>
                  Scan the QR code to revisit any chamber or read the full presentation transcript anytime.
                </p>
              </div>
            </div>

            <button
              onClick={onReturnToEntrance}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--color-antique-gold)',
                color: 'var(--color-midnight-forest)',
                border: 'none',
                padding: '0.6rem 1.25rem',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.85rem',
                fontFamily: 'var(--font-accent)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              title="Return to Chamber 1"
            >
              <RotateCcw size={15} />
              <span>Return to Palace Entrance</span>
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={12}
      chamberKicker="Chamber XII ❖ The Final Door & Conclusion"
      chamberTitle="Audience Verdict — The Final Door"
      chamberSubtitle="“The dissolution of illusion, literary legacy, and final conclusion.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onReturnToEntrance}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/palace/hero-palace-gate.jpg"
      presenterName="All Presenters (Sukruti, Anushka, Lakshya, Niharika, Sahil, Riya)"
    />
  );
};
