const argv = require('yargs')
                .option('b', {
                   alias: 'base' ,
                   type: 'number',
                   demandOption: true,
                   describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Lista la tabla de multiplicar en la linea de comandos'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el número de hasta donde quieres la tabla de multiplicar'
                })
                .check( ( argv, options ) => {
                    if ( isNaN( argv.base ) ){
                        throw `El valor ingresado no es un número`;
                    }
                    return true;
                }).argv;

module.exports = argv;