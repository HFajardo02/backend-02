const impuestos = {
    "impuestoIVA": 16,
    "impuestoRenta": 80,
    "impuestoAuto": 170
}

let parLlaveValor = Object.entries(impuestos)
console.log(parLlaveValor);
console.log(parLlaveValor[0]);

let justKeys = Object.keys(impuestos)
console.log(justKeys);

let justValues = Object.values(impuestos)
console.log(justValues);

let impuestosTotales = justValues.reduce((valorInicial, amount) => amount+valorInicial)
console.log(impuestosTotales);