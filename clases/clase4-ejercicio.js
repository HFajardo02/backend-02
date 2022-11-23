const fs = require('fs')

fs.promises.readFile('package.json', 'utf-8')
    .then(contenido => {
        const json = JSON.parse(contenido)
        console.log(json);
        
        const leerJson = JSON.parse(contenido)
        console.log(leerJson);

    })
    .catch(e => console.error('ERROR', e))
