import React, { useState } from 'react';
import { LITERARY_REVIEWS } from '../../data/reviews';
import { ExternalLink, BookOpen, Quote, ShieldCheck, Feather } from 'lucide-react';

interface Chamber11ReviewsProps {
  onContinue: () => void;
}

export const Chamber11Reviews: React.FC<Chamber11ReviewsProps> = ({ onContinue }) => {
  const [selectedReviewId, setSelectedReviewId] = useState<string>(LITERARY_REVIEWS[0].id);

  const activeReview = LITERARY_REVIEWS.find((r) => r.id === selectedReviewId) || LITERARY_REVIEWS[0];

  return (
    <section className="chamber-container" aria-label="Chamber 11: Literary Reviews">
      <div
        className="chamber-bg-cover"
        style={{ backgroundImage: `url('/images/palace/palace-inner-hall.jpg')` }}
      />
      <div className="chamber-dark-scrim" />
      <div className="palace-frame-overlay jali-overlay" />

      <div className="chamber-inner-box">
        {/* Header */}
        <div className="chamber-heading-wrap">
          <div className="chamber-kicker">Chamber XI ❖ Illustrated Literary Salon</div>
          <h2 className="chamber-title">Critical Literary Reception: The Global Press</h2>
          <p className="chamber-subtitle-text">
            How leading literary journals and book scholars evaluated Divakaruni’s reimagining of the Sanskrit epic.
          </p>
        </div>

        {/* Reading Salon Split Stage: Author Journal Plaque + Critique Scroll */}
        <div className="reviews-salon-stage-grid">
          {/* Left Column: Author Portrait & Literary Journal Plaque */}
          <div className="salon-author-plaque">
            <div className="salon-portrait-frame">
              <img
                src="/images/book/chitra-banerjee-divakaruni.jpg"
                alt="Chitra Banerjee Divakaruni"
                className="salon-author-img"
              />
              <div className="salon-portrait-scrim" />
              <span className="salon-author-badge">
                <Feather size={12} />
                <span>The Novelist</span>
              </span>
            </div>

            <div className="salon-author-meta">
              <h4 className="salon-author-name">Chitra Banerjee Divakaruni</h4>
              <p className="salon-author-bio">
                Author of <em>The Palace of Illusions</em>, <em>The Forest of Enchantments</em>, and <em>Mistress of Spices</em>.
              </p>
            </div>

            {/* Manuscript Inscription Card */}
            <div className="salon-manuscript-thumb-card">
              <img
                src="/images/book/ancient-manuscript.jpg"
                alt="Ancient Mahabharata manuscript folio"
                className="salon-folio-thumb"
              />
              <div className="salon-folio-text">
                <span className="salon-folio-kicker">ARCHIVAL CONTEXT</span>
                <p className="salon-folio-caption">Re-excavating ancient Sanskrit palm-leaf traditions into contemporary fiction</p>
              </div>
            </div>
          </div>

          {/* Right Column: Literary Critical Journal Scroll */}
          <div className="salon-critique-column">
            {/* Publication Selector Bar */}
            <div className="literary-press-selector-bar">
              {LITERARY_REVIEWS.map((review) => {
                const isSelected = selectedReviewId === review.id;

                return (
                  <button
                    key={review.id}
                    className={`literary-press-tab ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedReviewId(review.id)}
                  >
                    <BookOpen size={14} style={{ color: isSelected ? 'var(--color-midnight-forest)' : 'var(--color-antique-gold)' }} />
                    <span>{review.publication} ({review.year})</span>
                  </button>
                );
              })}
            </div>

            {/* Main Literary Critique Scroll */}
            <div className="literary-critique-scroll">
              <div className="critique-scroll-header">
                <div>
                  <div className="critique-masthead">{activeReview.mastheadTag}</div>
                  <h3 className="critique-publication-title">{activeReview.publication}</h3>
                </div>

                <div className="critique-verified-badge">
                  <ShieldCheck size={14} />
                  <span>Verified Published Citation</span>
                </div>
              </div>

              <div className="critique-quote-body">
                <Quote size={32} className="critique-giant-quote-mark" />
                <blockquote className="critique-headline-quote">
                  {activeReview.featuredQuote}
                </blockquote>
                <p className="critique-extended-text">
                  {activeReview.extendedQuote}
                </p>
              </div>

              <div className="critique-footer-row">
                <div className="critique-analysis-box">
                  <span className="critique-analysis-label">Scholarly Significance:</span>
                  <p className="critique-analysis-text">{activeReview.criticalSignificance}</p>
                </div>

                <a
                  href={activeReview.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="critique-archive-link"
                  aria-label={`Read full review in ${activeReview.publication} archive`}
                >
                  <span>Original Review</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Three Compact Literary Quotation Strips */}
            <div className="mini-quotes-grid">
              {LITERARY_REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className={`mini-quote-item ${selectedReviewId === rev.id ? 'active' : ''}`}
                  onClick={() => setSelectedReviewId(rev.id)}
                >
                  <div className="mini-quote-pub">{rev.publication}</div>
                  <div className="mini-quote-snippet">{rev.featuredQuote}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <button className="btn-palace-primary" onClick={onContinue}>
            <span>Proceed to Chamber XII: Your Turn to Interpret →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
