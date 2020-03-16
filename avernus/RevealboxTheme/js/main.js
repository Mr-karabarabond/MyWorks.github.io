//preloader
$(window).on('load', function () {
	$preloader = $('#preloader'),
	$loader = $preloader.find('#loader');
	$preloader.delay(350).fadeOut('slow');
});


//reveal img
$(document).ready(function(){
	$('.modal').modal({
    	startingTop: '0%', // Starting top style attribute
      endingTop: '0%', // Ending top style attribute
    });
	$('#modal1').modal('open');        
});


//boxLayout
$(function() {
	Boxlayout.init();
});


//Baffle
const text = baffle(".data");
text.set({
	characters : 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',//These are the characters that baffle uses to obfuscate your text. You can use a string or an array of characters.
	speed: 130
});
text.start();
text.reveal(4000);


//blog: init wall
$('.wall').jaliswall({
	item : '.wall-item',
	columnClass : '.wall-column'
});


//materializa: popup
$(document).ready(function(){
	$('.collapsible').collapsible();
	$('.collapsible').collapsible('open', 0); //0 - the serial number of the element that should be opened by default 
});


//skills
( function($) {
	"use strict";
	var $bars = $( ".bar" ),
	methods = {
		init: function() {
				// Bind events
				methods.bindEvents();				
			},
			bindEvents: function() {
				// Loop through each of the bars...
				$bars.each( function() {
					var $bar = $( this ),
					$pct = $bar.find( ".pct" ),
					data = $bar.data( "bar" );
					setTimeout( function() {
						$bar
						.css( "background-color", data.color )
						.animate({
							"width": $pct.html()
						}, data.speed || 2000, function() {

							$pct.css({
								"color": data.color,
								"opacity": 1
							});
						});
					}, data.delay || 0 );			
				});
			}
		};

 $('.start_skills').on('click', function()  { //start animation on click
	// Initialize on page load
	methods.init();	
});

})( jQuery );


 //Count
 $('.start_count').on('click', function()  { //start animation on click
 	$('.count_box').each(function () {
 		$(this).prop('Counter',0).animate({
 			Counter: $(this).text()
 		}, {
 			duration: 2500,  //duration animation
 			easing: 'swing', //easing functions (see https://easings.net/en) 
 			step: function (now) {
 				$(this).text(Math.ceil(now));
 			}
 		})
 	});
 });