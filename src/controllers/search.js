// src/controllers/search.js
import { REQUEST_DEFAULT_PARAMS } from "../config/env.js";
import { fetchAdzuna } from "../providers/adzuna/client.js";
import { normalizeAdzuna } from "../providers/adzuna/normalize.js";

// Mock simples (exemplo do seu antigo)
/*
const MOCK_RAW = {
  results: [],
  count: 1
};
*/

import MOCK_RAW from "../mocks/adzuna.json" with { type: "json" };



function matchesQuery(job, q) {
  if (!q) return true;
  const hay = [job.title, job.description, job.company, job.location].join(" ").toLowerCase();
  return q.toLowerCase().split(/\s+/).every(tok => hay.includes(tok));
}

export function mockRawController(_req, res) {
  res.json(MOCK_RAW);
}

export async function searchController(req, res) {
  try {
    const q       = req.body?.q?.trim() || "";
    const page    = Number(req.body?.page) || 1;
    const useMock = !!req.body?.mock;

    if (useMock) {
      const all = normalizeAdzuna(MOCK_RAW.results);
      const filtered = all.filter(job => matchesQuery(job, q));
      return res.json({
        ok: true,
        total: filtered.length,
        count: filtered.length,
        page,
        resultsPerPage: REQUEST_DEFAULT_PARAMS.results_per_page,
        jobs: filtered
      });
    }

    const { jobs, count } = await fetchAdzuna({ q, page });
    res.json({
      ok: true,
      total: jobs.length,
      count,
      page,
      resultsPerPage: REQUEST_DEFAULT_PARAMS.results_per_page,
      jobs
    });
  } catch (err) {
    console.error("❌ /api/search erro:", err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
}
