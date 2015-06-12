
$(document).ready(function(){ /*open ready*/

	/*start Owl Carousel in mainpage */
	$(".slider").owlCarousel({
		loop:true,
		autoplayTimeout: 5000,
		autoplay: true,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		center:true,
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
		}else {
			$(".side-menu").css({left: 0}).removeClass('closed').addClass('opened');
		}
	});
	
	$(".side-menu").click(function(){
		$(".side-menu").css({left: "-100%"}).removeClass('opened').addClass('closed');
	});
	
	/* scroll affix for side-menu */	
	$('#side-menu').affix({
	  offset: {
		top: function () {
		  return ($('#side-menu').height() - $( window ).height() );
		}
	  }
	})
	
/* close ready */	
});
