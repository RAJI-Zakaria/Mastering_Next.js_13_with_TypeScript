# What is NextJS

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

# Table of Contents

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

# Styles : Tailwind, DaisyUI
- To make my coding journey "frontend" easier I will be using DaisyUI which is a component library built on top of Tailwind. It provides a collection of pre-designed and reusable components such as accordion, badge, card, etc.
- DaisyUI has multiple themes, highly recommend you to check out the online Docs.


# Routing and Navigation
Nextjs has its own  way to handle routing `Next.js Router`.
You don't need to import any external library like React Router Dom.
All you need to do is to create new folders under the app directory, and then you must create a page.[tsx] file inside it. 

This is going to generate new Path to your page :
- /app/users/page.tsx ===> yourwebsite.com/users 
- /app/users/[id]/page.tsx ===>  yourwebsite.com/users/1

File Conventions : 
- page.tsx
- layout.tsx
- loading.tsx
- route.tsx
- not-found.tsx
- error.tsx

# Query & segments parameters 
- Fetching data and sorting it is a paramount task to have a great interactive interface.
- In NextJS you can access parameters from page only not component, to do so here is a little Demo : 
  - Add parameters to your page 
```
const UsersPage = async ({searchParams: { sortOrder}}: Props) => {}
```
  - Don't forget to add the interface above 
```
interface Props{
  sortOrder:string
}
```
- Let's sort data using fast-sort
```
  import { sort } from 'fast-sort';
```
- now we have `sortOrder` query and list of users
```
const sortedUsers = sort(users).asc(
    sortOrder==='email' 
    ? user => user.email
    : (user) => user.name
);
```
- And that's all! isn't it easy peasy lemon squeezy

# Layouts 
- As previously mentioned, special files like layouts serve as a fundamental structure for our application. 
- A layout acts as a template or container, defining a consistent structure for each page within our app.


# Navigation
- in Next js navigation is really cool because nextjs fetch the content of requested page only.
- the idea is that NextJS is not going to reload other files that been cached. 
- So if you navigate between pages quickly enough, you will notice that nothing happens on the screen. This means no HTTP requests are made.
- The cache is based on session so it can erased by reloading the page.
- Moreover, by using Link component NextJS load the content of the pages specified in Links (behind the scene).
- ===> Thats why Nextjs is Fast, isn't that soo COOOOL !! :) 
- Note : if you are not convinced yet, you can simply check your network tab in developer tools.


# Programmatic Navigation
- sometimes we need to navigate based on click actions... Ex : sending forms...
```
const router = useRouter ();
router.push ('/')
```

# Loading
- we can wrap components inside a Suspense component with fallback.
- or, under the app directory we can create loading.tsx file that will be shown incase of loading data/pages...

# React Developer Tools
- Debugging tool for react apps. It shows the Virtual DOM tree which helps us understand how React renders our app.

# Not found & Error page
- NextJs is smart enough to render a custom _error or not-found pages when there is no matching route or no data to show.
- This feature allows us to handle errors [effortlessly].
- All you need to do is to create a page "error.tsx" or "not-found.tsx" and next js will do the rest for you.
- Note : sometimes you want to throw error, you can use `(your condition == true) notFound()`, this will redirect 404 page.

# Building API
- building and api using node.js is pretty straight forward. but with Next JS new features, you can a build a clean and easy api with few minutes.
- to create a resource 'users', all you need to do is to create a folder just like before, but please note that this time we must use `route.tsx` instead of `page.tsx`.
- inside the router we can specify all verbs (GET, POST...) to manipulate data.
- Note : to verify the data, you can use ZOD (M Mosh suggestion), but personally i use JOI  which is more familiar to me and also if we receive unwanted data in the body, joi will deny the request.
- Coooool ;)



