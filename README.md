# 🏛️ The Palace of Illusions — An Immersive Literary Experience

An interactive, cinematic web experience designed for a group presentation and deep literary analysis of ***The Palace of Illusions*** by Chitra Banerjee Divakaruni.

Narrated from the intimate first-person perspective of **Panchaali / Draupadi (Krishnaa)**, this experience guides audiences through the epic Mahabharata through the eyes of the fiery queen who shaped its destiny.

---

## 🌟 Features & Highlights

- **Monumental Architectural Gateway**: Carved sandstone royal entrance with interactive 3D double-door entry animation, presentation purpose banner, and 12-chamber roadmap preview.
- **12 Content-Rich Presentation Chambers (Self-Sufficient Slide Deck)**:
  1. *Enter the Palace* — Group presentation intro, novel context, authorial purpose, and speaker allocation.
  2. *The Book* — Divakaruni’s premise, setting, accessible 5-point Mahabharata summary for beginners, and fiction vs. Sanskrit canon.
  3. *A Different Voice* — From object to subject: centring Draupadi’s first-person voice, interiority, and critical limitations of a single lens.
  4. *Born of Fire — Desires and Destiny* — Sacrificial fire birth, the dark complexion (Krishnaa), choice vs. destiny, polyandry, and agency beyond men.
  5. *The Maya Sabha — A Palace of Illusions* — Architectural wonder, appearance vs. reality, hubris of power, and Duryodhana’s fatal stumble.
  6. *The Dice Hall* — The rigged gamble, Yudhishthira’s breakdown of duty, Draupadi’s constitutional inquiry, and the silence of the elders.
  7. *Karna — Sympathy and Accountability* — Outcast origins, loyalty to Duryodhana, and the vital distinction between understanding pain and excusing harm.
  8. *The Cost of Victory* — The Kurukshetra slaughter, the hollow throne, the murdered Upapandavas, and Draupadi’s awakening on the futility of vengeance.
  9. *Why Retell the Story?* — Centering marginalized perspectives, evaluating strengths vs. limitations, and assessing Divakaruni’s craft.
  10. *The Reader's Verdict* — Critical evaluation, nuanced questions on female representation, and verified press reviews (Kirkus, Publishers Weekly, Booklist).
  11. *Beyond the Illusion* — Suspenseful reveal: the imagined emotional bond between Draupadi and Karna, creative fiction vs. canon, and the central literary debate.
  12. *Audience Verdict — The Final Door* — Journey synthesis, live interactive audience voting poll, and final closing reflection with presenter credits.
- **Speaker Presentation Allocation (6 Students)**:
  - **Speaker 1**: Chambers 1 & 2 (Opening & The Book)
  - **Speaker 2**: Chambers 3 & 4 (A Different Voice & Born of Fire)
  - **Speaker 3**: Chambers 5 & 6 (The Maya Sabha & The Dice Hall)
  - **Speaker 4**: Chambers 7 & 8 (Karna & The Cost of Victory)
  - **Speaker 5**: Chambers 9 & 10 (Why Retell the Story? & The Reader's Verdict)
  - **Speaker 6 & All**: Chambers 11 & 12 (Beyond the Illusion & Audience Verdict)
- **Classroom & Projector Optimized**: Complete, natural sentences on screen with zero overlap, tabbed sub-slides within each chamber, large high-contrast typography, and full keyboard navigation (Space / Arrow keys).

---

## 🚀 Instant Deployment to Vercel

This repository is already pre-configured for **Vercel** with optimized build settings and SPA routing rewrites in `vercel.json`.

### Step 1: Push to GitHub
If you haven't pushed this repository yet:
```bash
# 1. Create a new repository on https://github.com/new (e.g. "palace-of-illusions")
# 2. Add your repository remote URL:
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 3. Push the main branch:
git push -u origin main
```

### Step 2: Import into Vercel
1. Visit [vercel.com/new](https://vercel.com/new).
2. Select your `palace-of-illusions` repository from GitHub.
3. Vercel will automatically detect `Vite` and use the pre-configured `vercel.json` settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on a custom `.vercel.app` URL in under 60 seconds!

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build
```

