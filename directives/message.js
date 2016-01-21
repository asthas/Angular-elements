angular.module('greetings')
	.directive('message', function() {
		return {
			restrict: 'E',
			link: function() {
				alert('Bad day!');
			}
		}
	})