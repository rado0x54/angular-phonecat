// angular.
//   module('core').
//   filter('checkmark', function() {
//     return function(input) {
//       return input ? '\u2713' : '\u2718';
//     };
//   });

let checkmarkFilter = function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  };

export default checkmarkFilter;
