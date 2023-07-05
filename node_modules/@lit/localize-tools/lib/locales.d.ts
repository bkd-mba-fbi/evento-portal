/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import type { Locale } from './types/locale.js';
/**
 * Return whether the given string is formatted like a BCP 47 language tag. Note
 * we don't currently strictly validate against a known list of codes.
 */
export declare function isLocale(x: string): x is Locale;
/**
 * Generate a TypeScript module that exports a project's source and target
 * locale codes, and write it to the given file path.
 */
export declare function writeLocaleCodesModule(sourceLocale: string, targetLocales: string[], filePath: string): Promise<void>;
