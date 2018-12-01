var express = require('express');
    cors = require('cors'),
    path = require('path'),
    bodyParser = require('body-parser'),
    csvToJson = require('convert-csv-to-json'),
    favicon = require('serve-favicon');

var app = express();

// Set the static files location
app.use(express.static(__dirname + '/public'));

// set favicon route
app.use(favicon(__dirname + '/favicon.ico'));

// setup body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set default home route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + 'public/index.html'));
});

// set the route for the JSON file to pull from
app.get('/public/assets/attendeeList.json', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/assets/attendeeList.json'));
});

app.use(cors());

app.listen(5001, function () {
  console.log('CORS-enabled web server listening on port 8080')
});


// logic to convert CSV into JSON
let fileInputName = 'cposc.csv';
let fileOutputName = './public/assets/attendeeList.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

let json = csvToJson.getJsonFromCsv(fileInputName);
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}
