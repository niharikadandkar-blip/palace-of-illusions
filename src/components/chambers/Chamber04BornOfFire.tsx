import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Flame, Compass, Heart, Sparkles } from 'lucide-react';

interface Chamber04BornOfFireProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber04BornOfFire: React.FC<Chamber04BornOfFireProps> = ({ onContinue, onPrevChamber }) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'fire-birth-identity',
      tabLabel: '1. Fire-Birth & Complexion',
      tabIcon: <Flame size={14} />,
      kicker: 'PROTAGONIST IDENTITY ❖ THE DAUGHTER OF FIRE',
      title: 'Born from Sacrificial Flames: A Woman Unbroken by Design',
      imagePath: '/images/chambers/sacred-fire-birth.jpg',
      imageAlt: 'Draupadi and Dhrishtadyumna emerging from the sacred sacrificial yajna fire',
      imageBadge: 'The Sacred Yajna',
      visualMetaTitle: 'Emergence from the Yajna Fire',
      visualMetaDesc: 'Summoned by King Drupada’s vow of vengeance, Draupadi is born full-grown, dark as a storm cloud, with an unquenchable fire within.',
      content: (
        <div className="slide-body-narrative">
          <p>
            Unlike other royal princesses who were raised gently in inner chambers, Draupadi has an extraordinary, unnatural genesis: she is born full-grown from a roaring sacrificial <em>yajna</em> fire alongside her brother Dhrishtadyumna. Summoned by King Drupada solely as an instrument of dynastic vengeance against Guru Drona, she enters the world already bearing the burden of prophecy.
          </p>
          <p>
            <strong>The Name Krishnaa & The Dark Complexion:</strong> Rejecting modern mythological whitewashing, Divakaruni honors Draupadi's canonical name: <strong>Krishnaa</strong> (the dark one). Her dark-brown complexion—often disdained in a court obsessed with fair skin—becomes her proudest armor. She possesses an incisive intellect, a sharp tongue, and an unyielding sense of pride (<em>abhiman</em>) that refuses to conform to passive female subservience.
          </p>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>Identity Takeaway</span>
            </span>
            <p className="callout-body">
              “She was never a passive pawn destined to be swept along by male ambition. From the moment she stepped from the coals, she asserted her right to think, argue, and question the prophecies that sought to dictate her life.”
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'choice-vs-destiny',
      tabLabel: '2. Choice vs. Destiny',
      tabIcon: <Compass size={14} />,
      kicker: 'EXISTENTIAL STRUGGLE ❖ AUTONOMY WITHIN PROPHECY',
      title: 'The Unending Tension Between Personal Choice and Royal Destiny',
      imagePath: '/images/chambers/swayamvara-archery.jpg',
      imageAlt: 'The grand royal swayamvara archery assembly of King Drupada',
      imageBadge: 'The Swayamvara Trial',
      visualMetaTitle: 'The Archery Contest of Panchala',
      visualMetaDesc: 'A political tournament where suitors shoot an elusive revolving fish above, determining Draupadi’s marital fate.',
      content: (
        <div className="slide-body-narrative">
          <p>
            A central theme of the novel is the acute tension between <strong>personal agency</strong> and <strong>predetermined destiny</strong>. Although royal seers foretell that she will alter the course of Indian history, Panchaali struggles constantly against being treated as a bargaining chip for royal alliances.
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Prophecy vs. Desire:</strong> While destiny demands that she marry a champion warrior who can defeat Hastinapur, her own heart craves freedom, intellectual respect, and a love that is chosen rather than preordained.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Gender in a Heroic World:</strong> In a society where masculine honor is validated through weapons and conquest, Draupadi’s weapons are her moral clarity, political counsel, and indomitable will.
              </div>
            </li>
          </ul>

          <div className="inquiry-callout-box">
            <span className="inquiry-label">
              <Compass size={12} />
              <span>Literary Reflection</span>
            </span>
            <p className="inquiry-body">
              Can true agency exist when one’s birth is an engineered prophecy? Divakaruni shows that Draupadi’s agency lies not in escaping destiny, but in choosing <em>how</em> she faces it with courage and defiance.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'marriage-autonomy',
      tabLabel: '3. Polyandry & Agency',
      tabIcon: <Heart size={14} />,
      kicker: 'COMPLEX AUTONOMY ❖ BEYOND MALE RELATIONSHIPS',
      title: 'The Polyandrous Marriage: Defining Agency Beyond Her Husbands',
      imagePath: '/images/characters/draupadi-master-portrait.jpg',
      imageAlt: 'Master visual portrait of Draupadi in deep royal silks and temple jewelry',
      imageBadge: 'The Sovereign Individual',
      visualMetaTitle: 'Draupadi Beyond the Pandavas',
      visualMetaDesc: 'Navigating polyandry while establishing her sovereign identity, architectural passions, and moral independence.',
      content: (
        <div className="slide-body-narrative">
          <p>
            <strong>The Polyandrous Marriage in Context:</strong> Following Arjuna’s victory at the swayamvara, his mother Kunti—unaware of what her sons had won—issued the casual command: <em>“Whatever alms you have brought, share it equally among yourselves.”</em> To avoid breaking a mother’s word and fracturing the brothers' unity, Sage Vyasa sanctified her marriage to all five Pandavas.
          </p>
          <p>
            <strong>Agency Beyond Men:</strong> Crucially, Divakaruni does not reduce Draupadi’s identity to her five husbands:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Managing Five Colossal Egos:</strong> She learns the art of emotional governance, dividing her year among five men without losing her inner sovereignty or letting any husband own her soul.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>An Autonomous Thinker & Builder:</strong> She is defined by her own passions: her architectural vision for the Maya Sabha, her deep spiritual dialogues with Krishna, her sharp critiques of court politics, and her refusal to let men define her moral worth.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={4}
      chamberKicker="Chamber IV ❖ Protagonist Identity & Agency"
      chamberTitle="Born of Fire — Desires and Destiny"
      chamberSubtitle="“Born of fire and destined for greatness: discovering the woman behind the legend.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/palace/palace-inner-hall.jpg"
      presenterName="Niharika & Sukruti"
    />
  );
};
