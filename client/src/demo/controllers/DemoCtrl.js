var DemoCtrl = ['$scope', 'remoteTimeService',
  ($scope, remoteTimeService) => {

    remoteTimeService.getTime()
      .then((resp) => {
        $scope.date = resp.data.date;
      });

    $scope.name = 'World';
}];

export default DemoCtrl
