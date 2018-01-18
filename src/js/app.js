console.log('Angular app.js');
/*A module contains the different components of an AngularJS app*/
/*var app = angular.module("myApp", []);*/

var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'MainController',
		templateUrl: 'views/home.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});