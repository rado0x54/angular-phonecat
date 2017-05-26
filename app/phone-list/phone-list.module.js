'use strict';

import angular from 'angular'
import phone from '../core/phone/phone.module'
import phoneListComponent from './phone-list.component';


let phoneListModule = angular.module('phoneList', [
    phone
])
    .component('phoneList', phoneListComponent)
    .name;

// Define the `phoneList` module
export default phoneListModule;
