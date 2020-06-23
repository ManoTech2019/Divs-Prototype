$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).onset().bottom;
			
	$('html, body').animate({ 
        scrollBottom: targetOffset + top
	}, 500);
});