(function () {
  "use strict";

  angular.module('cars')
          .service('CarsService', CarsService);

  CarsService.$inject = ['$http'];
  function CarsService($http) {
    var service = this;

    service.getCarsList = function () {
      return $http.get('assets/js/cars.json').then(function (response) {
        var carsList = response.data;
        var vendorList = carsList[0].VehAvailRSCore.VehVendorAvails;
        var carArray = [];
        //add vendor code and name to the car data
        for (var i in vendorList) {
          for (var j in vendorList[i].VehAvails) {
            var obj = {"carData": vendorList[i].VehAvails[j],
              "vendorCode": vendorList[i].Vendor["@Code"],
              "vendorName": vendorList[i].Vendor["@Name"],
              "sortAttr": parseFloat(vendorList[i].VehAvails[j].TotalCharge["@RateTotalAmount"])
            };
            carArray.push(obj);
          }
        }
        return carArray;
      });
    };
    service.getCar = function (code) {
      return service.getCarsList().then(function (response) {
        var carData = response.filter(function (item) {
          return item.carData.Vehicle['@Code'] === code;
        })[0];
        return carData;
      });
    }
  }



})();


