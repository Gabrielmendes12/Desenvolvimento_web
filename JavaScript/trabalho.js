var primeira = 1;
let segunda = "casa";
const terceira = [1, 2, 'nada'];

let quarta;

// console.log("primeira: " + primeira);
// console.log(primeira + "primeira ");
console.log("primeira: " + primeira++);

console.log("segunda: " + segunda);
segunda = "banana";
console.log("segunda: " + segunda);

console.log("terceira: " + terceira);
//terceira[2] = "terceira";
terceira[12] = "terceira";
terceira.push('novo'); // método push -> adiciona um elemento ao final do array
console.log("terceira: " + terceira);

terceira.splice(2,1); // remove o elemento -> (índice, e quantos elementos a partir dele)
console.log("terceira: " + terceira);

console.log("quarta: " + quarta);
quarta = {
  primeiro: 1,
  segundo: 'tudo'
}
console.log("quarta.primeiro: " + quarta.primeiro);

function uma_funcao(entrada){ // função
  return entrada + 1;
}

console.log(uma_funcao(1));

const outra_funcao = function(entrada){ // function anonima
  return entrada + 2;
}

console.log(outra_funcao(1));

const mais_uma_funcao = (entrada) => { // arrow function
  return entrada + 3;
}

console.log(mais_uma_funcao(1));

const funcao_com_raiva = (entrada) => entrada + 4;
console.log(funcao_com_raiva(1));