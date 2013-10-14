window.mobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	window.mobile = true;
}

$(document).ready(function() { init(); });

$(document).scroll(function(){ init(); });

$(document).resize(function(){ init(); });

function init(){
	var destinations =  {
		"tally": $('#tallahassee'),
		"nola": $('#new-orleans'),
		"houston": $('#houston')
	}

	scrollPastSectionTop(destinations.tally.offset().top, 250) ? showCity(destinations.tally) : null;
	scrollPastSectionTop(destinations.nola.offset().top, 250) ? showCity(destinations.nola) : null;
}

function scrollPastSectionTop(top, offset) {
	var offset = offset || 0,
	hasScrolled = false,
	paddingForMobile = 0;

	if (window.mobile) paddingForMobile = 500;

	return ($(document).scrollTop() >= top - $(window).height()+offset-paddingForMobile) ? true : false;
}

function showCity(destination){
	return (!destination.hasClass('loaded')) ? destination.addClass('loaded') : false;
}