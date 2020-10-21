function validate(){
    var radius = document.getElementById("txtRaio").value;
    var resultado = document.getElementById("lblRes");
    if (rdbV.checked == 1){
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  return alert(volume);
 } 
 else {
    var result = Math.PI * radius * radius;
    return alert(result);
    }
  }

function add(){
    var conteudo = document.getElementById("txtArray"); 
   var label= document.getElementById("lblValues");
   return label.innerHTML=conteudo.value;

}
function ordenar() {
   // var conteudo = document.getElementById("txtFrase").value; 
    
    //return  alert(conteudo.split('').sort().join(''));
    
    var conteudo = document.getElementById("txtFrase"); 
    var conteudo2 = document.getElementById("lblFrase"); 
    return  conteudo2.innerHTML=conteudo.value;
};
