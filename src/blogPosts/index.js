import {moveToOmarchyContent} from "./move-to-omarchy";
import {vampireSurvivorGameContent} from "./vampire-survivor-game";
import {towerDefenseCardGameContent} from "./tower-defense-card-game";
import {gameEngineComparisonContent} from "./game-engine-comparison";
import {jpaComparisonContent} from "./jpa-comparison";

export const blogPosts = [
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
