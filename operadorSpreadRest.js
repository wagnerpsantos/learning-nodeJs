// operador ... rest(juntar)/spread(espalhar)
// usar spread como parametro de funcao

// usar spread com objeto
const funcionario = { id: 1, nome: 'maria', salario: 1499.99 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', 'Rafaela', ...grupoA];

console.log(grupoFinal)

