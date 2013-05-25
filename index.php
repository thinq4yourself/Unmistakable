<!DOCTYPE html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]>
<!--><html class="no-js" lang="en"><!--<![endif]-->
<head>
	
	<title>Redwood Agile - We Build Ideas</title>
	
	<?php include_once 'includes/head.html'; ?>
	
</head>
<body id="homepage">
	
	<?php include_once 'includes/header.html'; ?>

	<div id="banner" class="homepage">
			<div class="slideshow-pattern"></div>
			<div class="slideshow-overlay"></div>
	
		<div class="homepage-text">
		
		    <div class="top-icon hide-for-small">
		    	<img src="images/homepage-text-top-icon.png" alt="Homepage Top Icon">
		    </div>	

		    <div class="top-divider"></div>			
		    <h1>We Build Ideas</h1>			
		    <div class="bottom-divider"></div>			
		    <h2>We help small businesses & their entrepreneurs turn ideas into successful products</h2>
		    <h3>Want to know who we are and how we do it?</h3>
		
		    <a class="homepage-bottom" href="#services-section">
		    <div class="bottom-icon">
		    	<img src="images/homepage-text-bottom-icon.png" alt="Homepage Bottom Icon">
		    </div>
		    </a>
		    
		</div>
	</div>

	<!-- Main Content Starts HERE -->
	<div class="content-container">
		<!-- Our Process Page -->
		<div class="page-container" id="services-section">
			<div class="row">
				<div class="twelve columns page-content">
					<h1 class="page-title">Who we are</h1>
					<h2 class="page-subtitle">We are a <span>design</span> studio & <span>venture</span> firm filled with entrepreneurs,<br class="hide-for-small"/> <span>creatives</span> &  designers. We <span>love people</span> and their <span>ideas</span>.</h2>
				</div>
				
				<div class="twelve columns">
					<div class="section-divider">
						<img src="images/about_group.png" alt="Who We Are">
					</div>
				</div>
				
				<div class="twelve columns services-top">
				    <h1 class="page-title">Our Strategy</h1>
				    <h2 class="page-subtitle">Over the years, we've formulated an awesome, <span>proven</span> <a href="services">process</a> to help you <br class="hide-for-small"> <span>grow</span> your idea into  the great <span>product</span> it was envisioned to be.</h2>
				</div>
				
				<div class="twelve columns services-top">
				    <a class="four columns services mobile-three-one" href="store">
				    	<img src="images/about-us/1.png" alt="About US">
				    	<h3 class="services-title">Our Mission</h3>
				    	<p class="services-text">It's quite simple actually, we want to help you design and build your products into scalable business models.</p>
				    </a>
				
				    <a class="four columns services mobile-three-one" href="services">
				    	<img src="images/about-us/2.png" alt="About US">
				    	<h3 class="services-title">Our Services</h3>
				    	<p class="services-text">We provide many ways to help you succeed including Venture Incubation, Startup Mentoring, and Lean UX</p>
				    </a>
				
				    <a class="four columns services mobile-three-one" href="services">
				    	<img src="images/about-us/3.png" alt="About US">
				    	<h3 class="services-title">Our Clients</h3>
				    	<p class="services-text">We work with startups, entrepreneurs, creatives, and idea havers. Anyone who wants to make their ideas a reality.</p>
				    </a>         
				</div>
			</div>
		</div>
		
		<section class="parallax-cta">
			<?php include_once 'includes/newsletter.html';?>		
		</section>
	
	</div>
	
	<?php include_once 'includes/footer.html';?>
	<?php include_once 'includes/scripts.html';?>
	
	<script src="javascripts/jquery.validate.js"></script>
	
	<script type="text/javascript">
		$(document).ready(function() {
			if ($(window).width() > 1024) {
				//if the window is greater than 1024px wide then load one orbit settings
				//.parallax(xPosition, speedFactor, outerHeight) options:
				//xPosition - Horizontal position of the element
				//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
				//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
				$('.parallax-cta').parallax("50%", 0.5);
			}

		})
		
		$.validator.setDefaults({
			submitHandler: function() {	
				event.preventDefault();
				
				$('#cta-error').stop().fadeOut();	    
				
				var jqxhr = $.post("/app/api/mailchimp/mcapi_listSubscribe.php", $('#newsletterAwesomeSauce').serialize());
	  		
				jqxhr.done(function(data) {
					if (data[0] !== '0') {
						$('#cta-section').fadeOut('fast', function () {
							$('#cta-confirmation').fadeIn();
						})
					} else {
						$('#cta-error').fadeIn();
					}
				})
	    
				jqxhr.fail(function(data) { 
					$('#cta-error').fadeIn();				
				})
			}
		});

		$().ready(function() {
			$('#newsletterAwesomeSauce').validate();
		});
	</script>
	
		  
</body>
</html>
