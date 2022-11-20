class Counter{
    
    constructor(responsible){
        this.responsible = responsible
        this.count_local =0
    }

    static count_global = 0

    getResponsible = () => {
        return this.responsible
    }

    count = () => {
        this.count_local++
        Counter.count_global++
    }

    getCountLocal = () => {return this.count_local}
    getCountGlobal = () => {return this.count_global}
}

const vigliocco = new Counter ('vigliocco')
const jesusGomez = new Counter ('Jesus Gomez')
const r2 = new Counter ('R2')
const evelyn = new Counter ('Evelyn')

vigliocco.count()
vigliocco.count()
vigliocco.count()
jesusGomez.count()
r2.count()
vigliocco.count()
evelyn.count()
evelyn.count()
r2.count()

console.log(`${vigliocco.getResponsible()}: ${vigliocco.getCountLocal()}`)
console.log(`${jesusGomez.getResponsible()}: ${jesusGomez.getCountLocal()}`)
console.log(`${r2.getResponsible()}: ${r2.getCountLocal()}`)
console.log(`${evelyn.getResponsible()}: ${evelyn.getCountLocal()}`)

console.log(Counter.count_global);
