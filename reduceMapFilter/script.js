window.addEventListener("load", lala)

function lala(e) {



}


$.ajax({
  url: 'MOCK_DATA.csv',
  dataType: 'text',
}).done(successFunction);

function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  }
  table += '</tbody>';
  table += '</table>';
  $('body').append(table);

  let dataJSON = csvJSON(data);
  console.log(dataJSON);
  console.log("csvJSON(data)[0]");
  console.log(csvJSON(data)[2]);

  sumador = (acumulador, actual) => {
    if (!(typeof actual.edad === 'undefined'))
      return acumulador + parseInt(actual.edad);
    else return acumulador;
  }
  promedio = (acumulador, actual,i,vec) => {
    if (!(typeof actual.edad === 'undefined'))
      return acumulador + (parseInt(actual.edad))/vec.length;
    else return acumulador;
  }

  filtMas = a => a.gender === "Male"
  filtFem = a => a.gender === "Female"
  let edadProm = dataJSON.reduce(sumador, 0) / dataJSON.length;
  let edadProm2 = dataJSON.reduce(promedio, 0) ;

  let DataMas = dataJSON.filter(filtMas);
  let DataFem = dataJSON.filter(filtFem);
  
  console.log("Edad prom: " + edadProm.toFixed(2));
  console.log("Edad prom2: " + edadProm2.toFixed(2));

  console.log("prom edad masc: " + (DataMas.reduce(sumador, 0)/DataMas.length).toFixed(2) );
  console.log("prom edad fem: " + (DataFem.reduce(sumador, 0)/DataFem.length).toFixed(2) );
  
  console.log(`hola
              jej jeje
  `);
  
  

    
  
}


//var csv is the CSV file with headers
function csvJSON(csv) {

  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {

    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);

  }

  return result; //JavaScript object
  //return JSON.stringify(result); //JSON


}