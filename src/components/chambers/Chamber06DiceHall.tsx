import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Scale, ShieldAlert, HelpCircle, Sparkles } from 'lucide-react';

interface Chamber06DiceHallProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber06DiceHall: React.FC<Chamber06DiceHallProps> = ({ onContinue, onPrevChamber }) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'fatal-gamble',
      tabLabel: '1. The Fatal Wager',
      tabIcon: <ShieldAlert size={14} />,
      kicker: 'CRITICAL CONTEXT ❖ THE RIGGED GAME OF IVORY DICE',
      title: 'A Royal Code Collapses: When a King Wagers His Queen',
      imagePath: '/images/chambers/dice-hall.jpg',
      imageAlt: 'The royal assembly hall of Hastinapur during the fateful dice game',
      imageBadge: 'Dyuta Sabha',
      visualMetaTitle: 'The Assembly of Hastinapur',
      visualMetaDesc: 'The fateful hall where royal honor, family vows, and justice were staked on a turn of loaded dice.',
      content: (
        <div className="slide-body-narrative">
          <p>
            <strong>The Context of the Dyuta Sabha:</strong> Driven by jealousy and vengeance, Prince Duryodhana and his uncle Shakuni invite King Yudhishthira to a royal gambling match in Hastinapur. Bound by an inflexible kshatriya code that considers it unchivalrous for a king to decline a royal challenge, Yudhishthira enters the match despite knowing Shakuni plays with loaded dice.
          </p>
          <p>
            <strong>The Catastrophic Escalation:</strong> In a spiral of reckless compulsion, Yudhishthira wagers and loses his gold, chariots, royal treasury, empire, and his four brothers. Having lost his own freedom as a bondservant, he commits the unthinkable act: he stakes Queen Panchaali as his final wager.
          </p>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>Moral Significance</span>
            </span>
            <p className="callout-body">
              “The dice game reveals that rigid adherence to formal codes of masculine honor (kshatriya dharma) can quickly degenerate into moral blindness, reducing even the most virtuous king to a man who gambles another human being.”
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'philosophical-inquiry',
      tabLabel: '2. Draupadi’s Question',
      tabIcon: <HelpCircle size={14} />,
      kicker: 'LEGAL & PHILOSOPHICAL DEFIANCE ❖ CHALLENGING OWNERSHIP',
      title: 'The Unanswered Inquiry: Can a Slave Wager Another Human Being?',
      imagePath: '/images/characters/draupadi.jpg',
      imageAlt: 'Draupadi standing defiant in the royal court',
      imageBadge: 'The Questioning Queen',
      visualMetaTitle: 'Panchaali’s Legal Challenge',
      visualMetaDesc: 'Refusing silent victimhood, Draupadi confronts the assembly with a razor-sharp constitutional query.',
      content: (
        <div className="slide-body-narrative">
          <p>
            Dragged into the open assembly hall by Dushasana while in a single garment, Draupadi refuses to be reduced to a weeping victim. Instead of pleading for mercy, she delivers a razor-sharp legal and philosophical challenge that silences the entire court:
          </p>

          <div style={{
            background: 'rgba(89, 43, 53, 0.4)',
            borderLeft: '3px solid #E2A4AE',
            padding: '1rem 1.25rem',
            borderRadius: '0 8px 8px 0',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.15rem',
            fontStyle: 'italic',
            color: 'var(--color-ivory)',
            lineHeight: 1.5,
            margin: '0.5rem 0',
          }}>
            “Did King Yudhishthira lose himself before he wagered me, or did he wager me while still a free man? If he had already lost his own freedom and was a bondservant, by what legal right could he stake a woman who was not his property?”
          </div>

          <p>
            <strong>The Significance of Her Voice:</strong> This query strikes at the foundational assumptions of patriarchal law. Draupadi asks whether marriage confers property ownership over another human being's personhood, forcing the assembly to confront whether their laws serve justice or merely protect male dominance.
          </p>
        </div>
      ),
    },
    {
      id: 'silence-of-elders',
      tabLabel: '3. Silence of the Elders',
      tabIcon: <Scale size={14} />,
      kicker: 'INSTITUTIONAL COMPLICITY ❖ THE COLLAPSE OF JUSTICE',
      title: 'The Complicity of Silence: When Law Protects the Abuser',
      imagePath: '/images/characters/yudhishthira.jpg',
      imageAlt: 'King Yudhishthira with downcast eyes in the assembly hall',
      imageBadge: 'The Silent Patriarchs',
      visualMetaTitle: 'Bhishma, Drona & The Court Elders',
      visualMetaDesc: 'Revered masters of dharma who bowed their heads in silence while power was abused before their eyes.',
      content: (
        <div className="slide-body-narrative">
          <p>
            The true horror of the Dice Hall is not merely the cruelty of Duryodhana and Dushasana, but the <strong>paralyzing silence of the revered elders</strong>:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Bhishma and Drona’s Failure:</strong> Grandfather Bhishma and preceptor Drona bow their heads in shame, muttering that the subtleties of <em>dharma</em> are too complex to resolve. They hide behind technicalities to avoid confronting the crown prince.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Institutional Complicity:</strong> Their refusal to act exposes that when institutions of law and authority remain neutral during acts of injustice, their silence inevitably protects the oppressor and abandons the victim.
              </div>
            </li>
          </ul>

          <div className="inquiry-callout-box">
            <span className="inquiry-label">
              <Scale size={12} />
              <span>Core Presentation Inquiry</span>
            </span>
            <p className="inquiry-body">
              When injustice happens in a crowded room of honorable people, who bears the greater guilt: the perpetrator who acts, or the respected elders whose silence grants him permission?
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={6}
      chamberKicker="Chamber VI ❖ Law, Injustice & Defiance"
      chamberTitle="The Dice Hall: Law, Injustice & The Silence of the Elders"
      chamberSubtitle="“The hall falls silent as power is abused. When silence is a choice, who bears the burden of honor?”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/chambers/dice-hall.jpg"
      presenterName="Riya & Niharika"
    />
  );
};
