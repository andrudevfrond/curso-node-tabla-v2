
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 6, listar, cantidad = 10 )=>{
    try {
        let salida, consola = ''

        salida = '===============================\n'.rainbow;
        salida += `tabla del: ${ (base).toString().yellow }\n`.green;
        salida += '===============================\n'.rainbow;
    
        for (let i = 1; i <= cantidad; i++){
            salida += `${base} ${('x').red} ${i} ${('=').red} ${(base*i).toString().cyan}\n`
            consola += `${base} x ${i} = ${base*i}\n`;
        }
        if (listar){
            console.log(salida);
        }
    
        let nombreArchivo = `./salida/tabla-${base}.txt`;
    
        fs.writeFileSync(nombreArchivo, consola);
        return nombreArchivo;    
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}

// fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
//     if (err) throw err;
//     console.log(`tabla-${base}.txt creada!!!`);
// })