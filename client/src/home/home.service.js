var inject = ['$http'];

var HomeService = [...inject, ($http) => {

  return {

    getTime: () => {
      return $http.get('http://date.jsontest.com');
    }

  }

}];

export default HomeService
