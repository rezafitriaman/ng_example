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
	.when('/id_:index', {
		controller: 'detailPhotoController',
		templateUrl: 'views/detailPhoto.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
console.log('Angular detailPhotoController.js');
app.controller('detailPhotoController', ['$scope', 'ownerService', '$routeParams', function($scope, ownerService, $routeParams) {
	$scope.blockDetail = ownerService[$routeParams.index];
}]);
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
console.log('Custom.js')

function hamburger() {
	var hamburger = document.getElementById('hamburger');
	var nav = document.getElementById('nav-wrapper');

	hamburger.addEventListener('click', function(event) {
		event.preventDefault();
		toggleShow();
	});

	hamburger.addEventListener('touchstart', function(event) {
		event.preventDefault();
		toggleShow();
	});

	function toggleShow() {
	    if (nav.classList.contains('hm-active')) {
	        nav.classList.remove("hm-active");
	    } else {
	        nav.classList.add("hm-active");
	    }
	}
}

hamburger();

console.log('service ownerService.js');
app.factory( 'ownerService', function() {
	var data =  [
		{
			ownerName : 'Yoga Perdana',
			ownerPhoto : 'https://cdn.dribbble.com/users/60166/avatars/mini/yogaLogo.png?1390870645',
			background : "https://cdn.dribbble.com/users/997070/screenshots/4097990/airbnb_teaser.gif",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Who makes the best Italian food? Probably not that expensive tourist trap of a restaurant. I bet the locals are the best! Imagine if you could arra...",
			hoverTimeStamp : new Date('2018', '01', '01'),
			viewsView : 0,
			viewsComment : 133,
			viewsLikes : 0,
			morePictures: []
		},
		{
			ownerName : 'Reza Fitriaman',
			ownerPhoto : 'https://cdn.dribbble.com/users/642843/avatars/mini/92d5bab67ad124151d595def5c58415c.jpg?1499767768',
			background : "img/3trk_1x.jpg",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Hello",
			hoverTimeStamp : new Date('2017', '02', '11'),
			viewsView : 0,
			viewsComment : 193,
			viewsLikes : 0,
			morePictures: []
		},
		{
			ownerName : 'Rens Hendriks',
			ownerPhoto : 'https://cdn.dribbble.com/users/207046/avatars/mini/d217b2a65dfa773771d1dae3139e06c1.png?1468930348',
			background : "img/800_1x.jpg",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Hai",
			hoverTimeStamp : new Date('2017', '06', '11'),
			viewsView : 0,
			viewsComment : 193,
			viewsLikes : 0,
			morePictures: []
		},
		{
			ownerName : 'Jarno Drent',
			ownerPhoto : 'https://cdn.dribbble.com/users/997070/avatars/mini/47ba30f02d62b4c5a565f4e0fd99b94a.jpg?1459240343',
			background : "img/rotate-dribbble_1x.jpg",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Continuing our Snug showcase. Feel free to check out attachment to see the dashboard screen of the property managers desktop/web app...",
			hoverTimeStamp : new Date('2017', '04', '21'),
			viewsView : 0,
			viewsComment : 143,
			viewsLikes : 0,
			morePictures: []
		},
		{
			ownerName : 'Nicole Jeuring',
			ownerPhoto : 'https://cdn.dribbble.com/users/414979/avatars/mini/0160be9f90ac7d57429dd20ad3f2917f.png?1484569830',
			background : "img/donut_v2_single_1_1x.gif",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Continuing our Snug showcase. Feel free to check out attachment to see the dashboard screen of the property managers desktop/web app...",
			hoverTimeStamp : new Date('2017', '04', '21'),
			viewsView : 0,
			viewsComment : 143,
			viewsLikes : 0,
			morePictures: []
		},
		{
			ownerName : 'Siu Tshang',
			ownerPhoto : 'https://cdn.dribbble.com/users/3715/avatars/mini/cmprofile.png?1413917909',
			background : "img/woman2_1x.jpg",
			hoverTitle : "Airbnb for dinners",
			hoverSubtitle : "Continuing our Snug showcase. Feel free to check out attachment to see the dashboard screen of the property managers desktop/web app...",
			hoverTimeStamp : new Date('2017', '04', '21'),
			viewsView : 0,
			viewsComment : 143,
			viewsLikes : 0,
			morePictures: [
				'https://cdn.dribbble.com/users/1151239/screenshots/4089501/_library-positioning_teaser.gif',
				'https://cdn.dribbble.com/users/1151239/screenshots/4088560/bookstore_positioning_teaser.jpg',
				'https://cdn.dribbble.com/users/1151239/screenshots/4067110/reading02_teaser.jpg',
				'https://cdn.dribbble.com/users/1151239/screenshots/4047529/book_teaser.jpg'

			]
		},
		{
			ownerName : 'Sander Meijer',
			ownerPhoto : 'https://cdn.dribbble.com/users/14059/avatars/mini/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171',
			background : "https://cdn.dribbble.com/users/14059/screenshots/4146722/embiidtowns_teaser.jpg",
			hoverTitle : "Hello Dribbble!",
			hoverSubtitle : "Hello Dribbble community! I really want to thank @Fengbo Li so much for the invite! Looking forward to posting a lot of cool designs, interacting a...",
			hoverTimeStamp : new Date('2018', '01', '26'),
			viewsView : 0,
			viewsComment : 143,
			viewsLikes : 0,
			morePictures: [
				'https://cdn.dribbble.com/users/60166/screenshots/4144350/bird_teaser.jpg',
				'https://cdn.dribbble.com/users/60166/screenshots/4139998/drop___wave_teaser.jpg',
				'https://cdn.dribbble.com/users/60166/screenshots/4135289/wave_teaser.jpg',
				'https://cdn.dribbble.com/users/60166/screenshots/4130107/p_logo_teaser.jpg'

			]
		},
		{
			ownerName : 'Pedro Reyes',
			ownerPhoto : 'https://cdn.dribbble.com/users/283883/avatars/mini/fc0bea5eac21175d35275254cb5cc269.jpg?1431950657',
			background : "https://cdn.dribbble.com/users/1162077/screenshots/4149479/creative-workspace_teaser.png",
			hoverTitle : "Hello Dribbble!",
			hoverSubtitle : "Hey guys, Long time no see I have just started my job, there are many things to do. The movie Reviews app, all the interface are here, hope you l...",
			hoverTimeStamp : new Date('2018', '01', '26'),
			viewsView : 0,
			viewsComment : 143,
			viewsLikes : 0,
			morePictures: [
				'https://cdn.dribbble.com/users/60166/screenshots/4144350/bird_teaser.jpg',
				'https://cdn.dribbble.com/users/60166/screenshots/4139998/drop___wave_teaser.jpg',
				'https://cdn.dribbble.com/users/60166/screenshots/4135289/wave_teaser.jpg',
				'https://cdn.dribbble.com/users/60166/screenshots/4130107/p_logo_teaser.jpg'

			]
		}
	]

	return data;
});