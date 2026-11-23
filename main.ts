// Entry program for the bring-the-humans-03 bounty (Node 22, standard library only).
//
// What this program does is deliberately small: the graded deliverable of this
// entry is a TikTok video, and this repository only has to hand the grader the
// video's address. So main.ts takes VIDEO.json from the repository root and
// places a copy in the output directory, where the gate picks it up.
//
// Directory contract:
//   - input  directory: MAKEFUN_BOT_DIR, default "/bot"
//   - output directory: MAKEFUN_OUTPUT_DIR, default "/output"
// The output directory is created when it does not exist yet. If VIDEO.json
// cannot be copied (most commonly because it is missing), the program reports
// the failure on stderr and exits with code 1 instead of pretending success.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Resolve the two directories once, honouring the environment overrides that
// let the same file run outside the grader's container.
function resolveDirs() {
  return {
    botDir: process.env.MAKEFUN_BOT_DIR ?? '/bot',
    outputDir: process.env.MAKEFUN_OUTPUT_DIR ?? '/output',
  };
}

// Copy VIDEO.json from the bot directory into the output directory.
// Returns nothing; throws whatever the filesystem throws.
function deliverVideoJson(botDir: string, outputDir: string) {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
}

const { botDir, outputDir } = resolveDirs();
try {
  deliverVideoJson(botDir, outputDir);
} catch (err) {
  // Name both endpoints and the fix, so a failed run is self-explanatory in
  // the grader log: VIDEO.json belongs in the repository root (the bot dir).
  console.error(
    `VIDEO.json could not be copied from ${join(botDir, 'VIDEO.json')} to ${join(outputDir, 'VIDEO.json')}: ${(err as Error).message}. ` +
      `Make sure VIDEO.json exists in the repository root.`,
  );
  process.exit(1);
}
