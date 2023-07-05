/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { xlbFactory } from './xlb.js';
import { xliffFactory } from './xliff.js';
const factories = {
    xliff: xliffFactory,
    xlb: xlbFactory,
};
/**
 * Create a formatter for the given lit-localize config.
 */
export function makeFormatter(config) {
    return factories[config.interchange.format](config);
}
/**
 * The set of valid formatter names.
 */
export const formats = new Set(Object.keys(factories));
/**
 * Implements read/write operations for some localization interchange format.
 */
export class Formatter {
}
//# sourceMappingURL=index.js.map