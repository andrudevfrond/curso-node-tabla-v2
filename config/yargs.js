const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: 'base tabla multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'lista el resultado de la tabla'
    })
    .option('c',{
        alias: 'cantidad',
        type: 'number',
        default: 10,
        describe: 'cantidad de números a multiplicar'
    })
    .check((argv, options)=>{
        if (isNaN(argv.b)){
            throw 'la base tiene que ser un número';
        }
        return true
        if(isNaN(argv.c)){
            throw 'la cantidad tiene que ser un número';
        }else{
            return true
        }
    })
    .argv

module.exports = argv;