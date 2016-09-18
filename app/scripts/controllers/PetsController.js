angular.module('AngularScaffold.Controllers')
  .controller('ingredientController', ['$scope', 'ingredientService', '$sessionStorage', function ($scope, ingredientService, $sessionStorage) {
      $scope.title = "Ingredientes."
      $scope.ingredients = [];
      $scope.ingredient = {};

      $scope.GetIngredients = function(){
        ingredientService.GetIngredients().then(function(response){
          $scope.ingredients = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }
      
      $scope.GetIngredient = function(params){
        ingredientService.GetIngredient(params).then(function(response){
          $scope.ingredient = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostIngredient = function(){
        console.log('Xavi Se La Come');
        ingredientService.PostIngredient($scope.ingredient).then(function(response){
          alert("Posted to ingredients");
          $scope.GetIngredients();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      
      $scope.DeleteIngredient = function (params) {
        ingredientService.DeleteIngredient(params).then(function (params) {
          alert("Ingredient Deleted");
          $scope.GetIngredients();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

 

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);