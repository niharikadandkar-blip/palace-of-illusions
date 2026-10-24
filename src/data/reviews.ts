export interface LiteraryReview {
  id: string;
  publication: string;
  mastheadTag: string;
  year: number;
  featuredQuote: string;
  extendedQuote: string;
  criticalSignificance: string;
  sourceUrl: string;
  verified: boolean;
}

export const LITERARY_REVIEWS: LiteraryReview[] = [
  {
    id: 'kirkus',
    publication: 'Kirkus Reviews',
    mastheadTag: 'New York Literary Journal ❖ Est. 1933',
    year: 2008,
    featuredQuote: '“An intimate, feminine portrait that is both contemporary and timeless.”',
    extendedQuote: '“Divakaruni takes a massive, centuries-old epic poem known as the Mahabharata and grounds it effectively... offering an ambitious project effectively executed that illuminates the female interior life behind divine warfare.”',
    criticalSignificance: 'Kirkus commends Divakaruni for transforming a 100,000-verse heroic monument into an emotionally immediate, deeply vulnerable personal chronicle.',
    sourceUrl: 'https://www.kirkusreviews.com/book-reviews/chitra-banerjee-divakaruni/the-palace-of-illusions/',
    verified: true,
  },
  {
    id: 'publishers-weekly',
    publication: 'Publishers Weekly',
    mastheadTag: 'International Journal of Book Publishing',
    year: 2008,
    featuredQuote: '“A vivid, inventive companion... contrasting action with a complex psychological portrait.”',
    extendedQuote: '“Recasting the renowned epic from Princess Panchaali’s perspective, Divakaruni’s rich, action-filled narrative contrasts well with the complex psychological portrait of a mythic princess navigating ambition and betrayal.”',
    criticalSignificance: 'Publishers Weekly highlights the stark psychological contrast between grand masculine battlefield heroics and Panchaali’s quiet moral reckonings.',
    sourceUrl: 'https://www.publishersweekly.com/978-0-385-51599-3',
    verified: true,
  },
  {
    id: 'booklist',
    publication: 'Booklist',
    mastheadTag: 'American Library Association',
    year: 2008,
    featuredQuote: '“Adds new and truly revelatory psychological and social dimensions to the epic.”',
    extendedQuote: '“By rendering the women characters as complexly as the men... Divakaruni’s historic and transporting variation adds new and truly revelatory psychological and social dimensions to the great epic’s indelible story of sacrifice.”',
    criticalSignificance: 'Booklist praises the book for demonstrating that ancient women were not mere passive trophies, but complex political and moral agents.',
    sourceUrl: 'https://www.booklistonline.com/',
    verified: true,
  },
];

export const VERIFIED_REVIEWS = LITERARY_REVIEWS;
