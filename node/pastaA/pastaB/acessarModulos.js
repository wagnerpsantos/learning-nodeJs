const moduloA = require('../../moduloA')
const saudacao = require('saudacao')
const http = require('http')

console.log(moduloA.ola)

console.log(saudacao.ola)

http.createServer((req, res) => {
  res.write('Bom dia')
  res.end()
}).listen(8080);

