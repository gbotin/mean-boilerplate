var inject = ['$scope'];

var DemoCtrl = [...inject, ($scope) => {

  // homeService.getTime()
  //   .then((resp) => {
  //     $scope.date = resp.data.date;
  //   });

  $scope.name = 'World';

}];

export default DemoCtrl
