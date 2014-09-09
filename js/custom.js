var $carousel = $('[data-ride="carousel"]');
$(document).ready(function(){ toggleControl($carousel) });
$carousel.on('slid.bs.carousel', function () { toggleControl($carousel); })

function toggleControl($this){
	var $carouselInner = $('.carousel-inner');
	if($carouselInner.find('.item:first').hasClass('active')) { $this.children('.left.carousel-control').hide(); return false;}
	else if($carouselInner.find('.item:last').hasClass('active')) {$this.children('.right.carousel-control').hide(); return false;}
	else {$this.children('.carousel-control').show();return false;}
}