(function () {
  "use strict";

  angular.module('cars')
          .controller('carPageController', carPageController);

  carPageController.$inject = ['carsList'];

  function carPageController(carsList) {
    var $ctrl = this;
    $ctrl.carData = carsList;
    
  }

})();