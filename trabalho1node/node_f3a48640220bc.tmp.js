const readline = require('readline');
const Read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const propertiescss = [];

function sortProperties() {
    propertiescss.sort();
  console.log(propertiescss.join('\n'));
}


function readProperties() {
  Read.question('Digite uma propriedade ou "SAIR" para finalizar o processo: ', (property) => {
    if (property.toUpperCase() === 'SAIR') {
      sortProperties();
      Read.close();
    } else {
        propertiescss.push(property);
      readProperties();
    }
  });
}
readProperties();
