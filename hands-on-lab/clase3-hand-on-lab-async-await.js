const sumar = (num1, num2) => {
    return new Promise ((resolve, reject) => {
        if ( num1==0 || num2==0) reject ("Operacion innecesaria")
        else if (num1<0 || num2<0) reject ("Solo se trabaja con numero positivos")
        else resolve (num1 + num2) 
    })
}

const restar = (num1, num2) => {
    return new Promise ((resolve, reject) => {
        const result = num1 - num2
        if (result < 0) return reject reject ("Solo se trabaja con numero positivos")

        return resolve (result)
    })
}

const multiplicar = (num1, num2) => {
    return new Promise (
        
    )
}