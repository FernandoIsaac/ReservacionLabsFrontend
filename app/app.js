var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('admin_vets', {
            url: '/admin_vets',
            templateUrl: '/admin_vets.html',
            controller: 'petController'
        })
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'HomeController'
        })
        .state('admin_mascotas', {
            url: '/admin_mascotas',
            templateUrl: '/admin_mascotas.html',
            controller: 'HomeController'
        });
}])