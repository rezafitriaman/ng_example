console.log('Angular detailPhotoController.js');
app.controller('detailPhotoController', ['$scope', 'ownerService', '$routeParams', function($scope, ownerService, $routeParams) {
	$scope.blockDetail = ownerService[$routeParams.index];
}]);