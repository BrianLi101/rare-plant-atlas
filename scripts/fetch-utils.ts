// scripts/fetch-utils.ts
// Shared fetch utilities for price snapshot adapters.

const RETRY_DELAYS_MS = [2000, 5000, 10000];

export async function fetchWithRetry(url: string): Promise<Response | null> {
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (res.ok) return res;

    if (res.status === 503 || res.status === 429) {
      if (attempt < RETRY_DELAYS_MS.length) {
        const delay = RETRY_DELAYS_MS[attempt];
        console.log(
          `  ${res.status} — retrying in ${delay / 1000}s (attempt ${attempt + 2}/${RETRY_DELAYS_MS.length + 1})`,
        );
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }
    }

    console.error(`  Failed: ${res.status} ${res.statusText}`);
    return null;
  }
  return null;
}
