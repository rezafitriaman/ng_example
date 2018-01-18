console.log('directives filter.js');
app.directive('filterInfo', function() {
	return {
		restrict: 'E',
		scope: {
			filters: '='
		},
		templateUrl: 'js/directives/filters.html'
	};
});