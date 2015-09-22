var remoteGreet = ['$http',

  ($http) => {

    return {

      getGreetings: () => {
        return $http.get('/api/greet');
      }

    }

}];

export default remoteGreet
