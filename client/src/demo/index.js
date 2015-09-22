import DemoCtrl from './controllers/DemoCtrl'
import remoteGreet from './services/remoteGreet'
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
.factory('remoteGreet', remoteGreet)

// Filters
.filter('upcase', upcaseFilter)

// Directives
.directive('welcome', welcomeDirective);

export default demoComponent;
