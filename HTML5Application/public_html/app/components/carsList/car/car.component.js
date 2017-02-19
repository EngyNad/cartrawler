(function (){
  "use strict";
  
   angular.module('cars')
          .component('car', {
            templateUrl: 'app/components/carsList/car/car.html',
            controller: carController,
            bindings: {
             car:'<'
            }
          });
          
          function carController(){
            var $ctrl=this;
          }
  })();
