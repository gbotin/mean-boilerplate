import demoComponent from './demo'

angular.module('app', [
  'ui.router',
  'app.demo'
])

.config(['$urlRouterProvider', function($urlRouterProvider){
  $urlRouterProvider.otherwise('/demo');
}]);
