import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { LITERARY_REVIEWS } from '../../data/reviews';
import { Award, BookOpen, ShieldCheck, HelpCircle } from 'lucide-react';

interface Chamber10ReadersVerdictProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber10ReadersVerdict: React.FC<Chamber10ReadersVerdictProps> = ({ onContinue, onPrevChamber }) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);
  const [selectedReviewId, setSelectedReviewId] = useState<string>(LITERARY_REVIEWS[0].id);

  const activeReview = LITERARY_REVIEWS.find((r) => r.id === selectedReviewId) || LITERARY_REVIEWS[0];

  const subSlides: SubSlideData[] = [
    {
      id: 'critical-strengths',
      tabLabel: '1. Literary Strengths',
      tabIcon: <Award size={14} />,
      kicker: 'CRITICAL EVALUATION ❖ LITERARY CRAFT & PROSE',
      title: 'Atmospheric Prose, Sensory Realism & Psychological Nuance',
      imagePath: '/images/book/chitra-banerjee-divakaruni.jpg',
      imageAlt: 'Portrait of author Chitra Banerjee Divakaruni',
      imageBadge: 'The Craft of Fiction',
      visualMetaTitle: 'Sensory Immersion of Ancient India',
      visualMetaDesc: 'Blending sandalwood, incense, silk, and blood into an emotionally gripping narrative.',
      content: (
        <div className="slide-body-narrative">
          <p>
            When critically evaluating <em>The Palace of Illusions</em>, literary scholars and readers celebrate several distinctive strengths:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Immersive Prose & Atmosphere:</strong> Divakaruni paints ancient India with rich sensory textures—the scent of burning neem leaves, the cool silk of royal sashes, the blinding light of jewel-encrusted armor, and the bitter dust of the exile forests.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Psychological Complexity:</strong> Rather than painting Panchaali as a flawless saint or an irredeemable instigator of war, the novel depicts her as a vibrant, contradictory human being who wrestles with pride, loneliness, and regret.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Symbolic Cohesion:</strong> The master metaphor of the palace—where water, glass, reflections, and illusions blur together—elevates the work from a simple retelling into a unified philosophical meditation.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'critical-questions',
      tabLabel: '2. Nuanced Critique',
      tabIcon: <HelpCircle size={14} />,
      kicker: 'LITERARY CRITIQUE ❖ PROBING NARRATIVE CHOICES',
      title: 'Nuanced Questions: Beyond Relationships and Speculative Focus',
      imagePath: '/images/characters/draupadi.jpg',
      imageAlt: 'Draupadi in royal contemplation',
      imageBadge: 'Critical Inquiry',
      visualMetaTitle: 'The Limits of Representation',
      visualMetaDesc: 'Examining whether the novel fully emancipates Draupadi beyond the men who surround her.',
      content: (
        <div className="slide-body-narrative">
          <p>
            A thoughtful academic presentation must look beyond unconditional praise and pose rigorous critical questions:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">?</span>
              <div className="point-text-block">
                <strong>Defined by Relationships:</strong> Does the novel truly emancipate Draupadi, or does her emotional journey still center heavily around the men in her life—managing her five husbands, seeking approval from Krishna, and longing for Karna?
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">?</span>
              <div className="point-text-block">
                <strong>Disproportionate Focus:</strong> Does the fictionalized romantic intrigue with Karna divert valuable narrative space away from her political statesmanship, her maternal relationships with her sons, or her bonds with other women in the epic?
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">?</span>
              <div className="point-text-block">
                <strong>Complicating Purpose:</strong> Do these creative choices strengthen the novel's feminist purpose, or do they occasionally conform to conventional romantic tropes?
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'verified-reviews',
      tabLabel: '3. Verified Press Citations',
      tabIcon: <BookOpen size={14} />,
      kicker: 'VERIFIED CRITICAL RECEPTION ❖ PUBLISHED JOURNAL CITATIONS',
      title: 'Verified Critical Reception: How the Global Press Evaluated the Book',
      imagePath: '/images/book/ancient-manuscript.jpg',
      imageAlt: 'Historical Sanskrit literary folio',
      imageBadge: 'Verified Sourced Reviews',
      visualMetaTitle: 'Archival Critical Citations',
      visualMetaDesc: 'Authentic published reviews from established literary journals and the American Library Association.',
      content: (
        <div className="slide-body-narrative">
          <p>
            The following excerpts are authentic, verified reviews published upon the novel’s release in 2008 by leading literary journals:
          </p>

          {/* Tab Selector for 3 Verified Reviews */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            {LITERARY_REVIEWS.map((rev) => (
              <button
                key={rev.id}
                onClick={() => setSelectedReviewId(rev.id)}
                style={{
                  background: rev.id === selectedReviewId ? 'var(--color-antique-gold)' : 'rgba(18, 60, 50, 0.6)',
                  color: rev.id === selectedReviewId ? '#123C32' : 'var(--color-ivory)',
                  border: '1px solid rgba(197, 161, 90, 0.4)',
                  borderRadius: '6px',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {rev.publication} ({rev.year})
              </button>
            ))}
          </div>

          <div style={{
            background: 'rgba(18, 60, 50, 0.55)',
            border: '1px solid rgba(197, 161, 90, 0.35)',
            borderRadius: '10px',
            padding: '1rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.85rem', color: 'var(--color-antique-gold-bright)', fontWeight: 600 }}>
                {activeReview.publication} ❖ {activeReview.mastheadTag}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#88D49E' }}>
                <ShieldCheck size={13} />
                <span>Verified Sourced Citation</span>
              </span>
            </div>

            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
              {activeReview.extendedQuote}
            </p>

            <p style={{ fontSize: '0.82rem', color: 'var(--color-parchment-soft)', margin: 0 }}>
              <strong>Significance:</strong> {activeReview.criticalSignificance}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={10}
      chamberKicker="Chamber X ❖ Critical Reception & Evaluation"
      chamberTitle="The Reader's Verdict: Critical Evaluation & Verified Reception"
      chamberSubtitle="“How leading literary journals and scholars evaluated Divakaruni’s reimagining of the epic.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/palace/palace-inner-hall.jpg"
      presenterName="Anushka & Sukruti"
    />
  );
};
