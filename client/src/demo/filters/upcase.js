var upcaseFilter = [
  () => {

    return function(input) {
      input = input || '';

      var out = input.toUpperCase();

      return out;
    }

}];

export default upcaseFilter;
