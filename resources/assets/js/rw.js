/**
 * RippleWise Pay production javascript
 *
 */
$(document).ready(function() {
	
	
	var chart_dashboard; // global
	
	
	/* Main Navigation Settings Toggle */
	$("#settings-nav-trigger").on("click", function(event){
		$(".rw-navbar-static-left .nav-stacked > li").removeClass('active');
		$(this).tooltip('hide');
		$("#settings-nav-trigger").parent().slideUp(200);
		
		$(".rw-front").addClass('pt-page-flipOutRight');
		$(".rw-back").addClass('active pt-page-flipInLeft');
		
		// Open first list item
		$(".rw-navbar-static-left .nav-stacked.rw-back > li:first-child > a").click();
		
		setTimeout(function() {
			$(".rw-front").removeClass('active pt-page-flipOutRight');
			$(".rw-back").removeClass('pt-page-flipInLeft');
			
			$("#dashboard-nav-trigger").parent().slideDown(200);
		}, 1000);
		
	});
	$("#dashboard-nav-trigger").on("click", function(event){
		$(".rw-navbar-static-left .nav-stacked > li").removeClass('active');
		$(this).tooltip('hide');
		$("#dashboard-nav-trigger").parent().slideUp(200);
		
		$(".rw-back").addClass('pt-page-flipOutRight');
		$(".rw-front").addClass('active pt-page-flipInLeft');
		
		// Open first list item
		$(".rw-navbar-static-left .nav-stacked.rw-front > li:first-child > a").click();
		
		setTimeout(function() {
			$(".rw-back").removeClass('active pt-page-flipOutRight');
			$(".rw-front").removeClass('pt-page-flipInLeft');
			
			$("#settings-nav-trigger").parent().slideDown(200);
		}, 1000);
				
	});	
	/* end Main Navigation Settings Toggle */

	/* Main Navigation */
	
	// History handler
	History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate, more: https://github.com/browserstate/history.js
		
		var State = History.getState();
			
			if(State.data.state != 'no-ajax'){
		
			// Load AJAX Content
				$.ajax({
					url: location.pathname + location.search,
					cache: false,
					dataType : 'json',
					data: {ajax: "true"}
				})
				.done(function(data) {	
					//console.log(data)
					
					// Rename Title
					document.title = data.site_title;
					
					// Handle menu active class
					// Level 1
					$(".rw-navbar-static-left .nav-stacked > li").removeClass("active"); // Remove active from old
					$('.rw-navbar-static-left .nav-stacked > li[data-active="'+data.active+'"]').addClass('active'); // Add active class to new
					// Level 2
					// Level 1
					$(".rw-navbar-static-left .nav-stacked ul > li").removeClass("active"); // Remove active from old
					$('.rw-navbar-static-left .nav-stacked ul > li[data-activex="'+data.activex+'"]').addClass('active'); // Add active class to new
					
					// Collapse menu
					//$(".navbar-toggle").click();
							
					// Empty frame and prepend new data
					$("#frame").empty();
					//$("#frame").hide();
					$("#frame").html(data.html);
					$("html, body").animate({ scrollTop: 0 }, 100);
					//$("#frame").fadeIn();
					
					// Rename page header
					$("#title").html(data.title);
					
					// Re-enable tooltips
					$('header a.icon').tooltip({placement: 'bottom'});
					
					// Also don't forget Google Analytics: https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
					//ga('send', 'pageview');
				});
			
			} else {
				return false	
			}
			
	});
	
	// Level 1 and 2
	$(".rw-navbar-static-left .nav-stacked li a").on("click", function(event){
		
		// Check class .no-ajax in case of sign out link
		if(!$(this).hasClass('no-ajax')){
			
			event.preventDefault();
			var href = $(this).attr("href");
			History.pushState(null, null, href);
			
		}
		
	});
	/* end Main Navigation */
	
	/* Tooltips - repeat in ajax calls*/
	$('.rw-footer-navigation li a').tooltip();
	$('header a.icon').tooltip({placement: 'bottom'});
	$('#signout-navbar').tooltip({placement: 'left'});
	/* end Tooltips */
	
	// Ajax Links
	$("body").on("click", "a.ajax", function(event){
		
		event.preventDefault();
		var href = $(this).attr("href");
		History.pushState(null, null, href);
		
	});
	// end Ajax Links
	
	
	/* Support Message Toggle */
	$("body").on("click", ".new-support-form-trigger", function(event){
	
		$(".new-support-form").slideToggle(200);
		$(this).tooltip('destroy')
	
	});
	/* end Support Message Toggle */
	
	/* Inline Support Message Toggle - IMPORTANT: target by specific ID in production*/
	$("body").on("click", ".inline-support-form-trigger", function(event){
		$(".inline-support-form").slideToggle(200);
	});
	/* end Inline Support Message Toggle */
	
	/* Message Handler */
	$("body").on("click", ".messages.default .rw-messages li a", function(event){
		
		$(this).parent('li').toggleClass('active');
		
		// Only change url if active class is added
		if ($(this).parent('li').hasClass('active')) {
			event.preventDefault();
			var href = $(this).attr("href");
			History.pushState({state:'no-ajax'}, $(document).find("title").text(), href); // Trick: in order not to trigger history statechange we pass 'no-ajax'
		} else {
			return false
		}
		
	});
	
	$("body").on("click", "a.message-close-trigger", function(event){
		
		// Hide focused message container
		$(".message-remove").slideToggle()
		
		event.preventDefault();
		var href = $(this).attr("href");
		History.pushState({state:'no-ajax'}, $(document).find("title").text(), href); // Trick: in order not to trigger history statechange we pass 'no-ajax'
		
	});
	/* end Message Handler */
	
	/* Loading Animation */
	var rotation = function (){
	   $("#icon-loading").rotate({
		  angle:0, 
		  animateTo:360, 
		  callback: rotation,
		  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
			  return c*(t/d)+b;
		  }
	   });
	}
	rotation(); // Trigger this manually when loading new items
	/* Loading Animation */
		
});



// Global AJAX events

/* Ajax Loading Bar */
$(document).ajaxSend(function(e, jqXHR){
	if ($("#loadingbar").length === 0) {
		$("body").append("<div id='loadingbar'>")
		$("#loadingbar").addClass("waiting").append($("<dt/><dd/>"));
		$("#loadingbar").width((50 + Math.random() * 30) + "%");
	}
});
$(document).ajaxComplete(function(e, jqXHR){
	$("#loadingbar").width("101%").delay(200).fadeOut(400, function() {
		$(this).remove();
	});
});
/* end Ajax Loading Bar */





