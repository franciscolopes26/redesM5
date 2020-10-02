function validateForm() {
  var d = new Date();
  //var n = d.getHours();
  document.getElementById("labeldata").innerHTML = d.toLocaleDateString();
  setTimeout(validateForm, 100);
}
function data() {
  var de = new Date();
  document.getElementById("labelhoras").innerHTML = de.toLocaleTimeString();
  setTimeout(data, 10);
}
function refresh() {
  if (new Date().getTime() - time >= 60000) window.location.reload(true);
  else setTimeout(refresh, 10000);
}

function bem() {
  var n = prompt("qual o seu nome");
  document.getElementById("nome").innerHTML = "bem vindo " + n;
}
