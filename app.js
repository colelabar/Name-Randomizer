let csvToJson = require('convert-csv-to-json');

let fileInputName = 'cposc.csv';
let fileOutputName = 'attendeeList.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

let json = csvToJson.getJsonFromCsv(fileInputName);
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}
