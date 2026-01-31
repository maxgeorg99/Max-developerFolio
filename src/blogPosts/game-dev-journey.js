export const gameDevJourneyContent = `# My Game Dev Journey:

*December 5, 2025*

A few months ago, I had no clue about game development and never touched any game engine.
I've 4 playable games across 4 different engines and tech stacks in my portfolio.
Here's the story of how I stumbled into game development and what I learned building each project.

## How It Started

It all began with a random youtube video I discovered about SpacetimeDB — a database designed specifically for multiplayer games. As a backend developer, the idea of treating game state as database tables clicked immediately. I thought, "I could actually build a game with this." And so I did.

What started as curiosity turned into an obsession. Each game taught me something new and pushed me to explore different engines, languages, and paradigms.

---

## Survivor game for me and my friends: Survive With Friends (SpacetimeDB + Phaser)

![Survive With Friends Gameplay](/Max-developerFolio/gifs/survive-with-friends.gif)

### The Tech
- **Server:** SpacetimeDB with Rust
- **Client:** Phaser 2D (TypeScript)
- **Architecture:** ECS pattern, WebSockets

### The Vision
A browser-based multiplayer survivors game where me & my friends can play together without downloads on desktop or mobile.
Simple concept, endless replayability.

### What I Built
- Multiplayer co-op for 50+ concurrent players
- 12 unique weapons with different projectile behaviors
- 3 Boss fights with unique mechanics
- 6 enemy types with different behaviors and stats
- Meta-progression with unlockable curses

### Key Learnings
- **Game feel matters:** screen shake, particles, and audio make everything better
- **SpacetimeDB is amazing:** treating game state as database tables just makes sense
- **ECS pattern is powerful:** separating data and logic made scaling easier
- **Collision detection** is hard for thousands of entities

### Play It here: [Survive with friends ](https://survive-with-friends.com/)!
---

## Tower Defense Card Game: Bootyful Towers (Lua + LÖVE2D)

![Bootyful Towers Gameplay](/Max-developerFolio/gifs/BootyfulTowers.gif)

### The Tech
- **Engine:** LÖVE2D
- **Language:** Lua

### The Vision
What if Slay the Spire met Tower Defense? A deckbuilding game where you can only place towers that you draw from your deck.

### What I Built

### Key Learnings
- **Lua is surprisingly fun:** The simplicity forced me to write cleaner code
- **Hybrid genres are risky:** Players either love the complexity or bounce off immediately

### The Challenge
Making the UI system work nicely with all the layering of cards, towers, enemies and projectiles.

### Play It here: [Bootyful Towers](https://maxgeorg99.itch.io/bootyful-towers) !
---

## Tower Defense MMO (Bevy + Rust)

![TD Gameplay](/Max-developerFolio/gifs/BevyTD.gif)

### The Tech
Full Rust Setup with Dioxus
- **Engine:** Bevy
- **Language:** Rust
- **Backend:** SpacetimeDB
- **Tooling:** Ratatui wave / unit manager

### The Vision
A persistent online world where players build towers together to defend against endless waves. Think: tower defense meets MMO.

### What I Built
- Massive shared map able to handle hundreds of concurrent players
- Persistent world state—towers stay between sessions
- Territory control and expansion system

### Key Learnings
- **Bevy's ECS is beautiful:** Coming from SpacetimeDB's ECS, Bevy felt natural
- **Rust for game dev is viable:** Performance is incredible, rust compile is your best friend and worst enemy
- **SpacetimeDB enables solo devs to make MMOs:** no load balancing, shared state and easy world persistence

### The Hardest Part
Not getting lost in Rust's tool chain and fighting the borrow checker while trying to iterate quickly.

### Still in development, stay tuned for the release!

---

## One Piece Autobattler (Godot 4 + GDScript)

![One Piece Autobattler Gameplay](/Max-developerFolio/gifs/auto-battler.gif)

### The Tech
- **Engine:** Godot 4
- **Languages:** GDScript & Rust (SpacetimeDB Server)

### The Vision
An autobattler inspired by Teamfight Tactics but themed around One Piece.
Build your pirate crew, watch them fight, loot tressure chests to get new items.

### What I Built
- 10 characters from One Piece with unique abilities
- Synergy system (Marines, Straw Hat Pirates, Devil Fruit Users, etc.)
- Economy system (gold, interest, level-up shop)
- Items and equipment system

### Key Learnings
- **Godot 4 is incredible:** Open source, intuitive, powerful. My new favorite engine. Very nice Editor.
- **Autobattlers are about balance:** Small number changes create huge meta shifts
- **Great community made [SpacetimeDB SDK](https://github.com/flametime/Godot-SpacetimeDB-SDK)** check it out! .

### The Challenge
Getting all the system to feel impactful and work together nicely.
Also I did a lot of pixel art for this game which was a new experience for me.

### Play It here: [Autobattler](https://maxgeorg99.itch.io/op-autobattler) !

---

## What I've Learned Across All 4 Games

### 1. Each Engine Has Its Place
- **Phaser:** Perfect for browser games, quick iteration
- **LÖVE2D:** Great for getting something on the screen fast, easy to learn, Lua is underrated
- **Bevy:** Best for Rust enthusiasts who want control and crazy performance
- **Godot:** Well rounded, beginner-friendly, powerful for 2D and 3D greate community

### 2. SpacetimeDB Changed Everything
As a backend developer, SpacetimeDB was my gateway drug. Treating game state as database tables felt natural. It handled synchronization, persistence, and scaling so I could focus on gameplay.

### 3. Game Feel > Technical Correctness
Players don't care about your elegant architecture. They care about:
- Does it feel good?
- Is the feedback satisfying?
- Are the animations juicy?
- Audio feedback

### 4. Scope Creep Is Real
Every game started simple and grew. The survivors game was supposed to be a weekend project. It's now 6+ months of work. Set milestones and ship early.

### 5. The Game Dev Community Is Amazing
Discord servers, Reddit, YouTube tutorials—the resources are endless. Every problem I had, someone had solved before.

### 6. Decision Paralysis
I spent way too much time researching engines, languages, and architectures. At some point, you just have to pick something and start building. You can always pivot later! And people want ask which fancy tech or architecture you used, they want to play a fun game. A good recent example is mega bonk looks not super polished but is an amazingly fun game with huge success.

### 7. Imposter Syndrome
I felt like I didn't have the skills or experience to build a game. I thought you have to be one of these 10x Developers with tones of hand on experience to build your own game. But every game dev started where I was. The only way to get better is to build, fail, learn, repeat and share your experience with someone.

---

*Want to give feedback on my games or chat about game development?
Connect with me on [LinkedIn](https://www.linkedin.com/in/maximilian-georg-73354a18a) or reach out at maxi.georg.mg@gmail.com.*`;
