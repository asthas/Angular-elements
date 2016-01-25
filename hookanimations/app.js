angular.module('app', ['ngAnimate'])
	.controller('TestCtrl', function() {
		var vm = this;
		vm.bigger= false;
		vm.lightTheme = false;
	})