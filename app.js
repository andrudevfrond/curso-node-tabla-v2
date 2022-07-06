const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.c)
    .then(archivo => console.log('Archivo'.underline.green,':'.red , archivo.yellow, ' creado!!'.bgGreen.black))
    .catch(err => console.log(err))

