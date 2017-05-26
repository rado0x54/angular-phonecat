import angular from 'angular';
import phone from './phone/phone.module';
import checkmarkFilter from './checkmark/checkmark.filter';

let coreModule = angular.module('core', [
    phone
])
    .filter('checkmark', checkmarkFilter)
    .name;

// Define the `core` module
export default coreModule;


