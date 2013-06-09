$(function() {
	$('button[data-scroll]').bind('click', function() {
		$page_location = $(this).attr('data-scroll'),
		$page_location_top = $page_location ? $($page_location).offset().top : 0;
		
		$('html, body').stop().animate({
			scrollTop: $page_location_top
		}, 1500,'easeInOutQuart');
	});     
});