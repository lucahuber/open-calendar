angular.module("CalendarService", []).factory("Calendar", ["$http", function($http) {
    return {
        get: function() {
            return $http.get('/api/calendars');
        }
    }
}]);