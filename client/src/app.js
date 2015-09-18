import HomeComponent from './home'

angular.module('app', [
  'ui.router',
  'app.home'
])

.config(['$urlRouterProvider', function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
}]);
