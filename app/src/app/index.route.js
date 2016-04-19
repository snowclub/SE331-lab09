(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/addProduct', {
        templateUrl: 'app/product/editProduct.html',
        controller: 'addProductController'
      })
      .when('/editProduct', {
        templateUrl: 'app/product/editProduct.html',
        controller: 'editProductController'
      })
      .when('/listProduct', {
        templateUrl: 'app/product/productList.html',
        controller: 'listProductController',
        controllerAs: 'vm'
      })
      .when('/shoppingCart/:id', {
        templateUrl: 'app/product/shoppingCart.html',
        controller: 'showShoppingCartController',
        controllerAs:'vm'
      })
      .otherwise({
        redirectTo: '/listProduct'
      });
  }

})();
