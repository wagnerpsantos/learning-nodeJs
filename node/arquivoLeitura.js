const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// Sincrono...
const conteudo = fs.readFileSync(caminho, 'UTF-8');

console.log(conteudo);

// Assincrono...

fs.readFile(caminho, 'UTF-8', (error, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});


fs.readdir(__dirname, (error, arquivos) => {
  console.log('Conteúdo pasta...');
  console.log(arquivos);
});


