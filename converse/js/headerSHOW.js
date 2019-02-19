$(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() >= 200) {
            $(".header").addClass("headerNav").slideDown();
            $(".menu").addClass("menuNav").slideDown();
        } else {
            $(".header").removeClass("headerNav").show();
            $(".header").show();
            $(".menu").removeClass("menuNav");
             $(".menu").show();
        }
    })



    // navbox
    var qcloud={};
	$('[_t_nav]').hover(function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').each(function(){
		$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
		});
		$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').removeClass('nav-up-selected');
		$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});







});