angular.module('app', ['ngAnimate'])
	.controller('TestCtrl', function() {
		var vm = this;
		vm.people = [
		{name: "Eric Simons"},
		{name: "Simons Pie"},
		{name: "Satya Nadella"}
		];

	})