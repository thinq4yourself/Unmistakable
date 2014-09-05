$(window).load(function() {
	var city = getParameterByName('city');
	scrollToSection("#{0}".format(city), 1500);
})

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function scrollToSection($page_location, duration) {
	$page_location_top = $page_location ? $($page_location).offset().top + 2 : 0;

	$('html, body').stop().animate({
		scrollTop: $page_location_top
	}, duration,'easeInOutQuart');
}

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