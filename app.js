const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( mensaje => console.log(mensaje) )
    .catch( error => console.log(error) );
