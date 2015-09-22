export default function upcaseFilter () {

  return function(input) {
    input = input || '';

    var out = input.toUpperCase();

    return out;
  }

}
