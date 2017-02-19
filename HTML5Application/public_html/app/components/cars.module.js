(function () {
  "use strict";
  //main module
  angular.module('cars', ['ui.router'])
          .run('CarsService','$rootScope',function ($rootScope,CarsService) {
            $rootScope.test = CarsService.getCarsList();
          });

})();

