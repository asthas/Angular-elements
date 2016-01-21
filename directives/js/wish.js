angular.module('greetings')
	.directive('wish', function() {
		return {
			restrict: 'A',
			link: function() {
				alert("Good Morning!");
			}
		}
	})