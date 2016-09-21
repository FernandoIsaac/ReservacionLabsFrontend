angular.module('AngularScaffold.Services').factory('petService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				ListRecursos: function(){
					return $http.get(baseUrl + "/v1/listRecursos");
				},
				PostRecurso: function(payload){
					return $http.post(baseUrl + "/v1/addRecurso", payload);
				},
        DeleteRecurso: function(payload) {
            return $http.delete(baseUrl + '/v1/removeRecurso/{recursoId}'+payload);
        },
        GetRecurso: function(payload){
					return $http.get(baseUrl + "/v1/getRecurso/{recursoId}"+payload);
				}
				EditRecurso: function(payload){
					return $http.get(baseUrl + "/v1/editRecurso/{recursoId}"+payload);
				}

	    };
}]);
