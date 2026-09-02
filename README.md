# Sky Map Website

The official website for [Sky Map](https://github.com/sky-map-team/stardroid), the free and open-source planetarium for Android ! Live at **[skymapforandroid.com](https://skymapforandroid.com/)**.

## Tech Stack

- [Vite](https://vite.dev/) -> build tool & dev server
- [React 19](https://react.dev/) -> UI
- [Tailwind CSS 4](https://tailwindcss.com/) -> styling
- [lucide-react](https://lucide.dev/) -> icons

## Getting Started

### Prerequisites

- **Node.js** `20.19+` or `22.12+` (required by Vite 7)
- npm

### Install & run

```sh
git clone https://github.com/sky-map-team/sky-map-team.github.io.git
cd sky-map-team.github.io
npm install
npm run dev
```

The site should be available at `http://localhost:5173`.

## Available Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload               |
| `npm run build`   | Build the production bundle into `dist/`           |
| `npm run preview` | Locally preview the production build               |
| `npm run lint`    | Run ESLint                                         |
| `npm run deploy`  | Build, then publish `dist/` to the `gh-pages` branch |

## Deployment

The site is a GitHub Pages (`sky-map-team.github.io`), served through the custom domain **skymapforandroid.com**

To publish changes:

```sh
npm run deploy
```

This runs `vite build` (via `predeploy`) and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

## Related

- [Sky Map app (stardroid)](https://github.com/sky-map-team/stardroid)-> Source code of the app itself
- [Google Play](https://play.google.com/store/apps/details?id=com.google.android.stardroid) / [F-Droid](https://f-droid.org/en/packages/com.google.android.stardroid/)

## License

The website code is licensed under the [Apache License 2.0](LICENSE) :)
