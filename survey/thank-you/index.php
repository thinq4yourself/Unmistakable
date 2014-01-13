<!DOCTYPE html>
<html lang="en">
<head>
	<!-- if page is content page -->
	<meta property="og:url" content="http://www.tylergoelz.com/survey">
	<meta property="og:title" content="A Beard Across America - A Quick Survey To Help Me Better Understand Potential Followers">
	<meta property="og:description" content="Hi, I'm Tyler and I'm an entrepreneur and traveler. I'm trying to understand potential followers better. Would you be willing to spend about five minutes to help me get to know you?">
	<meta property="og:type" content="website">
	<meta property="og:image" content="http://www.tylergoelz.com/images/logo_social.png">

	<!-- twitter cards -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@tylergoelz">
	<meta name="twitter:title" content="A Beard Across America - A Quick Survey To Help Me Better Understand Potential Followers">
	<meta name="twitter:description" content="Hi, I'm Tyler and I'm an entrepreneur and traveler. I'm trying to understand potential followers better. Would you be willing to spend about five minutes to help me get to know you?">
	<meta name="twitter:creator" content="@tylergoelz">
	<meta name="twitter:image:src" content="http://www.tylergoelz.com/images/logo_social.png">
	<meta name="twitter:domain" content="http://www.tylergoelz.com/survey">
	<meta property="twitter:account_id" content="15271634" />

	<meta name="description" content="Hi, I'm Tyler and I'm an entrepreneur and traveler. I'm trying to understand potential followers better. Would you be willing to spend about five minutes to help me get to know you?"/>
	<link rel="canonical" href="http://www.tylergoelz.com/survey" />

	<title>A Beard Across America - A Quick Survey To Help Me Better Understand Potential Followers</title>

	<?php include_once($_SERVER["DOCUMENT_ROOT"] . '/includes/head.html'); ?>
	<link href="/css/survey.css" rel="stylesheet">
	<link href="/css/animate.css" rel="stylesheet">
</head>

<body>
	<article class="survey">
		<?php include_once($_SERVER["DOCUMENT_ROOT"] . '/includes/follow-me-widget.html'); ?>
		<section id="headline" class="headline">
			<div class="info container">
				<div class="row">
					<div class="span12">
						<h1>Thank You!</h1>
						<h3>Your stories and experiences are very important to me and helps me to better understand you as a follower. </h3>
					</div>
				</div>
			</div>
		</section>
		<section class="transition">
			<div class="container">
				<div class="row">
					<div class="span6 offset3">
						<div class="tab">
							<h2>Stay Up To Date</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="questions" class="questions">
			<div class="container">
				<div class="row-fluid">
					<div class="questions-icon span4 visible-desktop">
						<img src="/images/survey/love.png" alt="Welcome to Mail App">
						<h2><strong>Get Your Copy Of</strong></h2>
						<h2>A Beard Across America</h2>
					</div>
					<div class="login-form span8">
						<div id="abaa-cta" class="abaa-cta clearfix">	
							<div class="content">
								<img src="/images/survey/ebook.png" alt="A Beard Across America">
								<div class="whats-inside">
									<h3>What's Inside:</h3>
									<p>I share with you how I was able to travel <strong>4900 miles over a 4 week span and visit 18 cities</strong> in 10 different states.</p>
								</div>
								<div class="sign-up">
									<h3>Get your FREE copy</h3>
									<form action="" method="post">
										<div class="input-append">
											<input type="email" class="span8" name="email_to_add" required placeholder="Enter Your Email">
											<input class="btn btn-primary" type="submit">Submit</button>
										</div>
									</form>
									<p class="muted"><small>This eBook isn't complete yet, but have no fear, sign-up for my mailing list now to be emailed a FREE copy when it's ready.</small></p>
								</div>
							</div>
						</div>
						<div class="divider"></div>
						<div class="pop-blog">
							<h4>Popular Blog Posts:</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	</article>
	<footer>
		<div class="container">
			<div class="row">
				<div class="references">
					<p>Powered by <a href="http://www.google.com/google-d-s/createforms.html" title="Want to collect information quickly from your friends, customers, or colleagues?" target="_blank>"><span>Google Forms</span></a> & <a href="http://www.google.com/drive/apps.html" target="_blank" title="Google Drive - Tools to help you get stuff done">Google Drive</div></p>
				</div>
			</div>
		</div>
	</footer>
	<?php include_once($_SERVER["DOCUMENT_ROOT"] . '/includes/scripts.html'); ?>
	<script type="text/javascript">

	$('form').on("submit", (function(event) {
		event.preventDefault();
		
		var post_URL = "/app/zapier/ebookemailsubmit.php";

		$.ajax({
			type : "post",
			url : post_URL,
			data : $(this).serialize(),
			success : function(msg) {
				
			},
			error : function(msg) {
				var $email_alert = $('#add_email_alert');
				if ($email_alert.length > 0) {
					var animation = 'bounce animated';
					$email_alert.removeClass(animation).addClass(animation).one('webkitAnimationEnd oAnimationEnd', function(){
						$(this).removeClass(animation);
					});
				} else {
					console.log('does not exists')
					var new_alert = '<div id="add_email_alert" class="alert alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button><small>Uh-oh! An error occured while trying to submit your email. Please try again.</small></div>';
					$('#abaa-cta').append(new_alert);
				}
			}
		});
	}));
	</script>
</body>
</html>