/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import type { MsgFn } from './internal/types.js';
export * from './internal/locale-status-event.js';
export * from './internal/str-tag.js';
export * from './internal/types.js';
export * from './internal/localized-controller.js';
export * from './internal/localized-decorator.js';
export * from './init/runtime.js';
export * from './init/transform.js';
/**
 * Make a string or lit-html template localizable.
 *
 * @param template A string, a lit-html template, or a function that returns
 * either a string or lit-html template.
 * @param options Optional configuration object with the following properties:
 *   - id: Optional project-wide unique identifier for this template. If
 *     omitted, an id will be automatically generated from the template strings.
 *   - desc: Optional description
 */
export declare let msg: MsgFn;
/**
 * Internal only. Do not use this function.
 *
 * Installs an implementation of the msg function to replace the default
 * identity function. Throws if called more than once.
 *
 * @internal
 */
export declare function _installMsgImplementation(impl: MsgFn): void;
//# sourceMappingURL=lit-localize.d.ts.map