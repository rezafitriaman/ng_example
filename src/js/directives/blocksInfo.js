console.log('directives blocksInfo.js');
app.directive('blocksInfo', function() {
	return {
		restrict: 'E',
		scope: {
			blocks: '=',
		},
		link: function (scope) {
        scope.likePlusOne = function ($index) {
            scope.blocks[$index].viewsLikes = scope.blocks[$index].viewsLikes + 1 
        };
        scope.viewPlusOne = function ($index) {
        	scope.blocks[$index].viewsView += 1
        }
    },
		templateUrl: 'js/directives/blocksInfo.html'
	};
});