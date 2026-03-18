# AcademyProject2026

A simple TypeScript project that displays "Hello Academy!" in the browser.

## Project Structure

```
academy-project-2026/
├── src/
│   ├── main.scss        # SCSS source file
│   ├── main.ts          # TypeScript source file
│   └── index.html       # HTML entry point
├── dist/                # Compiled output (generated)
│   ├── main.css         # Compiled CSS
│   └── main.js          # Compiled JavaScript
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile TypeScript and SCSS:
   ```bash
   npm run build
   ```

   Or watch for changes (runs both TypeScript and SCSS watchers):
   ```bash
   npm run watch
   ```

   You can also build them separately:
   ```bash
   npm run build:ts    # TypeScript only
   npm run build:css   # SCSS only
   ```

3. Open `src/index.html` in your browser to see the result!

## SCSS Features

The project now includes SCSS support with:
- Variables for colors and common values
- Mixins for reusable styles
- Nested selectors
- Hover effects and transitions

Edit `src/main.scss` to customize the styling!

## How It Works

- `src/main.ts` contains the TypeScript code with a `sayHello()` function
- TypeScript compiler (`tsc`) compiles it to JavaScript in the `dist/` folder
- `index.html` imports the compiled JavaScript as an ES module
- When the page loads, it displays "Hello World!" in the app container
