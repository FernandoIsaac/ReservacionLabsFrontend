angular.module('AngularScaffold.Controllers')
  .controller('DocenteController', ['$scope', 'docenteService', '$sessionStorage', function ($scope, docenteService, $sessionStorage) {
    	$scope.title = "Docentes"
      $scope.docentes = [];
      $scope.docente = {};

      $scope.listDocentes = function(){
        docenteService.ListDocentes().then(function(response){
          $scope.docentes = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.getDocente = function(params){
        docenteService.GetDocente(params).then(function(response){
          $scope.docente = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postDocente = function(){
        docenteService.PostDocente($scope.docente).then(function(response){
          alert("Posted to docentes");
          $scope.listDocentes();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


      $scope.deleteDocente = function (params) {
        docenteService.DeleteDocente(params).then(function (params) {
          alert("Docente Deleted");
          $scope.listDocentes();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.editDocente = function (params) {
        docenteService.EditDocente(params).then(function (params) {
          alert("Docente Edited");
          $scope.listDocentes();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

  }]);
