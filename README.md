# sanity-remix-cloudflareworkers-demo
Test app demonstrating issue with Sanity.io + Remix on Cloudflare Workers

## `/remix-app-server`
This directory contains a Remix app with a deploy target of `Remix App Server` that successfully connects to Sanity.io via `@sanity/client` and reads data via Remix loaders.

## `/cf-workers`
This directory contains a Remix app with a deploy target of `Cloudflare Workers` with the exact same `/app` directory from `../remix-app-server`. However, miniflare errors when running `npm run dev`, giving `TypeError: globalThis.XMLHttpRequest is not a constructor`.

If anyone knows of a possible fix, please let me know!


___
These demos are based on @SimeonGriggs's [Sanity.io + Remix with Live Preview](https://github.com/SimeonGriggs/sanity-remix-preview).
