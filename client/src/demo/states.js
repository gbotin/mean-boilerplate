export default ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('demo', {
      url: '/demo',
      templateUrl: './demo/tpl/demo.html',
      controller: 'DemoCtrl'
    });
  }
]
