let tempo = 0;

$("#datepicker").datepicker();

$("#slower").on("click", function() {
  if (tempo >= 1) {
    $("#count").text((tempo -= 1));
  }
  $("#tempoField").val(tempo);
});

$("#slower10").on("click", function() {
  if (tempo >= 1) {
    $("#count").text((tempo -= 10));
  }
  $("#tempoField").val(tempo);
});

$("#faster").on("click", function() {
  $("#count").text((tempo += 1));
  $("#tempoField").val(tempo);
});


$("#faster10").on("click", function() {
  $("#count").text((tempo += 10));
  $("#tempoField").val(tempo);
});
