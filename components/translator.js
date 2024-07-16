const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {

    translate(obj) {
        const { text, locale } = obj;

        let translateSource;
        let spellingSource;
        let titlesSource;

        if (text === undefined || !locale) {
            return { error: 'Required field(s) missing' };
        } else if (text === "") {
            return { error: 'No text to translate' };
        }
        else if (locale === 'american-to-british' || locale === 'british-to-american') {

            if (locale === 'american-to-british') {

                translateSource = this.sortDictionary(americanOnly);

                spellingSource = americanToBritishSpelling;
                titlesSource = this.capitalizeValues(americanToBritishTitles)

            }
            else if (locale === 'british-to-american') {

                translateSource = this.sortDictionary(britishOnly);;

                spellingSource = this.swapKeysAndValues(americanToBritishSpelling)

                titlesSource = this.swapKeysAndValues(americanToBritishTitles)

            };

            let translationConfirmation = false;

            let translation = (string, objArr) => {
                let strArr = string.split(' ');
                let newArr = [];
                let libArr = [objArr[0], objArr[1]];

                for (let i = 0; i < strArr.length; i++) {
                    let found = false;

                    if (objArr[2][strArr[i].toLowerCase()]) {
                        newArr.push(`<span class="highlight">${objArr[2][strArr[i].toLowerCase()]}</span>`);
                        translationConfirmation = true;
                        continue;
                    }
                    for (let j = 0; j < libArr.length; j++) {
                        for (const props in libArr[j]) {
                            let propsLength = props.split(' ').length;
                            let comparison = strArr.slice(i, i + propsLength).join(' ');

                            // Remove trailing punctuation for comparison
                            let cleanComparison = comparison.replace(/[.,!?;:]$/, '').toLowerCase();

                            if (libArr[j][cleanComparison]) {
                                let translated = libArr[j][cleanComparison];
                                // Preserve the trailing punctuation
                                if (/[.,!?;:]$/.test(comparison)) {
                                    newArr.push(`<span class="highlight">${this.preserveCase(comparison, translated)}</span>${comparison.slice(-1)}`)
                                } else {
                                    newArr.push(`<span class="highlight">${this.preserveCase(comparison, translated)}</span>`)
                                }

                                i += propsLength - 1;
                                found = true;
                                translationConfirmation = true;
                                break;
                            }
                        }
                        if (found) break;
                    }

                    if (/^\d{1,2}\.\d{2}(\.|)$/.test(strArr[i]) || /^\d{1,2}\:\d{2}(\.|)$/.test(strArr[i])) {
                        let cleanWord = strArr[i].replace(/[.,!?;:]$/, '');

                        // Check for time format and replace ':' with '.'

                        if (!found && /^\d{1,2}\:\d{2}(\.|)$/.test(cleanWord) && locale === 'american-to-british') {
                            if (/[.,!?;:]$/.test(strArr[i])) {

                                newArr.push(`<span class="highlight">${cleanWord.replace(':', '.')}</span>${strArr[i].slice(-1)}`);
                            } else {

                                newArr.push(`<span class="highlight">${cleanWord.replace(':', '.')}</span>`);
                            }

                            translationConfirmation = true;
                            found = true;
                        }

                        if (!found && /^\d{1,2}\.\d{2}(\.|)$/.test(cleanWord) && locale === 'british-to-american') {

                            if (/[.,!?;:]$/.test(strArr[i])) {
                                newArr.push(`<span class="highlight">${cleanWord.replace('.', ':')}</span>${strArr[i].slice(-1)}`);

                            } else {

                                newArr.push(`<span class="highlight">${cleanWord.replace('.', ':')}</span>`);
                            }

                            translationConfirmation = true;
                            found = true;
                        }
                    }

                    if (!found) {
                        newArr.push(strArr[i]);
                    }
                }

                return newArr.join(' ');
            };


            const result = {
                "text": text,
                "translation": translation(text, [translateSource, spellingSource, titlesSource])
            };

            const noTranslation = {
                "text": text,
                "translation": "Everything looks good to me!"
            }

            return !translationConfirmation ? noTranslation : result;
        }
        return { error: 'Invalid value for locale field' };
    }


    sortDictionary(dict) {
        return Object.keys(dict)
            .sort((a, b) => b.split(' ').length - a.split(' ').length)
            .reduce((acc, key) => ({ ...acc, [key]: dict[key] }), {});
    }

    capitalizeValues(dict) {
        return Object.fromEntries(
            Object.entries(dict).map(([key, value]) => [key, value.charAt(0).toUpperCase() + value.slice(1)])
        );
    }

    swapKeysAndValues(dict) {
        return Object.fromEntries(
            Object.entries(dict).map(([key, value]) => [value, key.charAt(0).toUpperCase() + key.slice(1)])
        );
    }
    preserveCase(original, translated) {
        if (original[0] === original[0].toUpperCase()) {
            return translated.charAt(0).toUpperCase() + translated.slice(1);
        } else {
            return translated.toLowerCase();
        }
    }

}

module.exports = Translator;
