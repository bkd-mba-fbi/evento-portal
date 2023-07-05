/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import type { Config } from '../types/config.js';
import type { Locale } from '../types/locale.js';
import { Message, ProgramMessage, Bundle } from '../messages.js';
/**
 * Create a formatter for the given lit-localize config.
 */
export declare function makeFormatter(config: Config): Formatter;
/**
 * The set of valid formatter names.
 */
export declare const formats: Set<"xlb" | "xliff">;
/**
 * Implements read/write operations for some localization interchange format.
 */
export declare abstract class Formatter {
    /**
     * Read translations we have already received.
     */
    abstract readTranslations(): Bundle[];
    /**
     * Write localization interchange data (i.e. translation requests) to disk.
     */
    abstract writeOutput(sourceMessages: ProgramMessage[], translations: Map<Locale, Message[]>): Promise<void>;
}
