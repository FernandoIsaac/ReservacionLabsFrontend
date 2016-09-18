angular.module('AngularScaffold.Services').factory('petService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				Getlabs: function(){
					return $http.get(baseUrl + "/v1/listLabs");
				},
				Postlab: function(payload){
					return $http.post(baseUrl + "/v1/addLab", payload);
				},
                Deletelab: function(payload) {
                    return $http.delete(baseUrl + '/v1/removeLab/{labId}'+payload);
                },
                Getlab: function(payload){
					return $http.get(baseUrl + "/v1/getLab/{labId}"+payload);
				}
                
	    };
}]);
