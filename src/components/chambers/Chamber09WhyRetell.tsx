import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Compass, Feather, Scale, Sparkles } from 'lucide-react';

interface Chamber09WhyRetellProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber09WhyRetell: React.FC<Chamber09WhyRetellProps> = ({ onContinue, onPrevChamber }) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'voice-vs-power-agency',
      tabLabel: '1. Voice vs. Agency',
      tabIcon: <Compass size={14} />,
      kicker: 'CENTRAL INQUIRY ❖ IS HAVING A VOICE THE SAME AS HAVING POWER?',
      title: 'Voice vs. Power: Being Heard and Being Free Are Not the Same',
      imagePath: '/images/characters/draupadi.jpg',
      imageAlt: 'Queen Draupadi surrounded by the symbols of Voice, Choice, and Consequence',
      imageBadge: 'Voice & Agency',
      visualMetaTitle: 'Voice, Choice & Consequence',
      visualMetaDesc: 'Panchaali narrates her life with fierce intelligence, yet lives within boundaries she cannot overturn.',
      content: (
        <div className="slide-body-narrative">
          <p>
            One of the novel’s most compelling questions is whether <strong>having a voice</strong> is the same as <strong>having power</strong>. Draupadi narrates her life, expressing her sharpest thoughts and desires, but that does not mean she controls every event in it.
          </p>
          <p>
            Draupadi can question sages, dispute kings, and challenge her husbands, yet she remains bounded by royal patriarchal politics, the five-husband marriage structure, and the catastrophic actions of men. Her keen intelligence illuminates those limitations, but cannot erase them.
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Agency Within Restrictions:</strong> Facing restrictions does not mean having zero agency. Draupadi’s defiance in the Dice Hall and her refusal of silent victimhood show that a person’s moral choices still matter, even when they cannot control the ultimate consequences.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Emotional Judgments Shape Relationships:</strong> She is not merely dragged from one event to another. Her feelings, friendships, and judgments actively determine how she experiences and survives those relationships.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'evaluating-mythological-fiction',
      tabLabel: '2. Strengths & Limitations',
      tabIcon: <Scale size={14} />,
      kicker: 'CRITICAL EVALUATION ❖ BALANCING TRADITION AND FICTION',
      title: 'Evaluating Mythological Fiction: Strengths, Liberties & Boundaries',
      imagePath: '/images/book/ancient-manuscript.jpg',
      imageAlt: 'Ancient palm leaf Sanskrit manuscript of the Mahabharata',
      imageBadge: 'The Epic Tradition',
      visualMetaTitle: 'The Living Epic Tradition',
      visualMetaDesc: 'For millennia, India’s epics have been retold, reinterpreted, and renewed by poets across regions and generations.',
      content: (
        <div className="slide-body-narrative">
          <p>
            An academically sound presentation must recognize that <em>The Palace of Illusions</em> is a work of <strong>contemporary mythological fiction</strong>, not ancient canonical scripture:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">✓</span>
              <div className="point-text-block">
                <strong>Literary Strengths:</strong> Humanizes distant mythic archetypes into vulnerable, flawed people; brings contemporary psychological urgency to ancient moral dilemmas; and honors feminine interiority.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">⚠</span>
              <div className="point-text-block">
                <strong>Critical Boundaries & Creative Liberties:</strong> The author creatively interprets Draupadi's inner life. Readers should not mistake every novelistic twist (such as the secret romantic longing for Karna) for an established fact across all traditional versions of the epic.
              </div>
            </li>
          </ul>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>Group Critical Insight</span>
            </span>
            <p className="callout-body">
              “Giving a character a voice does not automatically make every interpretation correct. But it gives us an indispensable opportunity to question why certain characters have traditionally received more attention than others.”
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'authorial-space-craft',
      tabLabel: '3. Reclaiming Narrative Space',
      tabIcon: <Feather size={14} />,
      kicker: 'AUTHORIAL PURPOSE ❖ WHAT THE WRITER DOES WITH THE SPACE',
      title: 'Beyond Visibility: What Does the Author Do With the Space?',
      imagePath: '/images/chambers/pandavas-krishna.jpg',
      imageAlt: 'Assembly of heroes and divine figures in discussion',
      imageBadge: 'The Narrative Space',
      visualMetaTitle: 'The Craft of Retelling',
      visualMetaDesc: 'A retelling should not be judged only by giving an overlooked character space, but by what is achieved with it.',
      content: (
        <div className="slide-body-narrative">
          <p>
            There is a double layer to the book: <strong>Draupadi is the narrator within the novel</strong>, but <strong>Chitra Banerjee Divakaruni is the author</strong> making deliberate creative choices.
          </p>
          <p>
            A retelling should not be judged merely on whether it gives a previously marginalized character the microphone. We must critically examine <em>what the author does with that space</em>:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Resisting the Perfection Trap:</strong> Divakaruni avoids turning Draupadi into a modern saint or an infallible icon. She lets Panchaali be vain, jealous of other wives, spiteful, stubborn, and brilliant.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Expanding Empathy:</strong> Changing the storyteller does not alter the historical sequence of events; it transforms what we notice, who we mourn, and which systemic injustices we are forced to confront.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={9}
      chamberKicker="Chamber IX ❖ Voice, Agency & Narrative Power"
      chamberTitle="Why Retell the Story?"
      chamberSubtitle="“Does having a voice mean having agency? Voice vs power, and what the author does with narrative space.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/palace/palace-inner-hall.jpg"
      presenterName="Riya & Sahil"
    />
  );
};
