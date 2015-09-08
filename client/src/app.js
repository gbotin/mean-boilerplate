import homeComponent from './components/home/home';

var app = angular.module('app', []);

app.config(['$routeProvider',
  ($routeProvider) => {
    $routeProvider
      .when('/home', {
        templateUrl: 'components/home/home.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
]);

export default app;
