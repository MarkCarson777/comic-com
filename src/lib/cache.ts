import { unstable_cache as nextCache } from "next/cache";
import { cache as reactCache } from "react";

// Define a type alias `Callback` for a function type that accepts any arguments
// and returns a Promise of any type. This type ensures that the callback
// passed to the cache function is asynchronous.
type Callback = (...args: unknown[]) => Promise<unknown>;

// Export a function `cache` that takes three parameters:
// `callback`: a function that matches the `Callback` type (an asynchronous function).
// `keyParts`: an array of strings used as keys to identify the cache entry.
// `options`: an optional object with `revalidate` and `tags` properties.
export function cache<T extends Callback>(
  callback: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] } = {},
) {
  // Return the result of calling `nextCache`, using the React `cache` to wrap the callback.
  // This combines both Next.js and React caching mechanisms:
  // `reactCache(callback)` wraps the callback with React’s cache function.
  // `nextCache` then caches this wrapped function using the specified `keyParts` and `options`.
  return nextCache(reactCache(callback), keyParts, options);
}
