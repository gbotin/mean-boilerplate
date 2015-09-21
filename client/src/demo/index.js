import DemoCtrl from './controllers/DemoCtrl'
// import timeService from './services/time'
// import WelcomeDirective from './directives/welcome/welcome'
// import upcaseFilter from './filters/upcase'
import states from './states'

var HomeComponent = angular.module('app.demo', [
  'ui.router'
])

.config(states)
.controller('HomeCtrl', HomeCtrl)

// .factory('timeService', timeService)
// .filter('upcase', upcaseFilter)
// .directive('homeDirective', HomeDirective);

export default HomeComponent;
