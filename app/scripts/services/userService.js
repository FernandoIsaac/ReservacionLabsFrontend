angular.module('AngularScaffold.Services').factory('userService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
	    //var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				GetUsers: function(){
					return $http.get(baseUrl + "/v1/listVolunteers");
				},
				PostUser: function(payload){
					return $http.post(baseUrl + "/v1/addVolunteer", payload);
				},
                DeleteUser: function(payload) {
                    return $http.delete(baseUrl + '/v1/removeVolunteers/{volunteerId}'+payload);
                },

                Register: function(payload){
         		 	return $http.post(baseUrl + "/v1/register", payload);
        		}
                
	    };
}]);