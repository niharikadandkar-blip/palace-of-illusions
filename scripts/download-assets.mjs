// Search and download script for Palace of Illusions educational assets
import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'PalaceOfIllusionsProject/1.0 (educational literary presentation; contact@example.edu)';

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.json();
}

async function downloadFile(url, destPath) {
  console.log(`Downloading ${url} -> ${destPath}`);
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
  console.log(`Saved ${destPath} (${Math.round(arrayBuffer.byteLength / 1024)} KB)`);
}

async function getWikiMediaImage(searchQuery, targetPath, preferredKeywords = []) {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(searchQuery)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
    const data = await fetchJson(searchUrl);
    if (!data.query || !data.query.pages) {
      console.warn(`No results for query: ${searchQuery}`);
      return false;
    }
    const pages = Object.values(data.query.pages);
    let chosen = pages[0];
    if (preferredKeywords.length > 0) {
      for (const kw of preferredKeywords) {
        const match = pages.find(p => p.title.toLowerCase().includes(kw.toLowerCase()));
        if (match) {
          chosen = match;
          break;
        }
      }
    }
    const imgInfo = chosen.imageinfo?.[0];
    if (!imgInfo || !imgInfo.url) {
      console.warn(`No image info for query: ${searchQuery}`);
      return false;
    }
    // Prefer thumb or direct url
    let downloadUrl = imgInfo.url;
    // If it's a huge file (> 5MB) or SVG, we can use 1280px thumb if available
    if (imgInfo.thumburl) {
      downloadUrl = imgInfo.thumburl;
    }
    await downloadFile(downloadUrl, targetPath);
    return true;
  } catch (err) {
    console.error(`Error fetching image for "${searchQuery}":`, err.message);
    return false;
  }
}

async function run() {
  const baseDir = path.resolve('public/images');
  console.log('Target directory:', baseDir);

  const tasks = [
    // Characters
    {
      query: 'Raja Ravi Varma Arjuna Subhadra',
      target: path.join(baseDir, 'characters/arjuna.jpg'),
      keywords: ['Arjuna']
    },
    {
      query: 'Krishna as Envoy Raja Ravi Varma',
      target: path.join(baseDir, 'characters/krishna.jpg'),
      keywords: ['Envoy', 'Krishna']
    },
    {
      query: 'Duryodhana Raja Ravi Varma',
      target: path.join(baseDir, 'characters/duryodhana.jpg'),
      keywords: ['Duryodhana']
    },
    {
      query: 'Karna Surya Kavacha Kundala Ravi Varma OR Mahabharata',
      target: path.join(baseDir, 'characters/karna.jpg'),
      keywords: ['Karna']
    },
    {
      query: 'Bhima Mahabharata Raja Ravi Varma OR painting',
      target: path.join(baseDir, 'characters/bhima.jpg'),
      keywords: ['Bhima']
    },
    {
      query: 'Yudhisthira Mahabharata Raja Ravi Varma OR painting',
      target: path.join(baseDir, 'characters/yudhishthira.jpg'),
      keywords: ['Yudhisthira', 'Dharma']
    },
    {
      query: 'Nakula Sahadeva Mahabharata painting',
      target: path.join(baseDir, 'characters/nakula_sahadeva.jpg'),
      keywords: ['Pandava', 'Twins']
    },

    // Chambers / Scenes
    {
      query: 'Draupadi Vastraharan Raja Ravi Varma',
      target: path.join(baseDir, 'chambers/dice-hall.jpg'),
      keywords: ['Vastraharan', 'Draupadi']
    },
    {
      query: 'Sheesh Mahal Amber Fort mirror palace reflections',
      target: path.join(baseDir, 'chambers/maya-sabha.jpg'),
      keywords: ['Sheesh', 'Mirror', 'Amber']
    },
    {
      query: 'Kurukshetra battlefield sunset Raja Ravi Varma OR painting',
      target: path.join(baseDir, 'chambers/cost-of-victory.jpg'),
      keywords: ['Kurukshetra', 'Battle', 'Aftermath']
    },
    {
      query: 'Mahabharata manuscript illuminated Sanskrit palm leaf',
      target: path.join(baseDir, 'book/ancient-manuscript.jpg'),
      keywords: ['Mahabharata', 'manuscript']
    },
    {
      query: 'Jaipur palace courtyard sunset ornate arches',
      target: path.join(baseDir, 'chambers/palace-courtyard.jpg'),
      keywords: ['Jaipur', 'Palace', 'Courtyard']
    },
    {
      query: 'Yajna sacred fire Vedic Draupadi birth',
      target: path.join(baseDir, 'chambers/sacred-fire-birth.jpg'),
      keywords: ['Yajna', 'Fire', 'Sacrifice']
    }
  ];

  for (const t of tasks) {
    console.log(`\n--- Fetching for: ${path.basename(t.target)} ---`);
    const success = await getWikiMediaImage(t.query, t.target, t.keywords);
    if (!success) {
      console.log(`Retrying with broader query for ${path.basename(t.target)}...`);
      // Fallback queries
      if (t.target.includes('karna')) {
        await getWikiMediaImage('Karna Mahabharata', t.target);
      } else if (t.target.includes('nakula')) {
        await getWikiMediaImage('Pandavas Mahabharata', t.target);
      } else if (t.target.includes('yudhishthira')) {
        await getWikiMediaImage('Yudhishthira', t.target);
      } else if (t.target.includes('cost-of-victory')) {
        await getWikiMediaImage('Mahabharata war grief', t.target);
      } else if (t.target.includes('sacred-fire')) {
        await getWikiMediaImage('Homa fire ritual India', t.target);
      }
    }
  }

  console.log('\nAsset fetching complete.');
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
