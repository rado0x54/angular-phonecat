import angular from 'angular';
import ngResource from 'angular-resource';
import phonefactory from './phone.service';


// Define the `core.phone` module
let phoneModule = angular.module('core.phone', [
    ngResource
])
    .factory('Phone', phonefactory)
    .name;


export default phoneModule;
