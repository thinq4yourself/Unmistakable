$(function() {
	$('[data-scroll]').bind('click', function(e) {
		e.preventDefault();
		$page_location = $(this).attr('data-scroll');
		scrollToSection($page_location, 1000);
	});
});

function scrollToSection($page_location, duration) {
	$page_location_top = $page_location ? $($page_location).offset().top + 2 : 0;

	$('html, body').stop().animate({
		scrollTop: $page_location_top
	}, duration, 0);
}