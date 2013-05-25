$(function() {
	setActiveNavigationTab();
	    
	$('a.homepage-bottom').bind('click',function(event){
		var $anchor = $(this);
				
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 2000,'easeInOutQuart');
				
		event.preventDefault();
	});
	
	$('#homepage .top-bar ul > li.name, #homepage .top-bar ul > li[name="home"], .top-bar ul > li.active, .back-to-top img').bind('click',function(event){
		$('html, body').stop().animate({
			scrollTop: 0
		}, 1000,'easeInOutQuart');
				
		event.preventDefault();
	});
        
    $('img[data-hover]').hover(function() {
        $(this)
            .attr('tmp', $(this).attr('src'))
            .attr('src', $(this).attr('data-hover'))
            .attr('data-hover', $(this).attr('tmp'))
            .removeAttr('tmp');
    }).each(function() {
        $('<img />').attr('src', $(this).attr('data-hover'));
    });;
});

function setActiveNavigationTab() {
	var $page = $('body').attr('id'),
		$nav = $('.top-bar ul').find('li[name="' + $page + '"]');

	if ($nav) $nav.addClass('active');	
}

function moveTo(URL){
	window.location = URL;
	
	event.preventDefault();
}

$(window).scroll(function() {    
	$(".main-menu a.selected").removeClass("selected");
	
	var scroll_top = $(window).scrollTop(),
		$header = $('.header-container'),
		banner_height = $('#banner').height(),
		window_height = (scroll_top + $header.height());
	
	if (window_height > banner_height) {
		$header.addClass('affix');
	} else {
		$header.removeClass('affix');
	}
});

jQuery(document).ready(function () {
    if ($('body').hasClass('jobs')) {
	    var $jobLinks = $('#resumator-wrapper').find('input[type="button"]');
	    $jobLinks.addClass('btn');
    }
});

function displayTiles(c) {
    c.each(function () {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + 0.95 * $(window).height();
        a < b && $(this).fadeTo(500, 1)
    })
}

function sizebanner() {
    windowHeight = $(window).height();
    var $banner = $('#banner');
    
    if ($banner.hasClass('homepage')) {
		$("#banner").css({height: windowHeight + "px"});    
    } else {
	    $("#banner").css({height: (windowHeight / 2) + "px", minHeight: "350px"});
    }
    
}

sizebanner();

$(window).on("resize", function () {
    sizebanner();
});