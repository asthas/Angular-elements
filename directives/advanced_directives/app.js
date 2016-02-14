angular.module('greetings', [])
	.directive('welcome', function() {
		return {
			restrict: "E",
			scope: {},
			controller: function($scope) {

				$scope.words = [];

				this.sayHello = function() {
					$scope.words.push("hello");
				}

				this.sayHi = function() {
					$scope.words.push("Hi");
				}

				this.sayHowdy = function() {
					$scope.words.push("howdy");
				}
			},
			link: function(scope, element, attrs) {
				element.bind('mouseenter', function() {
					console.log(scope.words);
				})
			}
		}

	})

	.directive("hello", function() {
		return {
			require: "welcome",
			link: function(scope, element, attrs, welcomeCtrl) {
				welcomeCtrl.sayHello();
			}
		}
	})
	.directive("hi", function() {
		return {
			require: "welcome",
			link: function(scope, element, attrs, welcomeCtrl) {
				welcomeCtrl.sayHi();
			}
		}
	})
	.directive("howdy", function() {
		return {
			require: "welcome",
			link: function(scope, element, attrs, welcomeCtrl) {
				welcomeCtrl.sayHowdy();
			}
		}
	})

