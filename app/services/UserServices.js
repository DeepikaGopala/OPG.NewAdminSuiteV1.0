(function () {
    'use strict';
 
    angular
        .module('adminsuite')
        .factory('UserService', UserService);
 
    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};
        service.GetByUsername = GetByUsername;
        /*service.GetAll = GetAll;
        service.GetById = GetById;
        
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;*/
 
        return service;
        function GetByUsername(user) {
            return $http.post('http://apidev.1pt.mobi/V3.0/api/Authentication/Post',  user, {headers: { 'Content-Type': 'application/json'}}).then(handleSuccess, handleError('Error getting user by username'));
        }

        function handleSuccess(res) {
            console.log(res);
            return res.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }

        /*function GetAll() {
            return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
        }
 
        function GetById(id) {
            return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }
 
        
 
        function Create(user) {
            return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }
 
        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }
 
        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }
 */
        // private functions
 
        
    }
 
})();