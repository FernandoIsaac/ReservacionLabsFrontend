angular.module('AngularScaffold.Services').factory('vetService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'http://localhost:8000';
	    var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				GetVets: function(){
					return $http.get(baseUrl + "/v1/listVets");
				},
				PostVet: function(payload){
					return $http.post(baseUrl + "/v1/addVet", payload);
				},
                DeleteVet: function(payload) {
                    return $http.delete(baseUrl + '/v1/removeVet/{vetId}'+payload);
                },
                GetVet: function(payload){
					return $http.get(baseUrl + "/getVets/"+payload);
				}
                
	    };
}]);
