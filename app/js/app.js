'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  s, $, jQuery, TweenMax */
var app = {};
app.partial = {};

if($ || jQuery){
	app.$ = $.noConflict() || jQuery.noConflict();
}
app.ready = function(callback){
	app.onready = (callback || function(){});
};
(function($){
	$(function(){
		
		app.imageReload.callback = function(){
			$('[role=content]').trigger('page:update:main');
			// 定義每個元件
			$.each(app.partial, function(name, init){
				var cont = $('[role='+name+']');
				init($, cont);
				if(!cont.hasClass('loaded')){
					cont.trigger('page:load');
					cont.addClass('loaded');
				}else{
					cont.trigger('page:update');
				}
			});
			$('[role=content]').addClass('loaded');
			(app.onready || function(){})();
		};

		app.imageReload.init();
		
		$('[role=content] a.anchor').on('click', function(e){
			var target = $($(this).attr('href').replace('/',''));
			if($(this).attr('href') === '#'){
				target = $('#kv');
			}
			if(!target.length){
				return true;
			}
			e.stopPropagation();
			e.preventDefault();
			app.utility.scrollTo(target, this);
			$(this).parents('header').removeClass('in');
			return false;
			
		});
		
		$('[role=content] header').removeClass('in');
		$('[role=content] header').on('click', function(e){
			$(this).toggleClass('in');
		});

		var scrolling = 0;
		$(window).on('scroll', function(){
			var offsetTop = $('#static_header_gnb').outerHeight() + $('#kv').outerHeight();
			if($(window).width() <= 1000){
				offsetTop = $('#static_header_gnb').outerHeight() + $('#kv').outerHeight();
			}// + $('[role=content] .kv-container').outerHeight();
			if($(window).scrollTop() >= offsetTop){
				$('[role=content]').addClass('fixed-menu');
				$('.backtop.anchor').addClass('fade in');
				// $('[role=content]').css('padding-top', $('[role=content] header').outerHeight() + 'px');
			} else{
				$('[role=content]').removeClass('fixed-menu');
				$('.backtop.anchor').removeClass('in');
				// $('[role=content]').css('padding-top', 0);
			}
		}).trigger('scroll');
		

		// app.vb = $('.veno').venobox({
		// 	cb_post_open  : function(obj, gallIndex, thenext, theprev){
		// 		$('.vbox-content a').on('click', function(){
		// 			app.vb.VBclose();
		// 			$('.vbox-content').html('');
		// 		});
		// 	}
		
		// });
		// $('#hv').trigger('click');
	});
}(app.$));




