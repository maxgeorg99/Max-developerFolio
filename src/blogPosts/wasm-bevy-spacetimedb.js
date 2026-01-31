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

<img src="/Max-developerFolio/wasm-blogpost/Browser.png" alt="Browser Logos" style="max-width: 200px; float: right; margin: 0 0 20px 20px;" />

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

<img src="/Max-developerFolio/wasm-blogpost/AssemblyToMachineCode.png" alt="Assembly to Machine Code" style="max-width: 300px; float: right; margin: 0 0 20px 20px; border-radius: 8px;" />

WebAssembly (WASM) takes a fundamentally different approach. Instead of shipping source code to be parsed and compiled in the browser, you compile your code *ahead of time* to a portable binary format.

The key insight: WASM is designed to be close to machine code while remaining platform-independent. It's not assembly language for any specific CPU — it's a virtual instruction set that can be quickly translated to native code on any platform.

This means:
- **No parsing overhead** — the binary format is designed for fast decoding
- **Predictable performance** — no JIT warmup, no deoptimization surprises
- **Type safety** — types are explicit and verified at load time
- **Near-native speed** — typically within 10-20% of native code

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

Your server logic is written in Rust (or C#), compiled to WebAssembly, and uploaded to SpacetimeDB as a "module." The database executes your WASM module directly — there's no separate application server. Your game logic runs *inside* the database.

The code above shows a typical SpacetimeDB module:
- Define tables using Rust structs (\`Player\` with fields like \`id\`, \`username\`, \`level\`)
- Write reducers (like \`set_username\`) that modify state
- The SpacetimeDB runtime handles persistence, replication, and client synchronization

## Client-Server Communication

![Client Module Interaction](/Max-developerFolio/wasm-blogpost/SpacetimeClientModuleInteraction.png)

When my Bevy game (compiled to WASM, running in the browser) needs to interact with the server, it calls a reducer. That's it. No REST endpoints, no GraphQL schemas, no manual serialization.

The client calls \`set_username("4Blave")\`, and SpacetimeDB:
1. Routes the call to the WASM module
2. Executes the reducer function
3. Updates the database
4. Pushes changes to subscribed clients

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

The beauty is in what's *missing*: no API layer, no ORM, no separate caching service. The database *is* the server.

## Traditional vs. WASM Architecture

| Aspect | Traditional (JS + Java + DB) | WASM (Bevy + SpacetimeDB) |
|--------|------------------------------|---------------------------|
| Languages | 2-3 (JS, Java/Python, SQL) | 1 (Rust) |
| Serialization | JSON/Protobuf between layers | Native types, auto-generated |
| Deployment | Multiple services | Single WASM module |
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

## Conclusion

WebAssembly isn't just about running C++ games in the browser. It's a fundamental shift in how we can architect applications. By using WASM on both client and server, with tools like Bevy and SpacetimeDB, we can write entire multiplayer games in a single language with shared types, automatic synchronization, and near-native performance.

The traditional web stack served us well, but for real-time, stateful applications like games, the WASM-native approach offers compelling advantages. The complexity moves from runtime to compile time, where it's easier to catch and fix.

If you're building multiplayer games or real-time applications, I encourage you to explore this stack. The future of web development might just be compiled.
`;
