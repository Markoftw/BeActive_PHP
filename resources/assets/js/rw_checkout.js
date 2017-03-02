/**
 * RippleWise Checkout production javascript
 *
 */
var timer;
var timerFinish;
var timerSeconds;
var seconds;
var cancelProtocolActive = false;
var completeProtocolActive = false;

function drawTimer(percent){
	$('div.timer').html('<div class="percent"></div><div id="slice"'+(percent > 50?' class="gt50"':'')+'><div class="pie"></div>'+(percent > 50?'<div class="pie fill"></div>':'')+'</div>');
	var deg = 360/100*percent;
	$('#slice .pie').css({
		'-moz-transform':'rotate('+deg+'deg)',
		'-webkit-transform':'rotate('+deg+'deg)',
		'-o-transform':'rotate('+deg+'deg)',
		'transform':'rotate('+deg+'deg)'
	});
	//$('.percent').html(Math.round(percent));
}
function stopWatch(){
	var seconds = (timerFinish-(new Date().getTime()))/1000;
	
	if(seconds <= 0){
		
		clearInterval(timer);
		
		$('.percent').empty();
		$('#valid-timer').html('Processing...');
		$('#slice').fadeOut(500);
		
		if(cancelProtocolActive != true && completeProtocolActive != true){
			cancelProtocol();
		}
		
	} else {
		var percent = 100-((seconds/timerSeconds)*100);
		drawTimer(percent);
		
		// $('.percent').html(Math.round(seconds));
		
		if(seconds >= 60){
			if(seconds < 120){
				$('#valid-timer').html(Math.floor(seconds/60)+' minute '+Math.floor(seconds % 60)+' seconds');
				$('.percent').html(Math.round(seconds));
				$('.percent').html(Math.floor(seconds/60)+':'+Math.floor(seconds % 60));
			}
			else {
				$('#valid-timer').html(Math.floor(seconds/60)+' minutes '+Math.floor(seconds % 60)+' seconds');
				$('.percent').html(Math.floor(seconds/60)+':'+Math.floor(seconds % 60));
			}
		}
		else{
			$('#valid-timer').html(Math.round(seconds) +' seconds');
			$('.percent').html(Math.round(seconds));
		}
		
	}
}
function setTimer(newseconds){
	
	clearInterval(timer);
	var seconds = newseconds;
	timerFinish = new Date().getTime()+(seconds*1000);
	
	timer = setInterval('stopWatch()', 100);
	
	var percent = 100-((seconds/timerSeconds)*100);
	drawTimer(percent);
	
};
function completeProtocol(){
	
	completeProtocolActive = true;
			
	$('.qr').fadeOut(500);
	$('.button').fadeOut(500);
	$('.icon-requote').fadeOut(500);
	$('.alpha-received-amount').html('100.01533783 BTC');
	$('.alpha-status').html('Processing...');
	
	setTimer(0);
	
	setTimeout(function() {
		$('.circle-data').html('<span>Processing...</span>');
		$('.circle-data').removeClass('hide');
		$('.circle-data').fadeIn();
		
		setTimeout(function() {
			$('.circle-data span').fadeOut(500);
			
			setTimeout(function() {
				$('.circle-data').html('<span>Completed</span>');
				$('.alpha-status').html('Completed');
				
				$('.circle-data span').fadeIn(500);
				
				// Show save button
				$('.icon-save').fadeIn(500);
				
				$('.percent')
					.addClass('completed')
					
				$('.payment-list')
					.append($('<li>')
						.html('From Ripple Address')
						.append($('<span>')
							.addClass('address')
							.addClass('colorize')
							.append($('<a>')
								.attr('href', "https://ripple.com/graph/#rGsDSy4BvRCUfP6fbaurQcEYJrqh1hpQjL")
								.attr('target', "_blank")
								.html('rGsDSy4BvRCUfP6fbaurQcEYJrqh1hpQjL')
							)
						)
					)
					.append($('<li>')
						.html('Transaction ID')
						.append($('<span>')
							.addClass('address')
							.addClass('colorize')
							.append($('<a>')
								.attr('href', "https://ripple.com/graph/#21D8D772B53122A1006099EBEEABD76F6EF5C5BACC3B612BE5C74DCBB379D446")
								.attr('target', "_blank")
								.attr('title', "#21D8D772B53122A1006099EBEEABD76F6EF5C5BACC3B612BE5C74DCBB379D446") <!-- Full TX ID in title -->
								.html('#21D8D772B53122A1006099EB...')<!-- Display only as much characters as in address and then three dots -->
							)
						)
					)
				
				$('.status-list').empty();
				$('.status-list')
					.append($('<li>')
						.html('Status')
						.append($('<span>')
							.html('Completed')
						)
					)
					.append($('<li>')
						.html('Issue Date')
						.append($('<span>')
							.html('25.3.2030 at 21:02:20')
						)
					)
					.append($('<li>')
						.html('Completed Date')
						.append($('<span>')
							.html('25.3.2030 at 21:05:20')
						)
					)
				
			}, 1000);
			
		}, 5000);

	}, 1000);
	
};
function cancelProtocol(){
	
	cancelProtocolActive = true;
	
	setTimer(0);
	
	$('.percent').empty();
	$('#slice').fadeOut(500);
	
	$('.qr').fadeOut(500);
	$('.button').fadeOut(500);
	$('.icon-requote').fadeOut(500);
	$('.alpha-status').html('Processing...');
	
	setTimeout(function() {
		$('.circle-data').html('<span>Processing...</span>');
		$('.circle-data').removeClass('hide');
		$('.circle-data').fadeIn();
		
		setTimeout(function() {
			$('.circle-data span').fadeOut(500);
			
			setTimeout(function() {
				$('.circle-data').html('<span>Canceled</span>');
				$('.alpha-status').html('Processing...');
				
				$('.circle-data span').fadeIn(500);
				
				// Show save button
				$('.icon-save').fadeIn(500);
				
				$('.percent')
					.addClass('canceled')
				
				$('.status-list').empty();
				$('.status-list')
					.append($('<li>')
						.html('Status')
						.append($('<span>')
							.html('Canceled - No Deposit')
						)
					)
					.append($('<li>')
						.html('Issue Date')
						.append($('<span>')
							.html('25.3.2030 at 21:02:20')
						)
					)
					.append($('<li>')
						.html('Canceled Date')
						.append($('<span>')
							.html('25.3.2030 at 21:05:20')
						)
					)
				
			}, 1000);
			
		}, 5000);

	}, 1000);
		
};

$(document).ready(function() {
	
	timerSeconds = 300; // Timeout in seconds
	timerFinish = new Date().getTime()+(timerSeconds*1000);
	timer = setInterval('stopWatch()', 100);

	//setTimer(30); // Enter seconds until end of time
	
});