// angular.
// module('core.phone').
// factory('Phone', ['$resource',
//     function($resource) {
//         return $resource('phones/:phoneId.json', {}, {
//             query: {
//                 method: 'GET',
//                 params: {phoneId: 'phones'},
//                 isArray: true
//             }
//         });
//     }
// ]);




let phonefactory = function($resource) {
    return $resource('phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
        }
    });
  };

phonefactory.$inject = ['$resource'];

export default phonefactory;




