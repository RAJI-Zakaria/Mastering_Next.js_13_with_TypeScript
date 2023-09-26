## What is NextJS

Next JS is a framework for building fast and search-engine friendly applications
it's build on React.
react is just a library while NextJS is framework ==> multiple libraries

NextJS pillars :

- Compiler : transform and minify JS code
- CLI : build and start apps
- Node.js Runtime : Execute JS code
  - write js that meant to be execute out of your browsers `server` side => Full-Stack DEV (learn once write everywhere).
- Server-side rendering
- Static Site generation

## Setting up the development environment

- Node (>.16)
- Any code editor (VScode)
  - Es7+ React/redux
  - Javascript and typescript
  - Tailwind css intellisense

## Crating my first ;) Next.JS project

open your terminal

- npx create-next-app@13.4 [// npx create-next-app@latest]()
  - Questions about project (Typescript, EsLint, Tailwind CSS, src directory, app router)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

`/app` container for our router system (create files and folder representing our routes)

`/components` reusable components

`/pages` pages of our app

`/public` static files like images

`/styles` global styles

`/utils` helper functions

Configuration files `tsconfig.json`, `next.config.js`...
