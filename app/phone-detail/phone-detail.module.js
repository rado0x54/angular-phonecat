'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import phone from '../core/phone/phone.module';
import phoneDetailComponent from './phone-detail.component';

let phoneDetailModule = angular.module('phoneDetail', [
    ngRoute,
    phone
])
    .component('phoneDetail',phoneDetailComponent)
    .name;

// Define the `phoneDetail` module
export default phoneDetailModule;

