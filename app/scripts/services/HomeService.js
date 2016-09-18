angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {

				PostIngredients: function(payload){
					return $http.post(baseUrl + "v1/createIngredient", payload);
				},
				GetIngredient: function(param){
					return $http.get(baseUrl + "v1/getIngredient/" + param);
				},
				GetIngredients: function(){
					return $http.get(baseUrl + "v1/ingredients");
				},
				DeleteIngredient: function(param){
					return $http.delete(baseUrl + "v1/deleteIngredient/" + param);
				}

				PostProducts: function(payload){
					return $http.post(baseUrl + "v1/createProduct", payload);
				},
				GetProduct: function(param){
					return $http.get(baseUrl + "v1/getProduct/" + param);
				},
				GetProducts: function(){
					return $http.get(baseUrl + "v1/products");
				},
				DeleteProduct: function(param){
					return $http.delete(baseUrl + "v1/deleteProduct/" + param);
				}
	    };
}]);