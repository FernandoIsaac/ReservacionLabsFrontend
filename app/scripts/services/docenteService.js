angular.module('AngularScaffold.Services').factory('docenteService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				PostDocente: function(payload){
					return $http.post(baseUrl + "/v1/addDocente", payload);
				},
        DeleteDocente: function(payload) {
            return $http.delete(baseUrl + '/v1/removeDocente/{docenteId}'+payload);
        },
        GetDocente: function(payload){
					return $http.get(baseUrl + "/v1/getDocente/{docenteId}"+payload);
				},
				ListDocentes: function(){
					return $http.get(baseUrl + "/v1/listDocentes/"+payload);
				}
				EditDocente: function(){
					return $http.get(baseUrl + "/v1/editDocente/{docenteId}"+payload);
				}

	    };
}]);
