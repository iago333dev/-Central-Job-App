// src/providers/adzuna/client.js
import { REQUEST_URL_BASE, REQUEST_DEFAULT_PARAMS } from "../../config/env.js";
import { httpGetJson } from "../../lib/http.js";
import { normalizeAdzuna } from "./normalize.js";

export function buildAdzunaUrl({ q, page }) {
  const safePage = Number(page) || 1;
  const baseForPage = REQUEST_URL_BASE.replace(/\/search\/\d+$/, `/search/${safePage}`);
  const params = { ...REQUEST_DEFAULT_PARAMS };
  if (q) params.what = q;
  const qs = new URLSearchParams(params).toString();
  return `${baseForPage}?${qs}`;
}

export async function fetchAdzuna({ q, page }) {
  const url = buildAdzunaUrl({ q, page });
  const data = await httpGetJson(url);
  const jobs = normalizeAdzuna(data?.results || []);
  const count = Number.isFinite(data?.count) ? Number(data.count) : jobs.length;
  return { jobs, count };
}
