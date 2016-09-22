angular.module('AngularScaffold.Services').factory('labService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				ListLabs: function(){
					return $http.get(baseUrl + "/v1/listLabs");
				},
				PostLab: function(payload){
					return $http.post(baseUrl + "/v1/addLab", payload);
				},
        DeleteLab: function(payload) {
            return $http.delete(baseUrl + '/v1/removeLab/{labId}'+payload);
        },
        GetLab: function(payload){
					return $http.get(baseUrl + "/v1/getLab/{labId}"+payload);
				},
				EditLab: function(payload){
					return $http.get(baseUrl + "/v1/editLab/{labId}"+payload);
				}

	    };
}]);
