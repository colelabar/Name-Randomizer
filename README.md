CPOSC Prize Winner Randomizer Bot
=================================

## Overview
Simple Node-Express web-app to convert a CSV file to JSON, and then randomly pick a prize winner from the JSON Array

## Usage
Use npm to install dependencies
```
npm install
```
# Data Manipulation
 * Normalize the CSV dataset, replacing all commas with semicolons, and add placeholder CPOSC rows at the beginning and end of the dataset to use as the default viewport for the randomizer (prevents a name from being displayed by default)
 * Use ``` npm start ``` to convert the CSV file to a JSON file, which will also print to the console for confirmation of success
 * Point the browser at **localhost:5001**
 * Randomize away!
