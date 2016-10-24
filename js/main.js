$(document).ready(function() {
	$(".group1").colorbox({rel:'group1'});

	$("a.scrollto").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});
	 
    $('#top-scroll').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });
});

$(window).scroll(function(){
    var sticky = $('#top-scroll'),
        scroll = $(window).scrollTop();

    if ( scroll >= 900) {
        sticky.addClass('is-show');
    } else {
        sticky.removeClass('is-show');
    }
});