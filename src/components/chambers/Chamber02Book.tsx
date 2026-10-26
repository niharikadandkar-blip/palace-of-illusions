import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { BookOpen, ScrollText, Sparkles, Scale } from 'lucide-react';

interface Chamber02BookProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber02Book: React.FC<Chamber02BookProps> = ({ onContinue, onPrevChamber }) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'author-premise',
      tabLabel: '1. Novel & Author',
      tabIcon: <BookOpen size={14} />,
      kicker: 'LITERARY FOUNDATION ❖ THE NOVEL & ITS AUTHOR',
      title: 'A Mythological Masterpiece: Grounding Myth in Feminine Memory',
      imagePath: '/images/book/chitra-banerjee-divakaruni.jpg',
      imageAlt: 'Chitra Banerjee Divakaruni, author of The Palace of Illusions',
      imageBadge: 'The Novelist',
      visualMetaTitle: 'Chitra Banerjee Divakaruni',
      visualMetaDesc: 'Acclaimed Indian-American author and poet whose 2008 novel reshaped modern perspectives on Indian epic literature.',
      content: (
        <div className="slide-body-narrative">
          <p>
            <strong>Chitra Banerjee Divakaruni</strong> is an award-winning Indian-American author whose 2008 novel, <em>The Palace of Illusions</em>, is a celebrated work of mythological fiction. Rather than relying on third-person bardic grandeur, the novel retells the massive ancient Indian epic, the <em>Mahabharata</em>, through the intimate, first-person voice of its most pivotal queen: <strong>Panchaali (Draupadi)</strong>.
          </p>
          <p>
            <strong>The Setting & Scope:</strong> The novel spans the transitional Bronze and Iron Age of Vedic India—moving across royal palaces in Panchala, the dynastic seat of Hastinapur, the shimmering wonder of the Maya Sabha in Indraprastha, and the blood-soaked battlefield of Kurukshetra. It follows Panchaali’s life from her supernatural birth to her final ascent through the snows of the Himalayas.
          </p>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>Core Literary Significance</span>
            </span>
            <p className="callout-body">
              “For thousands of years, the Mahabharata was celebrated as an epic of kings, warriors, and holy sages. Divakaruni's novel shifts the lens, demonstrating that behind every heroic battlefield decision lies an unrecorded domestic and emotional reality lived by women.”
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'epic-summary',
      tabLabel: '2. Epic Summary for Beginners',
      tabIcon: <ScrollText size={14} />,
      kicker: 'ACCESSIBLE SUMMARY ❖ THE ESSENTIAL MAHABHARATA TIMELINE',
      title: 'The Great Epic in Five Milestones: From Fire to Battlefield',
      imagePath: '/images/chambers/pandavas-krishna.jpg',
      imageAlt: 'The Pandavas and Krishna in the royal assembly',
      imageBadge: 'The Epic Journey',
      visualMetaTitle: 'The Web of Dynastic Destiny',
      visualMetaDesc: 'The Pandava brothers, Panchaali, and Lord Krishna navigating family rivalry, exile, and the catastrophe of Kurukshetra.',
      content: (
        <div className="slide-body-narrative">
          <p>
            For audience members unfamiliar with the ancient epic, the novel’s narrative follows five decisive milestones that shaped ancient India:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">1.</span>
              <div className="point-text-block">
                <strong>Sacred Birth from Fire:</strong> Panchaali emerges full-grown from a sacrificial yajna fire alongside her brother Dhrishtadyumna, prophesied to avenge her father and spark the destruction of the Kuru dynasty.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">2.</span>
              <div className="point-text-block">
                <strong>Marriage to the Five Pandavas:</strong> After the disguised prince Arjuna wins her hand in an extraordinary archery trial, an unintended command from his mother Kunti leads Panchaali to become the wife of all five Pandava brothers.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">3.</span>
              <div className="point-text-block">
                <strong>The Dice Hall (Dyuta Sabha):</strong> King Yudhishthira gambles away his kingdom, wealth, brothers, his own freedom, and finally stakes Panchaali. Her attempted disrobing in a silent court marks the moral collapse of Hastinapur.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">4.</span>
              <div className="point-text-block">
                <strong>The Kurukshetra War:</strong> An apocalyptic 18-day fratricidal war between the Pandavas and Kauravas that consumes millions of lives and claims all five of Panchaali's sons.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">5.</span>
              <div className="point-text-block">
                <strong>Identity, Desire & Destiny:</strong> Throughout these events, the novel explores how human beings navigate preordained destiny while wrestling with forbidden longings, pride, and personal dignity.
              </div>
            </li>
          </ul>
          <div style={{
            background: 'rgba(196, 144, 209, 0.12)',
            borderLeft: '3px solid #C490D1',
            padding: '0.75rem 1rem',
            borderRadius: '0 8px 8px 0',
            marginTop: '0.85rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#C490D1', fontFamily: 'var(--font-accent)', textTransform: 'uppercase' }}>
                Niharika’s Quick Context (Hinglish Overview)
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-ivory)', fontStyle: 'italic', lineHeight: 1.45 }}>
              “Mahabharata mein Draupadi King Drupada ki daughter hain. Epic tradition mein woh aur unke brother Dhrishtadyumna sacrificial fire se emerge hote hain. Draupadi ki shaadi paanch Pandavon se hoti hai. Baad mein dice hall ka incident, exile aur Kurukshetra war unki life ko deeply affect karte hain. The Palace of Illusions in events ko largely Draupadi ki perspective se explore karti hai—unki feelings, desires aur experiences ko imagine karte hue.”
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'canon-vs-fiction',
      tabLabel: '3. Novel vs. Epic Tradition',
      tabIcon: <Scale size={14} />,
      kicker: 'CRITICAL DISTINCTION ❖ SANSKRIT TRADITION VS. MODERN FICTION',
      title: 'Distinguishing Creative Reimagining from Ancient Canon',
      imagePath: '/images/book/ancient-manuscript.jpg',
      imageAlt: 'Ancient illuminated Sanskrit Mahabharata manuscript folio',
      imageBadge: 'Canonical Archival Folio',
      visualMetaTitle: 'Vyasa’s Sanskrit Epic Tradition',
      visualMetaDesc: 'Composed across centuries with over 100,000 verses, the classical Mahabharata is a sacred monument of dharma and metaphysics.',
      content: (
        <div className="slide-body-narrative">
          <p>
            It is essential for academic analysis to distinguish Divakaruni's fictional interpretation from the broader historical and regional traditions of the <em>Mahabharata</em>:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>The Classical Sanskrit Canon (Vyasa):</strong> Functions as a monumental theological and philosophical text centered on <em>dharma</em> (cosmic duty), divine will, martial genealogies, and cosmic order. In classical tradition, Draupadi is a revered avatar of Lakshmi and a woman of immense stature, yet her private thoughts are subordinated to the epic's masculine and metaphysical concerns.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Divakaruni's Modern Retelling:</strong> A contemporary work of psychological fiction that intentionally fills the narrative silences of the epic. It introduces personal vulnerabilities, unfulfilled desires, and modern feminist critiques that are not found in orthodox religious scriptures.
              </div>
            </li>
          </ul>

          <div className="inquiry-callout-box">
            <span className="inquiry-label">
              <Scale size={12} />
              <span>Academic Distinction</span>
            </span>
            <p className="inquiry-body">
              <em>The Palace of Illusions</em> does not claim to replace ancient scripture. Rather, it serves as a creative literary companion that invites contemporary readers to reconsider whose voices have been historically preserved and whose emotions have been overlooked.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={2}
      chamberKicker="Chamber II ❖ Literary Foundation & Context"
      chamberTitle="The Book: Divakaruni's Reimagined Epic"
      chamberSubtitle="“A book, a voice, a retelling: Chitra Banerjee Divakaruni breathes new life into the ancient Mahabharata.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/palace/palace-inner-hall.jpg"
      presenterName="Sahil & Niharika"
    />
  );
};
