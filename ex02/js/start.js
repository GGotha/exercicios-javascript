let inputN = document.querySelector("#inputNome");
let inputV = document.querySelector("#inputValorDoPedido");
let btn = document.querySelector("#botao");
let spanNome = document.querySelector("#spanNome");
let spanEstado = document.querySelector("#spanEstado");
let spanValor = document.querySelector("#spanValor");
let selectEstado = document.querySelector("#selectEstado");

function getCalcular() {
  function validar() {
    console.log(inputN.value);
    if (inputN.value === "" || inputV.value === "") {
      alert("Não é possível calcular os fretes com o campo vazio");
    }

    return false;
  }
  validar();

  let valorInput = inputV.value;

  switch (selectEstado.value) {
    case "AM":
      valorInput = valorInput * 0.1;
    case "ES":
      valorInput = valorInput * 0.1;
    case "GO":
      valorInput = valorInput * 0.12;
    case "MS":
      valorInput = valorInput * 0.12;
    case "PR":
      valorInput = valorInput * 0.09;
    case "RS":
      valorInput = valorInput * 0.09;
    case "SC":
      valorInput = valorInput * 0.09;
    case "SP":
      valorInput = valorInput * 0.125;
  }

  console.log(valorInput);

  spanNome.innerHTML = inputN.value;
  spanValor.innerHTML = parseInt(inputV.value) + valorInput;
  spanEstado.innerHTML = selectEstado.value;
}

btn.onclick = () => {
  getCalcular();
};
