// src/ui.js
import { CSP } from "../config/env.js";

export function registerUI(app) {
  // HTML
  app.get("/", (_req, res) => {
    res.setHeader("Content-Security-Policy", CSP);
    res.send(`<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Job Finder (Modular)</title>
  <style>
    :root{--b:#e6e8ee;--p:#2f6fed;}
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto;max-width:980px;margin:24px auto;padding:0 12px}
    .card{border:1px solid var(--b);border-radius:12px;padding:14px;margin:10px 0;background:#fff}
    .grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:10px}
    @media(max-width:900px){.grid{grid-template-columns:1fr 1fr}}
    @media(max-width:560px){.grid{grid-template-columns:1fr}}
    input{width:100%;padding:10px;border:1px solid var(--b);border-radius:10px;}
    .row{display:flex;gap:12px;align-items:center;margin-top:8px}
    button{background:var(--p);color:#fff;border:0;border-radius:10px;padding:10px 16px;cursor:pointer}
    .badge{background:var(--p);color:#fff;border-radius:999px;padding:2px 8px;font-size:12px}
    .head{display:flex;gap:10px;justify-content:space-between;align-items:center}
    .sub{color:#555}.desc{margin:8px 0}.meta{display:flex;gap:18px;color:#333}
    a{color:var(--p);text-decoration:none}
    .title{font-size:28px;margin:0 0 6px}
    .hint{color:#555;margin:8px 0 0}
  </style>
</head>
<body>
  <h1 class="title">Job Finder</h1>
  <form id="job-form" class="card" novalidate>
    <div class="grid">
      <label><span>Pesquisa</span><input id="q" placeholder="SAP, Node, Javascript, Administração"></label>
      <!-- label><span>Local</span><input id="where" placeholder="London, UK"></label>
      <label><span>Salário mín.</span><input id="minSalary" type="number" placeholder="60000"></label>
      <label><span>Categoria</span><input id="category" placeholder="it-jobs"></label -->
    </div>
    <div class="row">
      <label><input type="checkbox" id="useMock" checked> Usar Mock</label>
      <button id="submit-btn" type="button">Buscar</button>
    </div>
  </form>

  <section id="summary"></section>
  <section id="results" class="list"></section>
  <section id="pager" style="margin-top:8px"></section>

  <!-- JS agora é arquivo físico (highlight ok) -->
  <script src="/public/app.js"></script>
</body>
</html>`);
  });
}
