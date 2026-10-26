import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Heart, Mountain, Sparkles, Sun } from 'lucide-react';

interface Chamber11BeyondIllusionProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber11BeyondIllusion: React.FC<Chamber11BeyondIllusionProps> = ({
  onContinue,
  onPrevChamber,
}) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'draupadi-karna-desire-identity',
      tabLabel: '1. Does Desire Define Identity?',
      tabIcon: <Heart size={14} />,
      kicker: 'LITERARY DEBATE ❖ PRIVATE DESIRE VS. PUBLIC DUTY',
      title: 'The Draupadi–Karna Subplot: Does Secret Desire Define Identity?',
      imagePath: '/images/characters/karna.jpg',
      imageAlt: 'Two silhouettes of Draupadi and Karna under a divided golden sunset sky',
      imageBadge: 'The Debated Subplot',
      visualMetaTitle: 'Two Silhouettes: Desire vs Identity',
      visualMetaDesc: 'Does an imagined private attraction humanize the queen, or risk replacing one narrow definition with another?',
      content: (
        <div className="slide-body-narrative">
          <p>
            Perhaps the novel's most fiercely debated creative departure is the secret, lifelong attraction Divakaruni imagines between <strong>Panchaali and Karna</strong>. It introduces an intimate, forbidden longing that directly clashes with the public roles and political duties surrounding her.
          </p>
          <p>
            <strong>Humanizing Flaws vs. Narrative Distraction:</strong> Our group identifies key questions regarding this creative choice:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Private Feelings vs. Public Expectations:</strong> Giving Draupadi a desire that does not fit neatly into her arranged marriages reveals a profound human contradiction between what a person feels privately and what royal duty forces them to perform.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Accountability Cannot Be Erased:</strong> Romantic longing cannot erase Karna’s public complicity in the Dice Hall. The imagined attraction adds psychological friction, but must not excuse the harm of his actions.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Larger Than Any Relationship:</strong> Draupadi has an entire life—her statesmanship, motherly grief, loyalty to the Pandavas, and deep spiritual communion with Krishna. She must remain far larger than any single imagined romance.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'himalayan-ascent-falling-snow',
      tabLabel: '2. Falling in the Snow',
      tabIcon: <Mountain size={14} />,
      kicker: 'MORTAL ABANDONMENT ❖ THE MAHAPRASTHANIKA PARVA',
      title: 'Panchaali’s Fall in the Blizzard: The Loneliness of Mortal Love',
      imagePath: '/images/chambers/himalayan-journey.jpg',
      imageAlt: 'The Pandavas and Draupadi climbing the freezing slopes of the Himalayas',
      imageBadge: 'The Final Ascent',
      visualMetaTitle: 'The Abandonment on Mount Meru',
      visualMetaDesc: 'Collapsing first in the freezing blizzard, Panchaali confronts the ultimate loneliness of human attachments.',
      content: (
        <div className="slide-body-narrative">
          <p>
            Following the death of Krishna and the close of an era, the Pandavas abdicate the throne of Hastinapur, crown Arjuna’s grandson Parikshit, discard their royal robes for ascetics' bark cloth, and embark on foot toward the north in the <strong>Mahaprasthanika Parva</strong> (The Great Renunciation).
          </p>
          <p>
            As they climb the freezing slopes of Mount Meru, Panchaali’s mortal strength gives out. She collapses face-down in the biting blizzard.
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
            margin: '0.75rem 0',
          }}>
            “She fell because of her partiality. Though she was wed to all five of us equally, in her secret heart she loved Arjuna more than the rest. Keep walking; do not look back.”
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-accent)', marginTop: '0.35rem', color: 'var(--color-antique-gold-bright)', fontStyle: 'normal' }}>
              — Emperor Yudhishthira, walking forward into the white storm
            </div>
          </div>

          <p>
            <strong>The Climax of Female Isolation:</strong> She had sacrificed her youth, suffered public humiliation, and buried five sons for these five men—yet at her moment of death, not one stays to hold her hand. She realizes that human loyalties are fragile, and every soul meets eternity alone.
          </p>
        </div>
      ),
    },
    {
      id: 'awakening-beyond-maya',
      tabLabel: '3. Awakening Beyond Maya',
      tabIcon: <Sun size={14} />,
      kicker: 'THE NOVEL’S SUBLIME CONCLUSION ❖ DISSOLUTION OF ILLUSION',
      title: 'Awakening Beyond Maya: The Transcendent Ending of the Novel',
      imagePath: '/images/characters/krishna.jpg',
      imageAlt: 'Lord Krishna in radiant divine light offering compassion and freedom',
      imageBadge: 'The Transcendent Light',
      visualMetaTitle: 'The Dissolution of the Mortal Dream',
      visualMetaDesc: 'Krishna welcomes Panchaali into divine union, where all earthly grief, gender constraints, and illusions dissolve.',
      content: (
        <div className="slide-body-narrative">
          <p>
            As Panchaali lies freezing in the snow, waiting for darkness to claim her, the cold dissolves into a golden warmth: <strong>Lord Krishna appears before her</strong>.
          </p>
          <p>
            Beside Krishna stands another glowing presence—<strong>Karna</strong>, radiant and healed of all his mortal wounds and bitter caste slurs. All the ancient hatreds, rivalries, and curses dissolve into pure, luminous understanding.
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Shedding Mortal Labels:</strong> Krishna takes her hand. As she rises, the labels that defined her earthly struggle—<em>Daughter of Fire, Panchaali, Wife of Five, Mother of Murdered Sons, Queen of Indraprastha</em>—dissolve like smoke.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>The Ultimate Meaning of the Palace:</strong> She realizes that the entire mortal journey—the glittering halls of Indraprastha, the dice game, the war, and the crown—was a cosmic <em>Palace of Illusions</em> (Maya). Beneath the illusion of separateness and suffering, the only eternal reality is infinite divine love.
              </div>
            </li>
          </ul>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>The Novel’s Closing Revelation</span>
            </span>
            <p className="callout-body">
              “I am beyond the illusion of time, beyond revenge, beyond names and tears. I laugh with Krishna, and the sound of our joy echoes through all the heavens.”
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={11}
      chamberKicker="Chamber XI ❖ Private Desire, Mortality & Transcendence"
      chamberTitle="Beyond the Illusion"
      chamberSubtitle="“Does the imagined Draupadi–Karna connection change the story? Desire vs identity, and awakening beyond maya.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/chambers/himalayan-journey.jpg"
      presenterName="Lakshya & Niharika"
    />
  );
};
