var DemoCtrl = ['$scope', 'remoteGreet',
  ($scope, remoteGreet) => {

    remoteGreet.getGreetings()
      .then((resp) => {
        $scope.greet = resp.data.message;
      });

    $scope.name = 'World';
}];

export default DemoCtrl
