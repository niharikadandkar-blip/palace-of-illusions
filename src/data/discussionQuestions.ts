export interface AudienceVerdictOption {
  id: string;
  label: string;
  category: string;
  coreArgument: string;
  takeaway: string;
  votes: number;
  percentage?: number;
}

export const AUDIENCE_VERDICT_OPTIONS: AudienceVerdictOption[] = [
  {
    id: 'feminist-reclamation',
    label: 'A Triumphant Feminist Reclamation',
    category: 'Agency & Voice',
    coreArgument: 'The novel succeeds because it rescues Draupadi from the margins of male martial history, giving sovereign voice, moral authority, and emotional interiority to a queen long reduced to a silent catalyst.',
    takeaway: 'Highlights that reclaiming the female voice permanently changes what we value and question in ancient epic traditions.',
    votes: 8,
  },
  {
    id: 'human-portrait',
    label: 'A Vulnerable, Flawed Psychological Study',
    category: 'Complexity & Character',
    coreArgument: 'The novel succeeds not by presenting an infallible heroine, but by depicting a deeply human, passionate, and contradictory woman wrestling with pride, envy, loneliness, and the crushing weight of destiny.',
    takeaway: 'Shows that authentic representation requires celebrating a protagonist’s contradictions, vulnerabilities, and imperfections.',
    votes: 14,
  },
  {
    id: 'provocative-experiment',
    label: 'A Daring, Controversial Literary Reimagining',
    category: 'Tradition vs. Innovation',
    coreArgument: 'The novel serves as a provocative companion to classical canon. While speculative additions (such as the Karna connection) diverge from ancient tradition, they effectively force modern readers to interrogate inherited cultural dogmas.',
    takeaway: 'Demonstrates that mythological fiction should be judged by its courage to challenge assumptions rather than strict textual fidelity.',
    votes: 9,
  },
];

export interface FinalSynthesisInquiry {
  id: number;
  question: string;
  subtext: string;
  literaryContext: string;
}

export const FINAL_SYNTHESIS_INQUIRIES: FinalSynthesisInquiry[] = [
  {
    id: 1,
    question: 'Does The Palace of Illusions give Draupadi an autonomous voice, or does it still ultimately define her through her relationships with men?',
    subtext: 'Consider whether her interior journey transcends her roles as daughter to Drupada, wife to five Pandavas, devotee to Krishna, and longing observer of Karna.',
    literaryContext: 'Critical debate on female agency in feminist retellings of patriarchal epics.',
  },
  {
    id: 2,
    question: 'Should a mythological retelling be judged by its strict fidelity to ancient canon, or by its power to interrogate uncomfortable silences?',
    subtext: 'Consider how classical Sanskrit texts prioritize cosmic dharma and martial lineage, whereas modern fiction excavates suppressed domestic and psychological trauma.',
    literaryContext: 'The tension between preserving sacred cultural heritage and breathing new life into living mythologies.',
  },
  {
    id: 3,
    question: 'How does viewing the war through Draupadi’s eyes dismantle the glorification of military victory?',
    subtext: 'Reflect on how her grief over her five murdered sons and the ashes of Kurukshetra exposes the hollow core of dynastic triumph.',
    literaryContext: 'Deconstructing masculine heroic triumphalism through the lens of maternal bereavement.',
  },
];

// Backward compatibility alias for legacy components
export interface FinaleQuestion {
  id: number;
  title: string;
  question: string;
  probePrompt: string;
  discussionContext: string;
}

export const FINALE_QUESTIONS: FinaleQuestion[] = [
  {
    id: 1,
    title: 'Justice, Answers, or Retribution?',
    question: 'If you were Draupadi in the aftermath of the Dice Hall, what would matter most to you: legal justice, philosophical answers, or personal retribution?',
    probePrompt: 'Consider: Yudhishthira sought dharma, Bhima sought vengeance, and Krishna spoke of cosmic balance. Was true peace ever possible without Kurukshetra?',
    discussionContext: 'Trauma, agency, and the moral boundaries of retribution.',
  },
  {
    id: 2,
    title: 'Karna: Empathy vs. Moral Accountability',
    question: 'Can we genuinely sympathize with Karna’s deep pain as an outcast while still holding him accountable for his cruel words in the Dice Hall?',
    probePrompt: 'Why does human nature want to categorize figures as either flawless heroes or villains?',
    discussionContext: 'Moral reasoning and bystander complicity.',
  },
  {
    id: 3,
    title: 'The Power of the Feminine Lens',
    question: 'Does experiencing the Mahabharata through Draupadi’s interior thoughts permanently alter how you view the traditional male epic?',
    probePrompt: 'Whose voices are missing from traditional canon?',
    discussionContext: 'Core literary purpose of feminist mythological fiction.',
  },
];

