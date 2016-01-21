angular.module('greetings')
	.directive('goodday', function() {
		return {
			restrict: 'C',
			link: function() {
				alert("Have a good day!");
		}	}
	})