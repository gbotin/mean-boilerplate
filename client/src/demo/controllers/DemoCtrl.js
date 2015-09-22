var inject = ['$scope', 'remoteTimeService'];

var DemoCtrl = [...inject, ($scope, remoteTimeService) => {

  remoteTimeService.getTime()
    .then((resp) => {
      $scope.date = resp.data.date;
    });

  $scope.name = 'World';

}];

export default DemoCtrl
