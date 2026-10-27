// server.ts - Deno Bootable Harness for PAN View Ladder (Pre-Alpha PWA)
import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

const PORT = 8080;

console.log(`%c[PANoRAMic.os] Booting pre-alpha engine manifold...`, "color: #5ad1ff; font-weight: bold;");
console.log(`%cLocal secure context active. Point your browser to: http://localhost:${PORT}/index.html`, "color: #7be0a1;");

Deno.serve({ port: PORT }, (req: Request) => {
  return serveDir(req, {
    fsRoot: ".",
    showIndex: true,
    enableCors: true,
  });
});
