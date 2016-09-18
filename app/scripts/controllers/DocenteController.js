angular.module('AngularScaffold.Controllers')
  .controller('docenteController', ['$scope', 'docenteService', '$sessionStorage', function ($scope, docenteService, $sessionStorage) {
    	$scope.title = "Docentes."
      $scope.docentes = [];
      $scope.docente = {};

      docenteService.GetDocentes().then(function(response){
          $scope.docentes = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });

      $scope.GetDocentes = function(){
        docenteService.GetDocentes().then(function(response){
          $scope.docentes = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }
      
      $scope.GetDocente = function(params){
        docenteService.GetDocente(params).then(function(response){
          $scope.docente = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostDocente = function(){
        docenteService.PostDocente($scope.docente).then(function(response){
          alert("Posted to docentes");
          $scope.GetDocentes();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      
      $scope.DeleteDocente = function (params) {
        docenteService.DeleteDocente(params).then(function (params) {
          alert("Docente Deleted");
          $scope.GetDocentes();
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
