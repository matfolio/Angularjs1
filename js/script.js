
angular.module("ngRouteApp",['ngRoute']).
config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/', {
      templateUrl: './views/home.html',
      controller: 'HomeController'
   }).
   
   otherwise({
      redirectTo: '/'
   });
}]).

controller('HomeController', function($scope, $http) {
 let url = "./data/info.json";
 $scope.Info = "User Information";

  $http.get(url).then( function(response) {
      $scope.viewContents = response.data;
   });
});