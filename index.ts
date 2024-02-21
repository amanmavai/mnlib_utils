// Map Array to Object, maintains frequency of each item
export function mapArrToObj(arr: any[]) {
  return arr.reduce((acc, item) => {
    if (acc[item] != null) {
      acc[item] = acc[item] + 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
}

// generate unique ids
export function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

export function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function replaceAt<T>(array: T[], index: number, value: T): T[] {
  const copy = array.slice(0);
  copy[index] = value;
  return copy;
}

export function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function removeProp(obj: any, prop: string) {
  let {[prop]: _, ...rest} = obj;
  return rest;
}

let _uid = 0;
export const uid = () => _uid++;

export function difference<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((x) => array2.indexOf(x) === -1);
}

export function noop(): undefined {
  return undefined;
}

export function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

export function callAll<Args extends Array<unknown>>(...fns: Array<((...args: Args) => unknown) | undefined>) {
  return (...args: Args) => fns.forEach((fn) => fn?.(...args));
}

// Memoize a function to store and reuse its results
export function memoizeFn<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map();
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
