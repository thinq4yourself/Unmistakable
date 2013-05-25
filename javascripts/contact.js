$(document).ready(function(){
    //if submit button is clicked
    $('#saveForm').click(function (event) {    	
    	var form_fields = {},
	    	isValidForm = true,
    		isSliding = false;
    		
    	form_fields.firstName = $('input[name=Field17]');
    	form_fields.lastName = $('input[name=Field18]');
    	form_fields.email = $('input[name=Field4]');
    	form_fields.companyDetails = $('textarea[name=Field11]'),
    	form_fields.budget = $('select[name=Field12]'),
    	form_fields.timeframe = $('select[name=Field13]');

    	// Validate First Name, Last Name & Email
    	if (form_fields.firstName.val() !== '') {
	    	form_fields.firstName.removeClass('highlight');
    	} else {
    	    isValidForm = false;
	    	form_fields.firstName.addClass('highlight');
	    	isSliding = true;
    	    scrollToElement(event, form_fields.firstName);
    	}
    	
    	if (form_fields.lastName.val() !== '') {
    		form_fields.lastName.removeClass('highlight');
    	} else {
	    	isValidForm = false;
	    	form_fields.lastName.addClass('highlight');
	    	if (!isSliding) {
		    	isSliding = true;
		    	scrollToElement(event, form_fields.lastName);	
	    	}
    	}
    	
    	if (form_fields.email.val() !== '') {
	    	form_fields.email.removeClass('highlight');
    	} else {
	    	isValidForm = false;
	    	form_fields.email.addClass('highlight');
	    	if (!isSliding) {
		    	isSliding = true;
		    	scrollToElement(event, form_fields.email);	
	    	}
    	}
    	
    	if (form_fields.companyDetails.val() !== '') {
    		form_fields.companyDetails.removeClass('highlight');
    	} else {
	    	isValidForm = false;
	    	form_fields.companyDetails.addClass('highlight');
	    	if (!isSliding) {
		    	isSliding = true;
		    	scrollToElement(event, form_fields.companyDetails);	
	    	}
    	}
    	
    	if (form_fields.budget.val() !== '') {
    		form_fields.budget.removeClass('highlight');
    	} else {
	    	isValidForm = false;
	    	form_fields.budget.addClass('highlight');
	    	if (!isSliding) {
		    	isSliding = true;
		    	scrollToElement(event, form_fields.budget);	
	    	}
    	}
    	
    	if (form_fields.timeframe.val() !== '') {
    		form_fields.timeframe.removeClass('highlight');
    	} else {
	    	isValidForm = false;
	    	form_fields.timeframe.addClass('highlight');
	    	if (!isSliding) {
		    	isSliding = true;
		    	scrollToElement(event, form_fields.timeframe);	
	    	}
    	}
    	
    	if (isValidForm) {
	    	$('#contact-form-section').fadeOut('fast', function () {
		    	var $success_panel = $('#contact-success');
		    	$success_panel.fadeIn('fast', function () {

					$('html, body').stop().animate({
						scrollTop: $success_panel.offset().top
					}, 1000,'easeInOutQuart');
									
					event.preventDefault();
				});
	    	})
    	} else {
	    	return false;
    	}
    });	
})

function scrollToElement(event, $element) {
	var $anchor = $($element);
			
	$('html, body').stop().animate({
		scrollTop: $($anchor).offset().top - 120
	}, 1000,'easeInOutQuart', function () {
		$element.focus();
	});
	
	event.preventDefault();
}