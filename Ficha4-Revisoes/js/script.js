function capitular(str) {
  var pieces = str.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1);
  }
  return alert(pieces.join(" "));
}

function ordena(str2) {
  var sortAlphabets = str2;
  return alert(sortAlphabets.split("").sort().join(""));
}
function calcul(birth) {
  var today = new Date();
  var curr_date = today.getDate();
  var curr_month = today.getMonth() + 1;
  var curr_year = today.getFullYear();

  var pieces = birth.split("/");
  var birth_date = pieces[0];
  var birth_month = pieces[1];
  var birth_year = pieces[2];

  if (curr_month == birth_month && curr_date >= birth_date)
    return alert(parseInt(curr_year - birth_year));
  if (curr_month == birth_month && curr_date < birth_date)
    return alert(parseInt(curr_year - birth_year - 1));
  if (curr_month > birth_month) return alert(parseInt(curr_year - birth_year));
  if (curr_month < birth_month)
    return alert(parseInt(curr_year - birth_year - 1));
}

function mes(date) {
  const lol = new Date(date);
  const month = lol.toLocaleString("default", { month: "long" });
  return alert(month);
}
function arrayunic(array) {
  var uniqueArray = [];

  for (i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) == -1) {
      uniqueArray.push(array[i]);
    }
  }
  return alert(uniqueArray);
}
function mundar() {
  document.getElementById("text").style.cssText =
    "background-color: red; color: white; font-size: 44px";
}
function pass() {
  var pass = document.getElementById("txtPass").value;
  var user = document.getElementById("txtLogin").value;
  var label = document.getElementById("lblValida");

  var passcerta = "adm";
  var usercerto = "adm";
  if (pass == passcerta && user == usercerto) {
    label.innerHTML = "acertou";
    return alert("acertou");
  } else label.innerHTML = "enrrou";
}

function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  if (s1.value == "Lisboa") {
    var optionArray = ["|", "Oeiras|oeiras", "Mafra|mafra", "Sintra|sintra"];
  } else if (s1.value == "Porto") {
    var optionArray = ["|", "Maia|maia", "Gaia|gaia", "Matosinhos|matosinhos"];
  } else if (s1.value == "Braga") {
    var optionArray = [
      "|",
      "Vila Verde|vila verda",
      "Guimarães|guimarães",
      "Vizela|vizela",
    ];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}
