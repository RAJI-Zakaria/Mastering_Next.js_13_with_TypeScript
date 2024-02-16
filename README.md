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

# Routing and Navigation

## The route system is based on convention not configuration

Example : create a route users

- Create a folder `users`
- Create page.{ts,tsx,js,jsx} inside the users folder

## Only the page.tsx will be accessible in `/users`

Example : create a test.css inside the users folder

- navigate to localhost:3000/users/test.css
  - it will show error not found.
  - the new route system is much more robust.

## Best practice for Anchors & navigation

Adding a simple anchor `<a href="/users"></a>` is not a good idea because the browser will reload multiple files that had been downloaded before (check the Network on your navigator F12).

As a result, in order to enhance navigation performance it's mandatory to use the link component `next/link` library : `<Link href="/users"></Link>` instead.

# Client and Server components

Rendering Environments can be :

- Client : Web Browser
- Server : Node.js runtime

## Client-side Rendering

- Large Bundles (the larger the bundle the more resources will be consumed on the client side)
- Resource intensive
- No SEO
- Less secure

## Server-side Rendering

- Smaller Bundles
- Resource efficient
- SEO
- More secure
- BUT we lose `interactivity`

CANNOT :

- Listen to browser events
- access browser applications
- Maintain state
- use effects

Example : in a products webpage, we can find all products with description and image and button to add to card as well as the other elements (header, footer...)

- server Side :
  - NavBar
  - SideBar
  - ProductList
  - ProductCard
  - Pagination
  - Footer
- Client Side :
  - AddToCart

Note : all components/pages/content are server side by default.

-- How to make a component client side ?

- use the client directive `'use client';` on the top of your component
- if a component is 'client' then all sub components will be considered as client side.

# Data Fetching

Client or Server side

## Fetching on the client

- useState() + useEffect()
- React Query
  Problems :

* Large Bundles
* Resource intensive
* No SEO
* Less secure (API keys on client side)
* Extra roundtrip to server

solution :

- pre-fetch data on the server and render it to get rid of all these problems.

### Dummy Data : `jsonplaceholder.typicode.com`

to fetch data we can use fetch function : fetch(URL);




## Activate Caching
using fetch function you can specify if you want to refetch data or used the cached one.

`Note: of course if we are developing a realtime app then the cache should not be activated (Except some cases).`
```
const res = await fetch('http://jsonplaceholder.typicode.com/users',{
    //cache: "no-cache",//disabling cache
    next: {
      revalidate: 10,//refetch only after 10 seconds
    }
  })
```

## Static Rendering 
Static Site Generation (SSG): generate HTML at build time with static content that never changes.
As i mentioned before we can use deactivate caching (cache activated by default `fetch`).

- When i build i my component is static :`○  (Static)  automatically rendered as static HTML (uses no initial props)`

To  disable caching i am adding `cache: "no-store"` to the fetch request.

- Now my component is server-side rendered (at request time) : `λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)`
