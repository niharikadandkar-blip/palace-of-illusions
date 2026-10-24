import React, { useState } from 'react';
import { Scale, HeartHandshake, ShieldAlert, Sparkles } from 'lucide-react';

interface Chamber08KarnaDilemmaProps {
  onContinue: () => void;
}

export const Chamber08KarnaDilemma: React.FC<Chamber08KarnaDilemmaProps> = ({ onContinue }) => {
  const [balance, setBalance] = useState<number>(50); // 0 = Full Sympathy, 100 = Full Accountability

  return (
    <section className="chamber-container" aria-label="Chamber 8: Karna: Sympathy and Accountability">
      <div
        className="chamber-bg-cover"
        style={{ backgroundImage: `url('/images/palace/palace-inner-hall.jpg')` }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber VIII ❖ Moral Ambiguity</div>
          <h2 className="chamber-title">Karna: Sympathy vs. Accountability</h2>
          <p className="chamber-subtitle-text">
            “Can we understand someone’s pain? Does that understanding excuse their choices?”
          </p>
        </div>

        {/* Interactive Balance Slider */}
        <div className="karna-slider-container">
          <div className="slider-header-row">
            <span style={{ color: 'var(--color-antique-gold)', fontWeight: 600 }}>
              <HeartHandshake size={16} style={{ display: 'inline', marginRight: '6px' }} />
              Understanding His Wound ({100 - balance}%)
            </span>
            <div className="scale-center-badge">
              <Scale size={18} />
              <span>Moral Balance</span>
            </div>
            <span style={{ color: '#E2A4AE', fontWeight: 600 }}>
              Judging His Actions ({balance}%)
              <ShieldAlert size={16} style={{ display: 'inline', marginLeft: '6px' }} />
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
            className="karna-range-input"
            aria-label="Adjust moral balance between sympathy and accountability"
          />
        </div>

        {/* Dual-Panel Visual Split Grid with Authentic Portraits */}
        <div className="karna-dual-visual-grid">
          {/* Left Panel: Sympathy / The Wounded Hero with Karna Portrait */}
          <div
            className={`karna-perspective-panel sympathy ${balance < 50 ? 'highlighted' : ''}`}
            onClick={() => setBalance(25)}
          >
            <div className="karna-portrait-header">
              <img
                src="/images/characters/karna.jpg"
                alt="Detailed portrait of Karna in golden divine armor on Kurukshetra"
                className="karna-header-thumb"
              />
              <div>
                <div className="panel-badge gold">THE WOUND: WHY WE SYMPATHIZE</div>
                <h3 className="panel-title">Karna: The Generous Outcast</h3>
              </div>
            </div>

            <ul className="karna-point-list">
              <li>
                <strong>Cast Away at Birth:</strong> Abandoned by Queen Kunti in a river basket; raised by a gentle charioteer.
              </li>
              <li>
                <strong>Systemic Humiliation:</strong> Mocked by princes as low-born; denied his rightful archery challenges despite divine lineage.
              </li>
              <li>
                <strong>The Swayamvara Rejection:</strong> Rejected before the royal assembly when Panchaali refused to wed a charioteer's son to appease her brother.
              </li>
              <li>
                <strong>Radical Loyalty to Duryodhana:</strong> Stood by Duryodhana till death because Duryodhana was the only prince who granted him royal dignity.
              </li>
            </ul>

            <div className="karna-scene-vignette">
              <img
                src="/images/chambers/swayamvara-archery.jpg"
                alt="Draupadi's archery contest where Karna was barred from participating"
                className="vignette-img"
              />
              <span className="vignette-label">The Swayamvara: Where their destinies diverged</span>
            </div>
          </div>

          {/* Right Panel: Accountability / The Complicit Warrior with Draupadi Portrait */}
          <div
            className={`karna-perspective-panel accountability ${balance > 50 ? 'highlighted' : ''}`}
            onClick={() => setBalance(75)}
          >
            <div className="karna-portrait-header">
              <img
                src="/images/characters/draupadi.jpg"
                alt="Panchaali Master Portrait: Queen demanding justice and holding perpetrators accountable"
                className="karna-header-thumb"
              />
              <div>
                <div className="panel-badge burgundy">THE DEED: WHY WE HOLD HIM ACCOUNTABLE</div>
                <h3 className="panel-title">The Complicit Warrior</h3>
              </div>
            </div>

            <ul className="karna-point-list">
              <li>
                <strong>Inciting the Disrobing:</strong> In the Dice Hall, Karna explicitly urged Duhshasana to strip Panchaali before the gathered elders.
              </li>
              <li>
                <strong>Cruelty Beyond Duty:</strong> Publicly called her a woman without virtue, exceeding even Duryodhana’s direct malice.
              </li>
              <li>
                <strong>The Death of Abhimanyu:</strong> Participated in the group entrapment and slaying of Arjuna’s teenage son, breaking the warrior code.
              </li>
              <li>
                <strong>Pain Does Not Excuse Cruelty:</strong> He suffered unjust caste oppression, yet chose to weaponize that cruelty against a defenseless woman.
              </li>
            </ul>

            <div className="karna-scene-vignette">
              <div className="quote-vignette-box">
                <Sparkles size={14} style={{ color: 'var(--color-antique-gold)' }} />
                <span>Panchaali’s Reflection: “I mourned his genius and his tragedy. But I could never forgive his voice in that hall.”</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <button className="btn-palace-primary" onClick={onContinue}>
            <span>Enter Chamber IX: The Cost of Victory →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
