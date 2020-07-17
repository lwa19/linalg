(function($) {
    $(document).ready(function() {
	
	$('#recordit').scianimator({
	    'images': ['images/recordit1.png', 'images/recordit2.png', 'images/recordit3.png', 'images/recordit4.png', 'images/recordit5.png', 'images/recordit6.png', 'images/recordit7.png', 'images/recordit8.png', 'images/recordit9.png', 'images/recordit10.png'],
	    'width': 480,
	    'delay': 200,
	    'loopMode': 'loop'
	});
	$('#recordit').scianimator('play');
    });
})(jQuery);
