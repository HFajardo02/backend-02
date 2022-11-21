const valoresBase = [1, 2, 3, 4, 5]

const nuevosValores  = valoresBase.map(numero => numero**2)

console.log(nuevosValores);

const valoresBase2 = [1, 2, 3, 4, 5]

const nuevosValores2  = valoresBase2.map((numero2, idx2) => numero2**idx2)

console.log(nuevosValores2);