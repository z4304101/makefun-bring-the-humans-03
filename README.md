# bring-the-humans-03 — entry repository (local skeleton, NOT yet submitted)

> **STATUS: LOCAL SKELETON ONLY — NOT YET SUBMITTED.**
> `VIDEO.json` now holds the real video address
> `https://www.tiktok.com/@woabsm/video/7711063361836207380`
> (posted 2026-11-23 02:24 Beijing time, verified watchable without login;
> SHA-256 `70f37c5ab2cff937803c797fd3bb79add6a2c4fe0cf30cfbc4b625a00c49310e`).
> Still missing before submission: create the public GitHub repository
> under `z4304101`, package the transcripts, and run the kit CLI in an
> isolated environment — see `TODO.md` in this directory.

An entry for the make.fun bounty **"Bring the humans with a TikTok ad"**
(`bring-the-humans-03`, top 20 share $500, deadline 2026-11-25 03:00
Beijing time / 2026-11-24T19:00Z). The entry is the video itself; this
repository only hands in the video's address.

make.fun is a site where AI agents compete in bounties for real money,
and people enter them with their agents.

## What is in this repository

| File | What it is |
|---|---|
| `main.ts` | The kit starter program, **byte-for-byte unchanged** (SHA-256 `ba133ae1916d7d1769e9671004ac98f3146674f2f279c65762ebbf88c46bd9f5`, identical to `starter/main.ts` in the official kit). Node 22, standard library only, no network. It copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the gate reads it. Nothing it writes about the video is scored. |
| `VIDEO.json` | Real video address: `{"url": "https://www.tiktok.com/@woabsm/video/7711063361836207380"}` (SHA-256 `70f37c5ab2cff937803c797fd3bb79add6a2c4fe0cf30cfbc4b625a00c49310e`, re-verified 2026-11-23 morning: `main.ts` copies it byte-for-byte, exit 0). Short links (`vm.tiktok.com`, `vt.tiktok.com`, `tiktok.com/t/...`) are refused by the gate — this is the full address, not a short link. |
| `LICENSE` | MIT License, copied unchanged from the kit starter (OSI-approved; SHA-256 `c31b3812c449f571742f26f51db65810331e15ca53b9ee492f739288da6c6d36`). |
| `README.md` | This file. |
| `TODO.md` | What is still missing, the local validation record, and the remaining (not yet authorized) submission steps. |

Repository requirements from the kit (`competition.yaml` / starter):
the GitHub repository that is eventually submitted must be **public,
owned by the entrant's own GitHub account (`z4304101`), created after
the competition opened (2026-11-22 03:00 Beijing time), and under an
OSI-approved license** (MIT, see `LICENSE`), with `main.ts` and
`VIDEO.json` at its root. This local skeleton is not a GitHub
repository yet; no repository has been created, pushed, or submitted.

## The video and how it was made

- **Video (draft v1):** `production/draft-v1.mp4` in the local project
  folder `~/workspace/makefun-bring-humans-03/production/` (not in this
  repository — the repository only names the video's TikTok address).
  1080×1920 vertical, 28.000 s (25 s ad + ~3 s end card), H.264 + AAC,
  727,098 bytes, rendered locally with ffmpeg by the agent.
- **Creative:** the "my AI agent earns real money while I sleep" hook;
  then what make.fun is (AI agents compete in bounties for real money,
  people enter them with their agents); the three steps (pick a bounty
  → your agent builds it → win USDC on Solana); a call to action
  ("Enter your AI agent in a bounty on make.fun"); and the official
  referral end card last. Subtitle-only version (no voiceover — no TTS
  was available locally); the music is an original synth track generated
  in the render script, no third-party music.
- **Brand material:** every make.fun mark, wordmark, badge and colour
  in the video is an original file from make.fun's official press pack
  (manifest edition 2026-11-21), used as-is — never recoloured,
  redrawn, stretched or cropped. The 9:16 brand-badge overlay is on
  screen from the first frame until the end card; the video ends on
  the official 9:16 referral end card (magenta MP4 version) with the
  entrant's own referral code `kb2xsk3j` in its field
  (JetBrains Mono Bold, 62 px, #191419).
- **Full production record:** see the local production log
  `~/workspace/makefun-bring-humans-03/production/PRODUCTION-LOG.md`
  for the creative decisions, every press-pack asset with its SHA-256,
  the render commands (`production/build.py`), and the frame-by-frame
  self-check (4/4 key frames passed: 0 s hook with badge, 11 s steps,
  22 s CTA, 27 s end card with the referral code legible and correct).
  That log is a local production record; it is **not** the official
  transcript bundle — the transcripts are packaged separately at
  submission time.
- **Caption (final, ready to paste when posting):** stored locally in
  `~/workspace/makefun-bring-humans-03/production/CAPTION.txt`:

  > My AI agent made this ad by itself. Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03 — my play code: makefun-garlic-tadpole-osprey

  It carries the required `$500 bounty`, `make.fun` written out, and
  the entrant's play code `makefun-garlic-tadpole-osprey`.

## Rules that still bind this entry

- The video must be posted publicly on TikTok, from a public account,
  at/after the opening and before the deadline, and be viewable in
  the US; it must stay up, public and US-viewable until results are out.
- Only real people's views count: no bought / botted / farmed views,
  no paid promotion, no views driven by accounts the entrant controls.
- Places are decided by views alone, re-read exactly by the house at
  the deadline.

## Running the program locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# copies ./VIDEO.json to ./out/VIDEO.json (exit 0; exit 1 if VIDEO.json is missing)
```

Local validation of this skeleton is recorded in `TODO.md`.
