function calculavalor() {
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
