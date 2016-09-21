angular.module('AngularScaffold.Controllers')
  .controller('AdminController', ['authService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.logout = function(){
        authService.Logout().then(function(response){
          $sessionStorage.$reset();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          if($scope.isAdmin()){
            window.location = "/lab.html";
          }else{
            window.location = "/categories.html";
          }


        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.register = function(){
        var docente = {email: $scope.user.email, password:  $scope.user.password, primerNombre: $scope.user.primerNombre,segundoNombre: $scope.user.segundoNombre,primerApellido: $scope.user.primerApellido,sgundoApellido: $scope.user.segundoApellido,campus: $scope.user.campus,departamento: $scope.user.departamento,telefono: $scope.user.telefono};
        authService.Register(docente).then(function(response){
          //$scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.changeTab = function(){
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below
        $(event.target).removeClass("btn-default").addClass("btn-primary");
      }

      $scope.changeTabLlenarDogs = function(){
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below
        $(event.target).removeClass("btn-default").addClass("btn-primary");
        $scope.listDogs();
      }

      $scope.changeTabLlenarVets = function(){
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        // $(".tab").addClass("active"); // instead of this do the below
        $(event.target).removeClass("btn-default").addClass("btn-primary");
        $scope.listVets();
      }

      $scope.isAdmin = function(){
        var contador = 0;
        for (var i = 0; i < 'admin'.length; i++) {
          if($sessionStorage.currentUser.scope[i]=='admin'[i]){
            contador++;
          }
        }
        if(contador == 'admin'.length)
          return true;
      }

      $scope.isDocente = function(){
        var contador = 0;
        for (var i = 0; i < 'docente'.length; i++) {
          if($sessionStorage.currentUser.scope[i]=='docente'[i]){
            contador++;
          }
        }
        if(contador == 'docente'.length)
          return true;
      }

  }]);
