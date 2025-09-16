// src/providers/adzuna/normalize.js
export function normalizeAdzuna(results = []) {
  return results.map(r => ({
    id: String(r.id ?? ""),
    title: r.title ?? "",
    company: r.company?.display_name ?? "",
    location: r.location?.display_name ?? "",
    url: r.redirect_url ?? "#",
    source: "adzuna",
    publishedAt: r.created ?? null,
    salary: (r.salary_min || r.salary_max)
      ? { min: r.salary_min ?? null, max: r.salary_max ?? null, currency: "GBP" }
      : null,
    description: r.description ?? ""
  }));
}
