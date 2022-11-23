const fs = require("fs")

fs.writeFileSync("./ejemplo.txt","Saludos a Hector Fajardo.")

const contenido = fs.readFileSync("./ejemplo.txt, utf-8")
console.log(contenido);