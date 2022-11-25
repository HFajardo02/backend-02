const moment = require ('moment')

const fnacimiento = moment([1979, 9, 05]);
const factual = moment();

console.log("Fecha de nacimiento: ", fnacimiento);
console.log("Fecha actual: ", factual);

console.log("Dias transcurridos: ", factual.diff(fnacimiento, 'days'));
console.log("Años transcurridos: ", factual.diff(fnacimiento, 'years'));

console.log(moment());