const contador (callback) => {
    let counter =1
    console.log ("Iniciando contador");
    const timer = setInterval(() => {
        console.log(counter++)
    },2000)
}

console.log("Start task");
contador()
console.log ("Finished");