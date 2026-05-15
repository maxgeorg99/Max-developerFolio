export const spacetimedbBenchmarksContent = `
# The State of Cutting-Edge Web Backends: 300k TPS, Zero Infrastructure

*May 15, 2026*

## Where We're Coming From

To appreciate how far we've come, let me paint a picture of a typical production setup — the kind I work with every day at Chrono24.

We run a **Java backend** across **4 bare-metal servers**, fronted by **Cloudflare for load balancing and CDN**. This is a completely standard architecture for an mid-to-large scale web application. It works. But it comes with a constant tax:

- **4 servers** to manage, patch, monitor, and debug
- **Connection pool tuning** between the Java app servers and the database — too few connections and you bottleneck, too many and you overwhelm the DB
- **Network round trips** between every layer: client → Cloudflare → load balancer → app server → database
- **Deployments** that require coordinated rollouts across multiple machines
- **Capacity planning** — adding a new server takes weeks of procurement and configuration
- **Geographic locality** — our servers are in Germany, so US and APAC customers suffer noticeable latency on every request

Each of these steps adds latency, operational complexity, and surface area for failure. A single request in this architecture traverses multiple network hops before it even touches your business logic.

What does that add up to? Our Elastic APM reports around **48,000 transactions per minute** across the fleet — that's roughly **800 TPS**. Across 4 servers. With a whole team maintaining it.

Now compare that to what's possible today.

## The Numbers That Changed Everything

SpacetimeDB just [published their updated benchmarks](https://spacetimedb.com/blog/benchmarking), and the results are staggering. After fixing several issues in their V8 threading model, they're now processing **303,920 ± 4,712 transactions per second** in their TypeScript benchmark.

Let that sink in. That's a 200% improvement over their original numbers, which hovered around 100,000 TPS. And here's the kicker — TypeScript is now actually **faster than Rust**, which measures 265,541 ± 940 TPS in the same benchmark.

## What Changed?

The SpacetimeDB team discovered and fixed several issues in how V8 (the JavaScript/TypeScript engine) was being used within their runtime. By improving the threading model for V8 execution, they unlocked massive parallelism that wasn't being utilized before. The focus on V8 performance paid off so well that TypeScript overtook Rust — a compiled, systems-level language — in their end-to-end transfer benchmark.

## What This Means

For someone like me who's been building with SpacetimeDB since the early days, this is huge. The whole value proposition of SpacetimeDB has always been that you write your server logic in whatever language you like, compile it to WebAssembly, and upload it directly into the database. Your code runs *inside* the database process — no network round trips, no ORM overhead, no serialization latency.

With TypeScript now leading the pack at 300k+ TPS, the barrier to entry drops even further. You don't need to learn Rust to get Rust-like performance. You can write your backend in TypeScript and still outperform traditional architectures by orders of magnitude.

## The Competition

To put 303,920 TPS in perspective, the next best competitor (Node.js + SQLite) managed ~3,200 TPS. That's nearly **100x faster**.

SpacetimeDB isn't just faster — it's in a different league entirely. And also provides a really simple mental model due to it's transactional and consistant design.

## Void

This performance is exciting, but raw throughput is only part of the story. What really matters is how you ship and operate applications built on it. That's where **Void** comes in.

I've been experimenting with the [Void beta](https://www.youtube.com/watch?v=Bp86buftbX8&t=661s) — introduced at Vue.js Amsterdam 2026 — and it fundamentally changes the relationship between your code and your infrastructure. Void combines a **Vite plugin**, a **backend SDK**, and a **deployment platform**. Add one plugin to your app, and the imports in your code drive the infrastructure around you — a database, key-value store, object storage, AI inference, and deployment all line up without a separate layer of config files or dashboard setup.

The idea is simple: with most stacks, your app and its platform don't talk to each other directly. You end up stitching them together with config files, environment setup, resource provisioning, and deployment scripts. Once live, caching, scaling, and limits live in a separate control plane.

Void closes that gap through Vite.

This unlocks:

- **Write code, not config** — no infrastructure files, no dashboard clicks, no manual resource declarations. Your imports are the contract.
- **Deploy that understands the app** — \`void deploy\` reads your migrations, provisions the resources you actually use, and ships the result to the edge.

Under the hood, Void deploys to **Cloudflare Workers**. Your server code runs at the edge, close to users, and scales without extra platform work on your side. Static assets are served with proper cache headers. Custom domains come with automatic TLS. And you don't need a Cloudflare account to get started.

For SpacetimeDB-powered applications, this is a natural fit. You get the raw database-level performance of SpacetimeDB on the backend, with the global edge distribution of Cloudflare Workers on the frontend. No servers to manage, no connection pools to tune.

## The Stack of the Future

Putting it all together, the stack looks like this:

1. **SpacetimeDB** — your database and server logic, running at 300k+ TPS
2. **TypeScript** — write your reducers and queries in a language you already know
3. **Void** — deploy and scale your existing Vite apps without infrastructure headaches
4. **Cloudflare Workers** — serve your users from the edge with minimal latency

This is the direction I'm personally most excited about. The complexity of traditional web architecture — separate servers, databases, ORMs, connection pools, caching layers — is finally being replaced by integrated platforms that Just Work.
`;
