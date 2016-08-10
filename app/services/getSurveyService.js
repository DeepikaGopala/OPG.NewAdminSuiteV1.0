angular
        .module('adminsuite')
        .service('getAllSurveyService', getAllSurveyService);
        getAllSurveyService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout'];
         function getAllSurveyService($http,$cookieStore,$rootScope,$timeout){
        	var session = $cookieStore.get('globals');
        	var data = {
        		sessionId : session.currentUser.session
        	}
        	var surveyData = {
        		'Data' : JSON.stringify(data)
        	}
        	var requestData = JSON.stringify(surveyData)
        	console.log(requestData);

        	this.surveyList = function () {
        		//return session;
        		return $http.post('http://apidev.1pt.mobi/V3.0/api/Survey/Surveys',  requestData, {headers: { 'Content-Type': 'application/json'}})
        		.then(function(response){
        					return response.data;
        				}, function(error){
        					return error;
        				});
    		}
        	
        };