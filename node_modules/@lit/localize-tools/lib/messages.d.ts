/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as ts from 'typescript';
import type { Locale } from './types/locale.js';
/**
 * A message for translation.
 */
export interface Message {
    /**
     * The unique name for this message.
     */
    name: string;
    /**
     * A sequence of translatable strings and untranslatable placeholders.
     */
    contents: Array<string | Placeholder>;
}
/**
 * Extension to "Message" with additional properties that are known only when
 * extracting from the TypeScript program, but not when reading translated
 * files.
 */
export interface ProgramMessage extends Message {
    /**
     * The TypeScript file that this message was extracted from. Used for
     * reporting errors.
     */
    file: ts.SourceFile;
    /**
     * The AST node in the TypeScript file that this message was extracted from.
     * Used for reporting errors.
     */
    node: ts.Node;
    /**
     * Description for this message.
     */
    desc: string | undefined;
    /**
     * The template literal tag this message has.
     */
    tag: 'html' | 'str' | undefined;
}
/**
 * A set of translated messages for a particular locale.
 */
export interface Bundle {
    locale: Locale;
    messages: Message[];
}
/**
 * A placeholder is a allows a bit of untranslatable text to be re-positioned by
 * the translator, but not modified. We use placeholders to contain embedded
 * HTML extracted from Lit templates.
 */
export interface Placeholder {
    untranslatable: string;
    index: number;
}
/**
 * Given an array of messages, return a new map from message ID to message.
 */
export declare function makeMessageIdMap<T extends Message>(messages: T[]): Map<string, T>;
/**
 * Sort by message description, then filename (for determinism, in case there is
 * no description, since file-process order is arbitrary), then by source-code
 * position order. The order of entries in interchange files can be significant,
 * e.g. in determining the order in which messages are displayed to translators.
 * We want messages that are logically related to be presented together.
 */
export declare function sortProgramMessages(messages: ProgramMessage[]): ProgramMessage[];
/**
 * Check that for every localized message, the set of placeholders in the
 * localized version is equal to the set of placeholders in the source version
 * (no more, no less, no changes, but order can change).
 *
 * It is important to validate this condition because placeholders can contain
 * arbitrary HTML and JavaScript template literal placeholder expressions, will
 * be substituted back into generated executable source code. A well behaving
 * localization process/tool would not allow any modification of these
 * placeholders, but we can't assume that to be the case, so it is a potential
 * source of bugs and attacks and must be validated.
 */
export declare function validateLocalizedPlaceholders(programMessages: Message[], localizedMessages: Map<Locale, Message[]>): string[];
