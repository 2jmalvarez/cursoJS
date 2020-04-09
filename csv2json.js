var argumentos = []
const csv = require('csvtojson')
var fs = require('fs');
//https://www.npmjs.com/package/csvtojson


process.argv.forEach(
    (val, index) => {
        //console.log(`${index}: ${val}`);
        argumentos[index] = val;
    }


);

const csvFilePath = './' + argumentos[2]// |  './dbPrestadores10.csv'
var file = argumentos[3]// |'dbPretadores.json';

var data;

if (argumentos.length < 4) {
    console.log("\nEl formato para ejecutar es: node csv2json.js Entreda.csv Salida.json");
    console.log("\nSi al final agregas \"pxc\" transforma el csv de entrada separdo por \";\" en uno separado por \",\"\nel farmato quedaria: node csv2json.js Entreda.csv Salida.csv pxc");


}
else {
    if (argumentos[4] == "pxc") 
    {
        contents = fs.readFileSync(csvFilePath, 'utf8');
        console.log("\nSe reemplaza primero la \",\" por el \".\", y despues el \";\" por la \",\"");
        console.log("\nEntrada");
        console.log(contents.substring(0,590));
        console.log("\nSalida");
        console.log(contents.replace(/,/g,".").replace(/;/g,",").substring(0,590));
        fs.writeFileSync("coma_" + file, data, "utf-8");
    }
    else 
    {
        csv({
            delimiter: ";",


        })
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                console.log("\nEl primer elemento convertido es:");
                console.log(jsonObj[0])
                data = JSON.stringify(jsonObj);
                //console.log(jsonObj[1])
                fs.writeFileSync("str_" + file, data, "utf-8");
                // fs.writeFileSync("jason_" + file, jsonObj);
            })

    }
}

