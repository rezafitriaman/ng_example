console.log('directives blockDetail.js');

app.directive('blockDetail', function() {
	return {
		restrict: 'E',
		scope: {
			details: '='
		},
		link: function($scope, elem, attr) {
			$scope.likePlusOneB = function() {
				$scope.details.viewsLikes += 1;
			}
		},
		templateUrl: 'js/directives/blockDetail.html'
	}
});