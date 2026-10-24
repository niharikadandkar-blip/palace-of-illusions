import React, { useState } from 'react';
import { BookOpen, Feather, Sparkles, ScrollText, UserCheck } from 'lucide-react';

interface Chamber03BookProps {
  onContinue: () => void;
}

export const Chamber03Book: React.FC<Chamber03BookProps> = ({ onContinue }) => {
  const [activeTab, setActiveTab] = useState<'premise' | 'author' | 'perspective'>('premise');

  return (
    <section className="chamber-container" aria-label="Chamber 3: Open the Book">
      <div
        className="chamber-bg-cover"
        style={{ backgroundImage: `url('/images/palace/palace-inner-hall.jpg')` }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber III ❖ The Sacred Manuscript & The Reimagined Epic</div>
          <h2 className="chamber-title">Open the Book: Voice from the Margins</h2>
          <p className="chamber-subtitle-text">
            “For three thousand years, men told the story of the great war. Here, the queen who lived it finally speaks.”
          </p>
        </div>

        {/* Editorial Two-Column Visual Grid */}
        <div className="manuscript-editorial-grid">
          {/* Left Column: Authentic Visual Artifacts */}
          <div className="book-visual-artifacts-col">
            {/* Author Portrait Card */}
            <div className="author-artifact-card">
              <div className="artifact-image-frame">
                <img
                  src="/images/book/chitra-banerjee-divakaruni.jpg"
                  alt="Chitra Banerjee Divakaruni, author of The Palace of Illusions"
                  className="author-photo-img"
                />
                <div className="artifact-image-scrim" />
                <span className="artifact-badge">
                  <UserCheck size={12} />
                  <span>Author & Mythologist</span>
                </span>
              </div>
              <div className="artifact-caption">
                <h4 className="artifact-title">Chitra Banerjee Divakaruni</h4>
                <p className="artifact-sub">Award-winning Indian-American novelist & poet</p>
              </div>
            </div>

            {/* Ancient Sanskrit Illuminated Manuscript Card */}
            <div className="manuscript-artifact-card">
              <div className="artifact-image-frame manuscript-frame">
                <img
                  src="/images/book/ancient-manuscript.jpg"
                  alt="Authentic leaf from an ancient Sanskrit Mahabharata illuminated manuscript"
                  className="manuscript-leaf-img"
                />
                <div className="artifact-image-scrim" />
                <span className="artifact-badge">
                  <ScrollText size={12} />
                  <span>Ancient Sanskrit Canon</span>
                </span>
              </div>
              <div className="artifact-caption">
                <h4 className="artifact-title">Vyasa's Sanskrit Epic</h4>
                <p className="artifact-sub">100,000 sacred verses translated into an intimate first-person novel</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Literary Folio */}
          <div className="manuscript-folio-card">
            {/* Folio Tab Selectors */}
            <div className="folio-tab-bar" role="tablist">
              <button
                className={`folio-tab-btn ${activeTab === 'premise' ? 'active' : ''}`}
                onClick={() => setActiveTab('premise')}
                role="tab"
                aria-selected={activeTab === 'premise'}
              >
                <BookOpen size={16} />
                <span>The Core Premise</span>
              </button>

              <button
                className={`folio-tab-btn ${activeTab === 'author' ? 'active' : ''}`}
                onClick={() => setActiveTab('author')}
                role="tab"
                aria-selected={activeTab === 'author'}
              >
                <Feather size={16} />
                <span>The Author's Spark</span>
              </button>

              <button
                className={`folio-tab-btn ${activeTab === 'perspective' ? 'active' : ''}`}
                onClick={() => setActiveTab('perspective')}
                role="tab"
                aria-selected={activeTab === 'perspective'}
              >
                <Sparkles size={16} />
                <span>The Feminine Voice</span>
              </button>
            </div>

            {/* Folio Text Content */}
            <div className="folio-body-area">
              {activeTab === 'premise' && (
                <div className="folio-fade-in">
                  <blockquote className="folio-quote">
                    “I was born from fire. My father longed for a son to destroy his enemy. Instead, he was given me.”
                  </blockquote>
                  <p className="folio-paragraph">
                    Published in 2008, <strong>The Palace of Illusions</strong> takes the world’s greatest patriarchal epic and re-centers it within Draupadi’s interior life. It is not an erasure of ancient sacred events, but an intimate excavation of what ancient male bards left unsaid.
                  </p>
                  <div className="folio-stat-row">
                    <div className="folio-stat-pill">
                      <span className="stat-label">Original Epic Canon</span>
                      <span className="stat-val">Vyasa's Sanskrit Mahabharata (Cosmic scale & male duty)</span>
                    </div>
                    <div className="folio-stat-pill">
                      <span className="stat-label">Divakaruni's Novel</span>
                      <span className="stat-val">Intimate first-person retrospective by Panchaali</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'author' && (
                <div className="folio-fade-in">
                  <blockquote className="folio-quote">
                    “Growing up with the Mahabharata, I loved its heroes, but I kept asking: What was Draupadi thinking? What were her secret regrets, her unspoken dreams?”
                    <span className="quote-byline">— Chitra Banerjee Divakaruni</span>
                  </blockquote>
                  <p className="folio-paragraph">
                    Divakaruni sought to peel back the bronze armor of epic warriors to expose the emotional reality of the women who sustained the kingdoms and wept over the dead. She restores Panchaali's complex intellect, her pride, and her complicated desires.
                  </p>
                </div>
              )}

              {activeTab === 'perspective' && (
                <div className="folio-fade-in">
                  <blockquote className="folio-quote">
                    “A woman’s life in our times is made of waiting. Waiting to be chosen, waiting to be protected, waiting for men to finish their wars.”
                  </blockquote>
                  <p className="folio-paragraph">
                    Panchaali is neither an obedient caricature nor an untouchable goddess. She is brilliant, impulsive, proud, sharp-tongued, and fiercely self-aware—a sovereign woman navigating an impossible destiny in a patriarchal world.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action button */}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <button className="btn-palace-primary" onClick={onContinue}>
            <span>Enter Chamber IV: Character Gallery & Atlas →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
