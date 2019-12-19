
// optionTile
// Transforms marked select inputs into option tile menus
// using them as data sources.
// Steve Knoblock 2015
// MIT License

$(document).ready(function(){



// iterate over source selects
$('select.option-tile-source').each(function(ind, val){

	var optionTiles = '';

	console.log(this); // this contains the selected element and all of its children

	optionTiles += '<div class="option-surface">';

	optionTiles += '    <ul id="' + $( this ).attr( 'id' ) + '" class="option-tiles">';

	$.each(this, function(index, value) {
	
		optionTiles += '        <li class="option-tile" data-select-index="' + $( this ).attr( 'value' ) + '" data-cost="' + $(this).attr('data-cost') + '">&nbsp;<span>' + $( this ).text() + '</span>&nbsp;<span class="delta"></span></li>';
	});
	
	optionTiles += '</ul></div>';
	
	$("body").append(optionTiles);
});



$('.option-tiles li').each(function(index) {
	$(this).on('click', function() {
		var data = $(this).attr('data-select-index');
		var delta = $(this).attr('data-cost');
		var id = $(this).parent().attr('id');
		$('#' + id).val(data);
		
		// If a cost or callout is defined for this option
		// display it
		if( delta !== 'undefined' ) {
			$('span.delta').text('');
			$(this).children('span.delta').text(delta);
		}

	});
});

});