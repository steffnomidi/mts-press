
$(document).ready(function(){ /*open ready*/

	/*start Owl Carousel in mainpage */
	$(".slider").owlCarousel({
		nav: true,
		navText: false,
		dots: false,
		loop:true,
		autoplayTimeout: 5000,
		autoplay: true,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		center: true,
		responsive : {
			0 : {
				items: 1
			},
			480 : {
				items:3,
				autoWidth:true
			},
			768 : {
				items:5,
				autoWidth:true
			}
		}
	});

	/* open/close side-menu */
	$(".open-side-menu").click(function(){
		if ($(".side-menu").hasClass('opened')) {
			$(".side-menu").css({left: "-100%"}).removeClass('opened').addClass('closed');
			$('body').css({"overflow-y": ""});
		}else {
			$(".side-menu").css({left: 0}).removeClass('closed').addClass('opened');
			$('body').css({"overflow-y": "hidden"});
		}
	});

	$(".side-menu").click(function(){
		$(".side-menu").css({left: "-100%"}).removeClass('opened').addClass('closed');
			$('body').css({"overflow-y": ""});
	});

	$("input[name=tel]").mask("(999) 999-99-99",{placeholder:"_"});

	$(".set .checkbox").click(function() {
		$(this).toggleClass('active');
		if ( $(this).hasClass('active') ) {
			$(this).children().attr('checked', true);
		}else{
			$(this).children().attr('checked', false);
		}
	});

	/* open/close search field in mobile header */
	$("header .mobile .icon-search").click(function() {
		$(".searchform").css("top",2);
	});
	$("header .searchform i").click(function() {
		$(".searchform").css("top",-40);
	});
/* close ready */
});
