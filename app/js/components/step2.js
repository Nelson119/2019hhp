'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, TweenMax*/
app.partial.step2 = function($, container){
	container.on('page:update' , function(page, menu){
	});
	container.one('page:load' , function(page, menu){
        function readUrl(input) {
  
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    let imgData = e.target.result;
                    let imgName = input.files[0].name;
                    input.setAttribute("data-title", imgName);
                    // console.log(e.target.result);
                    var image = new Image();
                    image.src = e.target.result;

                    image.onload = function() {
                        // access image size here 
                        $(image).appendTo( $('.inputDnD') );
                        $('.inputDnD').height(image.height);
                    };
                }
                reader.readAsDataURL(input.files[0]);
            }
          
        }
        window.readUrl = readUrl;
	});
};
