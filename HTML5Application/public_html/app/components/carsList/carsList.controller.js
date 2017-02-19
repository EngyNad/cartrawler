(function () {
"use strict";
        //home page controller
        angular.module('cars')
        .controller('carsController', carsController);
        carsController.$inject = ['carsList','$rootScope'];
        function carsController(carsList,$rootScope) {
        var $ctrl = this;
        console.log($rootScope.test)
                var vendorList = carsList[0].VehAvailRSCore.VehVendorAvails;
                $ctrl.carArray = [];
                for (var i in vendorList) {
        for (var j in vendorList[i].VehAvails) {
                var obj = {"carData":vendorList[i].VehAvails[j],
                        "vendorCode":vendorList[i].Vendor["@Code"],
                        "vendorName":vendorList[i].Vendor["@Name"],
                        "sortAttr":parseFloat(vendorList[i].VehAvails[j].TotalCharge["@RateTotalAmount"])
                };
                $ctrl.carArray.push(obj);
        }

        }
        
        }
        })
();

