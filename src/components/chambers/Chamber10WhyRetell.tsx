import React from 'react';
import { Compass } from 'lucide-react';

interface Chamber10WhyRetellProps {
  onContinue: () => void;
}

export const Chamber10WhyRetell: React.FC<Chamber10WhyRetellProps> = ({ onContinue }) => {
  return (
    <section className="chamber-container" aria-label="Chamber 10: Why Retell the Story?">
      <div
        className="chamber-bg-cover"
        style={{ backgroundImage: `url('/images/palace/palace-inner-hall.jpg')` }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber X ❖ The Literary Mirror</div>
          <h2 className="chamber-title">Why Retell the Story? The Power of Perspective</h2>
          <p className="chamber-subtitle-text">
            “Changing the narrator does not change the truth; it changes what we notice, who we mourn, and what we question.”
          </p>
        </div>

        {/* Two-Panel Comparative Illustrated Tablets */}
        <div className="why-retell-grid">
          {/* Panel Left: Traditional Vyasa Canon with Sanskrit Manuscript and Arjuna */}
          <div className="retell-tablet ancient">
            <div className="retell-tablet-visual-banner">
              <img
                src="/images/book/ancient-manuscript.jpg"
                alt="Ancient Sanskrit Mahabharata Manuscript"
                className="tablet-banner-img"
              />
              <div className="tablet-banner-scrim" />
              <div className="tablet-header-overlay">
                <img
                  src="/images/characters/arjuna.jpg"
                  alt="Arjuna the Epic Archer"
                  className="tablet-corner-thumb"
                />
                <div>
                  <div className="tablet-kicker-tag">ANCIENT SANSKRIT TRADITION</div>
                  <h3 className="retell-tablet-title">The Grand Epic (Vyasa’s Lens)</h3>
                </div>
              </div>
            </div>

            <ul className="retell-points-list">
              <li>
                <strong>The Cosmic Scale:</strong> Focuses on cosmic order (<em>dharma vs. adharma</em>), kingship, dynastic succession, and divine providence.
              </li>
              <li>
                <strong>Martial Heroism:</strong> Celebrates warrior genealogies, divine astras (weapons), and glorious battlefield chivalry.
              </li>
              <li>
                <strong>Women as Catalysts:</strong> Women frequently serve as the moral sparks, trophies, or catalysts that ignite masculine duty and war.
              </li>
              <li>
                <strong>The Omniscient Bard:</strong> Written from an epic, masculine, and philosophical vantage point high above the human fray.
              </li>
            </ul>
          </div>

          {/* Panel Right: Divakaruni Novel Retelling with Draupadi Master Portrait */}
          <div className="retell-tablet modern">
            <div className="retell-tablet-visual-banner">
              <img
                src="/images/characters/draupadi.jpg"
                alt="Panchaali Master Portrait: Queen of Indraprastha"
                className="tablet-banner-img"
              />
              <div className="tablet-banner-scrim" />
              <div className="tablet-header-overlay">
                <img
                  src="/images/characters/draupadi.jpg"
                  alt="Draupadi"
                  className="tablet-corner-thumb"
                />
                <div>
                  <div className="tablet-kicker-tag gold">DIVAKARUNI'S FEMINIST REIMAGINING</div>
                  <h3 className="retell-tablet-title">The Intimate Voice (Panchaali’s Lens)</h3>
                </div>
              </div>
            </div>

            <ul className="retell-points-list">
              <li>
                <strong>The Domestic & Personal:</strong> Explores the emotional cost of living inside a legend—the loneliness, silks, and quiet sacrifices behind palace walls.
              </li>
              <li>
                <strong>Psychological Vulnerability:</strong> Shows legendary heroes not as flawless bronze statues, but as flawed men burdened by fragile egos and rigid codes.
              </li>
              <li>
                <strong>Sovereign Agency:</strong> Draupadi speaks for herself, admitting her own pride, vanity, passionate desires, and secret regrets.
              </li>
              <li>
                <strong>Underside of the Tapestry:</strong> An invitation to witness epic history not from the chariot of kings, but from the hearts of the women who buried the dead.
              </li>
            </ul>
          </div>
        </div>

        {/* Synthesis Banner */}
        <div className="retell-synthesis-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-antique-gold)' }}>
            <Compass size={16} />
            <span style={{ fontFamily: 'var(--font-accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Core Literary Takeaway
            </span>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-ivory)', marginTop: '0.35rem', lineHeight: '1.5' }}>
            Retellings do not destroy ancient epics—they breathe living fire into them. By looking through Panchaali’s eyes, the Mahabharata ceases to be an ancient myth and becomes an urgent, deeply moving human tragedy.
          </p>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <button className="btn-palace-primary" onClick={onContinue}>
            <span>Enter Chamber XI: Critical Press Reviews →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
