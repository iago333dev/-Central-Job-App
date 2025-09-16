// env.js — tudo hardcoded, sem .env
export const PORT = 3000;

// Endpoint local que o front chama e o Express escuta
export const ENDPOINT_PATH = "/api/search";

// URL base da API externa (Adzuna). Edite só aqui.
export const REQUEST_URL_BASE = "http://api.adzuna.com/v1/api/jobs/gb/search/1";

// Parâmetros fixos da API externa. Edite só aqui.
export const REQUEST_DEFAULT_PARAMS = {
  app_id: "342cb7ec",
  app_key: "eb48bdad81453e22f9d37c244f095cfb",
};

// ===== Jooble (NOVO) =====
// Endpoint: https://jooble.org/api/<JOOBLE_API_KEY>   (POST JSON)
export const JOOBLE_API_KEY = "COLOQUE_SUA_JOOBLE_KEY_AQUI";
export const JOOBLE_ENDPOINT_BASE = "https://jooble.org/api/";
export const JOOBLE_DEFAULT_REQUEST = {
  keywords: "SAP",
  location: "Remote",
  page: "1",
  companysearch: "false"
};

export const CSP = "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'";
