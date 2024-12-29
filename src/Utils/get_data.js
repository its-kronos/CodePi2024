import fs from "fs/promises";
import url from "url";
import path from "path";
import Papa from "papaparse";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data_path = path.join(__dirname,"../Data/Nasa_Data_12-28-2024.csv");

let data = await fs.readFile(data_path,"utf-8");

const parsing_parameters = {
	delimiter: ",",	// auto-detect
	newline: "\n",	// auto-detect
	quoteChar: '"',
	escapeChar: '"',
	header: true,
	transformHeader: undefined,
	dynamicTyping: false,
	preview: 0,
	encoding: "utf-8",
	worker: false,
	comments: true,
	step: undefined,
	complete: undefined,
	error: undefined,
	download: false,
	downloadRequestHeaders: undefined,
	downloadRequestBody: undefined,
	skipEmptyLines: true,
	chunk: undefined,
	chunkSize: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined,
	transform: undefined,
	delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP],
	skipFirstNLines: 0
}

let parsed_data = Papa.parse(data,parsing_parameters).data;

export default function get_data(){
    return parsed_data;
}