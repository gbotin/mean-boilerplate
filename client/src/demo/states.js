export default ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('demo', {
      url: '/demo',
      templateUrl: './templates/demo/tpl/demo.html',
      controller: 'DemoCtrl'
    });
  }
]
