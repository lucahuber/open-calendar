angular.module('CalendarCtrl', [])
.controller("CalendarController", ['$scope', '$http', function($scope, $http) {
    $http.get("/api/calendars").
        then(function(response) {
            $scope.calendarItems = response.data;
        });
}]);