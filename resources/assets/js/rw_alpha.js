/**
 * RippleWise Pay dev javascript
 *
 * NOT TO BE USED IN PRODUCTION!
 *
 */

$(document).ready(function() {

	/* Convert UNIX time to human time */
	function getTimeFormat() {
		// Create a date object with the current time
		var now = new Date();
		 
		// Create an array with the current month, day and time
		var date = [ now.getDate(), now.getMonth() + 1, now.getFullYear() ];
		 
		// Create an array with the current hour, minute and second
		var time = [ now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds() ];

		 
		// If seconds and minutes are less than 10, add a zero
		for ( var i = 1; i < 3; i++ ) {
			if ( time[i] < 10 ) {
				time[i] = "0" + time[i];
			}
		}
		 
		// Return the formatted string
		return time.join(":"); //date.join(".") + " " + 
	}
	/* end Convert UNIX time to human time */
	
	/* Update Times */
	function update_times(){
		$('.ago').each(function(){
			seconds = parseInt($(this).attr('data-timer')) + 1;
			
			if(!isNaN(seconds)){
				$(this).attr('data-timer',seconds);
				if(seconds >= 86400){
					if(seconds < 172800){
						$(this).html(Math.floor(seconds/86400)+' day');
					}
					else {
						$(this).html(Math.floor(seconds/86400)+' days');
					}
				}
				else if(seconds >= 3600){
					if(seconds < 7200){
						$(this).html(Math.floor(seconds/3600)+' hour');
					}
					else {
						$(this).html(Math.floor(seconds/3600)+' hours');
					}
				}
				else if(seconds >= 60){
					if(seconds < 120){
						$(this).html(Math.floor(seconds/60)+' minute');
					}
					else {
						$(this).html(Math.floor(seconds/60)+' minutes');
					}
				}
				else{$(this).html(seconds +' seconds');}
			}
			else {
				$(this).attr('data-timer',null);
				$(this).html('?');
			}
			
		});
	}
	setInterval(update_times, 1000);
	/* end Update Times */
	
	/* Keyboard Shortcuts */
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('#log').hide();
			return false;
		}  // esc
		
		else if (String.fromCharCode(e.charCode||e.keyCode)=="L"){
			$('.settings_widget').hide();
			$('#log').toggle();
			return false;
		} // letter d
		
	});
	/* end Keyboard Shortcuts */

	/* Test Message */
	$("#toggle-alerts").on("click", function(event){
		$(".rw-alerts").css('visibility','visible').hide().fadeIn().removeClass('hidden');
	});	
	/* end Test Message */
	
	/* Test Socket */
	/*var socket = io.connect("212.235.179.27:1337");
	
	socket.on("connect", function(){
		$('#alpha_data').prepend('<p><span class="blue">'+getTimeFormat()+' ></span> Live feed active</p>');
		$("#socket-status").html("<span></span>Live feed active");
		$("#socket-status").removeClass('off');
		
		socket.emit("join", "rw-client-webapp");
	});
	socket.on("connecting", function(){
		$('#alpha_data').prepend('<p><span class="blue">'+getTimeFormat()+' ></span> Connecting</p>');
		$("#socket-status").html("<span></span>Connecting...");
		$("#socket-status").addClass('off');
	});
	socket.on("disconnect", function(){
		$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Server offline</p>');
		$("#socket-status").html("<span></span>Server offline");
		$("#socket-status").addClass('off');
	});
	socket.on("connect_failed", function(){
		$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Connection failed</p>');
		$("#socket-status").html("<span></span>Conn. failed");
		$("#socket-status").addClass('off');
	});
	socket.on("error", function(){
		$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Connection error</p>');
		$("#socket-status").html("<span></span>Error");
		$("#socket-status").addClass('off');
	});
	socket.on("reconnecting", function(){
		$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Reconnecting</p>');
		$("#socket-status").html("<span></span>Reconnecting");
		$("#socket-status").addClass('off');
	});
	socket.on("reconnect", function(){
		$('#alpha_data').prepend('<p><span class="red">'+getTimeFormat()+' ></span> Reconnect successful</p>');
		$("#socket-status").html("<span></span>Live feed active");
		$("#socket-status").removeClass('off');
	});*/

	/* Receive Commands */
	/*socket.on("update", function(msg) {
		$('#alpha_data').prepend('<p><span class="blue">'+getTimeFormat()+' ></span> ' + msg + "</p>");
	})
	socket.on("update-clients", function(data){
		$('#alpha_clients').empty();
		$.each(data, function(clientid, name) {
			$('#alpha_clients').prepend("<p>" + clientid + ":" + name + "</p>");
		});
	});
	socket.on("command", function(clientid, msg){
		var timestamp = (new Date).getTime();
		
		$('#alpha_data').prepend('<p data-nonce="'+timestamp+'" style="display: none"><span class="blue">'+getTimeFormat()+' ></span> ' + clientid + ":" + msg + "</p>");
		$('p[data-nonce='+timestamp+']').slideDown("fast");
		$('p[data-nonce='+timestamp+']').removeClass('glow');
		$('p[data-nonce='+timestamp+']').addClass('glow');
		
		if(msg == "socket-add-payment"){
			
			// Menu Notification
			current_number = parseInt($('.payments-badge-primary').attr('data-value'))
			current_number++

			$('.payments-badge-primary')
				.attr('data-value', current_number)
				.removeClass('hide')
				.show()
				.html(current_number)
			$('.payments-badge-secondary')
				.attr('data-value', current_number)
				.removeClass('hide')
				.show()
				.html(current_number)

			// Chart update Number
			number = parseInt(chart_dashboard.series[2].data[6].y) + 1;
			chart_dashboard.series[2].data[6].update(number);
			
			$('.rw-messages')
				.prepend($('<li>')
					.hide()
					.attr('data-nonce', timestamp)
					.addClass('green')
					.append($('<a>')
						.attr('href', "#")
						.append($('<span>')
							.addClass('dot')
							.append($('<span>')
							)
						)
						.append($('<span>')
							.append($('<div>')
								.addClass('body')
								.append($('<span>')
									.text('Payment active')
									.addClass('title')
								)
								.append($('<span>')
									.text(Math.floor((Math.random()*200)+1).toFixed(2) + ' USD')
									.addClass('value')
								)
							)
						)
						.append($('<span>')
							.addClass('time')
							.addClass('ago')
							.attr('data-timer', 0)
						)
					)
			)
		}
		else if(msg == "socket-add-completed-payment") {

			// Chart update Amount
			amount = parseInt(chart_dashboard.series[3].data[6].y) + 5000;
			chart_dashboard.series[3].data[6].update(amount);

			// Chart update Number
			number = parseInt(chart_dashboard.series[0].data[6].y) + 1;
			chart_dashboard.series[0].data[6].update(number);

			$('.rw-messages')
				.prepend($('<li>')
					.hide()
					.attr('data-nonce', timestamp)
					.addClass('blue')
					.append($('<a>')
						.attr('href', "#")
						.append($('<span>')
							.addClass('dot')
							.append($('<span>')
							)
						)
						.append($('<span>')
							.append($('<div>')
								.addClass('body')
								.append($('<span>')
									.text('Payment completed')
									.addClass('title')
								)
								.append($('<span>')
									.text(Math.floor((Math.random()*200)+1).toFixed(2) + ' USD')
									.addClass('value')
								)
							)
						)
						.append($('<span>')
							.addClass('time')
							.addClass('ago')
							.attr('data-timer', 0)
						)
					)
			)
		}
		else if(msg == "socket-add-canceled-payment") {

			// Chart update Number
			number = parseInt(chart_dashboard.series[1].data[6].y) + 1;
			chart_dashboard.series[1].data[6].update(number);


			$('.rw-messages')
				.prepend($('<li>')
					.hide()
					.attr('data-nonce', timestamp)
					.addClass('magenta')
					.append($('<a>')
						.attr('href', "#")
						.append($('<span>')
							.addClass('dot')
							.append($('<span>')
							)
						)
						.append($('<span>')
							.append($('<div>')
								.addClass('body')
								.append($('<span>')
									.text('Payment canceled')
									.addClass('title')
								)
								.append($('<span>')
									.text(Math.floor((Math.random()*100)+1).toFixed(2) + ' USD')
									.addClass('value')
								)
							)
						)
						.append($('<span>')
							.addClass('time')
							.addClass('ago')
							.attr('data-timer', 0)
						)
					)
			)
		}
		else if(msg == "socket-add-support") {

			// Menu Notification
			current_number = parseInt($('.messages-badge-primary').attr('data-value'))
			current_number++

			$('.messages-badge-primary')
				.attr('data-value', current_number)
				.removeClass('hide')
				.show()
				.html(current_number)
			$('.messages-badge-secondary')
				.attr('data-value', current_number)
				.removeClass('hide')
				.show()
				.html(current_number)

			$('.rw-messages')
				.prepend($('<li>')
					.hide()
					.attr('data-nonce', timestamp)
					.addClass('orange')
					.append($('<a>')
						.attr('href', "#")
						.append($('<span>')
							.addClass('dot')
							.append($('<span>')
							)
						)
						.append($('<span>')
							.append($('<div>')
								.addClass('body')
								.append($('<span>')
									.text('Support')
									.addClass('title')
								)
								.append($('<span>')
									.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra non arcu et pellentesque...')
									.addClass('value')
								)
							)
						)
						.append($('<span>')
							.addClass('time')
							.addClass('ago')
							.attr('data-timer', 0)
						)
					)
			)
		}
		else if(msg == "socket-send-payment") {
			
			completeProtocol();
			
		}
		else if(msg == "socket-send-no-payment") {

			cancelProtocol();
			
		}
		else if(msg == "socket-send-partial-payment") {
			
			$('.alpha-received-amount').html('10.00000000 BTC');
			$('.alpha-status').html('Awaiting FULL deposit');
			
		}
		else if(msg == "socket-set-timer") {
			
			setTimer(5); // Enter seconds until end of time
			
		}
		else if(msg == "socket-set-theme-default") {
			
			$('.invoice-title').html('RippleWise');
			$('span.logo').addClass('image');
			$('span.logo').html('R');
			$('<link rel="stylesheet" type="text/css" href="resources/css/rw-checkout-theme.css">').appendTo("head");
				
		}
		else if(msg == "socket-set-theme-tesla") {
			
			$('.invoice-title').html('Tesla Motors');
			$('span.logo').addClass('image');
			$('span.logo').html('T');
			$('<link rel="stylesheet" type="text/css" href="resources/css/rw-checkout-theme-tesla.css">').appendTo("head");
				
		}
		else if(msg == "socket-set-theme-bitstamp") {
			
			$('.invoice-title').html('BitStamp');
			$('span.logo').removeClass('image'); 
			$('span.logo').html('B');
			$('<link rel="stylesheet" type="text/css" href="resources/css/rw-checkout-theme-bitstamp.css">').appendTo("head");
				
		}
		else if(msg == "socket-reload") {
			
			// Everything but socket page
			if(window.location.pathname != '/ripplewise_pay/test-socket.php'){
				window.location.reload(true);
			}
		
		}
		
		// Show message
		$('li[data-nonce='+timestamp+']').show();
		$('li[data-nonce='+timestamp+']').removeClass('glow');
		$('li[data-nonce='+timestamp+']').addClass('glow');
		
		// Update Times
		update_times();
		
		// Remove old log
		var num = $('.rw-messages li').length;
		if(num > 20){
			$(".rw-messages li").filter(":last").remove();
		}
	});*/

	/* Send Commands */
	$("body").on("click", ".socket-command-trigger", function(event){
		socket.emit("send", $(this).data('command'));
	});
	/* end Test Socket */
		
});