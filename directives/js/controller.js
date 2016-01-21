angular.module('greetings', [])
	.controller('FunCtrl', function(){
		var vm = this;
		vm.start = function() {
			console.log("Fun times have been started");
		}
	})
	.directive('enter', function() {
		return function(scope, element, attrs) {
			element.bind('mouseenter', function(){
				scope.$apply(attrs.enter);
			})
		}
	})
	