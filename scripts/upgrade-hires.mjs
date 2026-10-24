import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'PalaceOfIllusionsProject/1.0 (educational presentation; student@example.edu)';

async function fetchFile(fileTitle, destPath) {
  try {
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url|size&format=json`;
    const res = await fetch(apiUrl, { headers: { 'User-Agent': USER_AGENT } });
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];
    const info = page.imageinfo?.[0];
    if (!info?.url) {
      console.warn('No url for', fileTitle);
      return false;
    }
    console.log(`Downloading ${fileTitle} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)...`);
    const imgRes = await fetch(info.url, { headers: { 'User-Agent': USER_AGENT } });
    if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(destPath, buf);
    console.log(`Saved ${destPath}`);
    return true;
  } catch (err) {
    console.error('Failed', fileTitle, err.message);
    return false;
  }
}

async function searchHighRes(query, preferredKeyword) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query + ' filetype:bitmap')}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url|size&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  const data = await res.json();
  const pages = Object.values(data.query?.pages || {});
  pages.sort((a, b) => ((b.imageinfo?.[0]?.width || 0) * (b.imageinfo?.[0]?.height || 0)) - ((a.imageinfo?.[0]?.width || 0) * (a.imageinfo?.[0]?.height || 0)));
  
  if (preferredKeyword) {
    const match = pages.find(p => p.title.toLowerCase().includes(preferredKeyword.toLowerCase()));
    if (match) return match.title;
  }
  return pages[0]?.title;
}

async function main() {
  const baseDir = path.resolve('public/images');

  // Upgrade Bhima to 1111x1545 version
  await fetchFile('File:Indians 1920\'s print of General Bhima Sena.jpg', path.join(baseDir, 'characters/bhima.jpg'));

  // Upgrade Duryodhana to 712x1649 version
  await fetchFile('File:Duryodhana, Raja Ravi Varma (cropped).jpg', path.join(baseDir, 'characters/duryodhana.jpg'));

  // Find high-res Arjuna
  const arjunaTitle = await searchHighRes('Arjuna Ravi Varma archery', 'Arjuna');
  console.log('Arjuna match:', arjunaTitle);
  if (arjunaTitle) {
    await fetchFile(arjunaTitle, path.join(baseDir, 'characters/arjuna.jpg'));
  }

  // Find high-res Karna
  const karnaTitle = await searchHighRes('Karna Surya Kavacha', 'Karna');
  console.log('Karna match:', karnaTitle);
  if (karnaTitle) {
    await fetchFile(karnaTitle, path.join(baseDir, 'characters/karna.jpg'));
  }

  // Find high-res Sacred fire / Yajna
  const fireTitle = await searchHighRes('Agni Homa Yajna sacred fire ritual India', 'Homa');
  console.log('Fire match:', fireTitle);
  if (fireTitle) {
    await fetchFile(fireTitle, path.join(baseDir, 'chambers/sacred-fire-birth.jpg'));
  }
}

main();
