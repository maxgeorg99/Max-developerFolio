export const wasmBevySpacetimedbContent = `
# Bringing My Bevy Game to the Web with WebAssembly and SpacetimeDB

## Introduction

When I decided to bring my Bevy game to the browser, I had to rethink everything I knew about web development. The traditional model — JavaScript frontend talking to a Java backend with a separate database — suddenly felt unnecessarily complex. What if both my client and server could be written in Rust, compiled to WebAssembly, and share the same mental model?

This post is a deep dive into how WebAssembly enables this paradigm shift, comparing the classic web architecture to the WASM-powered approach I now use with Bevy and SpacetimeDB.

## The Classic Web Architecture

![Classic Web Architecture](/Max-developerFolio/wasm-blogpost/ClassicWeb.png)

For decades, web applications have followed a familiar pattern: users interact with a web application (typically JavaScript/TypeScript running in the browser), which sends requests to a backend server (Java, Node.js, Python, etc.), which in turn queries a database. Each layer speaks a different language, uses different tooling, and requires different expertise.

This separation made sense historically — browsers could only run JavaScript, servers needed performance and security, and databases needed specialized query languages. But it comes with costs:
- **Context switching** between languages and paradigms
- **Serialization overhead** converting data between formats (JSON, SQL, objects)
- **Deployment complexity** managing multiple services
- **Type mismatches** between frontend and backend

## How JavaScript Runs in the Browser

Before understanding why WebAssembly matters, let's look at how JavaScript actually executes. Every major browser has a JavaScript engine — V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari.

![V8 JavaScript Engine](/Max-developerFolio/wasm-blogpost/V8.png)

The V8 engine (and others) performs several steps:
1. **Parse** the JavaScript source code
2. **Build an Abstract Syntax Tree** (AST) representing the code structure
3. **Generate bytecode** — an intermediate representation
4. **Optimize and compile** using feedback from execution (TurboFan in V8)
5. **Execute** the optimized machine code on your CPU (Intel, ARM, etc.)

This is impressive engineering, but notice the journey: your high-level JavaScript must be parsed, analyzed, and compiled *at runtime*. The engine makes educated guesses about types and optimizes based on observed behavior. When those guesses are wrong, it "deoptimizes" and tries again.

## WebAssembly: A Different Approach

<img src="/Max-developerFolio/wasm-blogpost/WASM.png" alt="Assembly to Machine Code" style="max-width: 300px; float: right; margin: 0 0 20px 20px; border-radius: 8px;" />

WebAssembly (WASM) takes a fundamentally different approach. Instead of shipping source code to be parsed and compiled in the browser, you compile your code *ahead of time* to a portable binary format.

The key insight: WASM is designed to be close to machine code while remaining platform-independent. It's not assembly language for any specific CPU — it's a virtual instruction set that can be quickly translated to native code on any platform.

This means:
- **No parsing overhead** — the binary format is designed for fast decoding
- **Predictable performance** — no JIT warmup, no deoptimization surprises
- **Type safety** — types are explicit and verified at load time
- **Near-native speed** — typically within 10-20% of native code

## WebAssembly Security: The Host / Guest Sandbox Model

One of the most underappreciated features of WebAssembly is how *secure* it is by design.

A WASM module does not run like a native binary with full access to the system. Instead, it runs inside a **strict sandbox**, following a **Host / Guest model**:

- **The Host** (browser, SpacetimeDB runtime, server process) owns all real resources
- **The Guest** (your WASM module) gets *nothing* by default

<img src="/Max-developerFolio/wasm-blogpost/HostGuest.png" alt="Host Guest Model" style="max-width: 300px; float: right; margin: 0 0 20px 20px; border-radius: 8px;" />

The guest cannot:
- Access the file system
- Open sockets
- Allocate arbitrary memory
- Spawn threads
- Read environment variables
- Call syscalls

Unless the host *explicitly* exposes an interface for it.

This makes WASM fundamentally different from running untrusted native code. Every interaction with the outside world goes through a narrow, well-defined boundary.

### Capability-Based Access

Instead of ambient authority, WASM uses **capabilities**.

If the host wants the module to:
- Read input → it must expose a function
- Send network messages → it must provide an API
- Access time, randomness, or storage → all must be granted explicitly

## Rust to WebAssembly

![Rust to WASM Pipeline](/Max-developerFolio/wasm-blogpost/RustWASM.png)

Rust has first-class WebAssembly support. The compilation pipeline is straightforward:

1. Write Rust code with all its safety guarantees
2. Compile to WebAssembly using \`wasm32-unknown-unknown\` target
3. The WASM runtime (in the browser or elsewhere) executes it on any architecture

The Rust compiler (via LLVM) handles all the optimization. By the time your code reaches the browser, it's already been through the same optimization passes that make native Rust code fast.

## Bevy: From Desktop to Web

![Bevy to itch.io](/Max-developerFolio/wasm-blogpost/BevyToItchIO.png)

Bevy is a data-driven game engine written in Rust. One of its superpowers is cross-platform compilation. The same Bevy game can target:
- **Desktop** (Windows, macOS, Linux) — native executables
- **Mobile** (Android, iOS) — native apps
- **Web** (via WebAssembly) — runs in any modern browser

For web deployment, I compile my Bevy game to WASM and host it on itch.io. The entire game — rendering, physics, game logic — runs in the browser at near-native speed. No JavaScript game framework, no compromises on the game design.

## SpacetimeDB: WASM on the Server

Here's where it gets interesting. SpacetimeDB uses WebAssembly not just on the client, but on the server too.

![SpacetimeDB Module Compilation](/Max-developerFolio/wasm-blogpost/SpacetimeDBModuleCodeToWebAssembly.png)

Your server logic is written in Rust (or C#/TypeScript), compiled to WebAssembly, and uploaded to SpacetimeDB as a "module." The database executes your WASM module directly — the server only provides the WASM runtime.
Your game logic runs *inside* the database.

The code above shows a typical SpacetimeDB module:
- Define tables using Rust structs (\`Player\` with fields like \`id\`, \`username\`, \`level\`)
- Write reducers (like \`set_username\`) that modify state
- The SpacetimeDB runtime handles persistence, replication, and client synchronization

## Client-Server Communication

![Client Module Interaction](/Max-developerFolio/wasm-blogpost/SpacetimeClientModuleInteraction.png)

When my Bevy game (compiled to WASM, running in the browser) needs to interact with the server it connects to the SpacetimeDB module with a WebSocket connection.
Then we can call a reducer directly and subscribe to tables updates we care about.
That's it. No REST endpoints, no GraphQL schemas, no manual serialization.

The client calls \`set_username("4Blave")\`, and SpacetimeDB:
1. Routes the call to the WASM module
2. Executes the reducer function
3. Updates the database
4. Pushes changes to subscribed clients

For Bevy there is a Plugin called \`bevy_spacetime\` that handles the WebSocket connection and provides a convenient API for calling reducers and subscribing to tables.

## The Hard Part: Making Bevy + Spacetime Work in WASM

While Rust and WASM are a great match, the reality today is that **not everything in the Rust ecosystem is WASM-ready** — especially in game development.

Both \`bevy_spacetime\` and the \`spacetimedb-sdk\` were originally designed with native targets in mind. Making them work in a browser required jumping through a few hoops.

### What Didn’t Work Out of the Box

Some examples of friction I ran into:

- **Networking assumptions**
  Native Rust often assumes TCP/UDP or direct socket access — which simply does not exist in the browser. Everything must go through WebSockets or host-provided APIs.

- **Threading and async models**
  WASM in the browser is largely single-threaded (for now). Any code relying on native threads, blocking calls, or certain async executors needed refactoring.

- **Platform-specific dependencies**
  Crates that depend on \`std::fs\`, \`std::net\`, or OS APIs break instantly under \`wasm32-unknown-unknown\`.

- **Feature flags and conditional compilation**
  A lot of code had to be carefully split using \`cfg(target_arch = "wasm32")\` to provide browser-safe implementations without breaking native builds.

### Why This Is Frontier Work

None of this is glamorous — but it’s important.

Getting Bevy, SpacetimeDB, and their surrounding tooling to work seamlessly in WASM means:
- Shared code paths between native and web
- Identical gameplay logic across platforms
- One Rust codebase for client *and* server

This is still early-stage ecosystem work. But once these pieces solidify, the payoff is massive.

### A Potential Rust Web Game Revolution

If this direction continues, we could see a real shift in web game development:

- No JavaScript game engine required
- No separate backend language
- No hand-written APIs
- No duplicated game logic

Just:
- Rust
- Bevy
- WASM
- A database that executes your game logic directly

The browser becomes a first-class game runtime, not a second-class port target.

We’re not fully there yet — but this kind of frontier work is how ecosystems mature. And Rust + WASM feels uniquely positioned to redefine how serious web games are built.

## The Full Architecture

![SpacetimeDB Architecture](/Max-developerFolio/wasm-blogpost/Spacetime.png)

This diagram shows the complete SpacetimeDB architecture:

**Client Side:**
- Application client subscribes to data
- Client Data View / Cache maintains local state
- Subscriptions keep the client synchronized with relevant database changes

**Server Side (SpacetimeDB):**
- Application Module (your WASM code) handles all game logic
- RLS (Row-Level Security) filters ensure clients only see authorized data
- Database stores all persistent state
- Changes flow automatically to subscribed clients

SpacetimeDB also provides code generation for client-side bindings, making it easy to interact with the database or making schema adjustments.
The beauty is in what's *missing*: no API layer, no ORM, no separate caching service. The database *is* the server.

## Traditional vs. WASM Architecture

| Aspect | Traditional (JS + Java + DB) | WASM (Bevy + SpacetimeDB) |
|--------|------------------------------|---------------------------|
| Languages | 2-3 (JS, Java/Python, SQL) | 1 (Rust) |
| Serialization | JSON between layers | Native types, auto-generated |
| Deployment | Multiple services | Single WASM module |
| Development | API changes break clients | All client bindings & models are generated |
| Type Safety | Runtime errors possible | Compile-time guarantees |
| Performance | JIT overhead, GC pauses | Predictable, near-native |
| Real-time Sync | Manual implementation | Built-in subscriptions |

## The Developer Experience

What does this mean in practice? I write Rust code for my game. The same types that define my player state in Bevy are used by SpacetimeDB. When I add a field, both client and server see it immediately. When I make a type error, the compiler catches it before I even run the game.

The feedback loop is tight:
1. Write game logic in Rust
2. Compile client to WASM for browser testing
3. Compile server module to WASM and publish
4. Play the game — everything just works

No more "it works on my machine" because the frontend was expecting a different JSON shape. No more null pointer exceptions because the backend returned unexpected data. The compiler is the contract.
And also a huge performance boost due to the elimination of the slow javascript API requests and Database queries.

## My WASM Game: Tower Tactics

All of this theory is nice — but the real proof is shipping something playable.

I used this exact stack (Bevy + WebAssembly + SpacetimeDB) to build **Tower Tactics**, a strategy game that runs *entirely in the browser* with near-native performance.

🎮 **Play it now on itch.io:**
👉 https://maxgeorg99.itch.io/tower-tactics

![Tower Tactics Gameplay Preview](/Max-developerFolio/gifs/TowerTactics.gif)

### Why This Matters

Tower Tactics is not a JavaScript game with a WASM experiment bolted on. It’s a real Bevy game:
- Written in **pure Rust**
- Compiled to **WebAssembly**
- Running game logic at native-like speed
- Deployed like a normal web app

No installs. No plugins. Just open the page and play.

For me, this was the moment where WASM stopped being “interesting tech” and started being a **viable platform** for serious web games.


## Conclusion

WebAssembly is a fundamental shift in how we can architect applications. By using WASM on both client and server, with tools like Bevy and SpacetimeDB, we can write entire multiplayer games in a single language with shared types, automatic synchronization, and near-native performance.

The traditional web stack served us well, but for real-time, stateful applications like games, the WASM-native approach offers compelling advantages. The complexity moves from runtime to compile time, where it's easier to catch and fix.

If you're building multiplayer games or real-time applications, I encourage you to explore this stack. The future of web development might just be compiled.
`;
