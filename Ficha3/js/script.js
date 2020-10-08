function calcu() {
  var valor1 = document.getElementById("txtvalor1");
  var valor2 = document.getElementById("txtvalor2");
  let resultado = document.getElementById("txttotal");
  let total = Number(valor1.value) + Number(valor2.value);
  resultado.value = total;
}

function adic() {
  var inputElements = document.getElementsById("lista1");
  let resultado = document.getElementById("lista2");
  let valuemarca = inputElements.options[inputElements.SelectedIndex];
  resultado.add(valuemarca);
  resultado.SelectedIndex = -1;
}
function exeRemove() {
  let disc = document.getElementById("lista2");
  let valordisc = disc.options[disc.SelectedIndex];
  let lista2 = document.getElementById("lista1");

  lista1.add(valordisc);
  lista2.SelectedIndex = -1;
}
function changePic1() {
  document.getElementById("myImg").src = "smile2.png";
}
function changePic2() {
  document.getElementById("myImg").src = "smile1.png";
}
function toNegrito() {
  var pegar = (document.getElementById("text").style.fontWeight = "bold");
  text.style.font - weight - bold;
  text.style.text - center;
}
