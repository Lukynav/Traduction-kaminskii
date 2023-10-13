# Project: Traduction-kaminskii

<!-- BADGES -->

[![Netlify Status](https://api.netlify.com/api/v1/badges/e0139828-457c-4d30-a3d7-deafbaf9e4f8/deploy-status)](https://app.netlify.com/sites/shimmering-beignet-5047c1/deploys) [![Continuos integration](https://github.com/Lukynav/Traduction-kaminskii/actions/workflows/CI_PIPELINES.yaml/badge.svg)](https://github.com/Lukynav/Traduction-kaminskii/actions/workflows/CI_PIPELINES.yaml)

<!-- DESCRIPTION -->

## About the project

Kaminski's translation portfolio, developed using [Astro](https://docs.astro.build/en/getting-started/) and hosted on [Netlify](https://docs.netlify.com/), excels in web performance. Its visually appealing design, styled with [Tailwind CSS](https://tailwindcss.com/docs/installation), ensures an optimal and elegant user experience, making it the perfect showcase for Kaminski's translation services.

Kaminski's translation portfolio has been meticulously optimized as a mobile-first website, recognizing that a significant portion of its users prefer this medium. This ensures a seamless and engaging experience on smartphones and tablets. Moreover, the site offers robust support across major search engines, including Chrome and Safari, to guarantee accessibility and compatibility for a wide range of users, reinforcing its commitment to user-friendly accessibility.

<!-- GETTING STARTED -->

## Getting started

To clone and run this application, you'll need Git and Node.js (which comes with npm) and install pnpm on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Lukynav/Traduction-kaminskii.git

# Go into the repository
$ cd Traduction-kaminskii

# Install dependencies
$ pnpm install

# Run the app
$ pnpm run start
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## All commands on this project

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
