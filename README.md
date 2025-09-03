## Component Library Template

A fast starter template for building your own React + Tailwind UI library. Clone, customize, build, and publish—no boilerplate fatigue, no config chaos.

---

# Quick Start

```bash
git clone https://github.com/ClonicalClone/Component-Library-Template.git
cd Component-Library-Template
npm install
```
# Customize Your Library

Edit package.json with your library's metadata:
``` bash
{
  "name": "{Name of library without space and in lowercase only.}",
  "version": "1.0.0",
  "description": "{Description Of library}",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "style": "./dist/index.css",

  "files": ["dist"],

  "scripts": {
    "build:js": "tsup src/index.ts --format cjs,esm --dts",
    "build:css": "npx @tailwindcss/cli -i ./src/index.css -o ./dist/index.css --content './src/**/*.{ts,tsx,js,jsx}'",
    "build": "npm run build:js && npm run build:css",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  "keywords": ["{Keyword1}", "{Keyword2}"],
  "author": "{Your Name}",
  "license": "MIT",

  "peerDependencies": {
    "react": ">=17",
    "react-dom": ">=17",
    "tailwindcss": ">=3"
  },

  "devDependencies": {
    "typescript": "^5.9.2",
    "tsup": "^8.5.0",
    "@types/react": "^19.1.12",
    "@types/react-dom": "^19.1.9",
    "@tailwindcss/cli": "^4.1.12"
  },

 "exports": {
  ".": {
    "import": "./dist/index.mjs",
    "require": "./dist/index.js"
  },
  "./package.json": "./package.json",
  "./dist/*": "./dist/*"
}
}
```

# Build Protocol

Compile JS + CSS into the dist/ folder:

```bash
npm run build
```

This runs:

build:js: Bundles with tsup into CommonJS + ESM formats
build:css: Processes Tailwind styles via CLI

# Local Linking & Usage

Log in to npm (or create an account):
```bash
npm login
```
Link your library locally:

```bash
npm link
```

Use it in another project:
```bash
npm link yourlibraryname
```

Import and use components:

```tsx
import { Button } from 'yourlibraryname';
import 'yourlibraryname/dist/index.css';
```
```tsx
<Button
  label="Click Me"
  variant="primary" // options: 'primary', 'secondary', 'outline'
  className="custom-class"
/>
```
# Default Setup

Includes a basic Button component with Tailwind styling. Extend by adding components to src/, and export them via src/index.ts.

  Tech Stack
  React 17+
  TailwindCSS 3+
  TypeScript
  tsup (bundler)
  Tailwind CLI



# License
MIT — use freely, customize infinitely.

# Protocol Philosophy
This template is built for developers who want to engineer their own UI DNA—modular, scalable, and fast. Whether you're building a design system or a personal component arsenal, this repo gives you the bones. You bring the soul.
