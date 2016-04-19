(function () {


'use strict';

angular
  .module('app')
  .controller('addProductController', addProductController)
  .controller('listProductController', listProductController)
  .controller('editProductController', editProductController)

  /**@ngInject*/
    function addProductController($scope,$http,$location,$rootScope,productService) {

        $scope.product = {};
        $scope.addPerson = true;
        $scope.editPerson = false;
        $scope.addProduct = function (flowFiles) {
            productService.save($scope.product, function (data) {
                // after adding the object, add a new picture
                // get the product id which the image will be addded
                var productid = data.id;
                // set location
                flowFiles.opts.target = 'http://localhost:8080/productImage/add';
                flowFiles.opts.testChunks = false;
                flowFiles.opts.query = {productid: productid};
                flowFiles.upload();

                $rootScope.addSuccess = true;
                $location.path("listProduct");
            });
        }

  }

  /**@ngInject*/

    function listProductController ($scope, $rootScope,productService,$route,queryProductService) {
        var vm = this;
        //$http.get("/product/").success(function (data) {
        var data = productService.query(function(){
           // $scope.totalNetPrice= totalCalService.getTotalNetPrice(data);
            vm.products = data;
        });


        $scope.$on('$locationChangeStart', function (event) {
            $rootScope.addSuccess = false;
            $rootScope.editSuccess = false;
            $rootScope.deleteSuccess = false;
        });

        vm.deleteProduct = function (id) {
            var answer = confirm("Do you want to delete the product?");
            if (answer) {
                productService.delete({id:id},function(){
                    $rootScope.deleteSuccess = true;
                    $route.reload();
                })
            }
        }

        vm.searchProduct = function(name){
           queryProductService.query({name:name},function(data) {
                vm.products = data;
            });
        }

    }

  /**@ngInject*/
    function editProductController($scope, $http, $routeParams, $location, $rootScope,productService) {
        $scope.addPerson = false;
        $scope.editPerson = true;

        var vm = this;
        var id = $routeParams.id;
        $http.get("/product/" + id).success(function (data) {
            $scope.product = data;
        });

        vm.editProduct = function () {
            //$http.put("/product", $scope.product).then(function () {
            productService.update({id:$scope.product.id},$scope.product,function(){
                $rootScope.editSuccess = true;
                $location.path("listProduct");
            });
        }
    }
})();
