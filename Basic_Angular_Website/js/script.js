var app = angular.module("MDTech", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/index', {
        templateUrl: "main.html",
        controller: "MainCtrl"
    })
	.when("/services", {
		templateUrl: "services.html",
		controller: "ServicesCtrl"
	})
	.when("/about", {
		templateUrl: "about.html"
	})
	.when("/contact", {
		templateUrl: "contact.html",
		controller: "ContactCtrl"
	})
    .otherwise({redirectTo: '/index'})
});

app.controller("MainCtrl", function ($scope, $http) {
	console.log("This is Main Controller");
	$http.get("data/services.json").then(function (response) {
		$scope.services = response.data;
	});
});
app.controller("ServicesCtrl", function ($scope, $http) {
	console.log("This is Service Controller");
	$http.get("data/services.json").then(function (response) {
		$scope.services = response.data;
	});
});
app.controller("ContactCtrl", function ($scope, $http) {
	console.log("This is Contact Controller");
	$http.get("data/locations.json").then(function (response) {
		$scope.locations = response.data;
	});
});