$(function() {
	$('[data-scroll]').bind('click', function(e) {
		e.preventDefault();
		var $page_location = $(this).attr('data-scroll');
		scrollToSection($page_location, 1000);
	});
});

function scrollToSection($page_location, duration) {
	var $padding = $('nav.navbar-fixed-top .navbar-header').height(),
	$page_location_top = $page_location ? $($page_location).offset().top - $padding : 0,
	duration = duration ? duration : 1000;

	$('html, body').stop().animate({
		scrollTop: $page_location_top
	}, duration, 0);
}