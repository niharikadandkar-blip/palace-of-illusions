export interface PresentationSlide {
  chamberNumber: number;
  chamberRoman: string;
  chamberTitle: string;
  presenter: 'Sahil' | 'Niharika' | 'Riya' | 'Lakshya' | 'Anushka' | 'Sukruti';
  presenterRole: string;
  presenterColor: string;
  kicker: string;
  headline: string;
  essentialText: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  photoBadge: string;
  quote?: {
    text: string;
    source: string;
  };
}

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  // ==========================================
  // CHAMBER I: ENTER THE PALACE (Presenter: Sahil)
  // ==========================================
  {
    chamberNumber: 1,
    chamberRoman: 'I',
    chamberTitle: 'Enter the Palace',
    presenter: 'Sahil',
    presenterRole: 'Presenter: Sahil',
    presenterColor: '#E5B25D',
    kicker: 'CHAMBER I ❖ THRESHOLD & IMMERSION',
    headline: 'The Palace of Illusions',
    essentialText: 'A journey through India’s greatest epic, retold through the fierce, intimate voice of Panchaali—the queen history remembered only as the catalyst for war.',
    highlights: ['Novel by Chitra Banerjee Divakaruni', 'Whose Story Has Been Told?'],
    image: '/images/palace/hero-palace-gate.jpg',
    imageAlt: 'Monumental royal sandstone palace gates at golden dusk',
    photoBadge: 'Palace Gates at Dusk',
    quote: {
      text: '“When you hear the name Draupadi, do you see a complete person, or only the tragedy that defined her?”',
      source: 'Opening Inquiry',
    },
  },

  // ==========================================
  // CHAMBER II: THE BOOK (Presenter: Sahil)
  // ==========================================
  {
    chamberNumber: 2,
    chamberRoman: 'II',
    chamberTitle: 'The Book',
    presenter: 'Sahil',
    presenterRole: 'Presenter: Sahil',
    presenterColor: '#E5B25D',
    kicker: 'CHAMBER II ❖ LITERARY FOUNDATION',
    headline: 'A Familiar Epic, Reimagined',
    essentialText: 'Published in 2008, Divakaruni’s novel enters the narrative silences of the epic, exploring Panchaali’s inner thoughts, ambitions, and vulnerabilities without claiming to replace scripture.',
    highlights: ['Mythological Fiction, Not Scripture', 'From Fire to Snowy Peaks'],
    image: '/images/book/chitra-banerjee-divakaruni.jpg',
    imageAlt: 'Author Chitra Banerjee Divakaruni',
    photoBadge: 'Chitra Banerjee Divakaruni',
    quote: {
      text: '“The epic stays the same—yet when the perspective shifts, everything changes.”',
      source: 'Authorial Vision',
    },
  },

  // ==========================================
  // CHAMBER III: A DIFFERENT VOICE (Presenter: Niharika)
  // ==========================================
  {
    chamberNumber: 3,
    chamberRoman: 'III',
    chamberTitle: 'A Different Voice',
    presenter: 'Niharika',
    presenterRole: 'Presenter: Niharika',
    presenterColor: '#C490D1',
    kicker: 'CHAMBER III ❖ NARRATIVE SUBJECTIVITY',
    headline: 'From Epic Object to Sovereign Voice',
    essentialText: 'In classical verse, Draupadi is seen from the outside—a queen whose beauty ignites rivalry. Here, she becomes the narrator holding the mirror to kings, elders, and gods.',
    highlights: ['Subjective Feminine Lens', 'Flawed, Vibrant Humanity'],
    image: '/images/characters/draupadi.jpg',
    imageAlt: 'Master portrait of Queen Panchaali in dignified contemplation',
    photoBadge: 'Queen Panchaali (Draupadi)',
    quote: {
      text: '“She is not a passive symbol; she is a complete person with pride, intellect, and contradictions.”',
      source: 'Literary Insight',
    },
  },

  // ==========================================
  // CHAMBER IV: BORN OF FIRE: DESIRES AND DESTINY (Presenter: Niharika)
  // ==========================================
  {
    chamberNumber: 4,
    chamberRoman: 'IV',
    chamberTitle: 'Born of Fire: Desires and Destiny',
    presenter: 'Niharika',
    presenterRole: 'Presenter: Niharika',
    presenterColor: '#C490D1',
    kicker: 'CHAMBER IV ❖ SACRED GENESIS & PROPHECY',
    headline: 'Born of Fire, Bound by Prophecy',
    essentialText: 'Emerging adult from King Drupada’s yajna flames, Panchaali is declared a weapon of vengeance before she knows herself. Soon, Kunti’s unintended command binds her to five husbands.',
    highlights: ['Destiny Imposed at Birth', 'The Five-Husband Marriage'],
    image: '/images/chambers/sacred-fire-birth.jpg',
    imageAlt: 'The sacred sacrificial yajna fire burst illuminating Kampilya',
    photoBadge: 'Yajna Fire Emergence',
    quote: {
      text: '“Being born of fire made her extraordinary, but it did not make her free to choose her future.”',
      source: 'The Paradox of Destiny',
    },
  },

  // ==========================================
  // CHAMBER V: THE MAYA SABHA: A PALACE OF ILLUSIONS (Presenter: Riya)
  // ==========================================
  {
    chamberNumber: 5,
    chamberRoman: 'V',
    chamberTitle: 'The Maya Sabha: A Palace of Illusions',
    presenter: 'Riya',
    presenterRole: 'Presenter: Riya',
    presenterColor: '#4EBA97',
    kicker: 'CHAMBER V ❖ THE CENTRAL METAPHOR',
    headline: 'Architecture of Water, Glass & Hubris',
    essentialText: 'In Indraprastha, divine architects craft a hall where floors mimic water and pools resemble crystal. For Panchaali, it is the home she finally calls her own.',
    highlights: ['Appearance vs. Reality', 'Duryodhana’s Wounded Pride'],
    image: '/images/chambers/maya-sabha.jpg',
    imageAlt: 'The glowing crystalline hall of Maya Sabha with reflective water floors',
    photoBadge: 'The Maya Sabha (Indraprastha)',
    quote: {
      text: '“A single misstep into a hidden pool turned courtly mockery into an unquenchable family curse.”',
      source: 'The Spark of War',
    },
  },

  // ==========================================
  // CHAMBER VI: THE DICE HALL (Presenter: Riya)
  // ==========================================
  {
    chamberNumber: 6,
    chamberRoman: 'VI',
    chamberTitle: 'The Dice Hall',
    presenter: 'Riya',
    presenterRole: 'Presenter: Riya',
    presenterColor: '#4EBA97',
    kicker: 'CHAMBER VI ❖ MORAL COLLAPSE & DEFIANCE',
    headline: 'When Royal Power Fails to Protect',
    essentialText: 'Yudhishthira gambles away kingdom, brothers, and himself before staking Panchaali. In a silent court, she demands: “If he lost himself first, what right had he to stake me?”',
    highlights: ['The Silence of Court Elders', 'The Vow of Unbound Hair'],
    image: '/images/chambers/dice-hall.jpg',
    imageAlt: 'The dimly lit dice hall with silent elders and loaded ivory dice',
    photoBadge: 'Dyuta Sabha (The Dice Hall)',
    quote: {
      text: '“Dragged by her hair, she challenged ancient laws that treated a woman’s body as collateral for male pride.”',
      source: 'The Moment of Defiance',
    },
  },

  // ==========================================
  // CHAMBER VII: KARNA: SYMPATHY AND ACCOUNTABILITY (Presenter: Lakshya)
  // ==========================================
  {
    chamberNumber: 7,
    chamberRoman: 'VII',
    chamberTitle: 'Karna: Sympathy and Accountability',
    presenter: 'Lakshya',
    presenterRole: 'Presenter: Lakshya',
    presenterColor: '#E2845B',
    kicker: 'CHAMBER VII ❖ MORAL AMBIGUITY',
    headline: 'Understanding Pain vs. Excusing Cruelty',
    essentialText: 'Cast off at birth, Karna suffers lifelong rejection. While his outcast pain attracts sympathy, his cruel words in the dice hall demand uncompromising ethical accountability.',
    highlights: ['Caste Stigma & Tragic Loyalty', 'Empathy Cannot Erase Harm'],
    image: '/images/characters/karna.jpg',
    imageAlt: 'Portrait of Karna standing noble yet shadowed by tragic loyalty',
    photoBadge: 'Karna (The Outcast Hero)',
    quote: {
      text: '“We can recognise that someone has suffered and still question the harm they cause.”',
      source: 'Ethical Verdict',
    },
  },

  // ==========================================
  // CHAMBER VIII: THE COST OF VICTORY (Presenter: Lakshya)
  // ==========================================
  {
    chamberNumber: 8,
    chamberRoman: 'VIII',
    chamberTitle: 'The Cost of Victory',
    presenter: 'Lakshya',
    presenterRole: 'Presenter: Lakshya',
    presenterColor: '#E2845B',
    kicker: 'CHAMBER VIII ❖ EXTINCTION OF THE FUTURE',
    headline: 'An Empire of Ashes & Murdered Sons',
    essentialText: 'After eighteen days of apocalyptic war, victory is won. Yet on that same night, Ashwatthama slaughters all five of Draupadi’s sons. The crown is won, but the future is gone.',
    highlights: ['Slaughter of the Upapandavas', 'Vengeance Leaves a Graveyard'],
    image: '/images/chambers/cost-of-victory.jpg',
    imageAlt: 'The blood-soaked desolate battlefield of Kurukshetra after eighteen days',
    photoBadge: 'Kurukshetra Aftermath',
    quote: {
      text: '“Vengeance does not fill the void. It only burns the temple down, leaving you alone in the cold ashes.”',
      source: 'Panchaali’s Realization',
    },
  },

  // ==========================================
  // CHAMBER IX: WHY RETELL THE STORY? (Presenter: Anushka)
  // ==========================================
  {
    chamberNumber: 9,
    chamberRoman: 'IX',
    chamberTitle: 'Why Retell the Story?',
    presenter: 'Anushka',
    presenterRole: 'Presenter: Anushka',
    presenterColor: '#D95D6E',
    kicker: 'CHAMBER IX ❖ LITERARY POWER & AGENCY',
    headline: 'Does Having a Voice Mean Having Power?',
    essentialText: 'Draupadi narrates with sharp intellect, yet having a voice does not erase royal patriarchal boundaries. Agency lies in her refusal of silent victimhood and in how she meets her destiny.',
    highlights: ['Being Heard vs. Being Free', 'Living Epics That Evolve'],
    image: '/images/chambers/pandavas-krishna.jpg',
    imageAlt: 'The Pandava assembly and divine figures in profound discourse',
    photoBadge: 'The Living Epic Tradition',
    quote: {
      text: '“A retelling does not change what happened; it changes what we notice and whose pain we honor.”',
      source: 'Narrative Power',
    },
  },

  // ==========================================
  // CHAMBER X: THE READER'S VERDICT (Presenter: Anushka)
  // ==========================================
  {
    chamberNumber: 10,
    chamberRoman: 'X',
    chamberTitle: "The Reader's Verdict",
    presenter: 'Anushka',
    presenterRole: 'Presenter: Anushka',
    presenterColor: '#D95D6E',
    kicker: 'CHAMBER X ❖ CRITICAL EVALUATION',
    headline: 'Atmospheric Prose & Critical Questions',
    essentialText: 'Critics praise Divakaruni for sensory realism and humanizing the epic. Readers also question whether the romantic longing for Karna overshadows Draupadi’s statesmanship.',
    highlights: ['Sensory Emotional Immersion', 'Debating Creative Liberties'],
    image: '/images/palace/palace-inner-hall.jpg',
    imageAlt: 'Illuminated pillared palace library hall in warm candlelight',
    photoBadge: 'Critical Literary Reception',
    quote: {
      text: '“A good retelling gives us enough complexity to question our own assumptions as readers.”',
      source: 'Critical Synthesis',
    },
  },

  // ==========================================
  // CHAMBER XI: BEYOND THE ILLUSION (Presenter: Sukruti)
  // ==========================================
  {
    chamberNumber: 11,
    chamberRoman: 'XI',
    chamberTitle: 'Beyond the Illusion',
    presenter: 'Sukruti',
    presenterRole: 'Presenter: Sukruti',
    presenterColor: '#5BB5D9',
    kicker: 'CHAMBER XI ❖ MORTALITY & TRANSCENDENCE',
    headline: 'Falling in the Snow & The Transcendent Awakening',
    essentialText: 'Collapsing in the Himalayan blizzard, Panchaali realizes every soul faces death alone. Then Lord Krishna appears: all mortal labels dissolve, revealing that the palace and war were only Maya.',
    highlights: ['The Mahaprasthanika Parva', 'Cosmic Dissolution of Grief'],
    image: '/images/chambers/himalayan-journey.jpg',
    imageAlt: 'The Pandavas and Draupadi ascending the frozen snowy peaks of the Himalayas',
    photoBadge: 'The Final Himalayan Ascent',
    quote: {
      text: '“I am beyond names, time, and tears. I laugh with Krishna, and our joy echoes through all the heavens.”',
      source: 'The Novel’s Climax',
    },
  },

  // ==========================================
  // CHAMBER XII: AUDIENCE VERDICT: THE FINAL DOOR (Presenter: Sukruti & All Presenters)
  // ==========================================
  {
    chamberNumber: 12,
    chamberRoman: 'XII',
    chamberTitle: 'Audience Verdict: The Final Door',
    presenter: 'Sukruti',
    presenterRole: 'All Presenters (Closing)',
    presenterColor: '#C5A15A',
    kicker: 'CHAMBER XII ❖ FINAL SYNTHESIS & GRATITUDE',
    headline: 'When Perspective Changes, Everything Changes',
    essentialText: 'When we read a familiar story from an overlooked perspective, does the story change—or do we change the way we see it? We hope the illusions end here, but the questions stay with you.',
    highlights: [
      'Sahil ❖ Chambers I & II',
      'Niharika ❖ Chambers III & IV',
      'Riya ❖ Chambers V & VI',
      'Lakshya ❖ Chambers VII & VIII',
      'Anushka ❖ Chambers IX & X',
      'Sukruti ❖ Chambers XI & XII',
    ],
    image: '/images/chambers/palace-courtyard.jpg',
    imageAlt: 'The serene royal palace courtyard bathed in celestial dawn light',
    photoBadge: 'Palace Courtyard & The Final Door',
    quote: {
      text: '“Thank you for stepping into our palace.”',
      source: 'Sahil, Niharika, Riya, Lakshya, Anushka & Sukruti',
    },
  },
];
