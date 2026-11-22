// bring-the-humans-03 entry program: "YOUR AI WORKS FOR FREE?"
//
// The entry is the TikTok video itself. This program only hands the
// video's address to the grader: it reads VIDEO.json from the
// repository root and writes an identical copy to the output
// directory, where the gate reads it. Node standard library only;
// nothing is installed and no network is used.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

const entry = JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown };
const url = typeof entry.url === 'string' ? entry.url : '';
const match = /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/(\d+)\/?$/.exec(url);
if (!match) {
  console.error('VIDEO.json does not name a TikTok video URL of the form https://www.tiktok.com/@<handle>/video/<id>');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`VIDEO.json copied to ${target} (video ${match[2]})`);
