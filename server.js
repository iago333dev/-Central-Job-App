// server.js (ESM)
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PORT, ENDPOINT_PATH } from "./src/config/env.js";
import { registerUI } from "./src/ui/ui.js";
import { searchController, mockRawController } from "./src/controllers/search.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();
app.use(express.json());

// ✅ Servir /public como estático, apontando para src/public
app.use(
  "/public",
  express.static(path.join(__dirname, "src", "public"), {
    setHeaders: (res, filePath) => {
      // reforça o content-type de .js (não é obrigatório, mas ajuda no debug)
      if (filePath.endsWith(".js")) res.type("application/javascript; charset=utf-8");
    },
  })
);

// UI (HTML)
registerUI(app);

// API
app.get("/api/mock", mockRawController);
app.post(ENDPOINT_PATH, searchController);

app.listen(PORT, () => {
  console.log(`✔ Server on http://localhost:${PORT}`);
  console.log(`   API   on http://localhost:${PORT}${ENDPOINT_PATH}`);
});
