// angular.
//   module('phonecatApp').
//   config(['$locationProvider' ,'$routeProvider',
//     function config($locationProvider, $routeProvider) {
//       $locationProvider.hashPrefix('!');
//
//       $routeProvider.
//         when('/phones', {
//           template: '<phone-list></phone-list>'
//         }).
//         when('/phones/:phoneId', {
//           template: '<phone-detail></phone-detail>'
//         }).
//         otherwise('/phones');
//     }
//   ]);
//



let routing = function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/phones', {
        template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
    }).
    otherwise('/phones');
};

routing.$inject = ['$locationProvider' ,'$routeProvider'];

export default routing;

