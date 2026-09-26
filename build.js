import { cpSync, mkdirSync, rmSync } from "node:fs";

rmSync("dist", { force: true, recursive: true });
mkdirSync("dist");
["index.html", "styles.css", "app.js"].forEach((file) => {
  cpSync(file, `dist/${file}`);
});
cpSync("public", "dist/public", { recursive: true });
console.log("Static site built in dist/");
