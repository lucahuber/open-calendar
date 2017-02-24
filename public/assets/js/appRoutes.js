angular.module("appRoutes", []).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "MainController"
        })
        .when("/calendars", {
            templateUrl: "views/calendars.html",
            controller: "CalendarController"
        });

    $locationProvider.html5Mode(true);
}]);