const IMAGEKIT_ENDPOINT =
  import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/arclub";

/**
 * Transforms a local image path (or relative ImageKit path) into an optimized ImageKit CDN URL.
 *
 * Supports transformations:
 * - width (e.g. 400)
 * - height (e.g. 400)
 * - quality (default 80)
 * - crop ('maintain_ratio', 'force', etc.)
 * - format (default auto: delivers WebP/AVIF automatically)
 *
 * @param {string} src - Path like "/dist/team/saksham.png" or "team/saksham.png"
 * @param {object} options - Transformation options: { width, height, quality, crop, blur }
 * @returns {string} Optimized ImageKit CDN URL
 */
export function getImageKitUrl(src, options = {}) {
  if (!src) return "";

  // If already an absolute external URL, return as-is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // Strip local query params like ?v=4
  const [cleanSrc] = src.split("?");

  // Normalize path: strip leading /dist/ or /
  let normalizedPath = cleanSrc.replace(/^\/?(dist\/)?/, "");

  // Encode URI to safely support spaces in filenames uploaded via ImageKit UI
  normalizedPath = encodeURI(normalizedPath);

  // Build ImageKit transformation query string
  const transformations = [];
  if (options.width) transformations.push(`w-${options.width}`);
  if (options.height) transformations.push(`h-${options.height}`);
  if (options.quality) transformations.push(`q-${options.quality}`);
  else transformations.push("q-80");

  if (options.crop) transformations.push(`c-${options.crop}`);
  if (options.blur) transformations.push(`bl-${options.blur}`);

  // Auto-format for AVIF/WebP next-gen compression
  transformations.push("f-auto");

  const trString = transformations.length > 0 ? `?tr=${transformations.join(",")}` : "";
  const endpoint = IMAGEKIT_ENDPOINT.replace(/\/+$/, "");

  return `${endpoint}/${normalizedPath}${trString}`;
}

/**
 * React onError handler that automatically falls back to local asset if ImageKit load fails.
 *
 * @param {string} localFallback - Local path e.g. "/dist/team/saksham.png"
 */
export function getFallbackHandler(localFallback) {
  return (e) => {
    if (e.currentTarget.src !== localFallback) {
      e.currentTarget.src = localFallback;
    }
  };
}
