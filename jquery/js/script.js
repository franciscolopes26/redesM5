$(document).ready(function () {
  $("#title").text("curso de formacao em Jquerry");
  $("#title").after("<p id='paragrafo'>...</p>");
  $("#paragrafo").html("<b>3º PTGPSI </b>");
  $("input[type=text]").val("Curso de Jquery");
  $("input[type=button]").val("Do something...");
  $("input[type=button]").click(function () {
    $("#title").append("  AERP");
    $("#paragrafo").prepend("<b>turma turno 1 </b>");
    $("#paragrafo").before("<h5>Data: 23-10-2020</h5>");
    $("#title").addClass("text-primary");
    $("h5").addClass("text-success");
    $("#remove").remove();
    $("#disciplina").val("RC");
  });
  $("#disciplina").change(function (e) {
    alert($("#disciplina option:selected").text());
  });
});
