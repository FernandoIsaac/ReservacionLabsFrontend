angular.module('AngularScaffold.Controllers')
  .controller('ReservacionController', ['$scope', 'reservacionService', '$sessionStorage', function ($scope, reservacionService, $sessionStorage) {
    	$scope.title = "Reservaciones."
      $scope.reservaciones = [];
      $scope.reservacion = {};

      $scope.listReservaciones = function(){
        reservacionService.ListReservaciones().then(function(response){
          $scope.reservaciones = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.getReservacion = function(params){
        reservacionService.GetReservacion(params).then(function(response){
          $scope.reservacion = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postReservacion = function(){
        reservacionService.PostReservacion($scope.reservacion).then(function(response){
          alert("Posted to reservaciones");
          $scope.listReservaciones();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


      $scope.deleteReservacion = function (params) {
        reservacionService.DeleteReservacion(params).then(function (params) {
          alert("Reservacion Deleted");
          $scope.listReservaciones();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.editReservacion = function(){
        reservacionService.EditReservacion($scope.reservacion).then(function(response){
          alert("Edited to reservaciones");
          $scope.listReservaciones();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

  }]);
