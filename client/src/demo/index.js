import DemoCtrl from './controllers/DemoCtrl'
import remoteTimeService from './services/remoteTime'
import welcomeDirective from './directives/welcome/welcome'
import upcaseFilter from './filters/upcase'
import states from './states'

var demoComponent = angular.module('app.demo', [
  'ui.router'
])

// States
.config(states)

// Controllers
.controller('DemoCtrl', DemoCtrl)

// Factories
.factory('remoteTimeService', remoteTimeService)

// Filters
.filter('upcase', upcaseFilter)

// Directives
.directive('welcome', welcomeDirective);

export default demoComponent;
