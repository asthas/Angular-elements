angular.module('app', [])
	.directive('welcome', function() {
		return {
			restrict: 'E',
			scope: {},
			template: "<div>This is welcome component<ng-tansclude></ng-tansclude></div>"
		}
	})