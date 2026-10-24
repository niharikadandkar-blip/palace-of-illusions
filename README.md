# 🏛️ The Palace of Illusions — An Immersive Literary Experience

An interactive, cinematic web experience designed for a group presentation and deep literary analysis of ***The Palace of Illusions*** by Chitra Banerjee Divakaruni.

Narrated from the intimate first-person perspective of **Panchaali / Draupadi (Krishnaa)**, this experience guides audiences through the epic Mahabharata through the eyes of the fiery queen who shaped its destiny.

---

## 🌟 Features & Highlights

- **Monumental Architectural Gateway**: Carved sandstone royal entrance with interactive diya oil-lamp glow controls, atmospheric ambient sound, and realistic royal double-door entry animation.
- **12 Interactive Story Chambers**:
  1. *The Gateway of Fire & Destiny* — Monumental palace entrance & soundscapes.
  2. *The Audience Chamber* — Interactive audience poll question before entering.
  3. *The Sacred Tome* — Historical context, Chitra Banerjee Divakaruni's vision, and epic themes.
  4. *The Character Atlas* — Interactive visual roster of heroes with detailed hover & click dossiers.
  5. *Meet Krishnaa* — Draupadi's birth from sacrificial fire and her master portrait.
  6. *The Hall of Wonders (Maya Sabha)* — Architecture of illusion, water-mirrors, and Duryodhana's fateful stumble.
  7. *The Dice Hall (Dyuta Sabha)* — The fateful wager, disrobing trial, and Draupadi's unyielding defiance.
  8. *The Karna Dilemma* — Forbidden longing, secret recognition, and moral complexity.
  9. *The Battlefield of Kurukshetra* — Cost of war, blood-soaked sands, and true price of victory.
  10. *Why Retell the Epic?* — Feminist reclamation, subversive sub-text, and modern resonance.
  11. *Critical Acclaim & Reflections* — Curated literary reviews, student quotes, and discussion sparks.
  12. *The Final Ascent* — Draupadi's ascent through the Himalayas and interactive discussion prompts.
- **Uncompromised HD Imagery**: 19 curated high-resolution character portraits and chamber paintings presented with dark royal museum framing and zero cropping (`object-fit: contain`).
- **Chamber Navigation HUD**: Quick chamber selector, keyboard navigation (Left/Right arrows), and audio control toggle.

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

