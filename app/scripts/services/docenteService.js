angular.module('AngularScaffold.Services').factory('petService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				Postdocente: function(payload){
					return $http.post(baseUrl + "/v1/addDocente", payload);
				},
                Deletedocente: function(payload) {
                    return $http.delete(baseUrl + '/v1/removeDocente/{docenteId}'+payload);
                },
                Getdocente: function(payload){
					return $http.get(baseUrl + "/v1/getDocente/{docenteId}"+payload);
				}
                
	    };
}]);
