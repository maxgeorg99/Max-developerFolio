import {moveToOmarchyContent} from "./move-to-omarchy";
import {vampireSurvivorGameContent} from "./vampire-survivor-game";
import {gameEngineComparisonContent} from "./game-engine-comparison";
import {jpaComparisonContent} from "./jpa-comparison";
import {dataBaseEvolutionContent} from "./data-base-evolution";
import {serverSideRenderingComparisonContent} from "./server-side-rendering-comparison";
import {multiplatformFrameworksComparisonContent} from "./multiplatform-frameworks-comparison";
import {rustStackContent} from "./rust-stack";
import {gameDevJourneyContent} from "./game-dev-journey";
import {wasmBevySpacetimedbContent} from "./wasm-bevy-spacetimedb";
import {tinyTacticsDevLogContent} from "./tiny-tactics-dev-log";

export const blogPosts = [
  {
    id: "tiny-tactics-dev-log",
    title: "RTS / TD Dev Log Tiny Tactics",
    date: "2026-02-21",
    description:
      "Update on my Game and new things I learned in game development.",
    content: tinyTacticsDevLogContent
  },
  {
    id: "wasm-bevy-spacetimedb",
    title: "Bringing My Bevy Game to the Web with WASM and SpacetimeDB",
    date: "2026-01-31",
    description:
      "A deep dive into WebAssembly architecture: how WASM enables running Rust code in browsers and servers, comparing traditional web stacks to the modern WASM-native approach.",
    content: wasmBevySpacetimedbContent
  },
  {
    id: "game-dev-journey",
    title: "From Backend Developer to Game Dev: 4 Games in 4 Months",
    date: "2025-12-05",
    description:
      "My journey from zero game dev experience to shipping 4 games across different engines: SpacetimeDB, LÖVE2D, Bevy, and Godot.",
    content: gameDevJourneyContent
  },
  {
    id: "rust-stack",
    title: "Becoming a Rustacean",
    date: "2025-11-15",
    description:
      "My journey with Rust and the tools that make development simple: Bevy, Dioxus, and Ratatui.",
    content: rustStackContent
  },
  {
    id: "multiplatform-frameworks-comparison",
    title: "Cross-Platform Mobile Development: Choosing the Right Framework",
    date: "2025-11-04",
    description:
      "A comprehensive comparison of Flutter, React Native, and Kotlin Multiplatform for cross-platform mobile development.",
    content: multiplatformFrameworksComparisonContent
  },
  {
    id: "server-side-rendering-comparison",
    title: "Server-Side Rendering: Why It Still Matters",
    date: "2025-11-04",
    description:
      "A comprehensive comparison of Java templating engines (FreeMarker, Thymeleaf, jte) and why server-side rendering is still relevant in an SPA-dominated world.",
    content: serverSideRenderingComparisonContent
  },
  {
    id: "move-to-omarchy",
    title: "My Move to Omarchy",
    date: "2025-10-26",
    description:
      "A reflection on my decision to embrace omarchy and what it means for my journey as a software engineer and leader.",
    content: moveToOmarchyContent
  },
  {
    id: "vampire-survivor-game",
    title: "My First Multiplayer Game",
    date: "2025-10-25",
    description:
      "An in-depth look at the development process of my first game.",
    content: vampireSurvivorGameContent
  },
  {
    id: "game-engine-comparison",
    title: "Game Engine Comparison",
    date: "2025-10-23",
    description:
      "A comprehensive comparison of popular game engines, highlighting their strengths and weaknesses.",
    content: gameEngineComparisonContent
  },
  {
    id: "jpa-comparison",
    title: "JPA Comparison",
    date: "2025-11-03",
    description:
      "A comprehensive comparison of popular Java Persistence API implementations, highlighting their strengths and weaknesses.",
    content: jpaComparisonContent
  },
  {
    id: "data-base-evolution",
    title: "40 Years of Database Evolution",
    date: "2025-11-04",
    description:
      "An interactive journey through 40 years of database technology, from relational systems to cloud-native platforms.",
    content: dataBaseEvolutionContent
  }
];

// Helper function to get a blog post by ID
export function getBlogPostById(id) {
  return blogPosts.find(post => post.id === id);
}

// Helper function to get all blog posts sorted by date (newest first)
export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}
