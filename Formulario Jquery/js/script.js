$(document).ready(function () {
  $("#formRentACar").submit(function (e) {
    e.preventDefault();

  });
});





/* function calculavalor() {
  let ndias = document.getElementById("nDias");
  let resultado = document.getElementById("resultado");
  let extras = document.getElementById("extras");
  let opcoes = document.getElementById("opcoes");
  let marca = document.getElementById("marca");
  let valuemarca = marca.options[marca.selectedIndex].text;
  // resultado.value = ndias.value * 25 + checkedValue * ndias.value + nextras + "€";
  var checkedValue = null;
  var nextras = 0;
  let extraa = "";
  var inputElements = document.getElementsByName("segmento");
  let nseg;
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      checkedValue = 5 * i;
      nseg = inputElements.value;
    }
  }

  extras.forEach((element) => {
    if (element.checked) {
      nextras += 15;
      extraa += element.value;
    }
  });
  resultado.value =
    ndias.value * 25 + checkedValue * ndias.value + nextras + "€";

  opcoes.innerHTML =
    valuemarca +
    "<br/>" +
    "N dias:" +
    ndias.value +
    "<br/>" +
    nseg +
    "<br/>" +
    extraa;
}

function validate() {
  var radius = document.getElementById("txtRaio").value;
  var resultado = document.getElementById("lblRes");
  if (rdbV.checked == 1) {
    radius = Math.abs(radius);
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    return alert(volume);
  } else {
    var result = Math.PI * radius * radius;
    return alert(result);
  }
}

function add() {
  var conteudo = document.getElementById("txtArray");
  var label = document.getElementById("lblValues");
  return (label.innerHTML = conteudo.value);
}

function ordenar() {
  // var conteudo = document.getElementById("txtFrase").value;

  //return  alert(conteudo.split('').sort().join(''));

  var conteudo = document.getElementById("txtFrase");
  var conteudo2 = document.getElementById("lblFrase");
  return (conteudo2.innerHTML = conteudo.value);
} */