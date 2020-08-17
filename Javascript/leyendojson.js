const fs = require('fs');
let leer = fs.readFileSync('package.json');
let leerNueva = JSON.parse(leer);

console.log(leer);