$(document).ready(function(){

	$('#menu-btn').click(function(){		
		$('.menu').slideToggle(700);	
		if ($(this).hasClass('not-active')) {
			$(this).addClass('is-active').removeClass('not-active');
		}else{
			setTimeout(function(){
				$('.is-active').addClass('not-active').removeClass('is-active')
			},600)			
		}		
	});
	$('.skill-indicators').viewportChecker({
		callbackFunction: function(elem, action){  
			$('.circlestat').circliful();
		},
	});	
	jQuery('.p_block').hover(
		function(){
			$(this).find('.cover-p_block').fadeIn();
		},
		function(){
			$(this).find('.cover-p_block').fadeOut();
		});
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$(function() {
		
		$(window).scroll(function() {
			
			if($(this).scrollTop() != 0) {
				
				$('#toTop').fadeIn();
				
			} else {
				
				$('#toTop').fadeOut();
				
			}
			
		});
		
		$('#toTop').click(function() {
			
			$('body,html').animate({scrollTop:0},800);
			
		});
		
	});

});