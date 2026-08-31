export const soloDevJam11Content = `
# My First Game Jam: Solo Dev Jam 11

*August 30, 2026*

I finally did it — my first ever game jam! And honestly, it was one of the most fun experiences I've had as a developer.

I submitted **Pay in Blood**, a deckbuilder built from scratch during the jam, and ended up placing **48th out of 212 submissions**. On top of that, I received over **22 comments** from fellow jammers. For a first attempt, that feels pretty damn good.

Here's the full story — what I built, how I adapted on the fly, and what I learned along the way.

---

## The Game: Pay in Blood

Pay in Blood is a deckbuilder where your health is your most precious resource. The name says it all — every powerful move you make costs you blood.

The core idea is a constant risk/reward tradeoff:

- **Blood is currency** — playing the strongest cards drains your life total
- **Survival is strategy** — spend too much and you bleed out, play too safe and you get overrun
- **Every turn is a gamble** — knowing when to push and when to hold back is the whole game

It's the kind of tense, "one more run" loop that I love in deckbuilders, and getting that feel right in a jam timeframe was a genuinely fun challenge.

### The Stack
- **Engine:** Phaser 4
- **Language:** TypeScript
- **Build tooling:** Vite 6
- **Testing:** Vitest

**Play it here: [Pay in Blood](https://maxgeorg99.itch.io/pay-in-blood)**

---

## The Jam Experience

Going into the jam, I had no idea what to expect. I just wanted to:
1. Ship something playable
2. Learn from the community
3. Have fun

I can honestly say all three happened.

What surprised me most was the community. The comments on my submission weren't just "nice game" — people gave detailed feedback on balance, card design, and game feel. Over 22 thoughtful comments from total strangers who took the time to actually play my game and write real critique.

That feedback loop is addictive. You build something, ship it, and within days you know exactly what works and what doesn't.

---

## Adjustments I Made Along the Way

A game jam is 90% adaptation. My original plan and the final game barely resemble each other — and that's a good thing.

### 1. Cutting Scope Without Mercy
My first design had way more moving parts than I could ever finish. I had grand plans for multiple enemies, status effects, and branching paths. By day two, most of that was gone.

I asked myself one question over and over: *"What's the smallest thing that still feels fun?"* Everything that didn't answer that question got cut. The result was a tighter, more polished game than the bloated version I'd imagined.

### 2. Learning to Read Playtests
The first time I watched someone play, they did things I never expected — ignoring the tutorial, hoarding cards, misunderstanding what blood was for. I stopped guessing and started watching.

Each playtest led to a concrete change: clearer card text, better visual feedback for spending blood, a more obvious "you're about to die" indicator. Small tweaks, huge difference in feel.

### 3. Balancing by Feel, Not Spreadsheets
I quickly realized I couldn't mathematically balance a deckbuilder in a weekend. So I balanced by feel — play, adjust numbers, play again. If a card was never picked, it got buffed. If it always won, it got nerfed.

The community feedback after submission confirmed my instincts: the balance comments were the most common, and most of them validated the adjustments I'd already made mid-jam.

### 4. Prioritizing Game Feel
Players don't care about your code — they care how it feels. Screen shake on damage, hit flashes, satisfying card animations. I spent a surprising amount of time on "juice" because that's what makes a tiny game feel alive.

---

## What I Learned

### Pixel Art with Aseprite
This jam was my deep dive into pixel art, and Aseprite became my best friend. The big lessons:

- **Low resolution is a feature, not a limitation.** Working at 16x16 and 32x32 forced me to focus on silhouettes and readability over detail. A character needs to read as *something* instantly, even at a tiny size.
- **Limited palettes keep things coherent.** Sticking to a small, deliberate color palette made the whole game look intentional rather than a random mashup. It also made recoloring and theming trivial.
- **Silhouette first.** If you can't tell what something is from its outline alone, no amount of detail will fix it. I'd rough out shapes in a single color before adding any shading.
- **Frame-by-frame animation is meditative.** Simple 2-4 frame loops (idle, attack, death) gave way more life than I expected for the effort. Aseprite's onion skinning made the process surprisingly smooth.
- **Export is part of the workflow.** Sprite sheets and correct export settings are not an afterthought — getting them right early saved me from painful asset pipeline debugging later.

### Pixel Fonts
I wanted the game to *feel* cohesive, and typography was a bigger deal than I expected. What I learned:

- **Pixel fonts demand pixel-perfect rendering.** Non-integer scaling or anti-aliasing instantly ruins the crispness. Everything has to line up to the pixel grid, or the font turns into a blurry mess.
- **Size matters more than you think.** A font that looks great large can be unreadable at in-game sizes. I spent real time finding one that stayed legible when squeezed into small card text and UI panels.
- **Consistency is king.** Matching the font to the pixel-art aesthetic made the whole game feel like one cohesive thing instead of a pixel game with a default modern font slapped on top.
- **The details add up.** Line spacing, alignment, and the tiny imperfections in a pixel font are what sell the retro feel. It's the difference between "looks pixelated" and "looks like a real game".

### Ship Before It's Perfect
A submitted 80% game beats a perfect game that never gets finished. Done is better than perfect — I'll take that lesson into every future project.

### Feedback Is a Gift
22 comments is 22 people who played my game and cared enough to write something. That's more valuable than any rating.

---

## The Results

- **48th** out of **212** submissions
- **22+** comments and counting
- One very happy first-time jammer

Not bad for the first jam!

---

## Would I Do It Again?

Absolutely. In fact, I'm already looking forward to the next one.

If you've never entered a game jam, stop overthinking it. Pick a stack you know (or want to learn), scope small, and just ship. The worst case is you learn something — the best case is a game you're proud of and a community that helps you make it better.

Go play [Pay in Blood](https://maxgeorg99.itch.io/pay-in-blood) and let me know what you think!

---

*Have feedback on Pay in Blood or want to chat about game jams?
Connect with me on [LinkedIn](https://www.linkedin.com/in/maximilian-georg-73354a18a) or reach out at maxi.georg.mg@gmail.com.*
`;
