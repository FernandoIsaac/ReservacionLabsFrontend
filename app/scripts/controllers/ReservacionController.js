angular.module('AngularScaffold.Controllers')
  .controller('reservacionController', ['$scope', 'docenteService', '$sessionStorage', function ($scope, docenteService, $sessionStorage) {
    	$scope.title = "Reservaciones."
      $scope.reservacions = [];
      $scope.reservacion = {};

      reservacionService.GetReservaciones().then(function(response){
          $scope.reservacions = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });

      $scope.GetReservaciones = function(){
        reservacionService.GetReservaciones().then(function(response){
          $scope.reservacions = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }
      
      $scope.GetReservacion = function(params){
        reservacionService.GetReservacion(params).then(function(response){
          $scope.reservacion = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostReservacion = function(){
        reservacionService.PostReservacion($scope.docente).then(function(response){
          alert("Posted to reservacions");
          $scope.GetReservaciones();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      
      $scope.DeleteReservacion = function (params) {
        reservacionService.DeleteReservacion(params).then(function (params) {
          alert("Reservacion Deleted");
          $scope.GetReservaciones();
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
