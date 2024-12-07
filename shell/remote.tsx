import * as React from "react";

// Inspired by https://gist.github.com/jlevy/c246006675becc446360a798e2b2d781
function generateCustomElementTag(url: string, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < url.length; i++) {
    ch = url.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return `component-${(h2 >>> 0).toString(16).padStart(8, "0")}${
    (h1 >>> 0).toString(16).padStart(8, "0")
  }`;
}

async function registerCustomElement(
  url: string,
): Promise<string | undefined> {
  const tag = generateCustomElementTag(url);

  try {
    const mod = await import(
      url.startsWith("data:application/javascript;")
        ? url
        : `${url}?${tag}=${tag}`
    );

    if (!customElements.get(tag)) {
      customElements.define(tag, mod.default);
    }

    return tag;
  } catch (err) {
    console.warn("[shell]", err);
    return undefined;
  }
}

export function Remote({ url }: { url: string }) {
  const [tag, setTag] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    (async () => {
      setTag(await registerCustomElement(url));
    })();
  }, [url]);

  if (tag) {
    return React.createElement(tag);
  }

  return null;
}
