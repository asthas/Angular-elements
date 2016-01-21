angular.module('greetings', [])
	.directive('enter', function(){
		return function(scope, element) {
			element.bind("mouseenter", function() {
				element.addClass('activeClass');
			})
		}
	})
	
	.directive('leave', function(){
		return function(scope, element) {
			element.bind("mouseleave", function() {
				element.removeClass('activeClass');
			})
		}
	})