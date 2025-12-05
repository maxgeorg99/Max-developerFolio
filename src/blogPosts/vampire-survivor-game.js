export const vampireSurvivorGameContent = `## Diving into SpacetimeDB:
### Building a Survivors Game in the Browser

*October 27, 2025*

After learning about SpacetimeDB I've shared my excitement about this technology on [LinkedIn](https://www.linkedin.com/posts/activity-7320703069409755136-CTUL?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyTJ5cBNcsVttK6b7-jZfq_PJnlNrxcsA8), and decided to build my very first own multiplayer game.

In this blog post, I'll share my journey, what I learned, and how what was easier and harder than expected.

## The Vision

I wanted to create a game to play with friends online, where players can fight together in a shared world. The game should contain some randomness, high replayability, and should be easy to learn and play.

## The Team

Me, myself, and I.
One Backend developer with no experience in game development, no designer or frontend support.

But I was glad to join the SpacetimeDB Discord community and found many like minded developers in the community who were willing to help me with my project.

## The Tech Stack
The new tool I want to use SpacetimeDB was in Version 1.1 at this point and only had C# and Rust SDKs for the server and TypeScript and Unity SDKs for the client.

Having written some C# before and some parallels to Java I decided to start with that on the server side. Having never touched Unity before, I decided to go with TypeScript for the client.

But writing a whole game client from scratch was way over my frontend development skills. I stumbled upon Phaser2D a JS game engine and gave it a try.

Later on I noticed that the WASM tooling for C# is lagging behind the Rust Toolchain and I decided to rewrite everything in Rust for a more than 2x speed up with less code and better scalability.

## The Challenge

- Implementing **Collision detection** between player, enemies, and hundreds of projectiles
- **Procedural enemy spawning** with waves of increasing difficulty
- Different **Boss fights with unique mechanics**
- **Upgrade systems** that fundamentally change gameplay mechanics
- All while maintaining **over 60 FPS**
- Handling more than **10 concurrent players** and **thousands of projectiles and monsters**

## The Architecture

### Client

In Phaser you work with scenes. Sprites are the basic building blocks of your game. They can be used to represent anything from a player character to a background element. Each sprite has a position, size.

### Server

Using the ECS pattern, we can separate the game logic into components and systems. Each entity has a set of components that define its state, and systems process these components to update the game state in the database.

A famouse quote from Taylor the CEO of SpacetimeDB "Everything should be a table, if it's not a table think harder". So Every Upgrade every Option every enemy every projectile all is a table in the database.

And the client subscribes to the database to receive updates via websocket connection on the game state and renders it.

User Inputs call so called "Reducers" on the server side to update the game state.

## Gameplay Design Lessons

### Feedback Loop is King

What makes Vampire Survivor like Games addictive is the constant feedback:
- Every hit makes a sound and particle effect
- Leveling up feels impactful with screen shake and effects
- Enemies drop XP gems that magnetize toward you

**I implemented:**
- **Screen shake** for big hits (camera trauma system)
- **Damage highlighting**
- **Particle effects** for every hit (GPU particles)
- **Audio pooling** for hundreds of simultaneous sounds
- **Haptic feedback** (for gamepad support)

### Balancing Chaos and Clarity

With 1000+ entities on screen, readability is crucial:

- **Z-layering:** Important elements always on top
- **Auto-aim assistance:** Projectiles subtly track nearest enemy

### The "Just One More Run" Hook

Progression systems are critical:
- **Meta progression:** Permanent unlocks between runs with curses
- **Run variety:** Random weapon/upgrade combinations
- **Variety of playable characters**s
- **Clear milestones:** "Survive 5 more minutes to fight the boss!"

## Technical Challenges Solved

### Challenge 1: Pathfinding at Scale

Having 500 enemies all pathfinding to the player every frame is expensive.

**Solution:**
- Update each enemy's path every 0.5-1 second (not every frame)
- Use simple "move toward player" between path updates
- Stagger path updates across frames
- Use A* only for complex obstacles, otherwise direct movement

### Challenge 2: Weapon Variety

Each weapon type needs different behaviors:
And we have currently 12 weapons with completely different damage numbers and projectile movement.

**Solution: Component-based weapon system**
- Each weapon is a collection of components (damage, projectile, area, etc.)
- Upgrades modify component properties
- Easy to create new weapons by mixing components

## Lessons Learned

1. **Profile Early, Profile Often:** I spent weeks on features before realizing my collision detection was the bottleneck
2. **Object Pooling is Essential:** For any game with lots of spawning/despawning
3. **Phaser 2D is Amazing:** The engine handled way more than I expected with proper optimization
4. **Feel > Realism:** Screen shake, particles, and audio make the game feel powerful even if the numbers are the same
5. **Playtesting Changes Everything:** My initial upgrade balance was terrible until I watched people play


## Try It Yourself

Want to try the game? Just click [here](https://survive-with-friends.com/).

The genre is incredibly fun to develop because you can iterate quickly and see immediate results. Every optimization gives you more room for more chaos!

---

*Interested in game development or want to discuss optimization techniques? Connect with me on [LinkedIn](https://www.linkedin.com/in/maximilian-georg-73354a18a) or reach out at maxi.georg.mg@gmail.com.*`;
