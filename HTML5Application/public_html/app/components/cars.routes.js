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
            });
//            .stata('carPage', {
//              url: '/car/{id}',
//              templateUrl: 'app/components/carPage/carPage.html',
//              controller: 'carPageController',
//              controllerAs: 'carPageCtrl',
//              resolve: {
//                id: ['$stateParams', function ($stateParams) {
//                    return $stateParams.id;
//                  }]
//              }
//            });

    $urlRouterProvider.otherwise('/');
  }
})();

