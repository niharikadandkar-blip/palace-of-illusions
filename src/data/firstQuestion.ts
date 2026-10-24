import type { BeginnerPollOption } from '../types';

export const BEGINNER_POLL_OPTIONS: BeginnerPollOption[] = [
  {
    id: 'panchaali',
    label: "Panchaali: The Woman at the Center",
    symbol: "🔥",
    archetype: "The Unheard Voice",
    traditionalMyth: "Often portrayed in folklore as the fierce catalyst whose demand for vengeance caused the great war.",
    novelLens: "A brilliant, complex woman reclaiming her story—revealing her private desires, intellect, and moral outrage.",
    votes: 0,
    imagePath: "/images/characters/draupadi.jpg",
  },
  {
    id: 'arjuna',
    label: "Arjuna & The Martial Heroes",
    symbol: "🏹",
    archetype: "The Celebrated Warrior",
    traditionalMyth: "The invincible archer who won Draupadi in an archery contest and fought for masculine honor.",
    novelLens: "Panchaali admires his grace, but discovers his greatest devotion is to his weapons and his own heroic legend.",
    votes: 0,
    imagePath: "/images/characters/arjuna.jpg",
  },
  {
    id: 'krishna',
    label: "Krishna & Divine Destiny",
    symbol: "🪶",
    archetype: "The Divine Confidant",
    traditionalMyth: "The divine statesman delivering the Bhagavad Gita on duty and detachment on the battlefield.",
    novelLens: "An intimate, egalitarian friendship. Krishna is the only man who treats Panchaali’s mind as fully sovereign.",
    votes: 0,
    imagePath: "/images/characters/krishna.jpg",
  },
  {
    id: 'dice-game',
    label: "The Royal Dice Game & Betrayal",
    symbol: "🎲",
    archetype: "The Moral Breakdown",
    traditionalMyth: "The tragic gambling match where the eldest prince staked wealth, brothers, and his wife.",
    novelLens: "A piercing challenge to patriarchal law: 'Can a man who has lost himself still gamble another human being?'",
    votes: 0,
    imagePath: "/images/chambers/dice-game-assembly.jpg",
  },
];

export const INITIAL_POLL_OPTIONS = BEGINNER_POLL_OPTIONS;
