import fs from 'node:fs';
import path from 'node:path';

function getDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), type: 'png' };
  }
  if (buf[0] === 0xFF && buf[1] === 0xD8) {
    let offset = 2;
    while (offset < buf.length) {
      if (buf[offset] !== 0xFF) break;
      const marker = buf[offset + 1];
      if (marker >= 0xC0 && marker <= 0xC3) {
        const height = buf.readUInt16BE(offset + 5);
        const width = buf.readUInt16BE(offset + 7);
        return { width, height, type: 'jpeg' };
      }
      const len = buf.readUInt16BE(offset + 2);
      offset += 2 + len;
    }
  }
  return { width: 0, height: 0, type: 'unknown' };
}

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) scanDir(full);
    else if (/\.(jpg|jpeg|png)$/i.test(e.name)) {
      const dim = getDimensions(full);
      const sizeKb = Math.round(fs.statSync(full).size / 1024);
      console.log(path.relative('public', full).padEnd(45) + (dim.width + 'x' + dim.height).padEnd(14) + sizeKb + ' KB');
    }
  }
}

scanDir('public/images');
