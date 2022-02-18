var scrollToBlock = function(blockView){
	var offsetTop = parseInt($(""+blockView+"").offset().top);
	$("html, body").animate({scrollTop : offsetTop + "px"}, 800);
}
$(document).ready(function(){
	// btn scroll top window
	if(currentPage !== 'index'){
		$(window).scroll(function(){	
			if($(window).scrollTop() > 1800){
				$('div.btnEventScrollTop').show('fade', 400);
			}
			else if($(window).scrollTop() < 1500){
				$('div.btnEventScrollTop').hide('fade', 300);
			}
		});
		$('div.btnEventScrollTop').click(function(){
			$('html, body').animate({scrollTop : '0px'}, 1000, function(){
				$('div.btnEventScrollTop').hide('fade', 300);
			});
		});
	};

	// slide show
	$sizeSlide = $('div#slides > .text').size();
	$('div#slides > span.text').hide();
	$('div#slides > span.text').eq(0).addClass('current').fadeIn(1000);
	$('div#slideShow a').on('click', function(){
		if($(this).attr('data-event') == 'next'){
			$indexCurrent = $('div#slides > span.text.current').index();
			if($indexCurrent+1 < $sizeSlide){
				$('div#slides > span.text.current').fadeOut(300, function(){
					$(this).removeClass('current');
					$('div#slides > span.text').eq($indexCurrent+1).fadeIn(300).addClass('current');
				});
			}
			else{
				$('div#slides > span.text.current').fadeOut(300, function(){
					$(this).removeClass('current');
					$('div#slides > span.text').eq(0).fadeIn(300).addClass('current');
				});
			}
		}
		else if($(this).attr('data-event') == 'prev'){
			$indexCurrent = $('div#slides > span.text.current').index();
			if($indexCurrent+1 > 1){
				$('div#slides > span.text.current').fadeOut(300, function(){
					$(this).removeClass('current');
					$('div#slides > span.text').eq($indexCurrent-1).fadeIn(300).addClass('current');
				});
			}
		}
	});
	function fnAutoPlay(){
		$IdInterval = setInterval(function(){
			$('div#slideShow a[data-event="next"]').trigger('click');
		}, 7000);
	}
	fnAutoPlay();
	$('div#slideShow').hover(function(){
		clearInterval($IdInterval);
	},function(){
		fnAutoPlay();
	});

	//Scroll page
	function fnPositionBlock(ellement){
		var positionEllement = $('.btnEventScrollTop');
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var currentEls = $(ellement);
		var result = [];
		currentEls.each(function(){
		var el = $(this);
		var offset = el.offset();
		if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight)){
			result.push(this);
			positionEllement.css({bottom : '250px'});
		}
		else{
			positionEllement.css({bottom : '20px'});
		}
	});
		return $(result);
	}	
    fnPositionBlock("footer");    
	$(window).scroll(function(){
		fnPositionBlock("footer");
	});	
});

$(document).ready(function () {
	$('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $(this).toggleClass('open');
	  $('nav').toggleClass('nav-menu_active');
	})
});
$(document).ready(function () {
  $('.list-block_item').on('click', function(e) {
      e.preventDefault();
      var $others = $(this).parent().siblings().not($(this));
      $others.children('.listLevel2').removeClass('show-list');
      $others.children('.list-block_item').removeClass('closed');
      $(this).toggleClass('closed');
      $(this).next().toggleClass('show-list');
  });
});
$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 15,
    loop: true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true
  });
});