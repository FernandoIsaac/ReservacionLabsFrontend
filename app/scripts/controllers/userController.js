angular.module('AngularScaffold.Controllers')
  .controller('userController', ['$scope', 'userService', '$sessionStorage', function ($scope, userService, $sessionStorage) {
    	$scope.title = "Users."
      $scope.users = [];
      $scope.user = {};

      userService.GetUsers().then(function(response){
          $scope.Users = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });

      $scope.GetUsers = function(){
        userService.GetUsers().then(function(response){
          $scope.vets = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }
      
      $scope.GetUser = function(params){
        userService.GetUser(params).then(function(response){
          $scope.vet = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostUser = function(){
        userService.PostUser($scope.vet).then(function(response){
          alert("Posted to Users");
          $scope.GetUsers();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      
      $scope.DeleteUser = function (params) {
        userService.DeleteUser(params).then(function (params) {
          alert("User Deleted");
          $scope.GetUsers();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, scope: ['admin']};
        userService.Register(user).then(function(response){
          alert('Registered in correctly!');
          $scope.PostUser();
          //$scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      } 

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);