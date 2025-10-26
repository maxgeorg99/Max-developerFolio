export const vampireSurvivorGameContent = `# Building a Vampire Survivors Clone: Performance Optimization at Scale

*October 24, 2025*

If you've played Vampire Survivors, you know the chaos: hundreds of enemies, thousands of projectiles, particle effects everywhere, and yet the game runs at a buttery smooth 60 FPS. When I decided to build my own bullet-hell survivor game, I quickly learned that achieving this level of performance is **hard**. Here's what I learned.

## The Challenge

Vampire Survivors-style games push engines to their limits:
- **Thousands of active entities** (enemies, projectiles, pickups)
- **Complex collision detection** between player, enemies, and hundreds of projectiles
- **Particle systems** for every hit, death, and effect
- **Procedural enemy spawning** with waves of increasing difficulty
- **Upgrade systems** that fundamentally change gameplay mechanics
- All while maintaining **60 FPS on lower-end hardware**

## Technical Stack

I built my game using:
- **Godot 4.x** - Excellent 2D performance and GDScript productivity
- **Custom object pooling system** - Reuse entities instead of creating/destroying
- **Spatial hashing** - Optimized collision detection
- **Multi-threaded enemy AI** - Offload pathfinding to worker threads
- **Custom shader effects** - GPU-accelerated visual effects

## Performance Optimization Techniques

### 1. Object Pooling

The biggest performance killer was instantiating and destroying thousands of objects per second. Instead:

**Before (Naive Approach):**
- Spawn 100 enemies per wave
- Each enemy shoots 1 projectile per second
- After 60 seconds: 60,000+ object allocations/deallocations
- Result: Frame drops to 15 FPS

**After (Object Pooling):**
- Pre-allocate pools of 500 enemies, 2000 projectiles
- Reuse inactive objects instead of creating new ones
- Result: Stable 60 FPS with 1000+ active entities

### 2. Spatial Hashing for Collision Detection

Checking every projectile against every enemy is O(n²). With 100 enemies and 500 projectiles, that's 50,000 checks per frame!

**Solution: Spatial Hash Grid**
- Divide the world into a grid (e.g., 64x64 pixel cells)
- Only check collisions within the same or adjacent cells
- Reduced collision checks by ~95%

### 3. Visual Culling

Why update and render entities that aren't on screen?

**Optimizations:**
- Only update enemies within viewport + buffer zone
- Pause distant particle effects
- Use lower-detail sprites for distant enemies
- Saved ~30% CPU time

### 4. Batch Rendering

Instead of 1000 draw calls for 1000 enemies:
- Group enemies by sprite type
- Use sprite batching/instancing
- Reduced draw calls from 1000+ to ~10

### 5. Upgrade System Architecture

The upgrade system was particularly challenging. How do you apply "10% more damage" to 500 projectiles every frame without tanking performance?

**Solution: Data-Oriented Design**
- Store all projectile stats in arrays (damage[], speed[], lifetime[])
- Apply upgrades by modifying the base values once
- Use array operations instead of object iteration
- Upgrades apply instantly without per-projectile calculations

## Gameplay Design Lessons

### Feedback Loop is King

What makes Vampire Survivors addictive is the constant feedback:
- Every hit makes a sound and particle effect
- Leveling up feels impactful with screen shake and effects
- Numbers fly everywhere showing damage
- Enemies drop XP gems that magnetize toward you

**I implemented:**
- **Screen shake** for big hits (camera trauma system)
- **Damage numbers** with pooled label objects
- **Particle effects** for every hit (GPU particles)
- **Audio pooling** for hundreds of simultaneous sounds
- **Haptic feedback** (for gamepad support)

### Balancing Chaos and Clarity

With 1000+ entities on screen, readability is crucial:

- **Color coding:** Enemies = red, Projectiles = yellow, Pickups = green
- **Outline shaders:** Player always visible with glowing outline
- **Z-layering:** Important elements always on top
- **Auto-aim assistance:** Projectiles subtly track nearest enemy

### The "Just One More Run" Hook

Progression systems are critical:
- **Meta progression:** Permanent unlocks between runs
- **Run variety:** Random weapon/upgrade combinations
- **Synergies:** Upgrades that combo in interesting ways
- **Clear milestones:** "Survive 5 more minutes to unlock..."

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
- **Whip:** Rotating hitbox around player
- **Garlic:** Constant damage aura
- **Holy Water:** Ground effect that persists
- **Magic Wand:** Homing projectiles

**Solution: Component-based weapon system**
- Each weapon is a collection of components (damage, projectile, area, etc.)
- Upgrades modify component properties
- Easy to create new weapons by mixing components

### Challenge 3: Wave Spawning

Spawning enemies off-screen while maintaining density:

**Algorithm:**
1. Define spawn zones just outside camera bounds
2. Calculate "budget" (max enemies for current wave)
3. Spawn enemies in batches of 5-10
4. Vary enemy types based on time elapsed
5. Add elite/boss enemies at key intervals

## Performance Stats

Final performance on mid-range hardware:
- **60 FPS** with 800+ active entities
- **45 FPS** with 1500+ entities (late-game chaos)
- **Memory usage:** ~150MB (stable, no leaks)
- **Load time:** <2 seconds
- **Input latency:** <16ms

## Lessons Learned

1. **Profile Early, Profile Often:** I spent weeks on features before realizing my collision detection was the bottleneck
2. **Object Pooling is Essential:** For any game with lots of spawning/despawning
3. **Godot's 2D is Amazing:** The engine handled way more than I expected with proper optimization
4. **Feel > Realism:** Screen shake, particles, and audio make the game feel powerful even if the numbers are the same
5. **Playtesting Changes Everything:** My initial upgrade balance was terrible until I watched people play

## What's Next?

Current development status:
- ✅ Core gameplay loop
- ✅ 8 weapon types with upgrades
- ✅ 3 enemy types + boss
- ✅ Meta progression system
- 🚧 Content (more weapons, enemies, maps)
- 🚧 Steam integration
- 📋 Multiplayer co-op (considering SpacetimeDB for this!)

## Try It Yourself

Want to build your own survivor game? Start here:
1. Get object pooling working first
2. Implement spatial hashing for collisions
3. Focus on game feel (particles, shake, audio)
4. Test with 100+ entities from day one
5. Profile constantly

The genre is incredibly fun to develop because you can iterate quickly and see immediate results. Every optimization gives you more room for more chaos!

---

*Interested in game development or want to discuss optimization techniques? Connect with me on [LinkedIn](https://www.linkedin.com/in/maximilian-georg-73354a18a) or reach out at maxi.georg.mg@gmail.com.*`;
