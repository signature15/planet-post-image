/**
 * planet-post-image — publishes the artwork `entry.png` from this repository.
 *
 * The artwork is a cream newsprint broadsheet for Wednesday 18 November
 * 2026: one front page holding the whole day's world news, laid out the
 * way a paper lays out a date it knows mattered.
 *
 *   - A masthead with a date tab pinning the edition to Wednesday
 *     18 November 2026, set like a classic nameplate.
 *   - Thirty stories arranged in time bands, following the day from
 *     its first morning dispatches to its last.
 *   - A day-in-numbers strip distilling the date into the figures
 *     that tell it at a glance.
 *   - Lead stories at the top of the page in the largest type, where
 *     a broadsheet puts what matters most.
 *   - A region grid sweeping the rest of the world, so every region
 *     of the day's news has its cell.
 *   - Evening briefs closing the page with the day's later dispatches.
 *   - A sources footer crediting the reporting the page draws on.
 *
 * This program does one thing: it copies the finished, committed
 * entry.png into the output directory — /output inside the grading
 * container, or MAKEFUN_OUTPUT_DIR anywhere else — deterministically,
 * offline, byte-for-byte, with nothing beyond the Node standard library.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// Resolve the source relative to this file, not the cwd, so the program
// behaves identically no matter where it is invoked from.
const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

copyFileSync(source, join(outputDir, 'entry.png'));
