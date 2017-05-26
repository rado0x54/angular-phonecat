'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngRoute from 'angular-route';
import core from './core/core.module';
import phoneDetail from './phone-detail/phone-detail.module';
import phoneList from './phone-list/phone-list.module';
import routing from './app.config';
import phoneAnimation from './app.animations';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  ngAnimate,
  ngRoute,
  core,
  phoneDetail,
  phoneList
])
    .config(routing)
    .animation('.phone', phoneAnimation);
