import template from './phone-detail.template.html';

let phoneDetailComponent = {
    // templateUrl: 'phone-detail/phone-detail.template.html',
    template,
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        let self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  };

export default phoneDetailComponent;

