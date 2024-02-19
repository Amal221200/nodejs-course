import { parse } from "csv";
import { readFile } from "fs/promises";
import { createReadStream, writeFileSync } from "fs";

const records = [];
const csvData = await readFile('./user.csv', { encoding: 'utf-8' });

const csvDataB = await readFile('./user.csv');

const columns = csvData.split('\r\n')[0].split(',');

const parser = parse(csvDataB, { columns })

parser.on('readable', () => {
    let record;

    if ((record = parser.read()) !== null) {
        records.push(record)
    }
}).on('finish', () => {
    console.log(records);
})