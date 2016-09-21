angular.module('AngularScaffold.Controllers')
  .controller('labController', ['$scope', 'labService', '$sessionStorage', function ($scope, labService, $sessionStorage) {
      $scope.title = "Labs."
      $scope.labs = [];
      $scope.lab = {};

      $scope.listLabs = function(){
        labService.GetLabs().then(function(response){
          $scope.labs = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.getLab = function(params){
        labService.GetLab(params).then(function(response){
          $scope.lab = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postLab = function(){
        labService.PostLab($scope.lab).then(function(response){
          alert("Posted to labs");
          $scope.listLabs();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.deleteLab = function (params) {
        labService.DeleteLab(params).then(function (params) {
          alert("Lab Deleted");
          $scope.listLabs();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.editLab = function(){
        labService.EditLab($scope.lab).then(function(response){
          alert("Edited to labs");
          $scope.listLabs();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


  }]);
