'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, TweenMax*/
app.partial.index = function($, container){
	container.on('page:update' , function(page, menu){
	});
	container.one('page:load' , function(page, menu){
		console.log('load');
		$('.slick', container).slick({fade: true, speed: 2000, autoplay: false,autoplaySpeed: 2000});
	});
};
