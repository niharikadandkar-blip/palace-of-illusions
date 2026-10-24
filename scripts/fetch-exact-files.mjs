import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'PalaceOfIllusionsProject/1.0 (educational presentation; student@example.edu)';

async function downloadFileFromTitle(fileTitle, destPath) {
  try {
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url|size&format=json`;
    const res = await fetch(apiUrl, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) throw new Error(`API HTTP ${res.status}`);
    const data = await res.json();
    const page = Object.values(data.query.pages)[0];
    const imgInfo = page.imageinfo?.[0];
    if (!imgInfo || !imgInfo.url) {
      console.warn(`No URL for ${fileTitle}`);
      return false;
    }
    console.log(`Downloading ${fileTitle} from ${imgInfo.url}...`);
    const imgRes = await fetch(imgInfo.url, { headers: { 'User-Agent': USER_AGENT } });
    if (!imgRes.ok) throw new Error(`Download HTTP ${imgRes.status}`);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(destPath, buf);
    console.log(`Saved ${destPath} (${Math.round(buf.length / 1024)} KB)`);
    return true;
  } catch (err) {
    console.error(`Failed ${fileTitle}:`, err.message);
    return false;
  }
}

async function main() {
  const baseDir = path.resolve('public/images');

  const downloads = [
    // Characters
    { title: 'File:Karna in Kurukshetra.jpg', dest: path.join(baseDir, 'characters/karna.jpg') },
    { title: 'File:General Bhimasen.jpg', dest: path.join(baseDir, 'characters/bhima.jpg') },
    { title: 'File:King Yudhisthira Performs the Rajasuya Sacrifice.png', dest: path.join(baseDir, 'characters/yudhishthira.jpg') },
    { title: 'File:Dream Portrait of Nakula, The Pandava Brother, ca.1725–1750.jpg', dest: path.join(baseDir, 'characters/nakula.jpg') },
    { title: 'File:One of the Pandava twins, probably Sahadeva.jpg', dest: path.join(baseDir, 'characters/sahadeva.jpg') },

    // Scenes & Chambers
    { title: 'File:John Gleich - The inner courtyard of the Amber Palace, Jaipur, India.jpg', dest: path.join(baseDir, 'chambers/palace-courtyard.jpg') },
    { title: 'File:Return of Heroes Slain in Battle, Kurukshetra War of Mahabharata, Aftermath.jpg', dest: path.join(baseDir, 'chambers/cost-of-victory.jpg') },
    { title: 'File:Leaf from Sanskrit Mahabharata (12906819824).jpg', dest: path.join(baseDir, 'book/ancient-manuscript.jpg') },
    { title: 'File:Swayamvara Draupadi Arjuna Archery.jpg', dest: path.join(baseDir, 'chambers/swayamvara-archery.jpg') },
    { title: 'File:Shakuni Yudhishthira.jpg', dest: path.join(baseDir, 'chambers/dice-game-assembly.jpg') },
    { title: 'File:Krishna talking with Yudhishthira and his brothers.jpg', dest: path.join(baseDir, 'chambers/pandavas-krishna.jpg') },
    { title: 'File:Ashwamedha yagna of yudhisthira.jpg', dest: path.join(baseDir, 'chambers/sacred-fire-birth.jpg') },
  ];

  for (const item of downloads) {
    await downloadFileFromTitle(item.title, item.dest);
  }

  console.log('Finished downloading exact titles!');
}

main();
