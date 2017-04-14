const g = 9.8;

function getMaxHeightTime(verticalSpeed) {
	return verticalSpeed / g;
}

function getMaxHeight(verticalSpeed) {
	let t = getMaxHeightTime(verticalSpeed);
	return 0.5 * g * Math.pow(t, 2);
}

const UNIT_OF_TIME = 0.1;

function moveBallX(horizontalSpeed) { 
	let ball = $('.js_ball');
	let left = Math.round(ball.css('left').substr(0, ball.css('left').length - 2));
	ball.css('left', (left + UNIT_OF_TIME * horizontalSpeed) + 'px');
}

function moveBallY(verticalSpeed) { 
	let ball = $('.js_ball');
	let bottom = Math.round(ball.css('bottom').substr(0, ball.css('bottom').length - 2));
	ball.css('bottom', (bottom + UNIT_OF_TIME * verticalSpeed) + 'px');
}

function animate(horizontalSpeed, verticalSpeed) {
	let ball = $('.js_ball');
	ball.css({left: '0px', bottom: '0px'});
	let interval = setInterval(function() {
		
		moveBallY(verticalSpeed);
		verticalSpeed = verticalSpeed - UNIT_OF_TIME * g;
		moveBallX(horizontalSpeed);

		let bottom = Math.round(ball.css('bottom').substr(0, ball.css('bottom').length - 2));
		console.log(horizontalSpeed, verticalSpeed, bottom);

		if (bottom <= 0) {
			clearInterval(interval);
		}
	}, 1000 * UNIT_OF_TIME);
}

$('[name="calculate"]').click(function(e) {
	e.preventDefault();
	let speed = $('[name="speed"]').val();
	let angle = $('[name="angle"]').val() * (2 * Math.PI / 360);
	let verticalSpeed = Math.sin(angle) * speed;
	let maxHeight = getMaxHeight(verticalSpeed);
	let horizontalSpeed = Math.cos(angle) * speed;
	let maxDisplacement = horizontalSpeed * (getMaxHeightTime(verticalSpeed) * 2);

	animate(horizontalSpeed, verticalSpeed);

	$('[name="vertical_speed"]').text(verticalSpeed);
	$('[name="horizontal_speed"]').text(horizontalSpeed);
	$('[name="max_height"]').text(maxHeight);
	$('[name="max_displacement"]').text(maxDisplacement);
	$('[name="total_time"]').text(getMaxHeightTime(verticalSpeed) * 2);

});

$('.ball2').css('left', (Math.random() * $('.canvas').width()) + 'px');
