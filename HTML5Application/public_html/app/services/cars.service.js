(function () {
  "use strict";

  angular.module('cars')
          .service('CarsService', CarsService);

  CarsService.$inject = ['$http'];
  function CarsService($http) {
    var service = this;

    service.getCarsList = function () {
      return $http.get('assets/js/cars.json').then(function (response) {
        return response.data;
      });
    };

  }



})();


