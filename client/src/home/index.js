import HomeCtrl from './home.ctrl'
// import HomeStates from './home.states'

var homeComponent = angular.module('app.home', [
  'ui.router'
])

.config(['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './src/home/home.tpl.html',
      controller: 'HomeCtrl'
    });
  }
])

.controller(HomeCtrl.name, HomeCtrl);

export default homeComponent;
