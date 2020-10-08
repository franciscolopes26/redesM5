function calcu() {
  var valor1 = document.getElementById("txtvalor1");
  var valor2 = document.getElementById("txtvalor2");
  let resultado = document.getElementById("txttotal");
  let total = Number(valor1.value) + Number(valor2.value);
  resultado.value = total;
}

function adic() {
  var inputElements = document.getElementsByName("lista1");
  let resultado = document.getElementById("lista2");
  let valuemarca = inputElements.options[inputElements.SelectedIndex].text;
  inputElements.add(valuemarca.resultado);
  resultado.add;
}
