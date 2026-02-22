export const tinyTacticsDevLogContent = `
# Tiny Tactics Dev Log

*February 27, 2026*

---

## Introduction

Tiny Tactics has grown massively over the last weeks.
What started as a small multiplayer experiment evolved into a fully-fledged strategic tower defense experience with factions, skill trees, wave scaling, and competitive modes.

This dev log summarizes everything implemented so far — systems, tools, content, and design philosophy.

---

# Tools & Pipeline

## Aseprite

**What I learned**
• Layer management for modular animation
• Frame-by-frame animation workflows
• Sprite sheet exporting for Bevy
• Palette swaps for faction color variations

---

## Tiled

**What I learned**
• Tile layers vs Object layers
• Tileset optimization
• Map chunking for performance
• Exporting clean JSON for Bevy integration

---

## PixelLab + AI Workflow

**What I learned**
• Using Aseprite plugins
• Stable Diffusion for pixel art iteration
• Style control using reference images
• Rapid concept → refine → export loop

---

## ElevenLabs Audio Integration

**What I learned**
• ElevenLabs API integration
• Generating voice lines & sound effects
• Audio compression + optimization
• Efficient playback handling in Bevy

---

# Asset Packs Used

• Tiny Swords – Pixel Frog
• RPG / Fantasy Characters Pack

(Heavily customized, recolored, and extended)

---

# Core Game Systems Implemented

• 36 Units (4 animations each: Idle / Attack / Run / Death)
• 6 Towers
• 72 Skill Nodes
• 4 Unique Factions
• 24+ Enemy Types
• 35 Waves
• Solo / Co-op / PvP modes
• Localization in 4 languages
• Mobile gameplay optimizations
• Real-time Multiplayer (SpacetimeDB)

---

# Game Modes — Play Your Way

## Solo Campaign
Choose your faction and survive 35 increasingly brutal waves alone.

## Co-op (2 Players)
Share the battlefield. Coordinate towers. Survive together.

## 2v2
Two castles. Two teams.
Outlast your opponents while defending your own base.

## Island Mode
Send Waves with the Boath to the enemie.

---

# Choose Your Faction

Each faction features:
• 1 Exclusive Special Unit
• 1 Buffed Universal Unit

![factions.png](/Max-developerFolio/factions.png)

## Azure
Special: Mage (Magic · Mystical Defense)
Buffed: Warrior

## Sunlight
Special: Knight (Heavy Blunt · Armored)
Buffed: Archer

## Ashebrut
Special: Dragon (200 HP · Devastating Blunt)
Buffed: Lancer

## Purpure
Special: Dwarf (120 HP · Tough Fighter)
Buffed: Monk

---

# 6 Tower Types

![towers.png](/Max-developerFolio/towers.png)

| Tower        | Cost | Damage | Range | Type   | Role |
|-------------|------|--------|-------|--------|------|
| Arrow Tower | 50g  | 25     | 100   | Pierce | Fast DPS |
| Catapult    | 100g | 35     | 140   | Blunt  | AoE Crusher |
| Fire Tower  | 120g | 15     | 100   | Magic  | Burn DOT |
| Frost Tower | 100g | 5      | 110   | Magic  | Crowd Control |
| Tesla Tower | 150g | 20     | 120   | Magic  | Chain Damage |
| Holy Tower  | 300g | 25     | 150   | Divine | Boss Killer |

---

# Deep Skill Trees

72 total nodes.
3 specializations per tower.
4 tiers + powerful capstone.

![SkillTree.gif](/Max-developerFolio/gifs/SkillTree.gif)

Example – Arrow Tower:

• Sharpshooter (Crit builds)
• Ranger (Chain shots)
• Executioner (Execute below 20% HP)

15 Skill Points per Tower
Tier 1 → Tier 2 → Tier 3 → Capstone

---

# Rock-Paper-Scissors Combat System

4 Attack Types vs 3 Defense Types.

**Attack Types**
• Blunt (+Armor)
• Pierce (+Agility)
• Magic (+Mystical)
• Divine (Anti-Mystical / Boss)

**Defense Types**
• Armor
• Agility
• Mystical

No single tower can carry. Composition matters.

---

# Recruit Your Army (Boat System)

![Boat System.gif](/Max-developerFolio/gifs/Boat%20System.gif)

Recruit units using Meat.
Limited boat capacity = strategic tradeoffs.

Filter system + live loadout preview implemented.

---

# Economy & Buildings

3 Resources:
Gold · Wood · Meat

**House** → Workers → Gather resources
**Archery** → Buff Units
**Forge** → Buff Towers
**Castle** → 20 Lives + Recruitment

---

# 35 Waves of Escalating Chaos

Enemy scaling:
• Health: 1x → 25x
• Spawn intervals: 2s → 0.15s
• Late waves: 100+ enemies

24+ Enemy Types:
Snakes, Gnolls, Shamans, Minotaurs, Demons, Golems, Werewolves…

---

# More Features

## Fog of War
Animated fog reveals as you expand.

## VFX & Audio
Lightning chains, burn explosions, frost freezes, holy smites.

## Multiplayer
Real-time sync powered by SpacetimeDB.

## Localization
English, German, Spanish, Portuguese.

---

# What’s Next?

• Balance pass across factions
• UI polish
• Potential ranked PvP mode

---

Tiny Tactics is no longer just a prototype —
it's becoming a real competitive strategy experience.

Check the currently released version out [here](https://maxgeorg99.itch.io/tower-tactics-co-op) !

More updates soon!!!
`;
