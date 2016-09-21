angular.module('AngularScaffold.Services').factory('reservacionService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				ListReservaciones: function(){
					return $http.get(baseUrl + "/v1/listReservaciones");
				},
				PostReservacion: function(payload){
					return $http.post(baseUrl + "/v1/addReservacion", payload);
				},
        DeleteReservacion: function(payload) {
            return $http.delete(baseUrl + '/v1/removeReservacion/{reservacionId}'+payload);
        },
        GetReservacion: function(payload){
					return $http.get(baseUrl + "/v1/getReservacion/{reservacionId}"+payload);
				},
				EditReservacion: function(payload){
					return $http.get(baseUrl + "/v1/editReservacion/{reservacionId}"+payload);
				}

	    };
}]);
