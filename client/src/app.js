import HomeComponent from './home'

angular.module('app', [
  'ui.router',
  'app.demo'
])

.config(['$urlRouterProvider', function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
}]);
