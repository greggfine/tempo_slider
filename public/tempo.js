

let tempo = 100;
let intervalSet;
let sound = new Howl ( {
  urls: ['./sounds/2Pop.mp3'],
  autoplay: false,
  volume: 0.1
});


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


$('#playMetronome').on('click', function(){
    intervalSet = setInterval(function(){
         sound.play();
       }, (tempo *=6));
})

$('#stopMetronome').on('click', function(){
  clearInterval(intervalSet)
})
