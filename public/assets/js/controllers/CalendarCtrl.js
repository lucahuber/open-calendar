angular.module('CalendarCtrl', [])
.controller("CalendarController", ['$scope', '$http', function($scope, $http) {
    $scope.tagline = $http.get('/api/calendars');
}]);