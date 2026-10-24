import React, { useState } from 'react';
import { Droplets, Sparkles, AlertCircle, Eye } from 'lucide-react';

interface Chamber06MayaSabhaProps {
  onContinue: () => void;
}

export const Chamber06MayaSabha: React.FC<Chamber06MayaSabhaProps> = ({ onContinue }) => {
  const [activeHotspot, setActiveHotspot] = useState<number>(1);

  const hotspots = [
    {
      id: 1,
      title: 'The Liquid Floor & Deceptive Glass',
      icon: <Droplets size={16} />,
      kicker: 'Architectural Sorcery',
      quote: '“What seemed like solid marble turned into deep, cool water; what looked like a flowing stream was crystal glass.”',
      insight: 'The demon architect Maya constructed a palace that mirrored the hidden desires and insecurities of whoever stepped inside. Floors reflected pillars so perfectly that visitors could not distinguish solid rock from deep pools of water.',
      highlightImage: '/images/chambers/maya-sabha.jpg',
      characterName: 'The Mirror Sanctum',
      characterRole: 'Optical illusion between matter and reflection',
    },
    {
      id: 2,
      title: 'The Fortress of Panchaali’s Pride',
      icon: <Sparkles size={16} />,
      kicker: 'Emotional Architecture',
      quote: '“For the first time in my life, I had a home that answered to my mind. It was my sanctuary, my kingdom, my dangerous pride.”',
      insight: 'In the novel, the palace is not just stone and magic—it represents Draupadi’s brief season of absolute sovereignty. She oversaw its design, water gardens, and hidden passageways, finding a rare freedom she would never know again.',
      highlightImage: '/images/characters/draupadi.jpg',
      characterName: 'Queen Panchaali',
      characterRole: 'Sovereign architect & guardian of the illusions',
    },
    {
      id: 3,
      title: 'The Fatal Stumble & The Court’s Laughter',
      icon: <AlertCircle size={16} />,
      kicker: 'The Catalyst of War',
      quote: '“He drew up his robes to avoid water that was only glass. Later, he stepped boldly into water he thought was polished stone.”',
      insight: 'Duryodhana’s humiliation before the court and the laughter echoing from the upper balconies crystallized his envy into a venomous vow. The palace of wonder transformed into the seedbed of annihilation.',
      highlightImage: '/images/characters/duryodhana.jpg',
      characterName: 'Prince Duryodhana',
      characterRole: 'Humiliated cousin whose wounded pride ignited war',
    },
  ];

  const current = hotspots[activeHotspot - 1];

  return (
    <section className="chamber-container" aria-label="Chamber 6: The Palace of Illusions">
      <div
        className="chamber-bg-cover"
        style={{ backgroundImage: `url('/images/chambers/maya-sabha.jpg')` }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber VI ❖ Maya Sabha</div>
          <h2 className="chamber-title">The Palace of Illusions: Pride, Wonder & Deception</h2>
          <p className="chamber-subtitle-text">
            “A palace can look perfect from the outside. But what does it conceal within?”
          </p>
        </div>

        {/* Main Visual Stage: Panoramic Architecture + Character Drama */}
        <div className="maya-stage-layout">
          {/* Panoramic Illustration Banner with Embedded Hotspot Markers */}
          <div className="maya-panorama-hero">
            <img
              src="/images/chambers/maya-sabha.jpg"
              alt="Panoramic interior of Maya Sabha with reflective mirror floors, carved sandstone pillars, and water-like optical illusions"
              className="maya-panorama-img"
            />
            <div className="maya-panorama-scrim" />

            {/* Hotspot Indicators Overlaid on Panorama */}
            <div className="maya-panorama-badge-row">
              <span className="maya-pano-tag">
                <Eye size={13} />
                <span>SHEESH MAHAL ARCHITECTURE ❖ PALACE OF REFLECTIONS</span>
              </span>
            </div>

            {/* Character Vignettes in Bottom Strip */}
            <div className="maya-characters-strip">
              <div
                className={`maya-char-mini-card ${activeHotspot === 2 ? 'active' : ''}`}
                onClick={() => setActiveHotspot(2)}
              >
                <img
                  src="/images/characters/draupadi.jpg"
                  alt="Draupadi in Maya Sabha"
                  className="maya-mini-thumb"
                />
                <div>
                  <div className="maya-mini-title">Panchaali's Pride</div>
                  <div className="maya-mini-sub">The sovereign queen</div>
                </div>
              </div>

              <div
                className={`maya-char-mini-card ${activeHotspot === 3 ? 'active' : ''}`}
                onClick={() => setActiveHotspot(3)}
              >
                <img
                  src="/images/characters/duryodhana.jpg"
                  alt="Duryodhana in Maya Sabha"
                  className="maya-mini-thumb"
                />
                <div>
                  <div className="maya-mini-title">Duryodhana's Fall</div>
                  <div className="maya-mini-sub">The fateful laughter</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hotspot Selector & Narrative Detail */}
          <div className="maya-content-panel">
            {/* Hotspot Selector Buttons */}
            <div className="hotspot-nav-bar">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  className={`hotspot-selector-btn ${activeHotspot === h.id ? 'active' : ''}`}
                  onClick={() => setActiveHotspot(h.id)}
                >
                  {h.icon}
                  <span>{h.title}</span>
                </button>
              ))}
            </div>

            {/* Active Hotspot Narrative Card */}
            <div className="maya-sabha-card">
              <div className="maya-card-header">
                <div>
                  <div className="maya-kicker">{current.kicker}</div>
                  <h3 className="maya-card-title">{current.title}</h3>
                </div>
                <div className="maya-character-portrait-badge">
                  <img src={current.highlightImage} alt={current.characterName} className="badge-thumb-img" />
                  <div className="badge-thumb-meta">
                    <span className="badge-thumb-name">{current.characterName}</span>
                    <span className="badge-thumb-role">{current.characterRole}</span>
                  </div>
                </div>
              </div>

              <blockquote className="maya-card-quote">
                {current.quote}
              </blockquote>

              <p className="maya-card-body">
                {current.insight}
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <button className="btn-palace-primary" onClick={onContinue}>
            <span>Enter Chamber VII: The Dice Hall →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
