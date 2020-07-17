(function($) {
    $(document).ready(function() {
	
	$('#rotation2').scianimator({
	    'images': ['images/rotation21.png', 'images/rotation22.png', 'images/rotation23.png', 'images/rotation24.png', 'images/rotation25.png', 'images/rotation26.png', 'images/rotation27.png', 'images/rotation28.png', 'images/rotation29.png', 'images/rotation210.png', 'images/rotation211.png', 'images/rotation212.png', 'images/rotation213.png', 'images/rotation214.png', 'images/rotation215.png', 'images/rotation216.png', 'images/rotation217.png', 'images/rotation218.png', 'images/rotation219.png', 'images/rotation220.png', 'images/rotation221.png'],
	    'width': 480,
	    'delay': 100,
	    'loopMode': 'loop'
	});
	$('#rotation2').scianimator('play');
    });
})(jQuery);
