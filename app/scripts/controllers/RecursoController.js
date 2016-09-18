angular.module('AngularScaffold.Controllers')
  .controller('recursoController', ['$scope', 'recursoService', '$sessionStorage', function ($scope, recursoService, $sessionStorage) {
    	$scope.title = "Recursos."
      $scope.recursos = [];
      $scope.recurso = {};

      recursoService.GetRecursos().then(function(response){
          $scope.recursos = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });

      $scope.GetRecursos = function(){
        recursoService.GetRecursos().then(function(response){
          $scope.recursos = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }
      
      $scope.GetRecurso = function(params){
        recursoService.GetRecurso(params).then(function(response){
          $scope.recurso = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostRecurso = function(){
        recursoService.PostRecurso($scope.recurso).then(function(response){
          alert("Posted to recursos");
          $scope.GetRecursos();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      
      $scope.DeleteRecurso = function (params) {
        recursoService.DeleteRecurso(params).then(function (params) {
          alert("Recurso Deleted");
          $scope.GetRecursos();
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
