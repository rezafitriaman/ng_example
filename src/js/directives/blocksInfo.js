console.log('directives blocksInfo.js');
app.directive('blocksInfo', function() {
	return {
		restrict: 'E',
		scope: {
			blocks: '='
		},
		templateUrl: 'js/directives/blocksInfo.html'
	};
});