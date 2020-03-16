//MouseMove img
if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('.mousemove_container').mousemove(function(event) {
		var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
		var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
		$('.services_img').css({"transform": "translate(" + moveX +"px," +  moveY + "px)"});
	});
}

/*MouseMove for One-Page
if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('.mousemove_container').mousemove(function(event) {
		var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
		var moveY = (($(window).height() / 2) - event.pageY) * 0.1 + 360;
		$('.services_img').css({"transform": "translate(" + moveX +"px," +  moveY + "px)"});
	});
}
*/