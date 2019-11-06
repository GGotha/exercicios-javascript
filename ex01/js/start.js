let btn = document.querySelector("#botao");
let input = document.querySelector("#input");
let valorFinal = document.querySelector("#valorFinal");

function calcular() {
  let valorInput = parseFloat(input.value);
  let fundoReserva = parseFloat(valorInput * 0.05);
  let benfeitorias = parseFloat(valorInput * 0.07);
  let taxaDeAdministracao = parseFloat(valorInput * 0.15);

  const totalFinal = parseFloat(
    valorInput + fundoReserva + benfeitorias + taxaDeAdministracao
  ).toFixed(2);

  valorFinal.innerHTML = totalFinal;

  console.log("totalfinal:", totalFinal);
}

btn.onclick = () => {
  calcular();
};
