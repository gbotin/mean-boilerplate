import DemoCtrl from './controllers/DemoCtrl'
import remoteTimeService from './services/remoteTime'
import welcomeDirective from './directives/welcome/welcome'
import upcaseFilter from './filters/upcase'
import states from './states'

var demoComponent = angular.module('app.demo', [
  'ui.router'
])

.config(states)
.controller('DemoCtrl', DemoCtrl)
.factory('remoteTimeService', remoteTimeService)
.filter('upcase', upcaseFilter)
.directive('welcome', welcomeDirective);

export default demoComponent;
