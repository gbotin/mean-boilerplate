export default function upcase () {

  return function(input) {
    input = input || '';

    var out = input.toUpperCase();

    return out;
  }

}
