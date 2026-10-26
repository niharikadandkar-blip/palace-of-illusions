import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Scale, HeartHandshake, ShieldAlert, Sparkles } from 'lucide-react';

interface Chamber07KarnaProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber07Karna: React.FC<Chamber07KarnaProps> = ({ onContinue, onPrevChamber }) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'outcast-wound',
      tabLabel: '1. The Wounded Hero',
      tabIcon: <HeartHandshake size={14} />,
      kicker: 'CHARACTER BACKGROUND ❖ SOCIAL EXCLUSION & RESENTMENT',
      title: 'Born in Rejection: The Tragic Wound of the Outcast King',
      imagePath: '/images/characters/karna.jpg',
      imageAlt: 'Detailed portrait of Karna in divine golden armor and earrings',
      imageBadge: 'The Tragic Outcast',
      visualMetaTitle: 'Karna (The Radheya)',
      visualMetaDesc: 'Born of Surya and Kunti, abandoned upon the Ganges, and denied social dignity by royal society.',
      content: (
        <div className="slide-body-narrative">
          <p>
            To understand the moral complexity of the <em>Mahabharata</em> and Divakaruni’s novel, one must examine the figure of <strong>Karna</strong>. Born of Princess Kunti and the sun god Surya before her marriage, he is set adrift in a basket upon the river to protect royal reputation. He is found and raised by a humble charioteer, Adhiratha, and his wife Radha.
          </p>
          <p>
            Despite possessing divine golden armor (<em>kavacha</em>) and unmatched archery brilliance, Karna is repeatedly humiliated by high-caste society. Drona denies him advanced instruction; at the tournament of princes, Kripa bars him from competing with Arjuna, scornfully labeling him a mere <em>suta-putra</em> (charioteer’s son). This persistent social exclusion fuels a burning, lifelong resentment against the established royal order.
          </p>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>Why We Feel Sympathy</span>
            </span>
            <p className="callout-body">
              “Karna represents the tragedy of unrecognized genius crushed by social prejudice. His desperation to prove his worth invites genuine empathy from anyone who has ever felt excluded or defined by their birth.”
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'debt-and-complicity',
      tabLabel: '2. Generosity vs. Complicity',
      tabIcon: <Scale size={14} />,
      kicker: 'COMPLEX LOYALTIES ❖ DANAVEERA & THE TYRANT’S EMBRACE',
      title: 'Bound by Gratitude: When Loyalty Becomes a Moral Blind Spot',
      imagePath: '/images/characters/duryodhana.jpg',
      imageAlt: 'Prince Duryodhana offering kingship to Karna',
      imageBadge: 'The Royal Patron',
      visualMetaTitle: 'The Fatal Alliance of Anga',
      visualMetaDesc: 'Duryodhana crowns Karna King of Anga, purchasing an unbreakable bond of loyalty that blinds him to justice.',
      content: (
        <div className="slide-body-narrative">
          <p>
            Karna is celebrated across the epic as <strong>Danaveera</strong>—the peerless giver who would never refuse any beggar, even surrendering his life-saving divine armor when disguised Indra requested it. Yet this nobility coexists with a tragic moral failing:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>The Unbreakable Debt:</strong> When all the Kuru elders and Pandavas scorned Karna in the arena, only Duryodhana stepped forward, defying tradition and crowning him King of Anga on the spot.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Complicity in Tyranny:</strong> To repay this personal debt of honor and gratitude, Karna pledges unconditional loyalty to Duryodhana. Tragically, this noble instinct to repay kindness blinds him to Duryodhana’s cruelty, compelling him to defend an unjust regime.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'pain-vs-accountability',
      tabLabel: '3. Pain vs. Accountability',
      tabIcon: <ShieldAlert size={14} />,
      kicker: 'ETHICAL EVALUATION ❖ CENTERING DRAUPADI’S TRUTH',
      title: 'Distinguishing Understanding Someone’s Pain from Excusing Harm',
      imagePath: '/images/characters/draupadi.jpg',
      imageAlt: 'Draupadi maintaining her dignity despite cruelty in court',
      imageBadge: 'Centering the Victim',
      visualMetaTitle: 'Holding Power Accountable',
      visualMetaDesc: 'A critical presentation distinction: empathy for an outcast’s wound cannot excuse his cruelty toward another vulnerable person.',
      content: (
        <div className="slide-body-narrative">
          <p>
            A crucial objective of our presentation is to maintain a balanced, academically rigorous distinction between <strong>understanding pain</strong> and <strong>excusing harmful choices</strong>:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">1.</span>
              <div className="point-text-block">
                <strong>The Cruelty in the Dice Hall:</strong> While Karna’s bitterness toward the Pandavas is understandable, his actions in the Dice Hall crossed an unpardonable moral line. Instead of standing against Duryodhana’s abuse, Karna actively incited Dushasana, calling Draupadi a woman of no modesty and urging her public disrobing.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">2.</span>
              <div className="point-text-block">
                <strong>Suffering Does Not Excuse Cruelty:</strong> Being a victim of caste prejudice does not grant moral license to victimize a defenseless woman. Empathy for Karna’s suffering cannot become an excuse for his complicity in violence.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">3.</span>
              <div className="point-text-block">
                <strong>Draupadi Remains the Center:</strong> Karna’s tragic dilemma enriches our critical analysis of moral ambiguity, but he does not displace Draupadi from her own story. Her search for justice remains the true moral compass of this project.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={7}
      chamberKicker="Chamber VII ❖ Moral Ambiguity & Accountability"
      chamberTitle="Karna — Sympathy and Accountability"
      chamberSubtitle="“Can we understand someone’s pain? Does that understanding excuse their choices?”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/palace/palace-inner-hall.jpg"
      presenterName="Lakshya & Anushka"
    />
  );
};
