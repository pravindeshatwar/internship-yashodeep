$(function () {

    // animate on scroll
    new WOW().init();
});

/*   stats    */
$(function(){
	$('.counter').counterUp({
		delay:10,
		time: 3000
	})
})

/* slider */

$(document).ready(function(){

  $('.fade').slick({
   dots: true
  });
});


$(document).ready(function(){
   $(".image_slider").slick({
   	dots: true,
      arrows: true,
      // autoplay: true
   });
});
$(document).ready(function(){
   $(".image_slider_topper").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
   });
});
