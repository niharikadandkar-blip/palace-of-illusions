import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Eye, MessageSquare, ShieldAlert, Sparkles, Filter } from 'lucide-react';

interface Chamber03VoiceProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber03Voice: React.FC<Chamber03VoiceProps> = ({ onContinue, onPrevChamber }) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'object-to-subject',
      tabLabel: '1. Object to Subject',
      tabIcon: <Eye size={14} />,
      kicker: 'NARRATIVE REVOLUTION ❖ SHIFTING THE EPIC CENTER',
      title: 'From an Object in History to the Voice of the Epic',
      imagePath: '/images/characters/draupadi.jpg',
      imageAlt: 'Master portrait of Queen Panchaali (Draupadi)',
      imageBadge: 'The Sovereign Voice',
      visualMetaTitle: 'Panchaali as First-Person Narrator',
      visualMetaDesc: 'Reclaiming the epic quill: Draupadi moves from being spoken about to speaking directly to the reader.',
      content: (
        <div className="slide-body-narrative">
          <p>
            There is a profound literary difference between being a <strong>character within a story</strong> and being the <strong>voice through which that story is experienced</strong>. In traditional renderings of the <em>Mahabharata</em>, Draupadi is often presented from the outside: an extraordinary woman whose beauty provokes kings, whose swayamvara triggers rivalry, and whose humiliation ignites a catastrophic war.
          </p>
          <p>
            By employing an intimate first-person narrative (<em>“I, Panchaali...”</em>), Divakaruni fundamentally transforms the reader's role. We no longer observe Draupadi as an exotic, mythic queen or a tragic symbol of victimhood. Instead, we inhabit her consciousness. Her gaze determines what scenes are granted emotional weight, which men are questioned, and what unspoken domestic moments are brought into the light.
          </p>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>Narrative Significance</span>
            </span>
            <p className="callout-body">
              “When Draupadi becomes the narrator, the epic ceases to be a detached record of masculine martial triumphs. It becomes an urgent, deeply personal examination of survival, dignity, and resistance within a royal patriarchy.”
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'interiority-frustrations',
      tabLabel: '2. Private Interiority',
      tabIcon: <MessageSquare size={14} />,
      kicker: 'PSYCHOLOGICAL DEPTH ❖ BEYOND ROYAL SPECTACLE',
      title: 'Unveiling Private Ambitions, Frustrations & Hidden Bonds',
      imagePath: '/images/chambers/palace-courtyard.jpg',
      imageAlt: 'Ancient palace inner courtyard and reflection pool',
      imageBadge: 'The Corridors of Reflection',
      visualMetaTitle: 'The Inner Chambers of the Palace',
      visualMetaDesc: 'Where public royal pageantry gives way to private isolation, intellectual restlessness, and silent reckonings.',
      content: (
        <div className="slide-body-narrative">
          <p>
            The novel's interior monologue allows readers to explore the rich psychological terrain that classical heroic verse leaves unexplored:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Intellectual Ambition vs. Gender Restrictions:</strong> Draupadi describes the bitter irony of being endowed with keen political intelligence while being confined to embroidery, palace diplomacy, and silence during male council meetings.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>The Solitude of Polyandry:</strong> She exposes the emotional discipline required to be divided among five husbands—managing Yudhishthira's self-righteous piety, Bhima's protective fervor, and Arjuna's aloof self-absorption, while knowing she must remain emotionally self-sufficient.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Krishna as Intellectual Equal:</strong> Her bond with Krishna is depicted not merely as religious devotion, but as a meeting of minds. Krishna is the only man who challenges her pride without patronizing her intellect.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'limitations-perspective',
      tabLabel: '3. Limitations of One Lens',
      tabIcon: <Filter size={14} />,
      kicker: 'CRITICAL EVALUATION ❖ DEPTH VS. OMNISCIENCE',
      title: 'The Inherent Limitations of a Single Subjective Lens',
      imagePath: '/images/characters/arjuna.jpg',
      imageAlt: 'Arjuna the warrior prince with divine bow Gandiva',
      imageBadge: 'The Observed Figure',
      visualMetaTitle: 'Other Figures Through Draupadi’s Eyes',
      visualMetaDesc: 'Every husband, rival, and elder is experienced only through the filter of Draupadi’s personal perceptions and biases.',
      content: (
        <div className="slide-body-narrative">
          <p>
            An essential academic observation when analyzing <em>The Palace of Illusions</em> is recognizing the <strong>limitations of a single narrative perspective</strong>:
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">1.</span>
              <div className="point-text-block">
                <strong>Subjective Interpretation, Not Objective Record:</strong> A story told through one person's consciousness offers immense emotional intimacy, but it is not an omniscient or infallible account. Draupadi's judgments are colored by her own wounded pride, jealousies, and limited field of vision.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">2.</span>
              <div className="point-text-block">
                <strong>Flattening Other Complex Figures:</strong> Because we see other characters solely through her eyes, their internal motivations can become secondary. For example, Queen Kunti’s difficult political choices or Arjuna’s internal spiritual struggles are viewed primarily through how they affect Draupadi.
              </div>
            </li>
          </ul>

          <div className="inquiry-callout-box">
            <span className="inquiry-label">
              <ShieldAlert size={12} />
              <span>Critical Discussion Question</span>
            </span>
            <p className="inquiry-body">
              Does gaining intimate access to Draupadi’s interior life compensate for the loss of the epic’s broader, multi-perspective philosophical landscape? How should readers balance empathy for her voice with critical distance?
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={3}
      chamberKicker="Chamber III ❖ Narrative Subjectivity"
      chamberTitle="A Different Voice: The Subjective Lens"
      chamberSubtitle="“The difference between being a character in a story and being the voice through which that story is told.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/palace/palace-inner-hall.jpg"
      presenterName="Niharika & Lakshya"
    />
  );
};
