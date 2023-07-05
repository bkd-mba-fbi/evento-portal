/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Given an array of messages, return a new map from message ID to message.
 */
export function makeMessageIdMap(messages) {
    const map = new Map();
    for (const msg of messages) {
        map.set(msg.name, msg);
    }
    return map;
}
/**
 * Sort by message description, then filename (for determinism, in case there is
 * no description, since file-process order is arbitrary), then by source-code
 * position order. The order of entries in interchange files can be significant,
 * e.g. in determining the order in which messages are displayed to translators.
 * We want messages that are logically related to be presented together.
 */
export function sortProgramMessages(messages) {
    return messages.sort((a, b) => {
        if (a.desc ?? '' !== b.desc ?? '') {
            return (a.desc ?? '').localeCompare(b.desc ?? '');
        }
        return a.file.fileName.localeCompare(b.file.fileName);
    });
}
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
export function validateLocalizedPlaceholders(programMessages, localizedMessages) {
    const errors = [];
    const programMap = makeMessageIdMap(programMessages);
    for (const [locale, messages] of localizedMessages) {
        for (const localizedMsg of messages) {
            const programMsg = programMap.get(localizedMsg.name);
            if (programMsg === undefined) {
                // It's OK if a message doesn't exist at all in the source code because
                // we skip over those during code generation.
                continue;
            }
            // Note that two identical placeholders could appear in the same template,
            // and it matters how many of them there are, hence we use an array, not a
            // set (might be good to implement some form of multiset here).
            const remainingProgramPlaceholders = [];
            for (const content of programMsg.contents) {
                if (typeof content !== 'string') {
                    remainingProgramPlaceholders.push(content.untranslatable);
                }
            }
            for (const content of localizedMsg.contents) {
                if (typeof content !== 'string') {
                    const placeholder = content.untranslatable;
                    const index = remainingProgramPlaceholders.indexOf(placeholder);
                    if (index === -1) {
                        errors.push(`Placeholder error in ${locale} ` +
                            `localization of ${localizedMsg.name}: ` +
                            `unexpected "${placeholder}"`);
                    }
                    else {
                        remainingProgramPlaceholders.splice(index, 1);
                    }
                }
            }
            for (const placeholder of remainingProgramPlaceholders) {
                errors.push(`Placeholder error in ${locale} ` +
                    `localization of ${localizedMsg.name}: ` +
                    `missing "${placeholder}"`);
            }
        }
    }
    return errors;
}
//# sourceMappingURL=messages.js.map