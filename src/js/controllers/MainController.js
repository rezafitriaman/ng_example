console.log('Angular MainController.js');
/*Add data to $scope in the controller so they can be displayed with expressions in the view.*/
/*A controller manages the app's data*/
app.controller('MainController', ['$scope', 'ownerService', function($scope, ownerService) {
	
	$scope.blocks = ownerService;

	$scope.filter1 = {
		one: 'popular',
		two: 'Shots',
		three: 'Now'
	}

	$scope.filter2 = {
		one: 'popular Two',
		two: 'Shots Two',
		three: 'Now Two'
	}
	
	$scope.filter3 = {
		one: 'popular Three',
		two: 'Shots Three',
		three: 'Now Three'
	}

	/*this ng-click function has added to his own directive (blockInfo.js) under link: function*/
	/*add like function on clicks on heart*/
	/*$scope.likePlusOne = function(index) {
		$scope.blocks[index].viewsLikes = $scope.blocks[index].viewsLikes + 1 
	}*/
	/*add view function on click on block*/
	/*$scope.viewPlusOne = function(index) {
		$scope.blocks[index].viewsView = $scope.blocks[index].viewsView + 1
	} */

}]);