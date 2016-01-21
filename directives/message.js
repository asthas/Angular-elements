angular.module('greetings')
	.directive('message', function() {
		return {
			restrict: 'M',
			link: function() {
				alert('Bad day!');
			}
		}
	})