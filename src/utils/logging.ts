// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loggingEnabled = import.meta.env.DEV;

/**
 * Outputs the given arguments with console.log, but only in dev mode
 * (disabled in production build)
 */
export function log(...args: unknown[]): void {
  if (loggingEnabled) {
    console.log(...args);
  }
}

/**
 * Outputs the return value of the given callback with console.log,
 * but only in dev mode (disabled in production build)
 */
export function logLazy(getArgs: () => unknown): void {
  if (loggingEnabled) {
    console.log(getArgs());
  }
}
