// src/lib/http.js
export async function httpGetJson(url) {
  console.log("🌍 GET:", url);
  const resp = await fetch(url, { method: "GET" });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
}
