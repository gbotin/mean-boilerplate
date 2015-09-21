import HomeCtrl from './home.ctrl'
import HomeStates from './home.states'
import HomeService from './home.service'

var homeComponent = angular.module('app.home', [
  'ui.router'
])

.config(HomeStates)

.controller('HomeCtrl', HomeCtrl)

.factory('HomeService', HomeService);

export default homeComponent;
