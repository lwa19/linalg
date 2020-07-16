(function($) {
    $(document).ready(function() {
	
	$('#record_plot').scianimator({
	    'images': ['images/record_plot1.png', 'images/record_plot2.png', 'images/record_plot3.png', 'images/record_plot4.png'],
	    'width': 480,
	    'delay': 2000,
	    'loopMode': 'loop'
	});
	$('#record_plot').scianimator('play');
    });
})(jQuery);
