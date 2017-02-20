(function () {
  "use strict";
  //home page controller
  angular.module('cars')
          .controller('carsController', carsController);

  carsController.$inject = ['carsList', '$rootScope', 'CarsService'];
  function carsController(carsList, $rootScope, CarsService) {
    var $ctrl = this;
    $ctrl.carsList = carsList;

  }
})();

