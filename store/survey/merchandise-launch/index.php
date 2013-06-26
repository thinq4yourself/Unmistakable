<!DOCTYPE html>
<html lang="en">
<head>
    <!-- if page is content page -->
    <meta property="og:url" content="http://www.tylergoelz.com/store/survey/merchandise-launch">
    <meta property="og:title" content="Tyler Goelz - Merchandise Launch Survey">
    <meta property="og:description" content="Take this survey and give your feedback on your favorite pieces of #TFoTG clothing.">
	<meta property="og:type" content="website">
	<meta property="og:image" content="http://www.tylergoelz.com/images/logo_social.png">

    <!-- if page is others -->
    
    <!-- twitter cards -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@tylergoelz">
	<meta name="twitter:title" content="Tyler Goelz - Merchandise Launch Survey">
	<meta name="twitter:description" content="Take this survey and give your feedback on your favorite pieces of #TFoTG clothing.">
	<meta name="twitter:creator" content="@tylergoelz">
	<meta name="twitter:image:src" content="http://www.tylergoelz.com/images/logo_social.png">
	<meta name="twitter:domain" content="http://www.tylergoelz.com/store/survey/merchandise-launch">

	<meta name="description" content="Take this survey and give your feedback on your favorite pieces of #TFoTG clothing."/>
	<link rel="canonical" href="http://www.tylergoelz.com/store/survey/merchandise-launch" />

	<title>Tyler Goelz - Merchandise Launch Survey</title>

	<?php include_once('../../../includes/head.html'); ?>
</head>	
<body id="merchandise-launch" class="merchandise-launch">
	<article>
		<section id="headline" class="headline">
			<div class="info">
				<small id="step-count">Step: 1 of 2</small>
		    	<h2 id="step-question">Choose Your Gender</h2>
			    <small id="step-desc">This way I know which shirts to show you</small>
				<button id="female" type="button" class="btn btn-large btn-primary gender">Female</button>
			    <button id="male" type="button" class="btn btn-large btn-primary gender">Male</button>
		    </div>
		</section>
	</article>

<?php include_once('../../../includes/scripts.html'); ?>

<script type="text/javascript">
	$(document).ready(function () {
		$('.gender').on('click', function () {
			loadNextStep(this.id);
		});
	});
	
	function loadNextStep(selectedId) {
		updateHeader();
		lazyLoadMerchandiseSection(selectedId)
	}
	
	function updateHeader() {
		var $headlineInfo = $('#headline').find('div.info'),
			$stepCount = $('#step-count'),
			$stepQuestion = $('#step-question'),
			$stepDesc = $('#step-desc'),
			$genderButtons = $('.gender');
		
		$headlineInfo.addClass('less-padding');

		$stepCount.fadeOut('slow', function () {
			$stepCount.html('Step: 2 of 2').fadeIn();
		});

		$stepQuestion.fadeOut('slow', function () {
			$stepQuestion.html('Choose Your Favorite Shirt').fadeIn();
		});

		$genderButtons.addClass('hidden').remove();
		$stepDesc.addClass('hidden').remove();
	}
	
	function lazyLoadMerchandiseSection(pageId) {
		$.get(pageId + ".php", function(data){
    		$('#merchandise-launch').children().append(data);
		});
	}

</script>

</body>
</html>
