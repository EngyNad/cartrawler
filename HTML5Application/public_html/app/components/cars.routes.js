(function () {
  angular.module('cars')
          .config(routeConfig);

  //route configuration
  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('carsList', {
              url: '/',
              templateUrl: 'app/components/carsList/carsList.html',
              controller: 'carsController',
              controllerAs: 'carsCtrl',
              resolve: {
                carsList: ['CarsService', function (CarsService) {
                    return CarsService.getCarsList();
                  }]
              }
            })
            .state('carPage', {
              url: '/car/{code}',
              templateUrl: 'app/components/carPage/carPage.html',
              controller: 'carPageController',
              controllerAs: 'carPageCtrl',
              resolve: {
                carsList: ['$stateParams','CarsService', function ($stateParams,CarsService) {
                    return CarsService.getCar($stateParams.code);
                  }]
               }
            });

    $urlRouterProvider.otherwise('/');
  }
})();

