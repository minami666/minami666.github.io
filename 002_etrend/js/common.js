$(function(){
	$('.show__box__right__middle__top--3').click(function(){
		$(this).css('color', '#000');
  });

  $(".bottom_fix__bottom__btn").click(function(){
    $("body,html").animate({ scrollTop: 0 }, 500)
  });

  $('.slider__box').slick({
    slidesToShow:6,
    slidesToScroll:1,
    arrows: true,
    autoplay: true,
    dots: true
  })
});
