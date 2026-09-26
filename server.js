import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 8443);
const root = process.cwd();
const publicFiles = new Set(["index.html", "styles.css", "app.js"]);
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = normalize(join(root, relativePath));

  const isPublicAsset = relativePath.startsWith("assets/photos/") || relativePath.startsWith("assets/audio/");
  if ((!publicFiles.has(relativePath) && !isPublicAsset) || !filePath.startsWith(root) || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": types[extname(filePath)] || "application/octet-stream",
    "cache-control": "no-cache",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, "0.0.0.0", () => {
  console.log(`Wedding invitation available at http://localhost:${port}`);
});
