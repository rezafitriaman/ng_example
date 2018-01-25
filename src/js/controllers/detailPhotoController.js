console.log('Angular detailPhotoController.js');
app.controller('detailPhotoController', ['$scope', 'ownerService', '$routeParams', function($scope, ownerService, $routeParams) {
	console.log(ownerService[$routeParams.id])
	$scope.blockDetail = ownerService[$routeParams.id];
}]);