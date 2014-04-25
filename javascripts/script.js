var color = "color-000000";

$( ".colorwheel li" ).click( function () {
  color = $( this ).attr('class');
});

$( ".pixel" ).click( function () {
  
  // var current = $( this ).attr( "class" );

  // $( this ).removeClass( current );
  // $( this ).addClass( "pixel" );

	// $( this ).attr( "class",
 //  		function( pos, classes ){
 //    	return classes.replace(/\bcolor-\S+/g, "");
	// });

	$( this ).removeClass (function (index, css) {
    	return (css.match (/\bcolor-\S+/g) || []).join(' ');
	});

	$( this ).addClass( color );
});