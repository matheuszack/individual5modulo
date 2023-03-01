const readline = require('readline');
const Read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const propriedadesCss = [];

function sorteiPropriedades() {
    propriedadesCss.sort();
  console.log(propriedadesCss.join('\n'));
}


function propriedades() {
  Read.question('Digite propriedades css para fazer uma ordenação alfabetica ou digite exatamente a palavra "SAIR" para finalizar o processo: ', (property) => {
    if (property.toUpperCase() === 'SAIR') {
        sorteiPropriedades();
      Read.close();
    } else {
        propriedadesCss.push(property);
      propriedades();
    }
  });
}
propriedades();
