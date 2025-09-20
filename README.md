# website

A static Next.js website with Tailwind CSS, configured for deployment on Netlify.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

To build and export the static site:

```bash
npm run build
npm run export
```

## Deploy on Netlify

This site is configured for static site generation and can be deployed on Netlify by connecting your repository and setting the build command to `npm run build && npm run export` with publish directory `out`.
