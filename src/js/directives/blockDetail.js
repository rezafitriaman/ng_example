console.log('directives blockDetail.js');

app.directive('blockDetail', function() {
	return {
		restrict: 'E',
		scope: {
			details: '='
		},
		templateUrl: 'js/directives/blockDetail.html'
	}
});