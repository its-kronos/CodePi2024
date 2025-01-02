import {readString,RECORD_SEP,UNIT_SEP} from "react-papaparse";

const data_url = "/Data/Nasa_Data_12-28-2024.csv";

let file = await fetch(data_url);
let data = await file.text();

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
	fastMode: true,
	beforeFirstChunk: undefined,
	withCredentials: undefined,
	transform: undefined,
	delimitersToGuess: [',', '\t', '|', ';', RECORD_SEP, UNIT_SEP],
	skipFirstNLines: 0
};

let parsed_data = readString(data,parsing_parameters).data;

let planets_per_year = {};

parsed_data.map(d=>{
    if (!(d.disc_year in planets_per_year)){
        planets_per_year[d.disc_year] = 1;
    }
    else {
        planets_per_year[d.disc_year]+=1;
    }
})

export default function get_data(){
    return parsed_data,planets_per_year;
}