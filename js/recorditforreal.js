(function($) {
    $(document).ready(function() {
	
	$('#recorditforreal').scianimator({
	    'images': ['images/recorditforreal1.png', 'images/recorditforreal2.png', 'images/recorditforreal3.png', 'images/recorditforreal4.png', 'images/recorditforreal5.png'],
	    'width': 480,
	    'delay': 200,
	    'loopMode': 'loop'
	});
	$('#recorditforreal').scianimator('play');
    });
})(jQuery);
