const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida = '';
        let temporal = '';
        
        for(let i = 1; i <= hasta; i++){
            temporal += `${ base } ${ 'x'.yellow } ${ i } ${ '='.yellow } ${ base * i }\n`;
            salida += `${ base } x ${ i } = ${ base * i }\n`
        }

        if ( listar ) {
            console.log('========================='.blue);
            console.log('     Tabla del :'.blue, base);
            console.log('========================='.blue);
            console.log(temporal);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }-hasta-${ hasta }.txt`.rainbow;

    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}
