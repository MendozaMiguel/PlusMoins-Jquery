$(function(){
  function getNumber() {
        var minNumber = 1; // le minimum
        var maxNumber = 100; // le maximum
        var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
        return randomnumber;
}

var numeroaleatoire = getNumber();
alert(numeroaleatoire);


$('.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

$( "#entree" ).keyup(function() {
  var value=$("#entree").val();
  if (value < numeroaleatoire) {
  $( ".inner" ).html( "<p>c'est plus</p>" );
  }
  else {
    $( ".inner" ).html( "<p>c'est moins</p>" );
  }
  if (value == numeroaleatoire) {
    $( ".inner" ).html( "<p>GAGNER !!</p>" );
  }

});

// function verification(){
//
// }

})
