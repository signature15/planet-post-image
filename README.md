[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/planet-post-image/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/planet-post-image/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# One Day in World News - Wednesday 18 November 2026

An entry for make.fun's [news-image-20261118](https://make.fun/bounty/news-image-20261118)
image contest: the world's news of **Tuesday 17 November 2026**, laid out as
the front page of a single broadsheet poster.

## What it does

The repository holds one finished artwork, `entry.png`, and one tiny
program, `main.ts`. Running the program publishes the artwork: it copies
`entry.png` into the output directory the grader reads from. That is the
whole job — one deterministic file copy, Node's standard library only, no
network access, no dependencies, no build step.

## The image

`entry.png` is a front-page layout of the world's news of Tuesday
17 November 2026:

- **Masthead** — the paper's nameplate and the day's date, set like a
  classic broadsheet front page.
- **Six-continent map band** — a stylized world map strip spanning the
  page width, marking where the day's stories land.
- **Three columns of headline cards** — 30 regional headline cards grouped
  by continent and topic, chosen for breadth across regions and fields
  rather than depth on any single story.

## How to run

Requires Node 22 or newer. From the repository root:

```sh
node main.ts
```

Inside the grading container this writes `/output/entry.png`. Anywhere
else, point `MAKEFUN_OUTPUT_DIR` at the directory that stands in for
`/output`:

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts   # writes ./output/entry.png
```

The source image is resolved relative to `main.ts` itself, so the current
working directory does not matter.

## Determinism

The program performs a byte-for-byte copy of the committed `entry.png`.
There is no re-rendering, no timestamp, no randomness, and nothing read
from the environment beyond the output directory override — so two runs
write identical bytes, and every run's output is byte-identical to the
image checked into this repository.

## License

[MIT](./LICENSE) © 2026 signature15
