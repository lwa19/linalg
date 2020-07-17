(function($) {
    $(document).ready(function() {
	
	$('#rotation1').scianimator({
	    'images': ['images/rotation11.png', 'images/rotation12.png', 'images/rotation13.png', 'images/rotation14.png', 'images/rotation15.png', 'images/rotation16.png', 'images/rotation17.png', 'images/rotation18.png', 'images/rotation19.png', 'images/rotation110.png', 'images/rotation111.png', 'images/rotation112.png', 'images/rotation113.png', 'images/rotation114.png', 'images/rotation115.png', 'images/rotation116.png', 'images/rotation117.png', 'images/rotation118.png', 'images/rotation119.png', 'images/rotation120.png', 'images/rotation121.png'],
	    'width': 480,
	    'delay': 50,
	    'loopMode': 'loop'
	});
	$('#rotation1').scianimator('play');
    });
})(jQuery);
