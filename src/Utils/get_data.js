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

let average_dis_per_year = {};

let planets_per_year_offset = {};

let discovery_method_count = {};

let transit_planets_per_year = {};

parsed_data.map(d=>{
    if (!(d.disc_year in planets_per_year)){
        planets_per_year[d.disc_year] = 0;
		planets_per_year_offset[d.disc_year] = 0;
		average_dis_per_year[d.disc_year] = 0;
		transit_planets_per_year[d.disc_year] = 0;
    }

	if (!(d.discoverymethod in discovery_method_count)){
		discovery_method_count[d.discoverymethod] = 0;
	}

	if (d.discoverymethod=="Transit"){
		transit_planets_per_year[d.disc_year]+=1
	}

		discovery_method_count[d.discoverymethod]+=1
        planets_per_year[d.disc_year]+=1;

	if (typeof(Number(d.sy_dist))=="number"){
		average_dis_per_year[d.disc_year]+=Number(d.sy_dist);
	}
	else{
		planets_per_year_offset[d.disc_year]-=1;
	}
})

for (const [k,_] of Object.entries(average_dis_per_year)){
	average_dis_per_year[k]/=(planets_per_year[k]+planets_per_year_offset[k]);
}

export default function get_data(){
    return {"data":parsed_data,
		"planets_py":planets_per_year,
	"dis_avr_py":average_dis_per_year,
	"disc_mthd_ct":discovery_method_count,
"transit_py":transit_planets_per_year};
}