export default ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './tpl/home/home.tpl.html',
      controller: 'HomeCtrl'
    });
  }
]
