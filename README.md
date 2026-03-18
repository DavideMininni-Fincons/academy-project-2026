# AcademyProject2026

A simple TypeScript project that displays "Hello Academy!" in the browser.

## Project Structure

```
academy-project-2026/
├── public/
│   └── favicon.ico      # Site icon
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

3. Open `src/index.html` in your browser to see the result!

## How It Works

- `src/main.ts` contains the TypeScript code with a `sayHello()` function
- `src/styles.scss` contains the SCSS code with the style rules
- TypeScript compiler (`tsc`) compiles TypeScript to JavaScript in the `dist/` folder
- Sass compiler (`sass`) compiles SCSS to CSS in the `dist/` folder
- `index.html` imports the compiled JavaScript as an ES module and the styles
- When the page loads, it displays "Hello World!" in the app container
