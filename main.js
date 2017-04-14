const g = 9.8;

function getMaxHeightTime(verticalSpeed) {
	return verticalSpeed / g;
}

function getMaxHeight(verticalSpeed) {
	let t = getMaxHeightTime(verticalSpeed);
	return 0.5 * g * Math.pow(t, 2);
}

$('[name="calculate"]').click(function() {
	let speed = $('[name="speed"]').val();
	let angle = $('[name="angle"]').val() * (2 * Math.PI / 360);
	let verticalSpeed = Math.sin(angle) * speed;
	let maxHeight = getMaxHeight(verticalSpeed);
	let horizontalSpeed = Math.cos(angle) * speed;
	let maxDisplacement = horizontalSpeed * (getMaxHeightTime(verticalSpeed) * 2)

	console.log(getMaxHeightTime(verticalSpeed) * 2);
	$('[name="vertical_speed"]').text(verticalSpeed);
	$('[name="horizontal_speed"]').text(horizontalSpeed);
	$('[name="max_height"]').text(maxHeight);
	$('[name="max_displacement"]').text(maxDisplacement);

});
