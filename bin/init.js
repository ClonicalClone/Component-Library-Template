#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("🚀 Setting up ClonicalClone + Tailwind v4...");

try {
  console.log("📦 Installing Tailwind v4 + Vite plugin...");
  execSync("npm install -D tailwindcss @tailwindcss/vite", { stdio: "inherit" });
} catch (err) {
  console.error("❌ Failed installing Tailwind deps", err);
  process.exit(1);
}

// 1. Patch vite.config.ts or vite.config.js
const viteConfigTs = path.resolve(process.cwd(), "vite.config.ts");
const viteConfigJs = path.resolve(process.cwd(), "vite.config.js");

let viteConfigFile = viteConfigTs;
if (!fs.existsSync(viteConfigFile)) viteConfigFile = viteConfigJs;

if (fs.existsSync(viteConfigFile)) {
  console.log("⚡ Adding Tailwind plugin to Vite config...");
  let content = fs.readFileSync(viteConfigFile, "utf-8");

  if (!content.includes("@tailwindcss/vite")) {
    content = `import tailwindcss from "@tailwindcss/vite";\n` + content;
  }

  if (!content.includes("tailwindcss()")) {
    content = content.replace(
      /plugins:\s*\[/,
      `plugins: [tailwindcss(), `
    );
  }

  fs.writeFileSync(viteConfigFile, content, "utf-8");
} else {
  console.warn("⚠️ No vite.config.js/ts found. Skipping config patch.");
}

// 2. Ensure CSS entry
const cssFile = path.resolve(process.cwd(), "src/index.css");
if (!fs.existsSync(cssFile)) {
  console.log("📝 Creating src/index.css with Tailwind import...");
  fs.mkdirSync(path.dirname(cssFile), { recursive: true });
  fs.writeFileSync(cssFile, `@import "tailwindcss";\n`);
} else {
  console.log("⚡ src/index.css already exists, skipping...");
}

console.log("✅ Tailwind v4 setup complete! Start dev server with: npm run dev");
