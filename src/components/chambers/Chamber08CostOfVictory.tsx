import React, { useState } from 'react';
import { SubSlideLayout, type SubSlideData } from '../common/SubSlideLayout';
import { Crown, Skull, Sparkles, Compass } from 'lucide-react';

interface Chamber08CostOfVictoryProps {
  onContinue: () => void;
  onPrevChamber?: () => void;
}

export const Chamber08CostOfVictory: React.FC<Chamber08CostOfVictoryProps> = ({
  onContinue,
  onPrevChamber,
}) => {
  const [currentSubSlide, setCurrentSubSlide] = useState(0);

  const subSlides: SubSlideData[] = [
    {
      id: 'beyond-dice-hall-exile-krishna',
      tabLabel: '1. Exile & Krishna’s Bond',
      tabIcon: <Compass size={14} />,
      kicker: 'BEYOND THE DICE HALL ❖ EXILE & THE SANCTUARY OF FRIENDSHIP',
      title: 'Beyond the Dice Hall: Forest Exile & The Friendship with Krishna',
      imagePath: '/images/chambers/forest-exile.jpg',
      imageAlt: 'The Pandavas and Queen Draupadi enduring the wilderness exile',
      imageBadge: 'The Wilderness Road',
      visualMetaTitle: 'The Road Away from the Palace',
      visualMetaDesc: 'Draupadi’s journey did not halt at the dice hall; it deepened through wilderness, endurance, and sacred friendship.',
      content: (
        <div className="slide-body-narrative">
          <p>
            The story does not end with the humiliation of the dice hall. Panchaali’s life continues through twelve years of wilderness exile, followed by a thirteenth year of disguised servitude in Matsya. Stripped of silk and attendants, she sustains her five husbands through sheer resilience.
          </p>
          <p>
            <strong>Relationships Are Not Interchangeable:</strong> In Divakaruni's novel, Panchaali’s relationships are deeply distinct. While her marriage to the five Pandavas is bounded by duty, politics, and compromise, her bond with <strong>Lord Krishna</strong> provides her with an emotional sanctuary. Krishna does not treat her as a possession, a queen, or a symbol; he speaks to her as an intellectual equal and true soul-friend (<em>Sakhi</em>).
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>An Unbound Vow:</strong> For thirteen years, Draupadi keeps her hair unbound—refusing to let Hastinapur forget its crime, while learning the bitter limits of male royal protection.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>The Multi-Faceted Woman:</strong> Exploring her roles as wife, mother, diplomat, and exile reveals that her emotional world cannot be reduced to any single tragedy.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'kurukshetra-murdered-heirs',
      tabLabel: '2. Slaughter of the Heirs',
      tabIcon: <Skull size={14} />,
      kicker: 'THE PRICE OF TOTAL WAR ❖ EXTINCTION OF THE FUTURE',
      title: 'The Murder of the Upapandavas: No Future to Inherit the Peace',
      imagePath: '/images/chambers/cost-of-victory.jpg',
      imageAlt: 'The desolate aftermath of Kurukshetra after eighteen days of slaughter',
      imageBadge: 'The Fallen Heirs',
      visualMetaTitle: 'The Midnight Slaughter in the Camp',
      visualMetaDesc: 'Ashwatthama’s raid extinguishes all five of Draupadi’s sons, rendering military victory hollow.',
      content: (
        <div className="slide-body-narrative">
          <p>
            The Kurukshetra war rages for eighteen days, slaughtering millions across the subcontinent and forcing the righteous Pandavas to compromise their sacred codes of <em>dharma</em>.
          </p>
          <p>
            Yet the most shattering blow arrives on the night <em>after</em> the war is won. The lone Kaurava survivor Ashwatthama creeps into the sleeping camp and slaughters all five of Draupadi’s sons (the Upapandavas) in their beds.
          </p>

          <ul className="presentation-points-stack">
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>The Extinction of Lineage:</strong> In one cowardly midnight raid, the entire next generation of Pandava heirs is extinguished. The young princes who laughed in Indraprastha are gone forever.
              </div>
            </li>
            <li className="presentation-point-item">
              <span className="point-symbol-gold">❖</span>
              <div className="point-text-block">
                <strong>Who Suffers When War Is Won?</strong> Victory may decide a political struggle, but it cannot resurrect dead sons. Epics celebrate who won and who lost, but Draupadi’s grief forces us to ask: <em>what was sacrificed, and was it worth the cost?</em>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'emptiness-of-retribution',
      tabLabel: '3. The Emptiness of Vengeance',
      tabIcon: <Crown size={14} />,
      kicker: 'CORONATION IN ASHES ❖ THE ILLUSION OF RETRIBUTION',
      title: 'A Graveyard Empire: When Vengeance Leaves You Alone in the Ashes',
      imagePath: '/images/characters/yudhishthira.jpg',
      imageAlt: 'King Yudhishthira and Queen Draupadi ruling an empire in sorrow',
      imageBadge: 'The Ash-Covered Throne',
      visualMetaTitle: 'Coronation in Hastinapur',
      visualMetaDesc: 'Ascending the throne, King Yudhishthira and Queen Panchaali rule over an empire of weeping widows.',
      content: (
        <div className="slide-body-narrative">
          <p>
            When King Yudhishthira is finally crowned Emperor of Hastinapur, the procession moves through streets lined with weeping widows and fatherless children. The coronation feels like a state funeral.
          </p>
          <p>
            Panchaali washes her hair in the blood of Dushasana as vowed. But the blood brings no joy, no healing, and no redemption.
          </p>

          <div className="takeaway-callout-box">
            <span className="callout-label">
              <Sparkles size={12} />
              <span>Core Philosophical Realization</span>
            </span>
            <p className="callout-body">
              “I had fed my wrath for thirteen years, believing that revenge would wash away my humiliation. But when the blood was poured, I realized: vengeance does not fill the void. It only burns the temple down, leaving you alone in the cold ashes.”
            </p>
          </div>

          <p>
            <strong>Reframing the Epic Outcome:</strong> Divakaruni refuses to treat Draupadi as merely the catalyst who caused the war. She is an intensely bereaved mother and traumatized queen who realizes that the true cost of war is paid in human grief that no imperial crown can ever heal.
          </p>
        </div>
      ),
    },
  ];

  return (
    <SubSlideLayout
      chamberNumber={8}
      chamberKicker="Chamber VIII ❖ Aftermath & The Human Cost of War"
      chamberTitle="The Cost of Victory"
      chamberSubtitle="“What remains after the war? Exile, lost sons, and the bitter discovery that vengeance does not heal grief.”"
      subSlides={subSlides}
      currentSubSlide={currentSubSlide}
      onSubSlideChange={setCurrentSubSlide}
      onContinue={onContinue}
      onPrevChamber={onPrevChamber}
      backgroundImage="/images/chambers/cost-of-victory.jpg"
      presenterName="Riya & Anushka"
    />
  );
};
