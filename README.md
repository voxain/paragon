# Paragon

Voxain's online shop for the [Project:Creators](https://minecraftproject.com) Minecraft server



## Developing

1. Clone this repository (or download and unzip it)
2. Run `npm install` (or `pnpm install` or `yarn`)
3. Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The default http port for this app is 3000.

**Wait, don't I need a database?**
No, you don't. I for my part really don't like working with databases, and for a small project such as this one, storing data within JSON files is more than sufficient. Should it turn out to have biger needs in the future, room for expansion is almost certainly granted.

------

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
