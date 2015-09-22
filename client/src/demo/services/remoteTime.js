var remoteTimeService = ['$http',

  ($http) => {

    return {

      getTime: () => {
        return $http.get('http://date.jsontest.com');
      }

    }

}];

export default remoteTimeService
