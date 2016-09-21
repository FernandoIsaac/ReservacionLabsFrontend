angular.module('AngularScaffold.Controllers')
  .controller('recursoController', ['$scope', 'recursoService', '$sessionStorage', function ($scope, recursoService, $sessionStorage) {
    	$scope.title = "Recursos."
      $scope.recursos = [];
      $scope.recurso = {};

      $scope.listRecursos = function(){
        recursoService.ListRecursos().then(function(response){
          $scope.recursos = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.getRecurso = function(params){
        recursoService.GetRecurso(params).then(function(response){
          $scope.recurso = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postRecurso = function(){
        recursoService.PostRecurso($scope.recurso).then(function(response){
          alert("Posted to recursos");
          $scope.listRecursos();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


      $scope.deleteRecurso = function (params) {
        recursoService.DeleteRecurso(params).then(function (params) {
          alert("Recurso Deleted");
          $scope.listRecursos();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.editRecurso = function(){
        recursoService.EditRecurso($scope.recurso).then(function(response){
          alert("Edited to recursos");
          $scope.listRecursos();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


  }]);
