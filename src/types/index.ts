export interface ChamberMeta {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  theme: string;
  speakerRole: string;
  estimatedMinutes: string;
}

export interface BeginnerPollOption {
  id: string;
  label: string;
  symbol: string;
  archetype: string;
  traditionalMyth: string;
  novelLens: string;
  votes: number;
  imagePath?: string;
}

// Backward compatibility alias
export type PollOption = BeginnerPollOption;

export interface CharacterIdentity {
  name: string;
  sanskritName: string;
  epithet: string;
  description: string;
  visualIdentityNotes: string[];
  novelThemes: string[];
  imagePath: string;
}
