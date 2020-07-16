(function($) {
    $(document).ready(function() {
	
	$('#new_plot').scianimator({
	    'images': ['images/new_plot1.png', 'images/new_plot2.png', 'images/new_plot3.png', 'images/new_plot4.png', 'images/new_plot5.png'],
	    'width': 480,
	    'delay': 200,
	    'loopMode': 'none'
	});
	$('#new_plot').scianimator('play');
    });
})(jQuery);
