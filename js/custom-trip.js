window.mobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	window.mobile = true;
}

var destinations = new Array(),
$cities = $('.city .location');

$(document).scroll(function(){ init(); });

$(document).resize(function(){ init(); });

function init(){
	for (i = 0; $cities.length > i; i++) {
		var city_element = $cities[i];	
		scrollPastSectionTop($(city_element).offset().top, 250) ? showCity($(city_element)) : null;
	}
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