var inject = ['$http'];

var remoteTimeService = [...inject, ($http) => {

  return {

    getTime: () => {
      return $http.get('http://date.jsontest.com');
    }

  }

}];

export default remoteTimeService
