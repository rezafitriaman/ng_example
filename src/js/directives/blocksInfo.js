console.log('directives blocksInfo.js');
/*We used app.directive to create a new directive named 'installApp'.

The directive contains the three options restrict, scope, and templateUrl that we saw before in the 'appInfo' directive.
It also contains a fourth option link. The link is used to create interactive directives that respond to user actions.
The link function takes three inputs:

1.scope refers to the directive's scope. Any new properties attached to $scope will become available to use in the directive's template.
2.element refers to the directive's HTML element.
3.attrs contains the element's attributes.*/
app.directive('blocksInfo', function() {
	return {
		restrict: 'E',
		scope: {
			blocks: '=',
			blocksLimit: '@'
		},
		link: function ($scope) {
	        $scope.likePlusOne = function ($index) {
	            $scope.blocks[$index].viewsLikes += 1 
	        }
	        $scope.viewPlusOne = function ($index) {
	        	$scope.blocks[$index].viewsView += 1
	        }
	    },
		templateUrl: 'js/directives/blocksInfo.html'
	};
});