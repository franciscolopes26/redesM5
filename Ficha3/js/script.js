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
  let x = document.getElementsByClassName("negrito");

  for (let i = 0; i < x.length; i++) {
    x[i].classList.toggle("normal");
  }
}
function listaa() {
  let list = document.getElementById("listaIng");
  let item = document.getElementById("item").value;
  let imagem = document.createElement("img");
  imagem.src = "lixo.png";
  var entry = document.createElement("li");
  entry.innerHTML = item;

  entry.appendChild(imagem);
  list.appendChild(entry);

  imagem.onclick = function () {
    list.removeChild(entry);
  };
  //list.appendChild(document.createTextNode(entry));
  //imga.appendChild(document.createTextNode(imga));
}
function apagar() {
  alert("funcao 2");
  var image_x = document.getElementById("img");
  let list = document.getElementById("listaIng");

  //list.parentElement.remove();
  list.parentNode.parentNode.parentNode.removeChild(list.parentNode.parentNode);
  //list.parentNode.removeChild(list.parentNode);
  // list.parentNode.removeChild(list).tabIndex(this);
}
function pegar() {
  let checkedValue = "";
  let nome = document.getElementById("inputNome");
  let morada = document.getElementById("inputMorada");
  let genero = document.getElementById("gridRadios");
  let pais = document.getElementById("selectPais");
  let hbies = document.getElementById("hobbies");
  let resultado = document.getElementById("mensagem");
  //let valuemarca = genero.options[genero.selectedIndex].text;
  for (var i = 0; i <= 2; ++i) {
    if (genero[i].checked) {
      checkedValue = genero.text;
    }
  }
  resultado.innerHTML =
    nome.value + "<br/>" + morada.value + checkedValue.value;
}
