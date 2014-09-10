$(function() {
	$('[data-scroll]').bind('click', function(e) {
		e.preventDefault();
		
		var $navbar = $('.navbar-collapse');
		if ($navbar.hasClass('in')) $navbar.collapse('hide');

		var $btnClicked = $(this),
		$page_location = $btnClicked.attr('data-scroll');
		
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