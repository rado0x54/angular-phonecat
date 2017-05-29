
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




