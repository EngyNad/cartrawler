(function () {
  "use strict";
  //home page controller
  angular.module('cars')
          .controller('carsController', carsController);

  carsController.$inject = ['carsList'];
  function carsController(carsList) {
    var $ctrl = this;
    $ctrl.carsList = carsList;
    $ctrl.sortType = "sortAttr";
    $ctrl.sortOptions = "price";
    
    $ctrl.sort = function () {
      switch ($ctrl.sortOptions) {
        case 'makeModel':
          $ctrl.sortType = "carData.Vehicle.VehMakeModel['@Name']";
          break;
        case 'price':
          $ctrl.sortType = "sortAttr";
          break;
        default:
      }

    }
  }
})();

