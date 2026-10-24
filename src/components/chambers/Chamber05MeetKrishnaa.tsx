import React, { useState } from 'react';
import { Flame, Heart, Sparkles, Moon, Eye, ShieldCheck } from 'lucide-react';

interface Chamber05MeetKrishnaaProps {
  onContinue: () => void;
  onOpenDraupadiModal: () => void;
}

export const Chamber05MeetKrishnaa: React.FC<Chamber05MeetKrishnaaProps> = ({
  onContinue,
  onOpenDraupadiModal,
}) => {
  const [activeFacet, setActiveFacet] = useState<number>(0);

  const facets = [
    {
      title: 'Born from Fire, Named for the Night',
      icon: <Flame size={16} />,
      quote: '“They called me Krishnaa because of my dark skin. In a world obsessed with fair beauty, my dark complexion was my first armor.”',
      body: 'Rejecting modern mythological whitewashing, the novel celebrates Panchaali’s rich brown skin, fierce intellect, and sharp tongue. She was never a passive pawn; she was born full-grown from sacred flames with an unquenchable fire within.',
      supportingImage: '/images/chambers/sacred-fire-birth.jpg',
      supportingTitle: 'The Sacred Yajna Fire',
      supportingCaption: 'Emerging full-grown alongside brother Dhrishtadyumna from the sacrificial flames of King Drupada',
    },
    {
      title: 'The Solitude of Five Husbands',
      icon: <Heart size={16} />,
      quote: '“I was divided like fruit among five men. Each loved me in his own way, yet in the moments that mattered most, I stood entirely alone.”',
      body: 'Divakaruni explores the psychological reality of polyandry: managing five colossal egos, learning to divide her loyalty each year, and knowing that her honor would ultimately be second to their masculine dharma.',
      supportingImage: '/images/chambers/pandavas-krishna.jpg',
      supportingTitle: 'The Pandava Assembly',
      supportingCaption: 'Sharing life with five legendary warriors, each bound to his own vows, weapons, and cosmic destiny',
    },
    {
      title: 'Krishna: The Sovereign Equal',
      icon: <Sparkles size={16} />,
      quote: '“With Krishna, I did not have to be a queen, a wife, or an avenger. I only had to be myself.”',
      body: 'Their bond is the intellectual and spiritual sanctuary of the book. Krishna challenges her pride, grounds her anger, and calls her by her secret name, Krishnaa—treating her mind as sovereign and equal.',
      supportingImage: '/images/characters/krishna.jpg',
      supportingTitle: 'Krishna (The Cosmic Sakha)',
      supportingCaption: 'Raja Ravi Varma’s celebrated portrayal of Krishna as divine counselor and unwavering friend',
    },
    {
      title: 'The Shadow of Karna',
      icon: <Moon size={16} />,
      quote: '“Had I spoken differently at my swayamvara, would the world have been saved from fire?”',
      body: 'A subtle, daring invention of the novel: Panchaali’s lingering curiosity about Karna—the brilliant, scorned warrior she turned away to protect her brother’s political ambitions. The tragedy of what might have been haunts both their lives.',
      supportingImage: '/images/characters/karna.jpg',
      supportingTitle: 'Karna (The Fateful Reject)',
      supportingCaption: 'The radiant outcast king whose rejection in the archery hall sowed the seeds of dynastic ruin',
    },
  ];

  const currentFacet = facets[activeFacet];

  return (
    <section className="chamber-container" aria-label="Chamber 5: Meet Krishnaa">
      <div
        className="chamber-bg-cover"
        style={{ backgroundImage: `url('/images/palace/palace-inner-hall.jpg')` }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber V ❖ The Heart of Fire</div>
          <h2 className="chamber-title">Meet Krishnaa: The Real Panchaali</h2>
          <p className="chamber-subtitle-text">
            “Dark as a rain-bearing monsoon cloud, fire-born and unbroken. Discover the woman behind the legend.”
          </p>
        </div>

        {/* Multi-Column Visual Stage: Master Portrait + Facet Details + Contextual Scene */}
        <div className="krishnaa-visual-stage-grid">
          {/* Master Visual Anchor Column */}
          <div className="krishnaa-portrait-card">
            <div className="portrait-image-wrapper">
              <img
                src="/images/characters/draupadi.jpg"
                alt="Draupadi master portrait: regal Indian woman with rich dark brown skin, intelligent dark eyes, and royal silk drape"
                className="krishnaa-portrait-img"
                onClick={onOpenDraupadiModal}
                title="Click to view full master identity standards"
              />
              <div className="portrait-image-glow" />
              <button
                className="portrait-expand-badge"
                onClick={onOpenDraupadiModal}
                title="Inspect Master Visual Standards"
              >
                <Eye size={13} />
                <span>Inspect Standards</span>
              </button>
            </div>

            <div className="portrait-caption-tag">
              <ShieldCheck size={14} style={{ color: 'var(--color-antique-gold)' }} />
              <span>PANCHAALI ❖ MASTER VISUAL ANCHOR</span>
            </div>
            <p className="portrait-meta-desc">
              Depicted strictly with rich, natural dark-brown skin, royal temple ornaments, and an intelligent, regal gaze.
            </p>
          </div>

          {/* Right Column: Narrative Facets & Contextual Story Scenes */}
          <div className="krishnaa-facets-container">
            {/* Facet Selector Pills */}
            <div className="facet-pills-row">
              {facets.map((facet, idx) => (
                <button
                  key={idx}
                  className={`facet-pill-btn ${activeFacet === idx ? 'active' : ''}`}
                  onClick={() => setActiveFacet(idx)}
                >
                  {facet.icon}
                  <span>{facet.title}</span>
                </button>
              ))}
            </div>

            {/* Split Content Box: Quote & Body + Dynamic Supporting Scene Image */}
            <div className="facet-card-body-split">
              <div className="facet-text-side">
                <blockquote className="facet-quote">
                  {currentFacet.quote}
                </blockquote>
                <p className="facet-body-text">
                  {currentFacet.body}
                </p>
              </div>

              {/* Dynamic Contextual Scene Illustration */}
              <div className="facet-supporting-visual-side">
                <div className="supporting-visual-frame">
                  <img
                    src={currentFacet.supportingImage}
                    alt={currentFacet.supportingTitle}
                    className="supporting-visual-img"
                  />
                  <div className="supporting-visual-scrim" />
                  <span className="supporting-visual-badge">{currentFacet.supportingTitle}</span>
                </div>
                <p className="supporting-visual-caption">
                  {currentFacet.supportingCaption}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="krishnaa-action-bar">
              <button
                className="hud-button"
                onClick={onOpenDraupadiModal}
                style={{ padding: '0.6rem 1rem' }}
              >
                <ShieldCheck size={15} />
                <span>View Identity Character Analysis</span>
              </button>

              <button className="btn-palace-primary" onClick={onContinue}>
                <span>Enter Chamber VI: Maya Sabha (Palace of Illusions) →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
