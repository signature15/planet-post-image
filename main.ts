/**
 * planet-post-image — entrypoint for make.fun's news-image-20261117 contest.
 *
 * What it does:
 *   Publishes this repository's entry by copying the rendered poster image
 *   `entry.png` — a front-page rendering of the world's news of Tuesday
 *   17 November 2026 — into the grader's output directory as `entry.png`.
 *
 * Determinism:
 *   The program is a byte-for-byte file copy. There is no re-rendering, no
 *   timestamping, no randomness, and no reliance on locale, timezone, or
 *   cwd, so two runs write identical bytes — and each run's output is
 *   byte-identical to the `entry.png` committed to the repository.
 *
 * Why no network is needed:
 *   The image was fully rendered ahead of time and checked into the repo,
 *   so the entire job is one local file operation between two paths on
 *   disk. Nothing is fetched, resolved, cached, or uploaded; the process
 *   works offline and is immune to remote failures and rate limits.
 *
 * The MAKEFUN_OUTPUT_DIR stand-in:
 *   Inside the grading container the destination directory is `/output`.
 *   Outside it (local runs, CI, debugging), process.env.MAKEFUN_OUTPUT_DIR
 *   names the directory that stands in for `/output`; it may be relative,
 *   in which case it resolves against the cwd. When the variable is unset
 *   the container default `/output` is used — e.g.
 *   `MAKEFUN_OUTPUT_DIR=./dist node main.ts` writes `./dist/entry.png`.
 *
 * The destination directory is deliberately not created here: the grader
 * guarantees `/output` exists, and a local run should point the variable
 * at a directory it has made. A missing directory makes copyFileSync
 * throw, so the process exits non-zero — there is never partial output.
 *
 * Requirements: Node 22+, Node standard library only (`node:fs`,
 * `node:path`), no third-party dependencies.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// Resolve the source relative to this file, not the cwd, so the program
// behaves identically no matter where it is invoked from.
const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

copyFileSync(source, join(outputDir, 'entry.png'));
