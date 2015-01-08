$(function() {


	$('#unit').keyup(function(e) {
		var string = $(this).val();
		$('#stockSpan').html(string + ' / mL');
	});




	$('#numPoints').focusout(function() {

		var thisIncrement = ($('#topLimit').val() - $('#botLimit').val())/($(this).val() - 1);
		if (thisIncrement%0.5 == 0 || thisIncrement%1 == 0) {
			$('#suggestion').text('Looks good!')
			$('#suggestion').css('color','green');
		}
		else {
			var value = parseInt($(this).val());
			var counter = 1;

			while (counter <= 10) {
				var test1 = ($('#topLimit').val() - $('#botLimit').val())/(value - 1 + counter);
				var test2 = ($('#topLimit').val() - $('#botLimit').val())/(value - 1 - counter);
				if (test1%1 == 0) {
					$('#suggestion').text('That\'s going to be messy. Try ' + (value + counter));
					$('#suggestion').css('color','red');
					$('#suggestion').show();
					break;
				}
				else if (test2%1 == 0) {
					$('#suggestion').text('That\'s going to be messy. Try ' + (value - counter));
					$('#suggestion').css('color','red');
					$('#suggestion').show();
					break;
				}
				else if (test1%0.5 == 0) {
					$('#suggestion').text('That\'s going to be messy. Try ' + (value + counter));
					$('#suggestion').css('color','red');
					$('#suggestion').show();
					break;
				}
				else if (test2%0.5 == 0) {
					$('#suggestion').text('That\'s going to be messy. Try ' + (value - counter));
					$('#suggestion').css('color','red');
					$('#suggestion').show();
					break;
				}

				counter++;
			}
		}

	});


$('#form').submit(function(e) {
	e.preventDefault();
	$('#submit').val('Recalculate');

});
})

function calculateCurve() {
	var botLimit = parseFloat($('#botLimit').val());
	var topLimit = parseFloat($('#topLimit').val());
	var unit = $('#unit').val();
	var numPoints = parseInt($('#numPoints').val());
	var precision = parseInt($('#precision').val());
	var volPer = parseFloat($('#volume').val());
	var stock = parseFloat($('#stock').val());

	$('#result').html('');
	$('#result').append('<span style="color:#4099FF;background:none">Working range: ' + botLimit + ' - ' + topLimit + ' ' + unit + ' / mL</span><br><br>');
	var allPoints = new Array();
	var volumes = new Array();

	var range = topLimit - botLimit;
	var increment = range/(numPoints - 1);

	var prevConc = 0;
	var prevVol = 0;

	while (botLimit <= topLimit) {
		var number = parseFloat(botLimit.toFixed(precision));
		if (number != 0){
			allPoints.push(number);
			volumes.push(volPer + (prevConc*prevVol)/number); //add on vol needed for previous
			var prevVol = volumes.pop();
			volumes.push(prevVol);
		}
		else{
			allPoints.push('blank');
			volumes.push(volPer);
		}
		var prevConc = number;
		botLimit+=increment;
	}



	while (allPoints.length > 0){
		var value = allPoints.pop();
		if (value != 'blank')
			$('#result').append(value + ' ' + unit + ' / mL<br>');
		else
			$('#result').append(value + '<br>');

		$('#result').append('<span style="color:red;background:none">volume needed:</span> ' + volumes.pop() +' mL<br><br>');
	}


}