import React, { useState } from 'react';
import { Skull, Crown, Flame, Eye } from 'lucide-react';

interface Chamber09CostOfWarProps {
  onContinue: () => void;
}

export const Chamber09CostOfWar: React.FC<Chamber09CostOfWarProps> = ({ onContinue }) => {
  const [activeView, setActiveView] = useState<'hollow-crown' | 'lost-sons' | 'panchaali-grief'>('hollow-crown');

  const views = {
    'hollow-crown': {
      title: 'The Hollow Throne',
      portrait: '/images/characters/yudhishthira.jpg',
      characterRole: 'King Yudhishthira: Crowned Over a Graveyard',
      quote: '“We won the greatest kingdom on earth, and all it gave us was a palace filled with ghosts.”',
      body: 'Yudhishthira took the throne of Hastinapur, but his eyes were sunken and dry. Millions of warriors lay dead on the plains of Kurukshetra. The triumphant coronation felt more like a state funeral than a celebration of righteousness.',
    },
    'lost-sons': {
      title: 'The Murdered Sons',
      portrait: '/images/chambers/cost-of-victory.jpg',
      characterRole: 'The Fallen Upapandavas: Slain While Sleeping',
      quote: '“Five sons I gave to the Pandavas. Five boys who laughed and practiced their bows. In one single night of cowardice, they were extinguished.”',
      body: 'On the final night of the war, Ashwatthama crept into the sleeping Pandava encampment and slaughtered all five of Draupadi’s sons. The lineage of the Pandavas was nearly wiped out. What was the throne worth when there was no child left to inherit it?',
    },
    'panchaali-grief': {
      title: 'Panchaali’s Awakening',
      portrait: '/images/characters/draupadi.jpg',
      characterRole: 'Queen Panchaali: The Avenger Bereft of Peace',
      quote: '“I had fed my wrath for thirteen years. Now the enemy was dead, his blood washed from my hair, and I realized: vengeance does not fill the void. It only burns the temple down.”',
      body: 'In Divakaruni’s retelling, Panchaali’s deepest transformation is not her thirst for retribution, but her ultimate realization of war’s utter futility. The crown she coveted was cold, heavy, and silent.',
    },
  };

  const current = views[activeView];

  return (
    <section className="chamber-container" aria-label="Chamber 9: The Cost of Victory">
      <div
        className="chamber-bg-cover"
        style={{
          backgroundImage: `url('/images/chambers/cost-of-victory.jpg')`,
          filter: 'brightness(0.3) contrast(1.1) grayscale(0.2)',
        }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber IX ❖ Hollow Triumphs</div>
          <h2 className="chamber-title">The Cost of Victory: An Empty Throne</h2>
          <p className="chamber-subtitle-text">
            “If victory leaves everyone shattered and bereaved, what does winning truly mean?”
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="cost-tab-bar">
          <button
            className={`cost-tab-btn ${activeView === 'hollow-crown' ? 'active' : ''}`}
            onClick={() => setActiveView('hollow-crown')}
          >
            <Crown size={15} />
            <span>The Hollow Throne</span>
          </button>
          <button
            className={`cost-tab-btn ${activeView === 'lost-sons' ? 'active' : ''}`}
            onClick={() => setActiveView('lost-sons')}
          >
            <Skull size={15} />
            <span>The Murdered Sons</span>
          </button>
          <button
            className={`cost-tab-btn ${activeView === 'panchaali-grief' ? 'active' : ''}`}
            onClick={() => setActiveView('panchaali-grief')}
          >
            <Flame size={15} />
            <span>Panchaali’s Awakening</span>
          </button>
        </div>

        {/* Master Aftermath Visual Stage */}
        <div className="cost-visual-stage-grid">
          {/* Left Column: Authentic Aftermath Painting Artwork */}
          <div className="cost-artwork-card">
            <div className="cost-artwork-frame">
              <img
                src="/images/chambers/cost-of-victory.jpg"
                alt="Return of Heroes Slain in Battle, Kurukshetra War Aftermath"
                className="cost-aftermath-img"
              />
              <div className="cost-artwork-scrim" />
              <div className="cost-artwork-citation">
                <Eye size={12} />
                <span>KURUKSHETRA AFTERMATH ❖ DEPARTURE OF HEROIC SOULS</span>
              </div>
            </div>
            <p className="cost-artwork-caption">
              A restrained, spiritual portrayal of Kurukshetra at dusk—mourning the millions slain for dynastic pride.
            </p>
          </div>

          {/* Right Column: Active Narrative View with Character Portrait */}
          <div className="cost-narrative-card">
            <div className="cost-character-header">
              <img
                src={current.portrait}
                alt={current.characterRole}
                className="cost-char-thumb"
              />
              <div>
                <span className="cost-char-kicker">PERSPECTIVE FOCUS</span>
                <h3 className="cost-char-title">{current.characterRole}</h3>
              </div>
            </div>

            <blockquote className="cost-quote">
              {current.quote}
            </blockquote>

            <p className="cost-body">
              {current.body}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <button className="btn-palace-primary" onClick={onContinue}>
            <span>Proceed to Chamber X: Why Retell the Story? →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
