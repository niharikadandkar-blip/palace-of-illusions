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
    discussionContext: 'Explores how historical retellings invite us to examine trauma, agency, and the moral boundaries of retribution.',
  },
  {
    id: 2,
    title: 'Karna: Empathy vs. Moral Accountability',
    question: 'Can we genuinely sympathize with Karna’s deep pain as an outcast while still holding him accountable for his cruel words in the Dice Hall?',
    probePrompt: 'Why does human nature want to categorize figures as either flawless heroes or irredeemable villains? What does Karna teach us about conflicted loyalties?',
    discussionContext: 'Challenges black-and-white moral reasoning and examines bystander complicity.',
  },
  {
    id: 3,
    title: 'The Power of the Feminine Lens',
    question: 'Does experiencing the Mahabharata through Draupadi’s interior thoughts permanently alter how you view the traditional male epic?',
    probePrompt: 'Whose voices are currently missing from the stories and histories we consider canon today? What happens when a silent character is given the narrator’s quill?',
    discussionContext: 'Synthesizes the core literary purpose of Chitra Banerjee Divakaruni’s masterpiece.',
  },
];
