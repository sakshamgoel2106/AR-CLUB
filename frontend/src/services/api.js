// Typed fetch wrappers for the Express API. Same-origin (Express serves both
// the static bundle and `/api/*`), so no base URL is needed.







































async function request(input, init) {
  const res = await fetch(input, {
    headers: { "Content-Type": "application/json" },
    ...init
  });
  if (!res.ok) {
    let detail = "";
    try {
      const body = await res.json();
      detail = body.error ?? "";
    } catch {

      // ignore JSON parse errors
    }throw new Error(detail || `Request failed: ${res.status}`);
  }
  return await res.json();
}

export const getManifesto = () => request("/api/manifesto");
export const getBlogs = (category) =>
request(`/api/blogs${category ? `?category=${encodeURIComponent(category)}` : ""}`);


export const postContact = (payload) =>
request("/api/contact", {
  method: "POST",
  body: JSON.stringify(payload)
});

export const postSubscribe = (payload) =>
request("/api/subscribe", {
  method: "POST",
  body: JSON.stringify(payload)
});