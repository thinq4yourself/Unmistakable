<!DOCTYPE html>
<html lang="en">
<head>
	<!-- if page is content page -->
	<meta property="og:url" content="http://www.tylergoelz.com/trip/2013/america/">
	<meta property="og:title" content="Tyler Goelz - A Beard Across America">
	<meta property="og:description" content="I'm embarking on a 4 week road trip from St. Petersburg, Florida to Seattle, Washington. Along the way, I'll be couchsurfing, hanging out with locals, eating great food and drinking awesome beers.">
	<meta property="og:type" content="website">
	<meta property="og:image" content="http://www.tylergoelz.com/images/logo_social.png">

	<!-- if page is others -->

	<!-- twitter cards -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@tylergoelz">
	<meta name="twitter:title" content="Tyler Goelz - A Beard Across America">
	<meta name="twitter:description" content="I'm embarking on a 4 week road trip from St. Petersburg, Florida to Seattle, Washington. Along the way, I'll be couchsurfing, hanging out with locals, eating great food and drinking awesome beers.">
	<meta name="twitter:creator" content="@tylergoelz">
	<meta name="twitter:image:src" content="http://www.tylergoelz.com/images/logo_social.png">
	<meta name="twitter:domain" content="http://www.tylergoelz.com/trip/2013/america/">
	<meta property="twitter:account_id" content="15271634" />

	<meta name="description" content="I'm embarking on a 4 week road trip from St. Petersburg, Florida to Seattle, Washington. Along the way, I'll be couchsurfing, hanging out with locals, eating great food and drinking awesome beers."/>
	<link rel="canonical" href="http://www.tylergoelz.com/trip/2013/america/" />

	<title>Tyler Goelz - Applying a Holistic Approach to User Experience</title>

	<?php include_once($_SERVER["DOCUMENT_ROOT"] . '/includes/head.html'); ?>
</head>
<body>
	<article>
		<section id="headline" class="headline">
			<div class="info">
				<h1>A Beard Across America</h1>
				<small>I'm embarking on a 4 week road trip from St. Petersburg, Florida to Seattle, Washington.
					<br class="hidden-phone" /> Along the way, I'll be <a href="http://www.couchsurfing.org">couchsurfing</a>, hanging out with locals, eating great food and drinking awesome beers. 
					<br /> Below is a map of my trip.
				</small>
			</div>
		</section>
		<section class="map_container">
			<div class="container">
				<div class="row">
					<div id="map" class="map"></div>
				</div>
			</div>
		</section>
	</article>
	<footer>
		<div class="container">
			<div class="row">
				<div class="references">
					<p>This site was crafted using the <a href="http://designmodo.com/flat-free/?ref=tylergoelz" target="_blank">Flat UI</a> framework, mocked up in <a href="http://www.adobe.com/products/photoshop.html?ref=tylergoelz" target="_blank">Photoshop</a> & <a href="http://www.adobe.com/products/illustrator.html?ref=tylergoelz" target="_blank">Illustrator</a> CS6, build in <a href="http://panic.com/coda/?ref=tylergoelz" target="_blank">Coda2</a>, using <a href="http://en.wikipedia.org/wiki/HTML5?ref=tylergoelz" target="_blank">HTML5</a>, <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3?ref=tylergoelz" target="_blank">CS3</a> & <a href="http://jquery.com/?ref=tylergoelz" target="_blank">jQuery</a>. It's stashed using <a href="https://devcenter.heroku.com/articles/git/?ref=tylergoelz" target="_blank">git</a> and hosted on <a href="https://www.heroku.com/?ref=tylergoelz" target="_blank">Heroku</a>.</p>
					<p>Thank you all for your community support and general badassness!</p>
					<small>&copy; 2013 The Face of Tyler Goelz, Inc.</small>
				</div>
			</div>
		</div>
	</footer>   
	<?php include_once($_SERVER["DOCUMENT_ROOT"] . '/includes/scripts.html'); ?>
	<script src="http://maps.googleapis.com/maps/api/js?sensor=false&extension=.js" type="text/javascript"></script>
	<script src="<?php $_SERVER["DOCUMENT_ROOT"] ?>/js/flat-map.js" type="text/javascript"></script>
</body>
</html>