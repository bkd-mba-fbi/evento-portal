/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ts from 'typescript';
import type { Config } from './types/config.js';
import { ProgramMessage, Message } from './messages.js';
import { Formatter } from './formatters/index.js';
import type { Locale } from './types/locale.js';
interface ReadTranslationsResult {
    translations: Map<Locale, Array<Message>>;
}
interface ValidateTranslationsResult {
    errors: string[];
}
/**
 * Abstract base class for programmatic access to @lit/localize. Use one of the
 * concrete classes: TransformLitLocalizer, RuntimeLitLocalizer.
 *
 * TODO(aomarks) This set of classes is probably too monolithic. Let's split
 * things up into Extractor, Builders, and Formatters classes (actually
 * Formatter already exists, but it needs a better name).
 */
export declare abstract class LitLocalizer {
    protected abstract config: Config;
    private _program?;
    private _formatter?;
    private _sourceMessages?;
    private _translations?;
    private _filesAndCompilerOptions?;
    /**
     * A TypeScript program for this project.
     */
    protected get program(): ts.Program;
    private get filesAndCompilerOptions();
    /**
     * A formatter for reading/writing translation files in the format configured
     * by this project (e.g. XLIFF).
     */
    protected get formatter(): Formatter;
    /**
     * Analyze the source files of this project and return all extracted `msg`
     * calls.
     */
    extractSourceMessages(): {
        messages: Array<ProgramMessage>;
        errors: ts.Diagnostic[];
    };
    /**
     * Read translated messages from this project's translation files (e.g. XLIFF)
     * files into a Map keyed by locale ID.
     *
     * TODO(aomarks) Add an async version. This is synchronous as a conceit to our
     * Rollup integration, because
     * @rollup/typescript-plugin runs tsc in the Rollup buildStart hook, which we
     * cannot preempt because that is the earliest hook, and they run in parallel
     * (see https://github.com/rollup/rollup/issues/2826). We'd prefer to read
     * translation files in parallel when we can.
     */
    readTranslationsSync(): ReadTranslationsResult;
    /**
     * Check that all translations are valid given the current set of source
     * messages.
     */
    validateTranslations(): ValidateTranslationsResult;
    /**
     * Throw if there are any errors in translations.
     */
    assertTranslationsAreValid(): void;
    /**
     * Create or update translation data (e.g. XLIFF files).
     */
    writeInterchangeFiles(): Promise<void>;
    /**
     * Build the project. Behavior depends on output.mode setting.
     */
    abstract build(): Promise<void>;
}
export {};
