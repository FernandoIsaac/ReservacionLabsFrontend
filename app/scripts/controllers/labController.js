angular.module('AngularScaffold.Controllers')
  .controller('labController', ['$scope', 'labService', '$sessionStorage', function ($scope, labService, $sessionStorage) {
      $scope.title = "Labs."
      $scope.labs = [];
      $scope.lab = {};
      $scope.gender;
      console.log('si2');
      labService.GetLabs().then(function(response){
          console.log('si');
          $scope.labs = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });

      $scope.GetLabs = function(){
        labService.GetLabs().then(function(response){
          $scope.labs = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }
      
      $scope.GetLab = function(params){
        labService.GetLab(params).then(function(response){
          $scope.lab = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostLab = function(){
        labService.PostLab($scope.lab).then(function(response){
          console.log($scope.gender);
          alert("Posted to labs");
          $scope.GetLabs();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.DeleteLab = function (params) {
        labService.DeleteLab(params).then(function (params) {
          alert("Lab Deleted");
          $scope.GetLabs();
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
