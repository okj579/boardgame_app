import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';
import {randomInt} from '@shared/functions';

class Words {
    private words: {de: string[], en: string[]} = {de: [], en: []};

    constructor() {
        this.initWords('de');
        this.initWords('en');
    }

    async initWords(lng: 'en'|'de') {
        const data: any = [];
        await new Promise((resolve, _reject) => {
            fs.createReadStream(path.resolve(__dirname, `../data/words-${lng}.csv`))
                .pipe(csv({
                    headers: ['word']
                }))
                .on('data', ({word}) => {
                    data.push(word);
                })
                .on('end', () => {
                    resolve();
                });
        });
        this.words[lng] = data;
    }

    getRandom(language: 'en'|'de' = 'en') {
        return this.words[language][randomInt(this.words[language].length)];
    }
}

export default new Words();
