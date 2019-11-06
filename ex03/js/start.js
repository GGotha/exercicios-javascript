let numeros = [];
let posicao = [];

let cafe = document.querySelector("#cafe").textContent;
let cafes = document.querySelector(".a");

console.log("letras:", cafe.length);
console.log("letras:", cafes);

for (let x = 0; x < 10; x++) {
  numeros[x] = parseInt(Math.random() * 10);

  console.log("x:", numeros[x]);
  // console.log(variavelP);
}

for (let y = 0; y < 10; y++) {
  numeros[y] = parseInt(Math.random() * 10);

  console.log("y:", numeros[y]);
}

for (let z = 0; z < 10; z++) {}
