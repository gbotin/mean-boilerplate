var inject = ['$http'];

var timeService = [...inject, ($http) => {

  return {

    getTime: () => {
      return $http.get('http://date.jsontest.com');
    }

  }

}];

export default HomeService
