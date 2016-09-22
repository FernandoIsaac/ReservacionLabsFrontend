var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('admin_docentes', {
            url: '/admin_docentes',
            templateUrl: '/user.html',
            controller: 'DocenteController'
        })
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'HomeController'
        })
        .state('admin_recuros', {
            url: '/admin_recursos',
            templateUrl: '/admin_recursos.html',
            controller: 'RecursosController'
        });
}])
