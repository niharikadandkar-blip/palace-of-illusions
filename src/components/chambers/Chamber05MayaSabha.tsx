import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Droplets, Sparkles, AlertCircle, Eye } from 'lucide-react';

interface Chamber05MayaSabhaProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber05MayaSabha: React.FC<Chamber05MayaSabhaProps> = ({ onContinue, onPrevChamber }) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'architectural-craft',
      tabLabel: '1. Architecture of Illusion',
      tabIcon: <Droplets size={14} />,
      kicker: 'ARCHITECTURAL WONDER ❖ THE ASURA MAYA’S CRAFT',
      title: 'A Monument of Glass and Water: Where Reality Bends',
      imagePath: '/images/chambers/maya-sabha.jpg',
      imageAlt: 'The enchanted Maya Sabha with shimmering water floors, glowing pillars and optical illusions',
      imageBadge: 'The Maya Sabha',
      visualMetaTitle: 'The Assembly Hall of Wonders',
      visualMetaDesc: 'Built in Indraprastha by the architect Maya, challenging visitors to distinguish matter from reflection.',
      content: (
        <div className="slide-body-narrative">
          <p>
            The <strong>Maya Sabha</strong> is constructed in Indraprastha by the celestial asura architect Maya as a token of gratitude to Arjuna and Krishna. Unlike ordinary royal palaces of stone and timber, the palace is an architectural marvel designed to challenge sensory perception:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Optical Sorcery:</strong> Floors made of transparent crystal resemble deep, flowing rivers; tranquil pools filled with blooming lotus flowers appear as dry, polished marble pavements; painted archways look like open corridors, and solid stone walls dissolve into mirrors.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Panchaali’s True Home:</strong> In Divakaruni's novel, the palace is not merely an engineering feat—it is Draupadi's crowning artistic achievement. She directs its layout, water gardens, and light-wells, finding her only season of undisputed creative freedom and emotional sovereignty.
              </div>
            </li>
          </ul>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>Architectural Meaning</span>
            </span>
            <p className="callout-body">
              “For the first time in her life, Panchaali possessed a physical space that answered to her mind. It was her sanctuary, her masterpiece, and ultimately, her dangerous pride.”
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'symbolism-appearance-reality',
      tabLabel: '2. Symbolism & Hubris',
      tabIcon: <Eye size={14} />,
      kicker: 'CORE LITERARY METAPHOR ❖ APPEARANCE VS. REALITY',
      title: 'The Mirror of Hubris: The Fragility and Deception of Power',
      imagePath: '/images/palace/palace-inner-hall.jpg',
      imageAlt: 'Royal palace inner hall with reflections and arches',
      imageBadge: 'The Palace Metaphor',
      visualMetaTitle: 'The Shimmering Surface of Power',
      visualMetaDesc: 'Reflecting the hidden insecurities, ambitions, and fragile egos of whoever walks its halls.',
      content: (
        <div className="slide-body-narrative">
          <p>
            The Maya Sabha serves as the novel's central overarching symbol, directly connecting to the book’s title, <em>The Palace of Illusions</em>:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">1.</span>
              <div className="point-text-block">
                <strong>Appearance vs. Reality:</strong> Just as crystal mimics water and water mimics stone, royal power and security in the epic are illusions. The Pandavas believe their newfound wealth, divine alliances, and majestic halls guarantee their safety, blinding them to the envy festering in Hastinapur.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">2.</span>
              <div className="point-text-block">
                <strong>The Deception of Assumptions:</strong> The palace reflects human nature: people are easily fooled by superficial appearances, flattery, and prestige, mistaking temporary political dominance for permanent righteousness.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">3.</span>
              <div className="point-text-block">
                <strong>The Hubris of Sovereignty:</strong> Panchaali’s fierce attachment to her palace mirrors her own pride. Her belief that she has conquered her fate within these enchanted walls leaves her vulnerable when the real world violently reasserts itself.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'fatal-stumble-war',
      tabLabel: '3. Stumble & Seed of War',
      tabIcon: <AlertCircle size={14} />,
      kicker: 'POLITICAL FALLOUT ❖ THE CATALYST OF ANNIHILATION',
      title: 'Duryodhana’s Stumble: Wounded Pride and the Spark of War',
      imagePath: '/images/characters/duryodhana.jpg',
      imageAlt: 'Prince Duryodhana with royal crown and golden armor',
      imageBadge: 'The Scorned Prince',
      visualMetaTitle: 'Prince Duryodhana’s Mortification',
      visualMetaDesc: 'A bruised ego transforms an architectural wonder into an unquenchable thirst for revenge.',
      content: (
        <div className="slide-body-narrative">
          <p>
            <strong>The Incident that Sparked an Empire's Fall:</strong> When Prince Duryodhana of Hastinapur tours the Maya Sabha, he is completely disoriented by the optical illusions. He lifts his silk robes to avoid water that is only glass, and moments later, boldly strides forward and falls headlong into a real lotus pool he mistook for polished floor.
          </p>
          <p>
            <strong>The Echoing Laughter:</strong> The humiliation of a proud prince drenched before the court and the laughter echoing from the upper balconies becomes a lethal turning point. Although later folklore attributed the laughter directly to Draupadi, Divakaruni explores how Duryodhana's wounded ego fixates upon her as the symbol of his shame.
          </p>

          <div className="inquiry-callout-box">
            <span className="inquiry-label">
              <AlertCircle size={12} />
              <span>Cause and Consequence</span>
            </span>
            <p className="inquiry-body">
              How did an architectural joke ignite an imperial apocalypse? Duryodhana’s bruised masculine pride could not tolerate being laughed at in a woman’s palace. The Maya Sabha directly catalyzed his resolve to lure the Pandavas into the fatal dice game.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={5}
      chamberKicker="Chamber V ❖ Central Visual Metaphor"
      chamberTitle="The Maya Sabha — A Palace of Illusions"
      chamberSubtitle="“In its halls of glass and water, reality bends. What appears solid is merely a reflection.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/chambers/maya-sabha.jpg"
      presenterName="Sahil & Riya"
    />
  );
};
