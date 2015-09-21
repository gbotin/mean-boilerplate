var inject = ['$scope', 'HomeService'];

var HomeCtrl = [...inject, ($scope, homeService) => {

  homeService.getTime();

  $scope.name = 'World';

}];

export default HomeCtrl
