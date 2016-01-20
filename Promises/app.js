function getData($timeout, $q) {
	return function() {
		var defer = $q.defer()

		$timeout(function() {
			if(Math.round(Math.random())) {
				defer.resolve('data received!')
			} else {
				defer.reject('Oh no an error! try again')
			}
		}, 2000)
		return defer.promise
	}
}