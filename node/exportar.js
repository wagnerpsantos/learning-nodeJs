console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 10;
exports.b = 20;
module.exports = 30;

exports = {
  nome: 'teste'
}

console.log(module.exports)

module.exports = { public: true }

