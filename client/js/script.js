$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:500,
		infinite:true,
		intialSlide: 0,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false,
		swipe: true,
		touchThreshold: 10,
		touchMove:true,
		waitForAnimate:false,
		centerMode:false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		],
	});
});

