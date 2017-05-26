'use strict';

// Register `phoneList` component, along with its associated controller and template
// angular.
//   module('phoneList').
//   component('phoneList', {
//     templateUrl: 'phone-list/phone-list.template.html',
//     controller: ['Phone',
//       function PhoneListController(Phone) {
//         this.phones = Phone.query();
//         this.orderProp = 'age';
//       }
//     ]
//   });

import template from './phone-list.template.html';

let phoneListComponent = {
    // templateUrl: 'phone-list/phone-list.template.html',
    template,
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  };


export default phoneListComponent;
