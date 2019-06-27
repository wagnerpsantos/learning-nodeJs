// This fora de funcao aponta para exports
console.log(this === global);
console.log(this === module);
console.log(this === module.exports);
console.log(this === exports);

function logThis() {
  // This dentro de funcao aponta para global
  console.log('Dentro de uma função...');
  console.log(this === exports);
  console.log(this === global);
}

logThis();
