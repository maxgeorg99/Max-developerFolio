export const rustStackContent = `
# Becoming a Rustacean
## Introduction

We often talk about developer experience in terms of IDE features or framework shortcuts, but true DX is clarity. Tools that do what you expect. Errors that guide you. Performance you don’t have to fight for.
Rust brought simplicity back into my day-to-day development — not by doing less, but by doing the essentials exceptionally well.

## Bevy Client

Bevy is a first-class ECS game engine written in Rust. It’s clean, modular, and fast. Coming from typical Java game frameworks or monolithic server setups, Bevy feels refreshingly straightforward. Complex game logic becomes easier to express, the ECS encourages clear architecture, and Rust’s compile-time guarantees remove a lot of runtime ambiguity.

## SpacetimeDB

SpacetimeDB adds another dimension: real-time multiplayer state. Instead of building a heavy backend, syncing clients manually, or dealing with slow monolithic servers, SpacetimeDB turns your game logic into a state-synced database system. Especially when paired with Rust and Bevy, it removes an enormous amount of boilerplate and infrastructure.

## Dioxus Subsecond

For UI work outside the terminal, Dioxus provides subsecond hot module reloading. This cuts iteration times dramatically and makes Rust development feel much closer to the rapid feedback loops of modern web frameworks, but without the overhead or runtime baggage.

## Ratatui

I stumbled upon an outstanding Rust library called ratatui. It’s a modern TUI framework that makes it surprisingly easy to build expressive, interactive terminal interfaces. Layouting, widgets, colors, input handling — everything feels lightweight and predictable. If you want the simplicity of a terminal with the structure of a real UI toolkit, ratatui delivers.
Its really nice to build little dashboards or keyboard based applications.

## TUI

What exactly is a TUI? A Text User Interface is a full-screen interface rendered entirely using text characters. Unlike a scrolling command line, a TUI controls the entire terminal window and draws structured layouts: panels, menus, windows, and interactive views. Navigation is usually keyboard-driven, though mouse support is perfectly possible.

Before graphical desktops took over, TUIs were standard. Tools like Turbo Pascal, WordPerfect, and Norton Commander lived entirely in structured terminal interfaces. Systems like Oberon even merged text and interaction so tightly that clicking a word executed a command. These weren’t primitive systems — they were efficient, elegant, and extremely responsive.

Today, TUIs are returning. Not because of nostalgia, but because they offer clarity, speed, and simplicity at a time when modern GUIs become more abstract and heavier than ever.`;
