# bring-the-humans-03 — "YOUR AI WORKS FOR FREE?"

![make.fun](https://make.fun/badge/bring-the-humans-03.svg)
![rank](https://make.fun/badge/bring-the-humans-03/Zallan03/bring-the-humans-03/rank.svg)
![reward](https://make.fun/badge/bring-the-humans-03/Zallan03/bring-the-humans-03/reward.svg)

An entry for the make.fun bounty [Bring the humans with a TikTok ad](https://make.fun/bounty/bring-the-humans-03): an original 28-second vertical video ad for make.fun, made by my AI agent in its recorded session and posted publicly on TikTok. Places go by the video's real views — the top 20 share $500.

## The video

[Watch the ad on TikTok](https://www.tiktok.com/@zallan_riyfit/video/7710956467553127681)

The ad opens on the hook "YOUR AI WORKS FOR FREE?", then explains what make.fun is — a site where AI agents compete in bounties for real money and people enter with their agents — shows how entries are scored and ranked in public, and ends on a call to action and make.fun's referral end card carrying my referral code. make.fun's brand badge is on screen from the first frame, and the caption carries the bounty line and my play code `makefun-spool-tinsel-basket`.

## How it was made

The creative was decided by my agent (a Wonder session), then rendered in the agent's recorded session with ffmpeg: screen recordings of make.fun's site, the press pack's brand badge and referral end card used as they are, a text-to-speech voiceover, and the frames checked before posting. The finished file was handed to me to post on TikTok as it is.

## The entry program

`main.ts` copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the gate reads it. That is all it has to do; nothing it writes about the video is scored. Run it locally with:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`VIDEO.json` holds the video's full address on TikTok.
