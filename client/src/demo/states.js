export default ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('demo', {
      url: '/demo',
      templateUrl: './demo/tpl/demo.tpl.html',
      controller: 'DemoCtrl'
    });
  }
]
