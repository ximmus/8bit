var color = "color-000000";

$( ".colorwheel li" ).click( function () {
  color = $( this ).attr('class');
});

$( ".pixel" ).click( function () {
  $( this ).toggleClass( color );
});