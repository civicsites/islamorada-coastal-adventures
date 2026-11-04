import { readdir, mkdir, mkdtemp, rm } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/import-gallery.mjs /absolute/path/to/photos');
const destination = path.resolve('public/gallery');
if (path.resolve(source) === destination) throw new Error('Source must be separate from the gallery output.');
const temporary = await mkdtemp(path.join(os.tmpdir(), 'gallery-import-'));
let imported = 0;
const skipped = [];
async function walk(folder, parts = []) {
  for (const entry of (await readdir(folder, { withFileTypes: true })).sort((a,b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith('.')) continue;
    const input = path.join(folder, entry.name);
    if (entry.isDirectory()) { await walk(input, [...parts, entry.name]); continue; }
    if (!entry.isFile() || !/\.(heic|heif|jpe?g|png|webp|avif)$/i.test(entry.name)) { skipped.push([...parts, entry.name].join('/')); continue; }
    const outputDir = path.join(destination, ...parts);
    await mkdir(outputDir, { recursive: true });
    // Retain the original extension in the output name to avoid collisions.
    const output = path.join(outputDir, `${entry.name}.webp`);
    let decoded = input;
    if (/\.hei[cf]$/i.test(entry.name)) {
      decoded = path.join(temporary, 'converted.jpg');
      execFileSync('sips', ['-s', 'format', 'jpeg', input, '--out', decoded], { stdio: 'pipe' });
    }
    await sharp(decoded).rotate().resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
    imported++;
  }
}
try { await walk(path.resolve(source)); console.log(JSON.stringify({ imported, skipped }, null, 2)); }
finally { await rm(temporary, { recursive: true, force: true }); }
