angular.module('AngularScaffold.Services').factory('petService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				Getreservaciones: function(){
					return $http.get(baseUrl + "/v1/listReservaciones");
				},
				Postreservacion: function(payload){
					return $http.post(baseUrl + "/v1/addReservacion", payload);
				},
                Deletereservacion: function(payload) {
                    return $http.delete(baseUrl + '/v1/removeReservacion/{reservacionId}'+payload);
                },
                Getreservacion: function(payload){
					return $http.get(baseUrl + "/v1/getReservacion/{reservacionId}"+payload);
				}
                
	    };
}]);
